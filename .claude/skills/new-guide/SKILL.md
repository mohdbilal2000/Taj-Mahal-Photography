---
name: new-guide
description: Writes and publishes a new guide (blog article) on tajmahalphotography.com in English, Spanish or Hindi, with official sources, automatic prices and correct SEO wiring. Use when the owner says "naya blog", "guide likh", "is topic pe article", or names a question travellers ask.
---

# New guide

The argument is the topic or question, and optionally the language(s). No language given means
English; offer Spanish and Hindi versions at the end if the topic suits those readers.

1. **Check it is not already covered.** Search the titles and slugs in `lib/blog.ts`,
   `lib/blog-world.ts`, `lib/blog-es.ts` and `lib/blog-hi.ts`. If a guide already answers this,
   improve that one instead and say so.
2. **Pin down the question** in one sentence, as a traveller would type it, and who is asking. If the
   topic is vague ("something about winter"), choose the most searched version yourself and state it;
   do not stop to ask.
3. **Hand it to the `content-writer` agent** with: the question, the reader, the language(s), the
   plan it should lead to, and any Search Console queries or AI-check findings that prompted it.
4. **Review what comes back** as the customer would read it: is the answer in the first lines, is
   every monument fact sourced, are prices tokens, does it sell only at the end.
5. **Publish**: confirm `tsc`, `npm run check:rates` and `npm run build` pass, commit, push, wait for
   the deploy, then `node scripts/indexnow.mjs <paths>`.
6. **Tell the owner** in short Hinglish: the live link(s), the question it answers, and the one thing
   they should do (request indexing for that URL in Search Console; share it on the Google profile).
