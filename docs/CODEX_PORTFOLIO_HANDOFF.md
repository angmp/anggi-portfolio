# Portfolio handoff for Codex

Prepared 15 October 2026. This document transfers completed work and decisions from the Sites portfolio into this existing GitHub repository. Adding this document does not itself migrate or change the website.

## Sources and links

- Repository: https://github.com/angmp/anggi-portfolio
- Existing GitHub Pages portfolio: https://angmp.github.io/anggi-portfolio/
- Sites portfolio (published successfully on 25 September 2026): https://anggi-data-and-bi.labamu-9876.chatgpt.site
- Sites HTML: https://anggi-data-and-bi.labamu-9876.chatgpt.site/index.html
- Base CSS: https://anggi-data-and-bi.labamu-9876.chatgpt.site/style.css
- Follow-up CSS refinements: https://anggi-data-and-bi.labamu-9876.chatgpt.site/refinements.css
- Interaction JavaScript: https://anggi-data-and-bi.labamu-9876.chatgpt.site/script.js
- Portrait: https://anggi-data-and-bi.labamu-9876.chatgpt.site/assets/anggi.png
- User-supplied UMN campus photo: https://anggi-data-and-bi.labamu-9876.chatgpt.site/assets/umn-campus.png
- CV used for the September changes: https://anggi-data-and-bi.labamu-9876.chatgpt.site/assets/Anggi-Magdalena-Panjaitan-CV.pdf

Asset URLs above are constructed from verified paths in the published source; they have not been individually fetched in this handoff. If any cannot be retrieved, report the missing asset rather than substituting an invented URL. The CV is the source used in September, not a claim that no newer CV exists.

## Completed in Sites

1. English-language personal portfolio for Anggi Magdalena Panjaitan, positioned for Data & Business Intelligence roles and full-time, freelance, and remote opportunities.
2. Bold summer-inspired appearance: warm yellow, coral orange, pink, magenta, burgundy, large typography, portrait, and responsive layouts.
3. Smooth anchor scrolling, reveal animations, rotating accents, horizontal project navigation, hover interactions, and reduced-motion support.
4. Hero introduction updated with current internship and expected internship completion.
5. UMN education information with campus photo, GPA 3.84/4.00, and expected graduation February 2027.
6. Section 03 renamed WORK EXPERIENCE. KPN Corp made prominent.
7. Experience rewritten around outcomes and business impact supported by the CV, instead of a list of routine duties.
8. Footer made compact and simpler.
9. Existing contact and CV download links retained.

The published Sites source is a small static site: index.html, style.css, refinements.css, script.js, and assets. Its September source commit was b128c690b7968569807be8dae28d41b0cf179d92 in the separate Sites source repository; that is NOT a commit in this GitHub repository.

## Approved copy to carry forward

### Hero

Hi, I’m Anggi Magdalena Panjaitan.
Currently interning at KPN Corp as an IT Engineer Intern (Business Intelligence & Analytics).
Internship expected to end in February 2027.

Positioning: Data & Business Intelligence.
Based in Indonesia; open to remote, full-time and freelance opportunities.

### Education

Universitas Multimedia Nusantara
Bachelor of Information Systems
GPA: 3.84 / 4.00
Expected graduation: February 2027

Use the supplied campus photo with meaningful alt text. Internship completion and university graduation are separate facts, even though both are expected in February 2027.

### 03 / WORK EXPERIENCE

KPN Corp — South Jakarta, Indonesia
IT Engineer Intern
Business Intelligence & Analytics
February 2026 – Present
Expected completion: February 2027

- 1,000+ IT assets supported with improved service management and asset visibility.
- Faster issue identification: Made SLA performance, ticket trends, and technician workload visible to help IT teams identify service bottlenecks.
- Less manual reporting: Automated recurring operational reports, improving consistency, accuracy, and access for IT teams and management.
- Clearer operational decisions: Delivered real-time helpdesk and asset insights through Metabase dashboards connected to GLPI data.

Use plain, professional English. Do not invent percentage improvements, hours saved, revenue gains, or other metrics. The 1,000+ figure describes asset scope, not a measured efficiency improvement.

### Verified September project/award facts

- CTRL+EAT: 1st Winner, Algorithm & Programming, Information Systems Exhibition (2024); Java nutrition recommendation system.
- BISINDO: Best Project selected by course lecturer (2025); 473 images and 19 hand sign classes.
- Wildlife image classification: 252 of 1,520 teams, top 17%, log loss 2.6807; seven rare animal species. September CV identifies DrivenData as the platform.
- Property Price Analytics: Power BI, SQL, Excel; 1,000+ property records.

The existing GitHub index labels the wildlife competition as Kaggle in its awards section. This conflicts with the September CV/Sites copy (DrivenData). Check original competition evidence before finalizing that label.

## Preserve existing repository content

Inspected on 15 October: main contains index.html, project.html, style.css, mediaqueries.css, script.js, and assets/. Its current hero still describes an undergraduate student, and education displays GPA 3.8/4.0.

Use this existing repository as the implementation base. Preserve project detail pages, images, demo links, GitHub links, contact information, and working interactions while adapting the requested content/design. Read any AGENTS.md instructions before editing. Do not copy Sites-specific hosting configuration into the GitHub Pages setup.

Known project links already present in index.html:

| Project | Link |
| --- | --- |
| Property Price Analytics dashboard | https://app.powerbi.com/links/fSV9nSoraf |
| Wildlife classification presentation | https://portofolioanggi1.my.canva.site/images-classification---species-classification-in-taiinationalpark |
| BISINDO source | https://github.com/angmp/BISINDO-ObjectDetection-YOLOModel |
| CTRL+EAT / Program Diet source | https://github.com/angmp/ProgramDiet_Java |
| Program Diet demo | https://drive.google.com/file/d/1z9Uk9uXpLhC7-tZvg1EHjiFIuGjqq1rj/view?usp=sharing |
| SecondChance source | https://github.com/angmp/SecondChance-ecommerce-php |
| SecondChance demo | https://youtu.be/j7i96drvHNs |
| Eco-friendly materials analysis demo | https://drive.google.com/file/d/160gRQrHdrqpbUYX7hZkJv37ma5ShlL7q/view?usp=sharing |

These were extracted from repository source; external demo contents were not tested during this handoff.

## Discussed but NOT implemented or finalized

The user later asked how to add certificates and remove some CV projects. The following were suggestions, not completed website changes or approval to delete source:

- Add a Certifications & Achievements section.
- Keep Property Price Analytics and Wildlife Classification prominent.
- BISINDO can remain as an optional featured project.
- Shorten CTRL+EAT to an award entry and remove SecondChance from a shortened CV if appropriate.
- Simplify Skills & Languages and avoid duplicate tool lists.

No certificate names, issuers, dates, or credential links were supplied in that discussion. Do not fabricate certificates. Do not delete existing project pages/assets based only on these suggestions. A featured selection can coexist with the full project archive.

## Implementation task for Codex

Bring the completed Sites updates described above into angmp/anggi-portfolio, using the current repository as the base and the Sites page as visual reference. Preserve the existing project archive and real project links. Update the hero, GPA/education photo, WORK EXPERIENCE heading and outcome-focused copy, and compact footer. Adapt the summer palette and motion consistently if carrying over the Sites visual design. Keep all public copy in English.

Inspect current source and any project instructions first. Verify mobile/desktop layouts, local asset references, navigation, project controls, contact links, CV download, and reduced-motion behavior. Avoid changing build tools or hosting unnecessarily. Summarize the files changed and verification performed. Report unavailable source assets or unresolved factual discrepancies clearly.
