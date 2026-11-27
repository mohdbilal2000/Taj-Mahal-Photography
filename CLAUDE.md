# Taj Mahal Photography — working notes for Claude

Site: https://www.tajmahalphotography.com (Next.js App Router, Vercel deploys `main` automatically).

## Rules that are easy to break

- **Prices are never typed.** Every rate comes from `lib/packages.json`. In text use tokens
  (`{usd:sunrise}`, `{inr:sunrise}`, `{both:sunrise}`, `{usd:min}`, see `lib/rates.ts`); in code use
  `usdOf('id')`. Run `npm run check:rates` before committing.
- **Facts about the business live in one place:** `lib/seo.ts` (`SITE`, `DELIVERY`), `lib/team.ts`,
  `lib/packages.json`. Read them; do not restate them from memory.
- **Monument facts change** (ticket fees, timings, rules). Check the official source before writing one
  and add it to `lib/blog-sources.ts`.
- **Before pushing:** `./node_modules/.bin/tsc --noEmit` and `npm run build`. After a deploy that adds
  or changes pages: `node scripts/indexnow.mjs /path /path`.
- The owner is not a developer and reads on a phone. Reply in short, plain Hinglish; say what changed
  and what they have to do themselves.

## Marketing

The marketing team is set up in this repo:

- `marketing/README.md` — how the owner uses it.
- `marketing/brand.md` — positioning, voice and the lines we do not cross. Read it before writing
  anything that a customer, a platform or another website will see.
- `.claude/skills/` — the commands (`/marketing-team`, `/ai-visibility-check`, `/gsc-review`, `/new-guide`).
- `.claude/agents/` — the specialists those commands hand work to.
- `marketing/log.md` — append one dated line for every piece of marketing work done.

Anything that leaves the repo (an email, a review reply, a listing, a social post) is **drafted for the
owner to send**. Never send, post or submit on the owner's behalf without being asked in that message.
