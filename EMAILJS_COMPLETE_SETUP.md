# EmailJS Complete Setup Guide

Your contact form is now configured with EmailJS! Follow these steps to get email delivery working:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (up to 200 emails/month)
3. Verify your email address

## 2. Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (kasuniabeynayake01@gmail.com)
5. Note down the **Service ID** (should be something like `service_xxxxxxx`)

## 3. Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Portfolio Contact - {{subject}} From: {{from_name}}
({{from_email}}) Subject: {{subject}} Message: {{message}} --- This message was
sent from your portfolio website contact form. Reply directly to: {{from_email}}
```

4. Set these template variables:

   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `subject` - Message subject
   - `message` - Message content
   - `to_name` - Your name (Kasuni Abeynayake)
   - `to_email` - Your email (kasuniabeynayake01@gmail.com)

5. Note down the **Template ID** (should be something like `template_xxxxxxx`)

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (should be something like `iYmAMbb4RYE0YEVCH`)

## 5. Update Your Code

Replace the placeholder values in `Contact.tsx` with your actual EmailJS credentials:

```typescript
// Current placeholders in your code:
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

const response = await emailjs.send(
  "YOUR_SERVICE_ID", // Replace with your service ID
  "YOUR_TEMPLATE_ID", // Replace with your template ID
  templateParams
);
```

## 6. Test the Contact Form

1. Build and deploy your website:

   ```bash
   npm run build
   git add .
   git commit -m "Update EmailJS configuration"
   git push origin main
   ```

2. Wait for GitHub Actions to deploy (2-3 minutes)

3. Visit your portfolio and test the contact form

## Current Configuration

Your contact form is already set up with:

- ✅ EmailJS integration
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Fallback to email client if EmailJS fails
- ✅ Professional user experience

## Email Template Variables Used

The form sends these variables to your EmailJS template:

- `from_name` - Name from form
- `from_email` - Email from form
- `subject` - Subject from form
- `message` - Message from form
- `to_name` - "Kasuni Abeynayake"
- `to_email` - "kasuniabeynayake01@gmail.com"

## Troubleshooting

If emails aren't being delivered:

1. **Check EmailJS Dashboard**

   - Go to Logs section to see if requests are being received
   - Check for any error messages

2. **Gmail Settings**

   - Make sure your Gmail account allows less secure apps (if needed)
   - Check Gmail spam folder

3. **Browser Console**

   - Open Developer Tools and check for JavaScript errors
   - Look for EmailJS success/error messages

4. **Fallback Method**
   - If EmailJS fails, the form will open your default email client
   - This ensures users can always contact you

## Free Tier Limits

- 200 emails per month
- 2 email services
- 3 email templates
- Basic support

This should be sufficient for a portfolio website!

## Security Notes

- Your EmailJS public key can be visible in the frontend code (this is normal)
- EmailJS handles the secure transmission to your email
- No sensitive credentials are exposed in your repository

Once you complete the EmailJS setup, your contact form will send emails directly to kasuniabeynayake01@gmail.com!
