# Growvera Digital

Responsive static digital marketing website for Growvera Digital, Surat. Dark backgrounds, a lime-to-mint gradient, Anton headings, Poppins body text, an original animated wireframe globe, service cards, filterable creative concepts, custom growth plans, about, insights, contact and privacy pages. Twelve HTML pages, with no runtime dependencies.

## Preview

Node.js 18 or newer. No packages to install.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173. Alternatively open index.html directly, or use VS Code Live Server.

## Edit

Edit shared page content in `build.mjs`, home and plan content in `home.mjs`, base styles in `styles.css` and the current theme in `agency.css`. Browser interactions are in `app.js` and `agency.js`. `hero-design.css` belongs to the older hero and is no longer loaded. Run `npm run build` after editing content. Generated HTML files are committed so the website works on static hosts, including GitHub Pages. Use `npm run check` to verify pages and internal links.

The globe animation pauses outside the viewport and when the tab is hidden. Reduced-motion preferences disable animation and rotating service text. Concept filters use accessible pressed states and all content remains visible without JavaScript. Plan enquiries prefill the contact form with the selected plan and billing period. Owner-supplied monthly prices: Basic Boost ₹30,000, Advanced Growth ₹40,000, Premium Impact ₹70,000. Quarterly and annual totals use 3× and 12× the monthly rate, without discounts. All plans have a three-month minimum, 18% additional GST and a separate client-paid Meta Ads budget of ₹500/day.

## Contact

Business email supplied and confirmed by the owner: **growveradigitall@gamil.com**. This spelling is intentional. Contact form opens an email draft; it does not deliver or store enquiries itself. No phone number was provided, so there is no phone or WhatsApp button. Portfolio directions are labelled illustrative concepts; no invented clients, reviews or performance claims are used.

## GitHub

Save in VS Code, commit the desired files and push to origin/main. Saving a file alone does not upload it to GitHub. The repository is public with the owner's approval. GitHub Pages publishes the root of main automatically after a successful build.

Live website: https://growveradigitall.github.io/Growveradigital/
