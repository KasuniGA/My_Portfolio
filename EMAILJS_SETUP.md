# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS. Follow these steps:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

Hello Kasuni,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)

## 5. Update Environment Variables

Create or update the `.env` file in the `client` directory (not the root directory) with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** The `.env` file must be in the `client` folder because that's where Vite looks for environment variables due to the project structure.

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email for the message

## Template Parameters Used

The contact form sends these parameters to EmailJS:

- `from_name`: The sender's name
- `from_email`: The sender's email address
- `subject`: The message subject
- `message`: The message content
- `to_name`: Set to "Kasuni Abeynayake"

## Security Note

- Never commit your actual EmailJS credentials to version control
- The `.env` file is already in `.gitignore`
- For production deployment, set these environment variables in your hosting platform's dashboard

## EmailJS Free Plan Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Limited to 50kb per email

If you need more, consider upgrading to a paid plan.
