# Delphia Designs: Contact delivery

## Message flow

1. The visitor opens `/contact`, enters a name, email and message, and selects **Send Message**.
2. The form sends JSON to the same-origin `POST /api` route.
3. The API validates the request and calls the Resend email service.
4. The intended recipient is `CONTACT_EMAIL` when set, otherwise `delphiadesigns@gmail.com`.
5. The sender is `CONTACT_FROM_EMAIL` when set, otherwise `Delphia Designs <contact@delphiadesignsco.com>`.
6. The customer's submitted email is set as Reply-To.
7. The browser only shows acceptance after Resend accepts the email request. Resend acceptance does **not** guarantee delivery to the recipient inbox; use provider delivery logs to verify the message arrived.

## Production configuration (Vercel)

- `RESEND_API_KEY`: an active API key securely configured on the deployed Vercel project.
- `CONTACT_EMAIL`: set if inquiries should be sent anywhere other than `delphiadesigns@gmail.com`.
- `CONTACT_FROM_EMAIL`: optional, must use a sender domain verified with Resend.
- Verify the sending domain in Resend and add its SPF/DKIM records at the authoritative DNS provider.
- After setting environment variables, redeploy to make sure production functions can use the values.

Without a configured API key, the endpoint returns HTTP 503 and the browser keeps the visitor's form inputs with a direct email fallback. Never commit secrets.

## Safe verification

- Open the live Contact page and submit a real test inquiry using your own address and a clear subject in the body.
- Confirm the form reports acceptance, the email appears in the recipient mailbox, and replying reaches the test address.
- If the form reports an error, verify project-level Vercel variables and Resend's sender-domain verification and logs.
- Do not place a production test message until the sender/recipient are confirmed.
