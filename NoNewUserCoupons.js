// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Not this time, Ali! I ain't want none of your coupons!
// @author       G.S. Fordham
// @match        https://www.aliexpress.com/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
		 setInterval(
			 (()=>{
				 //console.log("Checking"); //Debug check
				 //These elements are the new user coupon overlays (as of 2018-Dec-21)
				 document.querySelectorAll("[data-widget-cid='widget-1'],[class*='newuser-']").
				 //Delete each one
				 forEach((x)=>
				 {x.parentNode.removeChild(x);});
				 //console.log("Deleted.") //Debug check
			 }),
			 1000);
})();