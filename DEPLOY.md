# WEIHAI ZHENGWEI MACHINERY CO.,LTD — Deployment Guide

## Site Status: Ready for Deployment

✅ **18 HTML pages** — Fully SEO-optimized  
✅ **Mobile responsive** — Works on all screen sizes  
✅ **SEO/AEO/GEO/EEAT optimized** — Meta tags, Schema.org, canonical URLs  
✅ **International style** — Founder voice (Vincent), solution-focused copy  
✅ **Fast loading** — No frameworks, pure HTML/CSS/JS  

## Simplest Deploy: Cloudflare Pages Direct Upload (preferred, no git)

Per owner decision (2026-10): upload files directly — skip the GitHub workflow.

1. Register domain `zhengweireactor.com` (Namecheap or 阿里云万网, ~$12/year). The pinyin domain `whzhengweihj.com` is kept only for 301 redirects.
2. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
3. Zip the whole site folder `C:\Users\chemac\zw-site` (exclude any `.bak` / `_verify-*` files) and upload the zip — no build command, output directory `./`.
4. **Custom domains** tab → add `zhengweireactor.com`; apply the CNAME records Cloudflare shows (`www` and `@` → your `*.pages.dev`). SSL is automatic (set SSL/TLS to **Full** or **Full (strict)**).
5. Submit sitemap `https://zhengweireactor.com/sitemap.xml` to Google Search Console + Bing Webmaster Tools.
6. **Every content update:** re-upload the new zip — Cloudflare replaces the version. Done.

<details>
<summary>Alternative: Git-based deploys (only if/when using many automated changes)</summary>

```bash
cd C:\Users\chemac\zw-site
git add .
git commit -m "site update"
git push -u origin main
```

Then in Cloudflare Pages the connected repo auto-deploys on push (project name `zhengwei-machinery`, build command empty, output `./`).

</details>

## Before Uploading

- **Set Up Contact Form**

**Formspree 已配置:** https://formspree.io/f/xppwraqv

To activate it:
1. Go to https://formspree.io
2. Create free account
3. Create new form
4. Copy the form endpoint URL
5. Update `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

Formspree free tier: 50 submissions/month — enough to start.

- **Add Real Product Photos**

Replace placeholder images in `images/` folder:
```
images/prod-industrial.jpg      → Your reactor photo
images/prod-hydrogenation.jpg   → Hydrogenation reactor
images/prod-nonferrous.jpg      → Hastelloy/titanium reactor
images/prod-pilot.jpg          → Pilot scale reactor
images/prod-lab.jpg            → Lab reactor
images/prod-liftflip.jpg       → Lift & flip reactor
images/prod-system.jpg         → Complete system
images/prod-heatex.jpg         → Heat exchanger/jacket
images/prod-tank.jpg           → Storage tank
images/cases/case_shale.jpg    → Case study photo
images/cases/case_distill.jpg  → Case study photo
images/cases/case_tank.jpg     → Case study photo
images/cases/case_polyester.jpg→ Case study photo
images/cases/case_pipeline.jpg → Case study photo
images/cases/case_hastelloy.jpg→ Case study photo
```

Best practices:
- Size: 800×600px minimum
- Format: WebP (smaller file size) or JPEG
- Compress with TinyPNG before uploading

## Ongoing Maintenance

- Re-upload the zip after every content update (see direct-upload flow above)
- Add new case studies as projects complete
- Update blog/articles with technical content
- Monitor Google Search Console for indexing issues
- Keep images optimized as you add more

---

**Site Location:** `C:\Users\chemac\zw-site\`  
**Deploy Method:** Cloudflare Pages **direct upload** (no git)  
**Total Files:** 44 (18 HTML, 2 CSS, 1 JS, 18 images, 4 markdown/docs, 1 XML, 1 txt)
