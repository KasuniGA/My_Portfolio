# 📧 EmailJS Setup Guide

## Current Status

The contact form is now configured with a **fallback method** that works on GitHub Pages without requiring EmailJS configuration. When visitors submit the form, it will open their default email client with the message pre-filled.

## How It Works Now

1. User fills out the contact form
2. Clicks "Send Message"
3. Their email client opens with a pre-filled message
4. They can send the email directly from their email client

## Optional: Setting Up EmailJS for Direct Form Submission

If you want to enable direct form submission without opening an email client, you can set up EmailJS:

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Verify your email address

### Step 2: Create an Email Service

1. Go to the "Email Services" tab
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create an Email Template

1. Go to the "Email Templates" tab
2. Click "Create New Template"
3. Design your template with these variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{subject}}` - email subject
   - `{{message}}` - email message
   - `{{to_name}}` - your name
4. Note down your **Template ID**

### Step 4: Get Your Public Key

1. Go to the "Account" tab
2. Find your **Public Key**

### Step 5: Configure Environment Variables

Create a `.env` file in your project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 6: Update GitHub Actions (Optional)

If you want EmailJS to work on GitHub Pages, you'll need to add these as GitHub repository secrets and modify the build process.

## Benefits of Current Setup

✅ **Works immediately** - no configuration needed
✅ **No API limits** - no rate limiting issues
✅ **Universal compatibility** - works on any device with email client
✅ **No dependencies** - no external service dependencies
✅ **Privacy friendly** - no data sent to third parties

## Benefits of EmailJS Setup

✅ **Direct submission** - no email client needed
✅ **Better user experience** - stays on your website
✅ **Automatic responses** - can send confirmation emails
✅ **Form validation** - server-side validation

## Recommendation

The current fallback method is perfect for a portfolio website on GitHub Pages. Most visitors will have an email client configured, and this method ensures 100% delivery without any configuration complexity.

You can always add EmailJS later if needed!
