# Marketing team — kaise use karna hai

Is repo mein ek poori marketing team hai jo kisi bhi business ke liye chal sakti hai: use sirf
website ka URL chahiye. Team teen tareeke se kaam karti hai:

1. **Autopilot** — scheduled runs jo bina bole chalte hain (hafte mein 3 scout, 1 weekly, mahine mein 1).
2. **Commands** — jab aap kuch specific chahte ho.
3. **Seedha bolna** — "is review ka reply likh", "Airbnb listing taiyaar kar".

**Ek hi jagah dekhni hai: `marketing/inbox/README.md`.** Wahan sabse upar likha hota hai aapko kya
karna hai.

## Autopilot kya karta hai

| Run | Kab | Kya |
|---|---|---|
| Scout | Mangal, Guru, Shani subah | Reddit, Quora aur forums par naye sawaal dhoondh kar jawab ka draft; jo cheez aapka intezaar kar rahi hai uska reminder |
| Weekly | Har Monday | Ek naya guide likh kar, fact-check karke **site par publish**; uske LinkedIn / Medium / Quora / Shorts versions; Google post; 5 Instagram items; ek listing ya pitch taiyaar |
| Monthly | Har mahine ki 1 tareekh | Naye ideas, AI visibility ka web check, purane guides ke facts update, mahine ki report |

**Band karna ho:** `marketing/site.md` mein `Autopilot: ON` ko `OFF` kar do (ya Claude ko bolo
"autopilot band kar"). Har run sabse pehle yahi line padhta hai.

**Autopilot kya khud karta hai aur kya nahi**

- Khud karta hai: site par guide publish karna (hafte mein 1, fact-checker pass kare tabhi), purane
  guides ke facts theek karna, `marketing/` mein drafts likhna.
- Kabhi khud nahi karta: Reddit / Quora / Instagram / Google par post karna, email bhejna, listing
  submit karna, prices ya plans badalna. Yeh sab draft banta hai, bhejte aap ho.

## Commands

| Command | Kab |
|---|---|
| `/marketing-team weekly` | Hafte ka round abhi chahiye |
| `/marketing-team status` | Kya hua, kya baaki hai |
| `/ai-visibility-check` | Mahine mein ek baar: 8 sawaal, 4 AI apps, score /32 |
| `/gsc-review` | Search Console ki Excel upload karke |
| `/new-guide <topic>` | Kisi topic par abhi guide chahiye |
| `/marketing-autopilot scout` (ya `weekly`, `monthly`) | Autopilot ka run haath se chalana |
| `/marketing-onboard <url>` | Kisi **naye business** ke liye team lagana |

## Team (10 specialists)

| Kaun | Kya karta hai |
|---|---|
| Idea lab | Asli demand se ideas nikaal kar score karta hai (`ideas.md`) |
| Content writer | Guides likhta hai, har language mein |
| Fact-checker | Publish se pehle har fee, timing, rule ko official source se milata hai |
| SEO analyst | Search Console report se fixes |
| AI visibility analyst | ChatGPT / Gemini / Perplexity / Claude hume recommend karte hain ya nahi |
| Opportunity scout | Reddit, Quora, forums par sawaal aur jawab ke drafts |
| Distribution | Har guide ko LinkedIn, Medium, Quora, Shorts, Pinterest ke liye dobara likhta hai |
| Local reputation | Google profile post, review replies, review maangne ka message |
| Outreach & partnerships | Marketplaces, directories, lists, blogs |
| Social media | Instagram / Facebook ka hafte ka plan |

## Files

- `inbox/` — **aapke liye**: kya karna hai, roz ke reply drafts.
- `access.md` — team ko kaunse accounts chahiye; jo ban jaye uska status badal do.
- `playbook.md` — saari tactics ki list, evidence aur risk ke saath, kaunsi chal rahi hai.
- `ideas.md` — kya likhna hai, score ke saath.
- `targets.md` — kahan list hona hai.
- `brand.md` — hum kaun hain, kaise bolte hain, kya kabhi nahi karte.
- `site.md` — yeh site kaise bani hai, aur autopilot ka ON/OFF switch.
- `ai-visibility/`, `seo/`, `distribution/`, `outreach/`, `social/`, `reports/`, `drafts/` — team ka kaam.
- `log.md` — kya kab hua.

## Doosre business ke liye

`.claude/agents/`, `.claude/skills/` aur `marketing/playbook.md` us business ke repo mein copy karo
(ya naya khaali repo banao), wahan session kholo aur `/marketing-onboard https://unki-site.com`
chalao. Team khud site padh kar brand sheet, sawaal, targets aur access list banayegi.

## Jo hum nahi karte

Fake ya paid reviews, fake accounts se Reddit replies, competitor ko bura bolna, hidden ya khareede
hue links, doosron ki site par paid content daal kar ranking lena, hazaaron auto-generated pages.
Inse Google profile, Reddit account aur site teeno band ho sakte hain, isliye team inhe likhegi hi
nahi. Wajah aur policy links `playbook.md` mein hain.
