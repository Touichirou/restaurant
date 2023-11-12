(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),c=t.n(o),r=t(645),a=t.n(r),d=t(667),i=t.n(d),p=new URL(t(122),t.b),s=a()(c()),l=i()(p);s.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    }\n\n.card {\n  height: 100px;\n  width: 100px;\n}\n\n#logo {\n  height: auto;\n  width: 250px;\n}\n\n#header,\n#footer {\n  width: 100%;\n  height: 10vh;\n  background-color: whitesmoke;\n  opacity: 0.9;\n}  \n\n#home,\n#menu,\n#contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.5em;\n  width: 10%;\n  min-width: 100px;\n  background-color: pink;\n  color: whitesmoke;\n  font-weight: bold;\n  cursor: pointer;\n  height: 100%;\n  border-radius: 5px;\n}\n\n#contentbodyhome,\n#contentbodymenu,\n#contentbodycontact {\n  width: clamp(300px, 50%, 800px);\n  /* height: fit-content; */\n  background-color: pink;\n  color: whitesmoke;\n  /* opacity: 0.9; */\n  font-weight: bold;\n  display: grid;\n  grid-column: 1fr;\n  place-items: center;\n  font-size: 16px;\n}\n\n#contentbodymenu {\n  grid-template-columns: 1fr 1fr;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n    min-height: 100vh;\n    background-image: url(${l});\n    background-size: cover;\n  }\n\n  #content {\n    display: grid;\n    grid-template-rows: 1fr auto;\n    justify-items: center;\n    height: 100vh;\n    gap: 15px;\n  }\n\n  #header {\n    width: 100vw;\n    grid-row-start: 0;\n    grid-row-end: 1;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n    padding-top: 5px;\n  }\n  \n  #footer {\n    width: 100vw;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\nh1 {\n    color: whitesmoke;\n  }\n\nimg {\n  width: 100px;\n  height: auto;\n}\n\n.card {\n  opacity: 0.9;\n  min-height: 150px;\n  color: black;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 2.5px;\n  margin-right: 2.5px;\n  width: 90%;\n  background-color: whitesmoke;\n  opacity: 0.75;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n@media only screen and (max-width: 768px) {\n  #contentbodymenu {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n`,""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,c,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(a[i]=!0)}for(var p=0;p<e.length;p++){var s=[].concat(e[p]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),c&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=c):s[4]="".concat(c)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},a=[],d=0;d<e.length;d++){var i=e[d],p=o.base?i[0]+o.base:i[0],s=r[p]||0,l="".concat(p," ").concat(s);r[p]=s+1;var u=t(l),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=c(m,o);o.byIndex=d,n.splice(d,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function c(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,c){var r=o(e=e||[],c=c||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=t(r[a]);n[d].references--}for(var i=o(e,c),p=0;p<r.length;p++){var s=t(r[p]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=i}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var c=void 0!==t.layer;c&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,c&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},122:(e,n,t)=>{e.exports=t.p+"b5ea99afef15d93a4f03.jpg"}},n={};function t(o){var c=n[o];if(void 0!==c)return c.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&!e;)e=o[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),c=t.n(o),r=t(569),a=t.n(r),d=t(565),i=t.n(d),p=t(216),s=t.n(p),l=t(589),u=t.n(l),m=t(426),h={};h.styleTagTransform=u(),h.setAttributes=i(),h.insert=a().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=s(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=t.p+"d1241e37f8925a8bc8f1.png";function g(){const e=document.createElement("h1"),n=document.createTextNode("Krispy Dream"),t=document.createElement("div");t.id="contentbodyhome",t.className="contentbody";const o=new Image;o.src=f,o.id="logo";const c=document.createElement("p"),r=document.createTextNode("Warm, fluffy, freshly-baked doughnuts.");c.append(r),e.appendChild(n),content.appendChild(t),t.appendChild(e),t.appendChild(o),t.appendChild(c)}const v=t.p+"6e28d6e8a3906572c44a.png",y=t.p+"22fd4043df24e8a81225.png",b=t.p+"65e1a882fc4e75922ddf.png",x=t.p+"bb04722d7527ac699dfd.png",w=t.p+"c19a217036b24ced82fe.png",C=t.p+"5e4be8a0f49d2ca40e84.png",E=t.p+"d717ef5e1d2ef69e6d57.png",N=t.p+"f9c1816311d235445a88.png";!function(){const e=document.getElementById("content"),n=document.createElement("header");n.id="header";const t=document.createElement("div");t.id="home";const o=document.createTextNode("Home");t.appendChild(o);const c=document.createElement("div");c.id="menu";const r=document.createTextNode("Menu");c.appendChild(r);const a=document.createElement("div");a.id="contact";const d=document.createTextNode("Contact");a.appendChild(d);const i=document.createElement("footer");i.id="footer";const p=document.createTextNode("This hideous website was created by Horatio Caine in order to practice using webpack.");i.appendChild(p),n.appendChild(t),n.appendChild(c),n.appendChild(a),e.appendChild(n),e.appendChild(i)}(),g(),document.getElementById("home").addEventListener("click",(function(){document.querySelector(".contentbody").remove(),g()})),document.getElementById("menu").addEventListener("click",(function(){const e=document.getElementById("content");document.querySelector(".contentbody").remove();const n=document.createElement("div");n.id="contentbodymenu",n.className="contentbody";const t=document.createElement("div"),o=document.createElement("div"),c=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),p=document.createElement("div");t.className="card",o.className="card",c.className="card",r.className="card",a.className="card",d.className="card",i.className="card",p.className="card";const s=document.createTextNode("Caramel Dream"),l=document.createTextNode("Almond and White Chocolate"),u=document.createTextNode("Glazed"),m=document.createTextNode("Honey Glazed"),h=document.createTextNode("Iced"),f=document.createTextNode("Sprinkles"),g=document.createTextNode("Strawberry"),T=document.createTextNode("Sugar"),I=new Image;I.src=v;const k=new Image;k.src=y;const S=new Image;S.src=b;const j=new Image;j.src=x;const M=new Image;M.src=w;const A=new Image;A.src=C;const B=new Image;B.src=E;const L=new Image;L.src=N,t.appendChild(s),t.appendChild(I),o.appendChild(l),o.appendChild(k),c.appendChild(u),c.appendChild(S),r.appendChild(m),r.appendChild(j),a.appendChild(h),a.appendChild(M),d.appendChild(f),d.appendChild(A),i.appendChild(g),i.appendChild(B),p.appendChild(T),p.appendChild(L),n.appendChild(t),n.appendChild(o),n.appendChild(c),n.appendChild(r),n.appendChild(a),n.appendChild(d),n.appendChild(i),n.appendChild(p),e.appendChild(n)})),document.getElementById("contact").addEventListener("click",(function(){const e=document.getElementById("content");document.querySelector(".contentbody").remove();const n=document.createElement("div");n.id="contentbodycontact",n.className="contentbody",e.appendChild(n);const t=document.createElement("h2"),o=document.createTextNode("13 Griffiths Place");t.appendChild(o);const c=document.createElement("h2"),r=document.createTextNode("012-345-6789");c.appendChild(r);const a=document.createElement("h2"),d=document.createTextNode("0700-2200 Mon-Sun");a.appendChild(d),n.appendChild(t),n.appendChild(c),n.appendChild(a)}))})()})();