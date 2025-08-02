# Email Setup Guide for Contact Form

## Step 1: Install EmailJS
```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Create a new service (Gmail recommended)
4. Create an email template

## Step 3: Configure EmailJS Template
Create a template with these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name
- `{{phone}}` - Phone number
- `{{service}}` - Selected service
- `{{message}}` - Message content
- `{{to_email}}` - Your email (mohanmamidala2004@gmail.com)

## Step 4: Update ContactUs.js
Replace these placeholders in the code:
- `YOUR_SERVICE_ID` - Your EmailJS service ID
- `YOUR_TEMPLATE_ID` - Your EmailJS template ID  
- `YOUR_PUBLIC_KEY` - Your EmailJS public key

## Step 5: Initialize EmailJS (Optional)
Add this to your main App.js or index.js:
```javascript
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY');
```

## Example Template Content:
```
Subject: New Contact Form Submission - WareTech

Hello,

You have received a new message from your WareTech website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service Interested: {{service}}

Message:
{{message}}

---
This message was sent from the WareTech contact form.
```