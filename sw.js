if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>a(e,c),f={module:{uri:c},exports:r,require:t};s[c]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-f2c3e2b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/images/apple-touch-icon.png",revision:"b7b13e858b6a95ff4bcb03556df14acb"},{url:"assets/images/avatar_circle.png",revision:"a05192784739abfb302f311b354d7d7d"},{url:"assets/images/avatar.svg",revision:"551cb6ef3de352fd4ab5eaf2a4f590fc"},{url:"assets/images/favicon-32x32.png",revision:"5bda7f01f9532326fbdc4966e4ea48f8"},{url:"assets/images/favicon-96x96.png",revision:"7da2a326ae1645c66aaf82ec121363e0"},{url:"assets/images/og-image.en_US.png",revision:"0ab85ab6a61375deb88d9c7e7bf8732b"},{url:"assets/js/main.js",revision:"0f95639cdaaf61ac88d9a5a9386cbcdc"},{url:"assets/stylesheets/base.css",revision:"3ae163d529fa999a22b7b6edaf8e76da"},{url:"assets/stylesheets/layout.css",revision:"d151072e1f3358ffcdd264f0b9f71bbc"},{url:"assets/stylesheets/variables.css",revision:"5607cea554901b87520f0dbfd409a3f9"},{url:"favicon.ico",revision:"556474e59b4b478f185553e7a722e87d"},{url:"index.html",revision:"92bef6d3797c0af3ed00ed4f09699075"},{url:"manifest.json",revision:"c9c26a5ca3dc4dfd97bdbae47614c5d1"}],{}),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\.(?:css|js)$/,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:604800})]}),"GET")}));
//# sourceMappingURL=sw.js.map
