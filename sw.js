if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const t=e=>a(e,n),f={module:{uri:n},exports:o,require:t};s[n]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-89a5cbf1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/apple-touch-icon.png",revision:"b7b13e858b6a95ff4bcb03556df14acb"},{url:"assets/images/avatar_circle.png",revision:"a05192784739abfb302f311b354d7d7d"},{url:"assets/images/avatar.svg",revision:"551cb6ef3de352fd4ab5eaf2a4f590fc"},{url:"assets/images/favicon-32x32.png",revision:"5bda7f01f9532326fbdc4966e4ea48f8"},{url:"assets/images/favicon-96x96.png",revision:"7da2a326ae1645c66aaf82ec121363e0"},{url:"assets/images/og-image.en_US.png",revision:"2900a75477bc9e13e2748b97f2feff80"},{url:"assets/stylesheets/base.css",revision:"3ae163d529fa999a22b7b6edaf8e76da"},{url:"favicon.ico",revision:"556474e59b4b478f185553e7a722e87d"},{url:"index.html",revision:"a214c14019d71aacd35aee986cc9a517"}],{})}));
//# sourceMappingURL=sw.js.map
