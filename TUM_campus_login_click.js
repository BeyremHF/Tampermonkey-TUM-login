// ==UserScript==
// @name         TUM Campus Login Click
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-clicks Login on TUM Campus
// @match        https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const interval = setInterval(() => {
        const loginBtn = document.querySelector('span.co-navbar-menu-login-text');
        if (loginBtn) {
            clearInterval(interval);
            loginBtn.click();
        }
    }, 300);

    setTimeout(() => clearInterval(interval), 10000);
})();
