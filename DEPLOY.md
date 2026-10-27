# Deployment Guide — zhengweireactor.com

**Site root:** `F:\zw`
**Domain:** https://zhengweireactor.com
**Platform:** Cloudflare Pages (direct upload, no Git workflow)

---

## Deploy Process (Direct Upload)

Per owner decision: upload files directly to Cloudflare Pages — no GitHub Actions needed.

### Steps

1. **Prepare the zip**
   ```bash
   # From F:\zw root, create a clean zip
   # Exclude .git folder and any .bak / _verify-* files
   ```
   In Windows: right-click `F:\zw` folder → **Send to → Compressed (zipped) folder**
   Then delete the `.git` folder from inside the zip, or exclude it before zipping.

2. **Upload to Cloudflare Pages**
   - Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Upload assets manually**
   - Select the zip file
   - Build command: *(leave empty — static site)*
   - Output directory: `./`
   - Click **Deploy site**

3. **Domain is already configured**
   - `zhengweireactor.com` is connected to this Cloudflare Pages project
   - SSL is automatic (set SSL/TLS mode to **Full** or **Full (strict)** in Cloudflare DNS settings)

4. **Submit sitemap**
   - Google Search Console: https://search.google.com/search-console → Add property → `https://zhengweireactor.com/` → Submit sitemap `https://zhengweireactor.com/sitemap.xml`
   - Bing Webmaster Tools: https://www.bing.com/webmasters → Add site → Submit sitemap

### Every Content Update

Repeat steps 1–2: re-zip the updated `F:\zw` folder and re-upload. Cloudflare replaces the previous version automatically.

---

## Before First Deploy (if not yet live)

### Contact Form Backend

The inquiry form at `reactor-inquiry-form.html` uses FormSubmit.co (free, no backend needed):
- Action URL: `https://formsubmit.co/zwxsb-1@whzhengweihj.com`
- No configuration needed — first submission will trigger a confirmation email

If using a custom backend later, update the form `action` attribute in both:
- `reactor-inquiry-form.html`
- `contact.html`

---

## Image Replacement Checklist

Replace placeholder images with real factory photos when available:

| Placeholder | Replace with |
|-------------|-------------|
| `images/hero.jpg` | Hero reactor photo (factory floor) |
| `images/prod-industrial.webp` | Industrial reactor photo |
| `images/prod-hydrogenation.webp` | Hydrogenation reactor photo |
| `images/prod-nonferrous.webp` | Hastelloy/titanium reactor photo |
| `images/prod-pilot.webp` | Pilot scale reactor photo |
| `images/prod-lab.webp` | Lab reactor photo |
| `images/prod-liftflip.webp` | Lift & flip reactor photo |
| `images/prod-system.webp` | Complete system photo |
| `images/prod-heatex.webp` | Heat exchanger photo |
| `images/prod-tank.webp` | Storage tank photo |
| `images/cases/case_*.jpg` | Actual case study photos |

Best practices:
- Minimum 800×600px
- Format: WebP preferred (smaller), JPEG acceptable
- Compress with TinyPNG before uploading

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Site shows 404 after deploy | Check output directory is set to `./` |
| Images not loading | Verify image paths are relative (e.g. `images/hero.jpg`, not `/images/hero.jpg`) |
| CSS not applying | Check `<link rel="stylesheet" href="css/style.css">` paths |
| Mobile menu not working | Check `<script src="js/main.js">` path at bottom of each page |
| Form submissions not received | Check spam folder; verify email in FormSubmit is confirmed |

---

## Related Files

- `README.md` — Site overview and file structure
- `CF_PAGES_SETUP.md` — Cloudflare Pages configuration reference
