# Zhengwei Machinery — New Website (SEO-Optimized)

**Status:** Static site ready for deployment to Cloudflare Pages  
**Last Updated:** 2026-09-23  

## What's Built

### Pages (18 total)
1. **index.html** — Homepage with hero, about, products grid, cases, partners, why-us, CTA
2. **about.html** — Company introduction with founder voice (Vincent)
3. **contact.html** — Contact form + company info + FAQ schema
4. **cases.html** — Project cases listing (Problem/Solution/Result format)
5. **cases/shale-oil.html** — Shale oil refining case study detail
6. **certificates.html** — Quality certifications display
7. **articles.html** — Technical articles hub (6 article cards)
8. **products/industrial-reactor.html** — Industrial reactor detail
9. **products/hydrogenation-reactor.html** — Hydrogenation reactor detail
10. **products/lab-reactor.html** — Laboratory reactor detail
11. **products/pilot-reactor.html** — Pilot scale reactor detail
12. **products/non-ferrous-reactor.html** — Non-ferrous metal reactor detail
13. **products/lift-flip-reactor.html** — Lift & flip reactor detail
14. **products/reactor-system.html** — Complete system detail
15. **products/heat-exchanger.html** — Heat exchanger detail
16. **products/storage-tank.html** — Storage tank detail
17. **robots.txt** — Search engine crawling instructions
18. **sitemap.xml** — XML sitemap for search engines

### Assets
- **CSS:** style.css (main), pages.css (inner page styles)
- **JS:** main.js (mobile menu, scroll effects, animations)
- **Images:** 18 images downloaded from old site (logo, hero, cases, partners, product placeholders)

### SEO Features Implemented
- ✅ Meta title and description on every page (unique, keyword-rich)
- ✅ Canonical URLs to prevent duplicate content
- ✅ Schema.org JSON-LD structured data (FAQ, Article)
- ✅ Open Graph meta tags for social sharing
- ✅ Semantic HTML5 structure (header, nav, main, section, footer)
- ✅ Proper heading hierarchy (H1-H3)
- ✅ Image alt text optimized for accessibility and SEO
- ✅ Mobile-responsive design (mobile-first)
- ✅ Fast loading (no frameworks, minimal CSS/JS)

### Content Strategy
- **Founder voice (Vincent):** Written as if Vincent himself is describing his work — cautious, experienced, customer-focused
- **Solution-oriented:** Each product page starts with the problem it solves, not just features
- **International style:** Clean, professional, avoids Chinese manufacturing stereotypes
- **Technical depth:** Shows engineering understanding without being academic
- **Trust signals:** Certifications, process details, real case studies

## File Structure

```
C:\Users\chemac\zw-site\
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact + FAQ schema
├── cases.html              # Cases listing
├── certificates.html       # Quality certifications
├── articles.html           # Technical articles hub
├── cases/
│   └── shale-oil.html      # Shale oil case study
├── products/               # 9 product detail pages
│   ├── industrial-reactor.html
│   ├── hydrogenation-reactor.html
│   ├── lab-reactor.html
│   ├── pilot-reactor.html
│   ├── non-ferrous-reactor.html
│   ├── lift-flip-reactor.html
│   ├── reactor-system.html
│   ├── heat-exchanger.html
│   └── storage-tank.html
├── articles/
│   ├── batch-reactor-article.html
│   ├── batch-reactor-design-defects.md
│   └── batch-reactor-preview.html
├── css/
│   ├── style.css          # Main stylesheet (mobile-first)
│   └── pages.css          # Inner page styles
├── js/
│   └── main.js            # Mobile menu, interactions
├── images/                # 18 images (some are placeholders)
├── robots.txt             # Search engine crawling
├── sitemap.xml            # XML sitemap
├── DEPLOY.md              # Deployment guide
└── README.md              # This file
```

## Deployment to Cloudflare Pages

### Option 1: Git-based (recommended)
```bash
# 1. Initialize git repo
cd C:\Users\chemac\zw-site
git init
git add .
git commit -m "Initial SEO-optimized site build"

# 2. Create remote (replace with your repo)
git remote add origin https://github.com/yourusername/zhengwei-site.git
git push -u origin main

# 3. Connect to Cloudflare Pages
# - Go to cloudflare.com/pages
# - "Connect to Git" → select your repo
# - Build settings:
#   - Build command: (leave empty for static site)
#   - Output directory: ./
#   - Build cache: enable
```

### Option 2: Direct upload
```bash
# Download wrangler CLI or use Cloudflare dashboard
# Drag and drop the zw-site folder into Cloudflare Pages dashboard
```

### Option 3: Use existing domain
Once deployed, update DNS:
- Point your new domain (zhengweimachinery.com) to Cloudflare
- Add CNAME or A record as instructed by Cloudflare

## Next Steps

1. **Register new domain** — zhengweimachinery.com is available (~$12/year)
2. **Set up Cloudflare Pages** — connect and deploy
3. **Configure DNS** — point domain to Cloudflare
4. **Add SSL certificate** — Cloudflare provides free SSL
5. **Submit to Google Search Console** — for SEO indexing
6. **Submit to Bing Webmaster Tools** — for Bing indexing
7. **Set up contact form backend** — Formspree recommended

## TODO Items (to be completed by Vincent)

- [ ] Replace placeholder product images with actual reactor photos
- [ ] Add Google Analytics or alternative tracking
- [ ] Set up contact form backend (Formspree, Netlify Forms, or custom)
- [ ] Add more case study detail pages
- [ ] Optimize images for web (compress, WebP format)
- [ ] Consider adding Chinese version (dual-language site)
- [ ] Update email addresses to new domain once live
- [ ] Write full articles for the technical blog section

## Site Metrics

- **Total HTML pages:** 18
- **Total files:** 44
- **Site size:** ~19MB (mostly images)
- **Load time:** Fast (no frameworks, minimal JS)
- **Mobile responsive:** Yes (all pages)
- **SEO optimized:** Yes (meta tags, schema, canonical URLs)
