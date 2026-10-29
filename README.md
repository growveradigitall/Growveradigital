# Growvera Digital

Responsive static digital marketing website for Growvera Digital, Surat. Warm Ivory (#FFF7E8) backgrounds, Forest Green (#315C4C) text and buttons, Blush Pink (#F2A7B5) accents, Anton headings, Poppins body text, an original animated wireframe globe, service cards, filterable creative concepts, growth plans, about, insights, contact and privacy pages. Twelve HTML pages, with no runtime dependencies. The current palette is applied by palette.css after agency.css.

## Preview

Node.js 18 or newer. No packages to install.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173. Alternatively open index.html directly, or use VS Code Live Server.

## Edit

Edit shared page content in `build.mjs`, home and plan content in `home.mjs`, base styles in `styles.css` and the current theme in `agency.css`. `palette.css` defines the current colors and `responsive.css` loads last for mobile/tablet layout. Browser interactions are in `app.js` and `agency.js`. `hero-design.css` belongs to the older hero and is no longer loaded. Run `npm run build` after editing content. Generated HTML files are committed so the website works on static hosts, including GitHub Pages. Use `npm run check` to verify pages and internal links.

Mobile navigation collapses at 1024px, closes on outside click, link selection or Escape, and resets across the desktop breakpoint. Cards and forms stack at smaller widths. Phone form inputs use 16px text, and main controls use comfortable touch targets. Long headings, plan prices, email addresses and decorative graphics have dedicated narrow-screen sizing. Browser/device visual QA still needs to be performed on the target phones.

The globe animation pauses outside the viewport and when the tab is hidden. Reduced-motion preferences disable animation and rotating service text. Concept filters use accessible pressed states and all content remains visible without JavaScript. Plan enquiries prefill the contact form with the selected plan and billing period. Owner-supplied monthly prices: Basic Boost ₹25,000, Advanced Growth ₹35,000, Premium Impact ₹65,000. Quarterly and annual totals use 3× and 12× the monthly rate, without discounts. All plans have a three-month minimum, 18% additional GST and a separate client-paid Meta Ads budget of ₹500/day.

## Contact

Business email supplied and confirmed by the owner: **growveradigitall@gmail.com**. Contact forms open a prefilled Gmail draft, with an email-app fallback. There is no backend, form delivery provider, automatic submission or API key. The visitor must press Send in their email app. No phone number was provided, so there is no phone or WhatsApp button. Portfolio directions are labelled illustrative concepts; no invented clients, reviews or performance claims are used.

## GitHub

Save in VS Code, commit the desired files and push to origin/main. Saving a file alone does not upload it to GitHub. The repository is public with the owner's approval. GitHub Pages publishes the root of main automatically after a successful build.

Live website: https://growveradigitall.github.io/Growveradigital/
