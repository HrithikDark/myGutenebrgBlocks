(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(t,e,r){}}]),function(t){function e(e){for(var n,i,l=e[0],u=e[1],s=e[2],f=0,a=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&a.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(p&&p(e);a.length;)a.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,l=1;l<r.length;l++){var u=r[l];0!==o[u]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={0:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var p=u;c.push([5,1]),r()}([function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.blocks}()},,function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(0),c=(r(3),r(1));r(4);Object(n.registerBlockType)("create-block/first-block",{title:Object(o.__)("First Block","first-block"),description:Object(o.__)("Example block written with ESNext standard and JSX support – build step required.","first-block"),category:"widgets",icon:"smiley",supports:{html:!1},edit:function(t){var e=t.className;return Object(c.createElement)("p",{className:e},Object(o.__)("First Block – hello from the editor!","first-block"))},save:function(){return Object(c.createElement)("p",null,Object(o.__)("First Block – hello from the saved content!","first-block"))}})}]);