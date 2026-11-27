# Playbook

Every tactic the team uses, ranked by how much evidence there is that it works, with the risk and who
does it. The autopilot takes the highest play marked `next` that it can do inside the repo; plays that
need the owner show up in the inbox. Researched 27 November 2026; sources at the bottom.

Read the evidence column honestly: almost every study here is run by a tool vendor and shows
correlation, not proof. "Strong" means several independent sources agree.

Status: `next` · `todo` · `doing` · `done` · `owner` (waiting on the owner) · `skip` (with reason)

## Plays

| # | Play | Evidence | Risk | Who | Status |
|---|---|---|---|---|---|
| 1 | **Be indexed in Google and Bing; let AI search crawlers in.** Google says AI features need nothing beyond a normally indexed page. ChatGPT mentions track page-one Google rankings (about 0.65) and Bing (0.5–0.6). | Strong | None | Team: crawlers already allowed in `robots.ts`. Owner: verify the site in Bing Webmaster Tools | owner |
| 2 | **Complete every local profile:** Google Business Profile, Bing Places, TripAdvisor, and the review site of the industry. In local AI answers Google Business Profile is about 28% of citations and directories about 41% of ChatGPT's. | Strong (local) | None | Owner, with text from `local-reputation` and `outreach-partnerships` | owner |
| 3 | **Specific, factual service and location pages on our own site.** The business's own site is 27–42% of local AI citations. | Strong | None | Team | done (keep fresh) |
| 4 | **Ask every customer for a review, the same way, with a link.** No picking only happy customers, no reward. | Some | Low if done right | Owner sends; message in `reviews/` | owner |
| 5 | **Earn mentions on other sites.** Brand mentions correlate with AI visibility about three times more than backlinks (0.66 vs 0.22; measured on larger brands). | Some | Low | `outreach-partnerships` drafts, owner sends | next |
| 6 | **Get onto third-party "best of" lists.** List pages are about 44% of the page types ChatGPT cites; a higher place in the list means recommended more often. | Some | Low | `outreach-partnerships` | next |
| 7 | **Short videos on YouTube that name the business.** YouTube mentions were the strongest single correlate found (about 0.74). | Some | Low | `social-media` and `distribution` write scripts; owner films and posts | owner |
| 8 | **Marketplace listings for the industry.** Our own baseline: marketplaces filled every answer we were absent from. No published study for this industry. | Our data only | Low (commission) | `outreach-partnerships` prepares, owner submits | next |
| 9 | **Put quotations, statistics and cited sources in every guide.** In the one controlled study, quotations raised visibility about 41%, statistics 31%, citing sources 28%; keyword stuffing lowered it. | Some (lab) | None | `content-writer`, checked by `fact-checker` | doing |
| 10 | **Answer first, with question headings**, so any section can be quoted alone. | Some | None | `content-writer` | doing |
| 11 | **Real refreshes of existing guides** when a fact changes. AI-cited pages are about 26% fresher than ordinary results. Changing a date without changing content is something Google has warned against. | Some | Low | Autopilot monthly, from `claims.md` | doing |
| 12 | **Cover the follow-up questions** (price, rules, timing, "is it worth it") that AI search fans a question out into. | Some | None | `idea-lab` | doing |
| 13 | **An honest "how to choose" or comparison page of our own.** In one experiment it produced most of an unknown brand's new mentions, but 43% of answers that cited the page left the brand out, and the effect faded. | Some | Medium: must be fair and name real criteria, not a fake ranking with us first | `content-writer` | todo |
| 14 | **Digital PR:** give journalists and bloggers a fact, a number or a photo worth using. | Some | Low | `outreach-partnerships` | todo |
| 15 | **Answer real questions on Reddit and Quora, by hand, as ourselves.** Reddit is heavily cited by Perplexity and Google's AI answers, but forums are only about 2–4% of local citations, and ChatGPT's use of Reddit dropped sharply within weeks in 2026. | Some in general, weak for local | High if automated or undisclosed | `opportunity-scout` drafts, owner posts | doing |
| 16 | **Rewrite guides for LinkedIn and Medium** under our own name, linking to the original. | Anecdotal | Low | `distribution` drafts, owner posts | doing |
| 17 | **Measure AI referrals:** visits from chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai in analytics. Treat the count as a floor; AI is still well under 1% of traffic on most sites, and Google's AI answers cannot be separated from normal search. | Method | None | Autopilot monthly, if analytics access is available | todo |
| 18 | **Measure AI visibility as a share of runs, not a rank.** AI tools rarely give the same list twice, so one answer proves little; the monthly trend across the same eight questions is the signal. | Method | None | `/ai-visibility-check` | doing |

## Not worth time

