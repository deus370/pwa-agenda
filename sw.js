if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const c=e=>i(e,o),f={module:{uri:o},exports:t,require:c};s[o]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-f79792c9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/style.css",revision:"025d47e182f8ea4653187dd47b2bba2c"},{url:"images/icono-512.png",revision:"9fe8b9fe5b90aad0cc5ab25b2349187c"},{url:"index.html",revision:"7472e4590c4c073970df32e9bbf3ffa9"},{url:"js/main.js",revision:"9056ab2025909a1cbb09ab16cdfae1d0"},{url:"manifest.json",revision:"45c5417f983906e5444ee78d80fb1286"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
