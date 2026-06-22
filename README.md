# Tampermonkey TUM Auto Login

A set of Tampermonkey userscripts that fully automate the TUM login flow — from the portal landing page all the way through SSO authentication.

## What it does

The scripts chain together to handle the full login sequence automatically:

1. **`TUM_Moodle_SSO_click.js`** — on `moodle.tum.de/login`, clicks the TUM LOGIN button
2. **`TUM_Online_SSO_click.js`** — on `campus.tum.de/tumonline`, clicks the TUM Login SSO button
3. **`TUM_campus_login_click.js`** — on `campus.tum.de/tumonline/ee/...`, clicks the Login button in the navbar
4. **`TUM_auto_login.js`** — on `login.tum.de`, fills in your credentials and submits the form

## Requirements

- [Tampermonkey](https://www.tampermonkey.net/) installed in your browser
  - Chrome, Edge, Brave, Firefox, Opera: available via their respective extension stores
  - Safari (iOS/macOS): available on the App Store
  - Firefox for Android: the only mobile browser that supports Tampermonkey

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser
2. **Allow Tampermonkey to execute userscripts** — this is a required step that is easy to miss, and without it scripts will be installed but silently do nothing:
   - Go to your browser's extension settings
   - Find Tampermonkey → click **Details**
   - Enable **"Allow User Scripts"**
3. Open the Tampermonkey dashboard → click **Create a new script**
4. For each `.user.js` file in this repo:
   - Copy the contents
   - Paste into a new Tampermonkey script
   - Replace `YOUR_LRZ_ID` and `YOUR_PASSWORD` with your actual credentials
   - Save (Ctrl+S)
5. Make sure all scripts are **enabled** in the Tampermonkey dashboard

## Which scripts do you need?

You do not have to install all four scripts. Install only what matches your use case:

| Goal | Scripts needed |
|------|---------------|
| Full automation (Moodle → TUM SSO → login) | All four |
| Only auto-login on `login.tum.de` | `TUM_auto_login.js` only |
| Moodle automation | `TUM_Moodle_SSO_click.js` + `TUM_auto_login.js` |
| TUMonline automation | `TUM_Online_SSO_click.js` + `TUM_campus_login_click.js` + `TUM_auto_login.js` |


## Security note

Your credentials are stored in plain text inside Tampermonkey's local script storage. They are never transmitted anywhere other than the TUM login page itself. Avoid using this on shared or public computers.
