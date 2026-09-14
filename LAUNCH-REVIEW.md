# HomeClinicStore first-release review

Prepared 14 September 2026. Changes are prepared for owner review; no Sites publication was performed.

## Existing experience and changes

The original homepage foregrounded a simulated connected-care dashboard and the catalog showed illustrative prices without model-specific evidence. The new experience leads with CGM, removes displayed placeholder prices and gives buyers a clear availability/enquiry journey.

The homepage uses reusable TypeScript sections, the original logo, blue/charcoal/white styling, local fonts, optimised imagery, glass navigation, rounded layouts and restrained motion. It includes three health pathways, home-monitoring guidance, secondary devices, an explicitly illustrative CareGrid dashboard, biomedical services and educational links.

Shop filtering, product details, a device finder, a session-only shortlist and prefilled enquiries support the buying journey. The email handoff remains explicit; the site does not process payments, submit messages to a server or promise live monitoring.

## Smallest proposed launch catalog

| Product | Release treatment |
| --- | --- |
| Yuwell Anytime CT3 CGM | Primary product; manufacturer-supported 14-day sensor and reusable transmitter story. Confirm South African availability, compatible app/phone, pack contents and ongoing cost. |
| Upper-arm blood-pressure monitor | One model to be confirmed, with validated measurement and correct cuff selection checks. |
| Digital thermometer | One model to be confirmed; verify measurement site and intended users. |
| Pulse oximeter | One model to be confirmed; explain limitations and intended-use checks. |

These are four enquiry listings, not four verified orderable SKUs. No exact model imagery, accuracy specifications or pricing is invented for the three essentials.

## Remaining business inputs

Confirm supplier stock and local sale documentation; prices and VAT; delivery coverage and rates; returns and warranty terms; verified business and support contacts; and CareGrid availability and compatibility. The retained info@homeclinicstore.co.za mailbox has not been tested. Public commercial launch and checkout require these inputs. No medical-aid reimbursement is promised.

## Validation

Browser review covered desktop, tablet and mobile layouts, image loading, the mobile menu and Escape focus return, the adult blood-pressure finder path, shortlist and prefilled enquiry, and the CareGrid anchor. No enquiry was sent. CSS supports reduced motion and explicit animation pause. The final caption-position adjustment was checked in source after browser review. Final build, lint, typecheck and dependency-audit results are recorded in the commit handoff.

## Sources and imagery

- CT3 product facts and original product photograph: https://en.yuwell-poctech.com/products/cgm
- CGM guidance: https://www.niddk.nih.gov/health-information/diabetes/overview/managing-diabetes/continuous-glucose-monitoring
- Blood-pressure guidance: https://www.heart.org/en/health-topics/high-blood-pressure/understanding-blood-pressure-readings/monitoring-your-blood-pressure-at-home
- Oximeter guidance: https://www.fda.gov/consumers/consumer-updates/pulse-oximeter-basics
- Stroke warning signs: https://www.heart.org/en/about-us/heart-attack-and-stroke-symptoms
- Family photograph: August de Richelieu / Pexels, https://www.pexels.com/photo/happy-family-sitting-on-a-couch-4260639/

Manufacturer information does not establish local regulatory status or availability. Lifestyle models are not represented as patients or endorsers. General education does not replace individual clinical advice.

Final automated verification: ESLint and TypeScript passed. Production build generated 22 static pages on Next.js 15.5.25. Compatible dependency updates resolved the critical Next.js and sharp findings. npm audit still reports two findings (one moderate and one high) through Next.js's bundled PostCSS; its suggested automatic fix requires a Next.js 16 major upgrade, which is outside this release. Address before a future server-hosted deployment; this project currently exports static HTML.
