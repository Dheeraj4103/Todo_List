(()=>{var t={264:t=>{!function(t,e,n,r,o){if("customElements"in n)o();else{if(n.AWAITING_WEB_COMPONENTS_POLYFILL)return void n.AWAITING_WEB_COMPONENTS_POLYFILL.then(o);var a=n.AWAITING_WEB_COMPONENTS_POLYFILL=c();a.then(o);var i=n.WEB_COMPONENTS_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",s=n.ES6_CORE_POLYFILL||"//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";"Promise"in n?l(i).then((function(){a.isDone=!0,a.exec()})):l(s).then((function(){l(i).then((function(){a.isDone=!0,a.exec()}))}))}function c(){var t=[];return t.isDone=!1,t.exec=function(){t.splice(0).forEach((function(t){t()}))},t.then=function(e){return t.isDone?e():t.push(e),t},t}function l(t){var e=c(),n=r.createElement("script");return n.type="text/javascript",n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,e.isDone=!0,e.exec())}:n.onload=function(){e.isDone=!0,e.exec()},n.src=t,r.getElementsByTagName("head")[0].appendChild(n),n.then=e.then,n}}(0,0,window,document,(function(){var e;window,e=function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n,r=t[1]||"",o=t[3];if(!o)return r;if(e&&"function"==typeof btoa){var a=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[r].concat(i).concat([a]).join("\n")}return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r=n(3);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){var r=n(4);t.exports="string"==typeof r?r:r.toString()},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}",""])},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,'.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}',""])},function(t,e,n){"use strict";n.r(e),n.d(e,"BoxIconElement",(function(){return g}));var r,o,a,i,s=n(1),c=n.n(s),l=n(2),f=n.n(l),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),p=(o=(r=Object).getPrototypeOf||function(t){return t.__proto__},a=r.setPrototypeOf||function(t,e){return t.__proto__=e,t},i="object"===("undefined"==typeof Reflect?"undefined":d(Reflect))?Reflect.construct:function(t,e,n){var r,o=[null];return o.push.apply(o,e),r=t.bind.apply(t,o),a(new r,n.prototype)},function(t){var e=o(t);return a(t,a((function(){return i(e,arguments,o(this).constructor)}),e))}),m=window,b={},h=document.createElement("template"),y=function(){return!!m.ShadyCSS};h.innerHTML='\n<style>\n:host {\n  display: inline-block;\n  font-size: initial;\n  box-sizing: border-box;\n  width: 24px;\n  height: 24px;\n}\n:host([size=xs]) {\n    width: 0.8rem;\n    height: 0.8rem;\n}\n:host([size=sm]) {\n    width: 1.55rem;\n    height: 1.55rem;\n}\n:host([size=md]) {\n    width: 2.25rem;\n    height: 2.25rem;\n}\n:host([size=lg]) {\n    width: 3.0rem;\n    height: 3.0rem;\n}\n\n:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {\n    width: auto;\n    height: auto;\n}\n:host([pull=left]) #icon {\n    float: left;\n    margin-right: .3em!important;\n}\n:host([pull=right]) #icon {\n    float: right;\n    margin-left: .3em!important;\n}\n:host([border=square]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: .25em;\n}\n:host([border=circle]) #icon {\n    padding: .25em;\n    border: .07em solid rgba(0,0,0,.1);\n    border-radius: 50%;\n}\n#icon,\nsvg {\n  width: 100%;\n  height: 100%;\n}\n#icon {\n    box-sizing: border-box;\n} \n'+c.a+"\n"+f.a+'\n</style>\n<div id="icon"></div>';var g=p(function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.$ui=t.attachShadow({mode:"open"}),t.$ui.appendChild(t.ownerDocument.importNode(h.content,!0)),y()&&m.ShadyCSS.styleElement(t),t._state={$iconHolder:t.$ui.getElementById("icon"),type:t.getAttribute("type")},t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,HTMLElement),u(e,null,[{key:"getIconSvg",value:function(t,e){var n=this.cdnUrl+"/regular/bx-"+t+".svg";return"solid"===e?n=this.cdnUrl+"/solid/bxs-"+t+".svg":"logo"===e&&(n=this.cdnUrl+"/logos/bxl-"+t+".svg"),n&&b[n]||(b[n]=new Promise((function(t,e){var r=new XMLHttpRequest;r.addEventListener("load",(function(){this.status<200||this.status>=300?e(new Error(this.status+" "+this.responseText)):t(this.responseText)})),r.onerror=e,r.onabort=e,r.open("GET",n),r.send()}))),b[n]}},{key:"define",value:function(t){t=t||this.tagName,y()&&m.ShadyCSS.prepareTemplate(h,t),customElements.define(t,this)}},{key:"cdnUrl",get:function(){return"//unpkg.com/boxicons@2.1.2/svg"}},{key:"tagName",get:function(){return"box-icon"}},{key:"observedAttributes",get:function(){return["type","name","color","size","rotate","flip","animation","border","pull"]}}]),u(e,[{key:"attributeChangedCallback",value:function(t,e,n){var r=this._state.$iconHolder;switch(t){case"type":!function(t,e,n){var r=t._state;r.$iconHolder.textContent="",r.type&&(r.type=null),r.type=!n||"solid"!==n&&"logo"!==n?"regular":n,void 0!==r.currentName&&t.constructor.getIconSvg(r.currentName,r.type).then((function(t){r.type===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+r.currentName+"\n"+t)}))}(this,0,n);break;case"name":!function(t,e,n){var r=t._state;r.currentName=n,r.$iconHolder.textContent="",n&&void 0!==r.type&&t.constructor.getIconSvg(n,r.type).then((function(t){r.currentName===n&&(r.$iconHolder.innerHTML=t)})).catch((function(t){console.error("Failed to load icon: "+n+"\n"+t)}))}(this,0,n);break;case"color":r.style.fill=n||"";break;case"size":!function(t,e,n){var r=t._state;r.size&&(r.$iconHolder.style.width=r.$iconHolder.style.height="",r.size=r.sizeType=null),n&&!/^(xs|sm|md|lg)$/.test(r.size)&&(r.size=n.trim(),r.$iconHolder.style.width=r.$iconHolder.style.height=r.size)}(this,0,n);break;case"rotate":e&&r.classList.remove("bx-rotate-"+e),n&&r.classList.add("bx-rotate-"+n);break;case"flip":e&&r.classList.remove("bx-flip-"+e),n&&r.classList.add("bx-flip-"+n);break;case"animation":e&&r.classList.remove("bx-"+e),n&&r.classList.add("bx-"+n)}}},{key:"connectedCallback",value:function(){y()&&m.ShadyCSS.styleElement(this)}}]),e}());e.default=g,g.define()}])},t.exports=e()}))},424:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100&display=swap);"]),i.push([t.id,"body {\r\n    font-family: 'JetBrains Mono', monospace;\r\n    background-color: rgb(253, 238, 220);\r\n    display: flex;\r\n}\r\n\r\ndiv#side-bar {\r\n    /* border: 2px solid black; */\r\n    width: 15.625em;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    /* justify-content: center; */\r\n    position: absolute;\r\n    /* top: 0; */\r\n    /* left: 0; */\r\n    padding: 20px 15px;\r\n    /* background-color: rgb(163, 162, 162);\r\n     */\r\n     background-color: #F2D388;\r\n    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);\r\n    border-radius: 10px;\r\n}\r\n\r\ndiv#side-bar div#title {\r\n    border-bottom: 2px solid black;\r\n}\r\n\r\ndiv#side-bar div#contents {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.projects {\r\n    /* border: 2px solid green; */\r\n    /* background-color: #100720; */\r\n    background-color: #C98474;\r\n    border: none;\r\n    margin: 10px 0;\r\n    font-size: 1.5em;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding: 10px auto;\r\n    flex: 0 0 5%;\r\n    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);\r\n    color: white;\r\n    border-radius: 10px;\r\n    font-weight: bold;\r\n    font-family: 'JetBrains Mono', monospace;\r\n}\r\n\r\ndiv#side-bar div#contents button.projects:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.icon {\r\n    /* float: left; */\r\n    margin-top: 5px;\r\n}\r\n\r\ndiv#side-bar button#add-project {\r\n    background: none;\r\n    border: none;\r\n}\r\n\r\ndiv#side-bar button#add-project i {\r\n    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);\r\n    padding: 0px 0px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    background-color: rgb(167, 210, 203);\r\n}\r\n\r\ndiv#side-bar button#add-project i:hover {\r\n    cursor: pointer;\r\n}\r\n\r\ndiv#items {\r\n    /* border: 2px solid black; */\r\n    margin-left: 19em;\r\n    box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);\r\n    border-radius: 10px;\r\n    padding: 20px 15px;\r\n    background-color: rgb(255, 216, 169);\r\n}",""]);const s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var f=[].concat(t[l]);r&&i[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],f=a[l]||0,d="".concat(l," ").concat(f);a[l]=f+1;var u=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var m=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),l=0;l<a.length;l++){var f=n(a[l]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),f=n.n(l),d=n(589),u=n.n(d),p=n(424),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=f(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,n(264);const b=document.createElement("span");b.className="icon";var h=document.createElement("i"),y=h.classList;y.add("bx"),y.add("bxs-label"),y.add("bx-md"),y.add("bx-spin-hover"),b.appendChild(h);var g=document.createElement("button");g.className="projects",g.appendChild(b);var x=document.createElement("span");x.innerHTML="Hello",g.appendChild(x),document.getElementById("contents").appendChild(g),sidebar.childNodes})()})();