| Tactic | Why |
|---|---|
| `llms.txt` as a lever | No effect found across about 300,000 domains; Google says no special AI file is needed. Ours stays, costs nothing, and gets no more work. |
| Schema as an AI lever | No significant effect on AI citations in testing. Keep it for normal rich results only. |
| "Rank #1 in ChatGPT" tracking tools | Answers vary too much from run to run for a rank to mean anything. |

## Never — these get sites, profiles and accounts removed

| Do not | Rule |
|---|---|
| Publish many AI-written pages that add nothing | Google "scaled content abuse": pages may rank lower or be removed. AI-written content is allowed when it adds value and is fact-checked by a person. This is why autopilot publishes at most one checked guide a week. |
| Place our pages on a stronger site to borrow its ranking | Google "site reputation abuse". Posting under our own name on forums and social platforms is exempt. |
| Reward, filter, buy or write reviews | Google's review policy: removal of reviews and suspension of the profile. Asking everyone with a link or QR code is allowed. |
| Automate Reddit or Quora posts, use extra accounts, or hide who we are | Reddit's builder policy bans automated promotional posting and repeated similar content; accounts and domains get suspended, and Reddit removes tens of thousands of such posts a day. (Read from secondary sources; Reddit's own pages could not be opened during research.) |
| Change "last updated" dates without changing the content | Google has warned against it. |
| Try to manipulate AI answers with hidden text or fake lists | Google counts attempts to manipulate generative AI responses in Search as spam. |

## How the system is built — ideas taken from existing open-source work

Nothing here was copied as code; these projects were read for their design. All are MIT or Apache
licensed unless noted.

- **One context file every specialist reads first**, and a scheduled-operator design with cadence,
  self-check, state and stop condition: `coreyhaines31/marketingskills`. Ours: `site.md`, `brand.md`,
  `/marketing-autopilot`.
- **Claims ledger as the fact gate**, and a separate reviewer that blocks publishing:
  `aaron-he-zhu/aaron-marketing-skills`, `AgriciDaniel/claude-blog`. Ours: `claims.md`, `fact-checker`.
- **Research, then write, then optimise, with brand and internal-link context files**:
  `TheCraigHewitt/seomachine`. Ours: `idea-lab` → `content-writer` → checks.
- **Monthly baseline and compare for AI visibility and local presence**: `AgriciDaniel/claude-seo`,
  `zubair-trabzada/geo-seo-claude`. Ours: `ai-visibility/` reports.
- **Topics from search queries we do not rank for; ping search engines after publishing**:
  `kevinbadi/seo-agent-kit`. Ours: `idea-lab`, IndexNow in `site.md`.
- **A one-screen report with at most three asks of the owner**: `marketingskills`. Ours: the inbox.

Worth installing later if the team outgrows this: `AgriciDaniel/claude-seo` for full technical and
local audits (needs Python and a browser).

## Sources

- Google, AI features and your website: https://developers.google.com/search/docs/appearance/ai-features
- Google, spam policies: https://developers.google.com/search/docs/essentials/spam-policies
- Google, using generative AI content: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- Google, site reputation abuse: https://developers.google.com/search/blog/2024/11/site-reputation-abuse
- Google, review policy: https://support.google.com/contributionpolicy/answer/7400114
- GEO paper (Princeton and others): https://arxiv.org/abs/2311.09735
- Seer Interactive, what drives brand mentions in AI answers: https://www.seerinteractive.com/insights/what-drives-brand-mentions-in-ai-answers
- Ahrefs, brand mentions vs backlinks: https://ahrefs.com/blog/ai-overview-brand-correlation/
- Ahrefs, "best" lists: https://ahrefs.com/blog/best-lists-research/
- Ahrefs, YouTube and brand visibility: https://ahrefs.com/blog/ai-brand-visibility-correlations/
- Ahrefs, freshness: https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content/
- Ahrefs, schema and AI citations: https://ahrefs.com/blog/schema-ai-citations/
- Ahrefs, self-promotional list experiment: https://ahrefs.com/blog/self-promotional-content-ai-seo-experiment/
- BrightLocal, local AI visibility: https://www.brightlocal.com/research/local-ai-visibility-study/
- Yext, four AIs, four answers: https://www.yext.com/research/articles/four-ais-four-different-answers
- Profound, citation patterns by platform: https://www.tryprofound.com/blog/ai-platform-citation-patterns
- Semrush, most cited domains: https://www.semrush.com/blog/most-cited-domains-ai/
- SE Ranking, llms.txt: https://seranking.com/blog/llms-txt/
- SE Ranking, AI traffic share: https://seranking.com/blog/ai-traffic-study/
- SparkToro, AI recommendations are inconsistent: https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/
