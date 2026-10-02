# HomeClinicStore design system

Direction: calm, modern technology for care at home, grounded in human warmth and everyday comfort. Lead the homepage with the existing family-at-home photograph; keep the supplied logo and the tagline Next-Gen Healthcare at Home.

Use deep blue for primary actions, charcoal for body text, white and cool silver for broad surfaces. Use deep blue behind the photo-led home hero, with generous spacing and a quiet gradient over the image caption. Manrope headings and DM Sans body text are self-hosted by Next.js font compilation. Keep headings spacious and readable; avoid dense dashboard styling in shopping journeys.

Shared components live in app/components; reusable homepage sections live in app/components/home. Catalog content lives in lib/catalog.ts and lib/launch.ts. storefront.css contains the updated shared and editorial layouts, with premium.css and release.css supporting product and finder components.

Primary buttons are pill-shaped, product and pathway corners are restrained, and keyboard focus remains visible. Mobile navigation uses a native modal dialog. Motion uses CSS and IntersectionObserver to avoid a large animation runtime, respects reduced-motion settings, and offers a homepage pause control. Static content remains readable without JavaScript animation.

Use manufacturer photography only for identified products. Generic product listings use simple icons until exact models are confirmed. The generated hero design reference is a composition aid, not product evidence. CareGrid previews must remain labelled illustrative until a real integration exists.
