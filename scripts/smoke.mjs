// Run against a production build locally. Never sends a real email.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const port = 3147;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "-p", String(port)], {
  env: { ...process.env, RESEND_API_KEY: "" },
  stdio: ["ignore", "pipe", "pipe"],
});
let output = "";
for (const stream of [server.stdout, server.stderr]) {
  stream.setEncoding("utf8");
  stream.on("data", chunk => { output += chunk; });
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt++) {
    if (server.exitCode !== null) throw new Error("Next.js server stopped early");
    try {
      const response = await fetch(origin, { signal: AbortSignal.timeout(1000) });
      if (response.ok) { ready = true; break; }
    } catch {
      // Server is still starting up.
    }
    await sleep(250);
  }
  assert.equal(ready, true, "Next.js did not start: " + output.slice(-1500));

  for (const pathname of ["/", "/about", "/services", "/portfolio", "/contact"]) {
    const response = await fetch(origin + pathname);
    assert.equal(response.status, 200, `Page ${pathname} must render`);
    const html = await response.text();
    assert.match(html, /Delphia Designs|Portfolio|Services|Contact|About/, `Page ${pathname} must contain real content`);
    console.log(`PASS ${pathname} (200)`);
  }

  const readiness = await fetch(origin + "/api");
  assert.equal(readiness.status, 200, "Contact readiness should be accessible without secrets");
  assert.equal(readiness.headers.get("cache-control"), "no-store");
  assert.deepEqual(await readiness.json(), { formAvailable: false },
    "With no mail credentials, the contact page must offer direct email instead of a broken form");

  const request = (body) => fetch(origin + "/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const invalid = await request({ name: "", email: "invalid", message: "" });
  assert.equal(invalid.status, 400, "Invalid inquiry must be rejected");

  const missingProvider = await request({
    name: "Test Visitor", email: "visitor@example.com", message: "Test message - no provider configured",
  });
  assert.equal(missingProvider.status, 503, "Never claim successful delivery without provider configuration");
  const unavailable = await missingProvider.json();
  assert.equal(unavailable.error, "Email service is not configured.");

  const bot = await request({
    name: "Test Visitor", email: "visitor@example.com", message: "Spam test", website: "example.org",
  });
  assert.equal(bot.status, 200, "Honeypot must handle automated spam without a provider request");

  console.log("PASS invalid request, unconfigured provider and honeypot checks");
  console.log("All site and contact route smoke checks passed.");
} finally {
  server.kill("SIGTERM");
}
