---
name: marketing-onboard
description: Sets the marketing team up for a business from nothing but its website URL - reads the site, writes the brand sheet, site sheet, the eight AI-visibility questions, the targets list and the access requests, then runs the first baseline. Use when the owner gives a URL and says "is site ke liye marketing team laga", "onboard this business", or when marketing/site.md is missing or belongs to a different business.
---

# Onboard a business

Input: one URL. Everything else you find out yourself; ask the owner only for what cannot be found.

## 1. Read the business

Fetch the home page, the sitemap, the pricing or services pages, the about/team page, the contact
page and three or four articles. From these work out: what is sold and for how much, to whom, where,
by whom, what proof exists (licences, years, reviews, named people), which languages, and how a
customer buys (form, WhatsApp, checkout). Search the business name to find its Google profile,
review sites and social accounts, and note what is said about it elsewhere.

Write down what you could not find rather than guessing.

## 2. Read the repo, if this repo is the site

Find where pages and articles live, how prices and business facts are stored, what must pass before a
deploy (type check, lint, tests, build) and how a deploy happens. If this repo is not the site's
code, say so: the team can still do everything that does not change the site (ideas, drafts, outreach,
reviews, social, AI checks), and guides are delivered as files for whoever runs the site.

## 3. Write the files

- `marketing/site.md`: same headings as the existing sheet (Business, Facts, Prices, Content, Media,
  Checks, Publishing, Autopilot). Set **Autopilot: OFF** for a new business; the owner turns it on.
- `marketing/brand.md`: what we are, why someone picks us, who we talk to, voice, and the lines we do
  not cross (keep that section as it is; it applies to every business).
- `marketing/ai-visibility/queries.md`: eight questions a stranger would ask an AI when looking for
  what this business sells, never containing the business name, covering "best", "recommend", price,
  a comparison, a rule or risk, and the two or three main customer types.
- `marketing/targets.md`: from a web pass on those eight questions, the marketplaces, directories,
  review sites, lists and blogs that rank, grouped and prioritised, with whether the business is on
  each.
- `marketing/access.md`: every account or export the team needs, marked `have` / `need`, with what
  each unlocks and how to grant it.
- `marketing/ideas.md`: run `idea-lab` for the first twenty ideas.
- `marketing/playbook.md`: keep the plays; reset every status to `todo` and mark the top five `next`
  for this business.
- Empty `marketing/log.md` and `marketing/inbox/README.md`.

If these files already exist for another business, move them to `marketing/archive/<old-name>/`
first; never overwrite another business's work.

## 4. First baseline

Run `ai-visibility-analyst` with no answers (web baseline) so there is a starting point.

## 5. Tell the owner

Briefly, in their language: what the team understood the business to be (three lines, so they can
correct it), the baseline result, the five accesses that matter most and how to give each, and the
three commands to use next (`/ai-visibility-check`, `/marketing-team weekly`, and turning autopilot
on in `marketing/site.md`).

## Using this team for another business

The team is the `.claude/agents/` and `.claude/skills/` folders plus `marketing/playbook.md`. Copy
those into the other business's repo (or a new empty repo if its site is not on GitHub), open a
session there and run `/marketing-onboard <url>`. Nothing in those folders names a business.
