# Zhengwei Machinery — Deployment Guide

## Site Status: Ready for Deployment

✅ **18 HTML pages** — Fully SEO-optimized  
✅ **Mobile responsive** — Works on all screen sizes  
✅ **SEO/AEO/GEO/EEAT optimized** — Meta tags, Schema.org, canonical URLs  
✅ **International style** — Founder voice (Vincent), solution-focused copy  
✅ **18 images** — Downloaded from old site (product placeholders need real photos)  
✅ **Fast loading** — No frameworks, pure HTML/CSS/JS  

## Quick Deploy to Cloudflare Pages

### Step 1: Register New Domain
Go to Namecheap or 阿里云万网 and register:
- **zhengweimachinery.com** (~$12/year) ← Recommended
- Or **zhengwei-reactors.com** (also available)

> **Why not use whzhengweihj.com?** It's pinyin initials that international clients can't read. Use it for 301 redirects from old pages.

### Step 2: Push to GitHub

```bash
cd C:\Users\chemac\zw-site
git init
git add .
git commit -m "Initial SEO-optimized site build"

# Create repo on GitHub: zhengwei-site
git remote add origin https://github.com/YOUR_USERNAME/zhengwei-site.git
git push -u origin main
```

### Step 3: Deploy to Cloudflare Pages

1. Go to https://dash.cloudflare.com → **Workers & Pages**
2. Click **Create application** → **Pages**
3. Select **Connect to Git**
4. Authorize Cloudflare to access your GitHub
5. Choose `zhengwei-site` repository
6. Build settings:
   - **Project name**: `zhengwei-machinery`
   - **Production branch**: `main`
   - **Build command**: (leave empty)
   - **Output directory**: `./`
   - **Build cache**: Enable
7. Click **Save and Deploy**

Your site will be live at: `https://zhengwei-machinery.pages.dev`

### Step 4: Connect Custom Domain

1. In Cloudflare Pages, go to **Custom domains**
2. Add `zhengweimachinery.com`
3. Cloudflare will give you DNS records:
   - Type: CNAME, Name: `www`, Value: `zhengwei-machinery.pages.dev`, Proxy: Proxied
   - Type: CNAME, Name: `@`, Value: `zhengwei-machinery.pages.dev`

### Step 5: Enable SSL

Cloudflare auto-enables SSL. Set SSL/TLS mode to **Full** or **Full (strict)**.

### Step 6: Submit to Search Engines

**Google Search Console:**
1. Go to https://search.google.com/search-console
2. Add property: `https://zhengweimachinery.com`
3. Verify ownership (HTML tag or DNS record)
4. Submit sitemap: `https://zhengweimachinery.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to https://www.bing.com/webmasters
2. Add site: `https://zhengweimachinery.com`
3. Verify ownership
4. Submit sitemap

### Step 7: Set Up Contact Form

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

### Step 8: Add Real Product Photos

Replace placeholder images in `images/` folder:
```
images/prod-industrial.jpg      → Your reactor photo
images/prod-hydrogenation.jpg   → Hydrogenation reactor
images/prod-nonferrous.jpg      → Hastelloy/titanium reactor
images/prod-pilot.jpg           → Pilot scale reactor
images/prod-lab.jpg             → Lab reactor
images/prod-liftflip.jpg        → Lift & flip reactor
images/prod-system.jpg          → Complete system
images/prod-heatex.jpg          → Heat exchanger/jacket
images/prod-tank.jpg            → Storage tank
images/cases/case_shale.jpg     → Case study photo
images/cases/case_distill.jpg   → Case study photo
images/cases/case_tank.jpg      → Case study photo
images/cases/case_polyester.jpg → Case study photo
images/cases/case_pipeline.jpg  → Case study photo
images/cases/case_hastelloy.jpg → Case study photo
```

Best practices:
- Size: 800×600px minimum
- Format: WebP (smaller file size) or JPEG
- Compress with TinyPNG before uploading

## Ongoing Maintenance

- Add new case studies as projects complete
- Update blog/articles with technical content
- Monitor Google Search Console for indexing issues
- Keep images optimized as you add more

---

**Site Location:** `C:\Users\chemac\zw-site\`  
**Total Files:** 44 (18 HTML, 2 CSS, 1 JS, 18 images, 4 markdown/docs, 1 XML, 1 txt)
