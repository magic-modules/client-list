(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return k(a)||c(a)||g()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function f(a,b){return k(a)||j(a,b)||g()}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function j(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function k(a){if(Array.isArray(a))return a}function l(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){m(a,b,c[b])})}return a}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a,b){if(a==null)return{};var c=o(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function o(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function q(a){return q=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function q(a){return typeof a}:function q(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},q(a)}var r=require("hyperapp"),s=r.app,t=r.h;var e=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===q(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),t(a,b,d)}};var h=e("div");var u=e("span");var v=e("a");var a=e("footer");var w=function Link(a,b){var c=a.to,d=n(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=n(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),v(l,[h,b])}};var x=function Header(a){return(a.logo||a.menu||a.tagline)&&Q({"class":"Header"},[(a.logo||a.logotext)&&w({to:"/library-list/","class":"LogoWrapper"},[a.logo&&S({"class":"Logo",src:a.logo}),a.logotext&&u({"class":"LogoText"},a.logotext)]),a.menu&&y])};var y=function Menu(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],g=f===void 0?"Menu":f,h=c.items,i=h===void 0?[]:h,j=c.collapse;var m=b.url,n=b[e],o=n===void 0?[]:n;if(i=i.length?i:o,!!i.length)return b.hash&&(m+="#".concat(b.hash)),M({"class":g},K(i.map(function(a){return y.Item(l({},a,{url:m,collapse:j===void 0||j}))})))}};y.Item=function(a){var b=a.url,c=a.text,d=a.items,e=d===void 0?[]:d,f=a.parentTo,g=f===void 0?undefined:f,h=a.collapse,j=n(a,["url","text","items","parentTo","collapse"]);return function(a){if(j.to||c){var d={"class":"MenuItem"};if(g){var n=j.to.includes("://");var o=j.to.startsWith("/");var p=!g||j.to.startsWith(g);!p&&!o&&!n&&(!g.endsWith("/")&&!j.to.startsWith("-")&&(g="".concat(g,"/")),j.to=g+j.to)}var f=j.to.startsWith(a.root)?j.to:"".concat(a.root).concat(j.to.substr(1));var i=b.startsWith(f);b===f&&(d["class"]+=" active");var m=[];return(e.length&&i||!h)&&(m=K(e.map(function(a){return y.Item(l({parentTo:j.to,url:b,collapse:h},a))}))),E(d,[j.to?w(j,c):u(j,c),m])}}};var z=e("img");var A=function GitList(a){var b=a.items,c=b===void 0?[]:b,d=a.org,e=a.host,f=e===void 0?"github":e,g=a.header,i=a.desc,j=i===void 0?a.description:i;var k={};return a["class"]?!a["class"].includes("GitList")&&(k["class"]="GitList ".concat(a["class"])):k["class"]="GitList",k.id=a.id?a.id:d,!k.id.startsWith("gl")&&(k.id="gl-".concat(k.id)),h(k,[g&&D(g),j&&h({"class":"description"},j),K({id:"".concat(k.id,"-ul")},[c.map(function(a){return A.Item(l({org:d,id:"".concat(k.id,"-li"),host:f},a))})])])};A.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host;var f=a.desc||a.description;return E({id:"".concat(d,"-").concat(b),"class":"GitListItem"},[G([w({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&C(f),I("".concat(c,"/").concat(b)),w({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var B=e("description");var C=e("p");var D=e("h2");var E=e("li");var p=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return h({"class":"Pre ".concat(b||c.pre.theme)},[h({"class":"menu"},[!b&&i({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),i({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),L(LIB.PRE.format(a))])}};var F=e("text");var G=e("h3");var H=function LibraryList(a){return A(l({org:"magic-libraries",header:[w({to:"https://magic-libraries.github.io"},"@magic-libraries")],desc:["below is a collection of the available @magic client libraries."],items:[{name:"json",description:["the @magic-libraries/json module parses and stringifies json."," it also returns errors instead of throwing them."]},{name:"is",description:"the @magic-libraries/is module unifies the javascript type testing apis."},{name:"uri",description:["the @magic-libraries/uri module "," encodes objects to uri strings and decodes uri strings to objects."]}]},a))};var I=function GitBadges(a){if(typeof a==="string")a={project:a};else if(!a.project)return;var b=a,c=b.project,d=c!==void 0&&c,e=b.branch,g=e===void 0?"master":e,h=b.host,i=h===void 0?"github":h;var j=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(g)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;if(a){var b=a.split("/"),c=f(b,2),e=c[0],h=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(h,"/branch/").concat(g),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(h,"/").concat(g,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return{to:"https://coveralls.io/".concat(i,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(i,"/").concat(a,"/").concat(g,".svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(i,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=f(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?K({"class":"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return E([w({to:b},S({src:c}))])})):void 0};var J=e("i");var i=e("button");var K=e("ul");var L=e("pre");var M=e("nav");var N=e("code");var O=function Footer(){return a({"class":"Footer"},[h({"class":"wrapper"},["made with a few bits of ",w({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])};var P=e("h1");var Q=e("header");var R=function Page(a){return function(b,c){return h({"class":"Wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[x,h({"class":"Page"},a?a(b,c):"404 - not found"),O])}};var S=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),z(a)}};var T={};(function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var d=["true","false"];var e=function wrapWords(b){if(typeof b!=="string")return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(b!==""){var g="";return b==="state"?g="state":b==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(b=u({"class":g},b)),b}}),b};var f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var g=function wrapEmails(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return w({"class":"email",to:b},c)}return e(a)})};var h=function wrapComments(a,b){return[l(a.substring(0,b)),l(a.substring(b))]};var i=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?w({to:a},a):l(a)})};var j=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)};var k=function wrapStrings(a){var c=a.replace(/"/g,"'");var d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2);var k=i;k.length===1?k=l(k[0]):k.length>1&&(k=l(k.join("'")));var m=[];return m=typeof h==="undefined"?e(a):[e(g),u({"class":"string"},["'",j(h),"'"]),k],m};var l=function wordsByLine(a){var b=a.indexOf("//");var c=a.trim();if(c.startsWith("//")){var d=a.search(/\S|$/);var e="";for(var f=0;f<d;f++)e+=" ";return!c.startsWith("// ")&&(a="".concat(e,"// ").concat(c.substr(2))),u({"class":"comment"},[e,"// ",l(c.substring(3))])}return b>-1&&a[b-1]!==":"?h(a,b):a.indexOf("://")>2?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)};var m=function wrapLine(a){return N({"class":"line"},l(a))};T.PRE={keywords:a,builtins:c,format:function format(a){return a.trim().split("\n").map(m)},wordsByLine:l,wrapWords:e}})(),window.LIB=T;var U={"/library-list/":function libraryList(a){return[P(a.title),C(["this is the ",w({to:"https://github.com/magic-modules"},"@magic-modules")," LibraryList component. ",a.description]),I("magic-modules/library-list"),D({id:"installation"},"installation"),p("npm install magic-modules/library-list"),D({id:"usage"},"usage"),C("in a page or module View"),p("module.exports = () => [LibraryList]"),D({id:"demo"},"demo"),C("this is what it looks like"),H,D({id:"source"},"source"),C(["the source for this page is in the ",w({to:"https://github.com/magic-modules/library-list/tree/master/example"},"example directory")," and gets built and published to github using ",w({to:"https://github.com/magic/core"},"@magic/core")])]},"/library-list/404/":function libraryList404(){return h("404 - not found")}};var V={"url":"/library-list/","root":"/library-list/","title":"@magic-modules/library-list","description":"shows a list of all @magic-modules with gitbadges and urls to the docs","logotext":"LibraryList","menu":[{to:"/library-list/#installation","text":"installation"},{to:"/library-list/#usage","text":"usage"},{to:"/library-list/#demo","text":"demo"},{to:"/library-list/#source","text":"source"}],"pre":{"theme":"light"}};V.url=window.location.pathname,V.root="/library-list/";var W={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var g=e.split("#"),h=f(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=f(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||k!==q)&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=d.state?d.state.uri:"/";if(window.location&&k){var s=document.getElementById(k);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=k}}return{url:i,hash:k,prev:b.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var X=function view(a,b){var c=U[a.url]?a.url:"/404/";var d=U[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return R(d)(a,b)};var Y=document;var d=Y.getElementById("Magic");!d&&(d=Y.createElement("div"),d.id="magic",Y.body.appendChild(d)),s(V,W,X,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
