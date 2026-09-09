# HomeClinicStore (HCS)

Premium connected home healthcare website starter.

## Focus
- Yuwell CGM and patient monitoring as flagship products
- Home medical equipment
- Remote Patient Monitoring (RPM)
- Biomedical services specifically for supported home medical equipment
- Online calibration/service booking concept
- Digital certificate verification/download concept
- Customer/service workflows

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Note
This package is a polished functional frontend prototype. Production integrations still need to be connected for real payments, authentication, database records, live appointment availability, RPM device APIs, secure document storage and certificate generation/approval workflows.

## Shopping experience
- `/shop` premium product catalogue with search, category filters and cart
- `/shop/[slug]` individual product pages
- Flagship Yuwell CGM and patient-monitoring products
- Replace product visuals with real approved HCS/Yuwell images in `public/products/`
