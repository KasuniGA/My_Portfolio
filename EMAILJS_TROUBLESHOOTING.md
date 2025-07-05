# EmailJS Troubleshooting Guide

## Common Issues and Solutions

### 1. EmailJSResponseStatus Error

This error typically occurs when there's a configuration issue with your EmailJS setup.

**Possible causes:**

- Incorrect template ID
- Missing template variables
- Service not properly configured
- Public key issues

**Solutions:**

1. **Check Template Variables**: Ensure your EmailJS template includes these variables:

   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_name}}`

2. **Verify Template ID**: Make sure the template ID in your `.env` file matches the one in your EmailJS dashboard.

3. **Check Service Configuration**: Ensure your email service is properly connected and active.

### 2. Template Configuration

Your EmailJS template should look like this:

**Subject:** `New Contact Form Message: {{subject}}`

**Content:**

```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

### 3. Service Settings

1. Go to your EmailJS dashboard
2. Click on "Email Services"
3. Ensure your service is connected and shows a green checkmark
4. Test the service connection

### 4. Public Key Issues

1. Go to "Account" in your EmailJS dashboard
2. Copy the "Public Key" (not the private key)
3. Update your `.env` file with the correct public key

### 5. Rate Limiting

EmailJS free plan has limits:

- 200 emails per month
- Rate limiting may apply

### 6. CORS Issues

If you're getting CORS errors, ensure:

- Your domain is whitelisted in EmailJS settings
- You're using the correct public key

## Testing Steps

1. **Check Console**: Look for detailed error messages in the browser console
2. **Test Template**: Use EmailJS dashboard to test your template
3. **Verify Variables**: Ensure all template variables are correctly named
4. **Check Service**: Test your email service connection

## Environment Variables Checklist

Ensure your `client/.env` file contains:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## Still Having Issues?

1. Check the browser console for detailed error messages
2. Test your EmailJS configuration directly in the dashboard
3. Verify your email service is working
4. Check if you've exceeded your EmailJS plan limits
