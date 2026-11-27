---
name: gsc-review
description: Reviews Google Search Console exports for tajmahalphotography.com and turns them into fixes. Use when the owner uploads a GSC Performance or Coverage/Indexing .xlsx/.csv, says "GSC report dekh", asks which pages are not indexed, or asks what to improve to get more search traffic.
---

# Search Console review

1. Find the uploaded export(s). If there are none, tell the owner which two to download and how:
   Search Console → Performance → last 28 days → Export → Excel; and Indexing → Pages → Export.
   Either one alone is enough to start.
2. Hand the files to the `seo-analyst` agent with today's date and the path of the previous review
   in `marketing/seo/`, if any.
3. When it returns, check that every claim has a number from the export behind it and that any code
   change passed `tsc`, `npm run check:rates` and `npm run build`.
4. Reply in short Hinglish:
   - the four headline numbers and how they moved since the last review;
   - what was fixed in the code now;
   - what the owner must do in Search Console (named URLs to "Request indexing", at most ten);
   - at most three guide ideas for queries that have impressions and no good page. Offer to write
     them with `/new-guide`.
5. If code changed: commit, push, and run `node scripts/indexnow.mjs` with the changed paths once the
   deploy is live.

Be honest about waiting: new pages marked "Discovered, currently not indexed" usually need weeks and
internal links, not another change.
