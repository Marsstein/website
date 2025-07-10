# EmailJS Setup Guide for Marsstein Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month limit)
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
You have a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Job Title: {{job_title}}
Number of Employees: {{employees}}
Newsletter Subscription: {{newsletter}}

Message:
{{message}}

---
This email was sent from your Marsstein contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## Step 5: Update Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email for the submission

## Troubleshooting
- Make sure your .env.local file is in the project root
- Restart your dev server after updating environment variables
- Check the browser console for any error messages
- Verify your EmailJS service is properly configured and active

## Alternative Free Services
If you prefer other options:
- **Formspree** (https://formspree.io/) - 50 submissions/month free
- **Netlify Forms** - If hosting on Netlify
- **Vercel Contact Forms** - If hosting on Vercel

The current implementation uses EmailJS as it's the easiest to set up and integrate with React.

---

# 🚀 Deployment to Vercel with Custom Domain (marsstein.com)

## Step 7: Deploy to Vercel (FREE)

### Option A: Deploy via Vercel CLI (Recommended)
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your app:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Choose "yes" to deploy
   - Select your account/team
   - Project name: `marsstein`
   - Set build command: `npm run build`
   - Set output directory: `dist`

### Option B: Deploy via GitHub (Alternative)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel will auto-detect Vite settings
7. Click "Deploy"

## Step 8: Configure Environment Variables on Vercel
1. In your Vercel dashboard, go to your project
2. Go to "Settings" > "Environment Variables"
3. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID = your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID = your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY = your_actual_public_key
   ```
4. Redeploy your app after adding environment variables

## Step 9: Connect Your Google Domain (marsstein.com)

### Configure DNS in Google Domains:
1. Go to [domains.google.com](https://domains.google.com)
2. Select your `marsstein.com` domain
3. Go to "DNS" tab
4. Add these DNS records:

**For root domain (marsstein.com):**
- Type: `A`
- Name: `@`
- Data: `76.76.19.19`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Data: `cname.vercel-dns.com`

### Configure Domain in Vercel:
1. In your Vercel project dashboard
2. Go to "Settings" > "Domains"
3. Add domain: `marsstein.com`
4. Add domain: `www.marsstein.com`
5. Vercel will provide verification instructions
6. Wait for DNS propagation (5-30 minutes)

## Step 10: SSL Certificate (Automatic)
- Vercel automatically provides free SSL certificates
- Your site will be available at `https://marsstein.com`
- SSL certificate renews automatically

## Step 11: Final Testing
1. Visit `https://marsstein.com`
2. Test the contact form
3. Verify emails are received
4. Check that all pages work correctly

## 📋 Quick Deployment Checklist
- [ ] Code pushed to repository
- [ ] EmailJS configured and tested locally
- [ ] Deployed to Vercel
- [ ] Environment variables added to Vercel
- [ ] DNS records configured in Google Domains
- [ ] Custom domain added in Vercel
- [ ] SSL certificate active
- [ ] Contact form tested on live site

## 💡 Pro Tips
- **Automatic Deployments**: Connect GitHub for automatic deployments on code push
- **Preview Deployments**: Vercel creates preview URLs for each commit
- **Analytics**: Enable Vercel Analytics for free traffic insights
- **Performance**: Vercel automatically optimizes your static site

## 🆓 What's Free on Vercel
- Unlimited static sites
- Automatic SSL certificates
- Global CDN
- Custom domains
- 100GB bandwidth/month
- Automatic deployments from Git

Your Marsstein website will be live at `https://marsstein.com` with professional email contact form integration!
