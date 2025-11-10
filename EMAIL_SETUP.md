# Google Sheets Waitlist Setup

This website uses Google Apps Script to add waitlist signups directly to a Google Sheet.

## How It Works

When someone submits their email on the waitlist form, it sends a POST request to a Google Apps Script web app URL, which then adds the email to your Google Sheet.

## Configuration

The Google Apps Script URL is already configured in the code. If you need to change it, you can:

1. Create a `.env` file in the root directory:

   ```env
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

2. Or update it directly in `src/pages/Home.jsx` in the `handleEmailSubmit` function.

## Default URL

The default Google Apps Script URL is:

```
https://script.google.com/macros/s/AKfycbzkhUiQC5u_X6fjOF7QSM3SPzFyDVl8ApTgQM8xLPFIlZDqGldH0zM3lbhyo_Bt-OBJdQ/exec
```

## Testing

1. Fill out the waitlist form on your website
2. Submit the form
3. Check your Google Sheet to verify the email was added

## Troubleshooting

- **Emails not being added to the sheet?**

  - Check the browser console for error messages
  - Verify the Google Apps Script URL is correct
  - Make sure your Google Apps Script is deployed as a web app and has the correct permissions

- **CORS errors?**
  - Make sure your Google Apps Script is deployed with "Execute as: Me" and "Who has access: Anyone"
