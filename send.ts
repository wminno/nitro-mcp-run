// First send with @nitrosend/sdk — one email to Nitrosend's proof inbox.
// Usage: NITROSEND_KEY=nskey_live_... node --experimental-strip-types send.ts
import { Nitrosend } from "@nitrosend/sdk";

async function main(): Promise<void> {
  const key = process.env.NITROSEND_KEY;
  if (!key) throw new Error("Set NITROSEND_KEY (never hardcode the secret).");

  const ns = new Nitrosend(key);
  const message = await ns.messages.send(
    {
      channel: "email",
      to: "proof@dogfood.nitrosend.net",
      subject: "First send with the Nitrosend TypeScript SDK",
      html: "<p>Hello from a 30-line TypeScript script using @nitrosend/sdk.</p>",
    },
    "sdk-first-send-2026-10-22-01",
  );

  console.log("Sent message:", message.id, "status:", message.status);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
