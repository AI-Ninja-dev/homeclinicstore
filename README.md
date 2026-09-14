# HomeClinicStore

Premium CGM-led Next.js storefront for South African home-healthcare buyers. Brand: Next-Gen Healthcare at Home.

## Development

Run `npm ci`, then `npm run dev`. Run `npm run lint`, `npm run typecheck` and `npm run build` before release. The production build exports static files to `out/`. Node.js 20 or newer is recommended.

## Experience

- Responsive glass navigation, original logo, accessible mobile menu and shared footer.
- Reusable homepage sections for CGM, health pathways, home monitoring, CareGrid, biomedical services and education.
- Four-device enquiry catalog: Yuwell Anytime CT3 CGM, upper-arm blood-pressure monitor, digital thermometer and pulse oximeter.
- Search, filters, product pages, device finder and session-only shortlist.
- Enquiries open the customer's email app, with a text-download fallback. No order, payment or email delivery is claimed by the website.
- CareGrid dashboard is an illustrative preview, not live patient data.
- Reduced-motion support and a homepage animation pause control.

## Commercial readiness

This release supports product discovery and requests for availability. Confirm local stock, exact models for the three essentials, selling prices, VAT, delivery, warranty, returns and device compatibility before accepting orders. The existing contact mailbox requires business verification. See LAUNCH-REVIEW.md for release details and sources.

## Hosting

Static export is configured for Sites in `.openai/hosting.json`. A GitHub push saves source code; publication is a separate action requiring owner approval.
