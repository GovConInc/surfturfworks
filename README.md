# Surf & Turf LLC Website

Professional pool maintenance and landscaping services website for West Central Florida.

**Live Domain:** surfturfworks.com

## Project Structure

```
surfturfworks/
├── index.html          # Home/Services page
├── about.html          # About Us page  
├── contact.html        # Contact/Quote request page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/
│   ├── logo.png        # Company logo (PNG)
│   ├── logo.svg        # Company logo (SVG)
│   ├── pool-water.jpg
│   ├── pool-robot.jpg
│   ├── pool-equipment.jpg
│   ├── pool-enclosed.webp
│   ├── property-front.webp
│   ├── property-aerial.webp
│   ├── property-back.webp
│   ├── house-front.jpg
│   ├── florida-home.jpg
│   ├── mansion.jpg
│   └── hands-care.jpg
└── README.md           # This file
```

## Deployment to Cloudflare Pages via GitHub

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the **+** icon in the top right → **New repository**
3. Repository name: `surfturfworks` (or your preferred name)
4. Set to **Public** or **Private** (either works with Cloudflare)
5. **Do NOT** initialize with README (we have our own)
6. Click **Create repository**

### Step 2: Upload Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click **uploading an existing file**
2. Drag and drop the entire contents of the `surfturfworks` folder
3. Add commit message: "Initial website upload"
4. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to the project folder
cd surfturfworks

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial website upload"

# Add your GitHub repository as remote (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/surfturfworks.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Sign in or create a free account
3. In the left sidebar, click **Workers & Pages**
4. Click **Create application** → **Pages** tab → **Connect to Git**
5. If this is your first time, click **Connect GitHub** and authorize Cloudflare
6. Select your `surfturfworks` repository
7. Click **Begin setup**

### Step 4: Configure Build Settings

On the configuration page:

- **Project name:** `surfturfworks` (this becomes your *.pages.dev subdomain)
- **Production branch:** `main`
- **Framework preset:** `None`
- **Build command:** Leave empty (static site, no build needed)
- **Build output directory:** `/` (root directory)

Click **Save and Deploy**

### Step 5: Wait for Deployment

Cloudflare will deploy your site. This takes 1-2 minutes. Once complete, you'll see:
- A success message
- Your site URL: `surfturfworks.pages.dev`

### Step 6: Add Custom Domain (surfturfworks.com)

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `surfturfworks.com`
4. Click **Continue**

**If your domain is already on Cloudflare:**
- Cloudflare will automatically configure DNS
- Click **Activate domain**

**If your domain is NOT on Cloudflare:**
- Cloudflare will show you DNS records to add
- Add a CNAME record: `@` → `surfturfworks.pages.dev`
- Or follow Cloudflare's instructions to transfer DNS

5. Also add `www.surfturfworks.com` and set up a redirect:
   - Add custom domain: `www.surfturfworks.com`
   - In **Redirects**, set www to redirect to non-www (or vice versa)

### Step 7: Enable HTTPS

Cloudflare Pages automatically provides free SSL/HTTPS. No action needed—your site will be secure.

---

## Making Updates

### To update the website:

1. Edit files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Cloudflare Pages automatically rebuilds and deploys within minutes

### To update via GitHub web interface:

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click **Commit changes**
6. Cloudflare auto-deploys

---

## Contact Form Setup

The contact form currently has client-side validation only. To receive form submissions, you have several options:

### Option 1: Cloudflare Forms (Recommended)
Cloudflare Pages supports form submissions natively. Update the form action:
```html
<form action="/contact" method="POST" data-static-form-name="contact">
```

### Option 2: Third-Party Form Services
- [Formspree](https://formspree.io) - Update action to your Formspree URL
- [Netlify Forms](https://netlify.com/products/forms/) - If migrating to Netlify
- [Basin](https://usebasin.com) - Simple form backend

### Option 3: Email Service
Integrate with services like:
- EmailJS
- SendGrid
- Mailgun

---

## Technical Notes

- **No build process required** - Pure HTML/CSS/JS static site
- **Mobile responsive** - Works on all device sizes
- **SEO optimized** - Meta tags, semantic HTML, fast loading
- **Fonts** - Google Fonts (Playfair Display, Source Sans Pro)
- **Images** - Mix of JPG and WebP for compatibility and performance

---

## File Checklist

Before deploying, ensure all these files are present:

- [ ] `index.html`
- [ ] `about.html`
- [ ] `contact.html`
- [ ] `css/styles.css`
- [ ] `js/main.js`
- [ ] `images/logo.png`
- [ ] `images/logo.svg`
- [ ] All other images in `/images/`

---

## Support

For website updates or technical issues, contact the developer.

For business inquiries: info@surfturfworks.com
