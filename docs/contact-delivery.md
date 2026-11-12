# Delphia Designs: website inquiry delivery

## Architecture

- **Squarespace DNS:** controls records for `delphiadesignsco.com`. Keep the website's existing A/CNAME records unchanged.
- **Vercel / Next.js:** hosts the React website and `GET /api` / `POST /api` contact routes.
- **Resend:** sends a contact inquiry from the verified business domain.
- **Gmail:** receives the inquiry at `delphiadesigns@gmail.com` by default.

The contact page checks `GET /api`. Until an API key is present, the form is hidden and visitors see an **Email Delphia Designs** link opening their email app. The email address and clickable phone number are always displayed. When Resend is configured, the form becomes available. If sending fails, the draft stays in place and a direct email link is provided. Never show successful delivery unless the sending API actually accepted the inquiry.

## One-time owner setup

1. Create a free account at <https://resend.com/signup>.
2. In Resend, add **delphiadesignsco.com** as a sending domain. Resend will show the exact DNS records, usually DKIM/SPF and return-path configuration. Do not invent record values.
3. In Squarespace open **Domains → delphiadesignsco.com → DNS → DNS Settings → Custom Records**. Add the records exactly as Resend supplies. **Do not change nameservers or remove existing website records.**
4. Back in Resend, verify the domain; do not proceed until it shows **Verified**.
5. Create a **sending-only** API key scoped to the verified domain when available, for this website. Copy it once.
6. In the Vercel project that actually serves `delphiadesignsco.com`, add server-side **Production** environment variables:
   - `RESEND_API_KEY`: secret key created in Resend.
   - `CONTACT_EMAIL`: `delphiadesigns@gmail.com` (optional; this is also the default).
   - `CONTACT_FROM_EMAIL`: `Delphia Designs <contact@delphiadesignsco.com>` (optional; this is also the default).
7. Redeploy the site on Vercel so its server functions receive those variables. **Never use `NEXT_PUBLIC_` for the API key and never commit or send the key through chat.**

## Verification

- Read `https://delphiadesignsco.com/api`: `{"formAvailable":false}` means the form intentionally offers direct email; `{"formAvailable":true}` means an API key is configured, **not** proof the sending domain is verified.
- Submit exactly one clearly identified test inquiry via `https://delphiadesignsco.com/contact`.
- Confirm the API accepts it, Resend shows delivery, and the matching message arrives in the `delphiadesigns@gmail.com` inbox. Also check spam or promotions and test Reply-To.
- Gmail delivery must be verified independently of HTTP 200 / Resend acceptance.

Resend's free plan is suitable for low-volume contact inquiries, subject to its published monthly/daily limits.

## Troubleshooting

- `503 Email service is not configured`: production `RESEND_API_KEY` missing or not redeployed.
- `502 Unable to deliver`: sending domain verification, key permissions, sending limit, or Resend/provider error; inspect server and provider logs.
- No mailbox receipt but API success: inspect Resend delivery events, recipient override (`CONTACT_EMAIL`), and Gmail spam.
- Do not change Squarespace DNS delegation or migrate hosting to enable email delivery.
