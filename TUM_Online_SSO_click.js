// ==UserScript==
// @name         TUM Online SSO Click
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-clicks TUM Login on tumonline
// @match        https://campus.tum.de/tumonline/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const interval = setInterval(() => {
        const tumLogin = document.getElementById('social-tumidpoidc');
        if (tumLogin) {
            clearInterval(interval);
            tumLogin.click();
        }
    }, 300);

    setTimeout(() => clearInterval(interval), 10000);
})();
