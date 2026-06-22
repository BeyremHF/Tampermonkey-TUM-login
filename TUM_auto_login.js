// ==UserScript==
// @name         TUM Auto Login
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Auto-fills TUM login credentials
// @match        https://login.tum.de/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function login() {
        const userField = document.getElementById('username');
        const passField = document.getElementById('password');
        const btnLogin = document.getElementById('btnLogin');
        const keepLoggedIn = document.getElementById('donotcache-dummy');

        if (!userField || !passField || !btnLogin) return false;

        userField.value = 'go67abc';  // Put your TUM username here
        passField.value = 'your_password';  // Put your TUM password here

        userField.dispatchEvent(new Event('input', { bubbles: true }));
        passField.dispatchEvent(new Event('input', { bubbles: true }));

        if (keepLoggedIn && !keepLoggedIn.checked) {  // This will automatically press on the "keep me logged in" button. 
            keepLoggedIn.click();
        }

        btnLogin.click();
        return true;
    }

    // Keep trying every 200ms until elements exist
    const interval = setInterval(() => {
        if (login()) clearInterval(interval);
    }, 100);

    // Give up after 10 seconds
    setTimeout(() => clearInterval(interval), 10000);
})();
