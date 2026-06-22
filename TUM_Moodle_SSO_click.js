// ==UserScript==
// @name         TUM Moodle SSO Click
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto-clicks TUM LOGIN on Moodle
// @match        https://www.moodle.tum.de/login/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const tumLogin = document.querySelector('a[title="TUM LOGIN"]');
    if (tumLogin) tumLogin.click();
})();
