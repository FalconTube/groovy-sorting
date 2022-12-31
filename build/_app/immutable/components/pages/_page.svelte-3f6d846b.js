import{S as rt,i as ot,s as it,k as w,l as A,m as C,h as T,n as S,b as et,B as nt,o as mt,q as H,a as j,w as ut,r as D,c as z,x as ct,G as g,y as lt,f as ft,t as dt,z as pt,I as ht}from"../../chunks/index-92993a8b.js";var vt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={},gt={get exports(){return at},set exports(k){at=k}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(k,s){(function(E,x){k.exports=x()})(vt,function(){return function(){var _={686:function(r,o,t){t.d(o,{default:function(){return yt}});var c=t(279),i=t.n(c),l=t(370),v=t.n(l),a=t(817),h=t.n(a);function m(d){try{return document.execCommand(d)}catch{return!1}}var b=function(n){var e=h()(n);return m("cut"),e},p=b;function L(d){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(u,"px"),e.setAttribute("readonly",""),e.value=d,e}var Y=function(n,e){var u=L(n);e.container.appendChild(u);var f=h()(u);return m("copy"),u.remove(),f},N=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof n=="string"?u=Y(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?u=Y(n.value,e):(u=h()(n),m("copy")),u},B=N;function O(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(d)}var q=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,u=e===void 0?"copy":e,f=n.container,y=n.target,M=n.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&O(y)==="object"&&y.nodeType===1){if(u==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(M)return B(M,{container:f});if(y)return u==="cut"?p(y):B(y,{container:f})},X=q;function $(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(e){return typeof e}:$=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(d)}function K(d,n){if(!(d instanceof n))throw new TypeError("Cannot call a class as a function")}function G(d,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(d,u.key,u)}}function P(d,n,e){return n&&G(d.prototype,n),e&&G(d,e),d}function I(d,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(n&&n.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),n&&U(d,n)}function U(d,n){return U=Object.setPrototypeOf||function(u,f){return u.__proto__=f,u},U(d,n)}function R(d){var n=W();return function(){var u=F(d),f;if(n){var y=F(this).constructor;f=Reflect.construct(u,arguments,y)}else f=u.apply(this,arguments);return J(this,f)}}function J(d,n){return n&&($(n)==="object"||typeof n=="function")?n:Q(d)}function Q(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function W(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function F(d){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(d)}function V(d,n){var e="data-clipboard-".concat(d);if(n.hasAttribute(e))return n.getAttribute(e)}var Z=function(d){I(e,d);var n=R(e);function e(u,f){var y;return K(this,e),y=n.call(this),y.resolveOptions(f),y.listenClick(u),y}return P(e,[{key:"resolveOptions",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof f.action=="function"?f.action:this.defaultAction,this.target=typeof f.target=="function"?f.target:this.defaultTarget,this.text=typeof f.text=="function"?f.text:this.defaultText,this.container=$(f.container)==="object"?f.container:document.body}},{key:"listenClick",value:function(f){var y=this;this.listener=v()(f,"click",function(M){return y.onClick(M)})}},{key:"onClick",value:function(f){var y=f.delegateTarget||f.currentTarget,M=this.action(y)||"copy",tt=X({action:M,container:this.container,target:this.target(y),text:this.text(y)});this.emit(tt?"success":"error",{action:M,text:tt,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(f){return V("action",f)}},{key:"defaultTarget",value:function(f){var y=V("target",f);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(f){return V("text",f)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return B(f,y)}},{key:"cut",value:function(f){return p(f)}},{key:"isSupported",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof f=="string"?[f]:f,M=!!document.queryCommandSupported;return y.forEach(function(tt){M=M&&!!document.queryCommandSupported(tt)}),M}}]),e}(i()),yt=Z},828:function(r){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(i,l){for(;i&&i.nodeType!==o;){if(typeof i.matches=="function"&&i.matches(l))return i;i=i.parentNode}}r.exports=c},438:function(r,o,t){var c=t(828);function i(a,h,m,b,p){var L=v.apply(this,arguments);return a.addEventListener(m,L,p),{destroy:function(){a.removeEventListener(m,L,p)}}}function l(a,h,m,b,p){return typeof a.addEventListener=="function"?i.apply(null,arguments):typeof m=="function"?i.bind(null,document).apply(null,arguments):(typeof a=="string"&&(a=document.querySelectorAll(a)),Array.prototype.map.call(a,function(L){return i(L,h,m,b,p)}))}function v(a,h,m,b){return function(p){p.delegateTarget=c(p.target,h),p.delegateTarget&&b.call(a,p)}}r.exports=l},879:function(r,o){o.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},o.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||o.node(t[0]))},o.string=function(t){return typeof t=="string"||t instanceof String},o.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(r,o,t){var c=t(879),i=t(438);function l(m,b,p){if(!m&&!b&&!p)throw new Error("Missing required arguments");if(!c.string(b))throw new TypeError("Second argument must be a String");if(!c.fn(p))throw new TypeError("Third argument must be a Function");if(c.node(m))return v(m,b,p);if(c.nodeList(m))return a(m,b,p);if(c.string(m))return h(m,b,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(m,b,p){return m.addEventListener(b,p),{destroy:function(){m.removeEventListener(b,p)}}}function a(m,b,p){return Array.prototype.forEach.call(m,function(L){L.addEventListener(b,p)}),{destroy:function(){Array.prototype.forEach.call(m,function(L){L.removeEventListener(b,p)})}}}function h(m,b,p){return i(document.body,m,b,p)}r.exports=l},817:function(r){function o(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var i=t.hasAttribute("readonly");i||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),i||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),v=document.createRange();v.selectNodeContents(t),l.removeAllRanges(),l.addRange(v),c=l.toString()}return c}r.exports=o},279:function(r){function o(){}o.prototype={on:function(t,c,i){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:c,ctx:i}),this},once:function(t,c,i){var l=this;function v(){l.off(t,v),c.apply(i,arguments)}return v._=c,this.on(t,v,i)},emit:function(t){var c=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),l=0,v=i.length;for(l;l<v;l++)i[l].fn.apply(i[l].ctx,c);return this},off:function(t,c){var i=this.e||(this.e={}),l=i[t],v=[];if(l&&c)for(var a=0,h=l.length;a<h;a++)l[a].fn!==c&&l[a].fn._!==c&&v.push(l[a]);return v.length?i[t]=v:delete i[t],this}},r.exports=o,r.exports.TinyEmitter=o}},E={};function x(r){if(E[r])return E[r].exports;var o=E[r]={exports:{}};return _[r](o,o.exports,x),o.exports}return function(){x.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return x.d(o,{a:o}),o}}(),function(){x.d=function(r,o){for(var t in o)x.o(o,t)&&!x.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})}}(),function(){x.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)}}(),x(686)}().default})})(gt);function bt(k){let s;return{c(){s=w("pre"),this.h()},l(_){s=A(_,"PRE",{id:!0,contenteditable:!0});var E=C(s);E.forEach(T),this.h()},h(){S(s,"id","mycode"),S(s,"contenteditable","")},m(_,E){et(_,s,E),s.innerHTML=k[0]},p(_,[E]){E&1&&(s.innerHTML=_[0])},i:nt,o:nt,d(_){_&&T(s)}}}function _t(k,s,_){let{code:E=""}=s;return mt(async()=>{}),k.$$set=x=>{"code"in x&&_(0,E=x.code)},[E]}class xt extends rt{constructor(s){super(),ot(this,s,_t,bt,it,{code:0})}}function Et(k){let s,_,E,x,r,o,t,c,i,l,v,a,h,m,b,p,L,Y,N,B,O,q,X="'<br>'",$,K,G;return N=new xt({props:{code:""}}),{c(){s=w("html"),_=w("h1"),E=H(st),x=j(),r=w("div"),o=w("label"),t=H("Groovy source input:"),c=j(),i=w("pre"),l=j(),v=w("div"),a=w("div"),h=w("button"),m=H("Sort"),b=j(),p=w("label"),L=H("Sorted Groovy file:"),Y=j(),ut(N.$$.fragment),B=j(),O=w("py-script"),q=H(`from pyodide.ffi import create_proxy\r
import regex\r
from js import document\r
\r
def sortkey():\r
    """Return the basename of function."""\r
    return lambda n: n.split("(")[0].split(" ")[-1]			\r
				\r
def hello_args(self):\r
	finalreg = r"[a-zA-Z]+\\s[A-Za-z0-9]+\\([^)]*\\)\\s*\\{((?:[^{}]|\\{(?1)*\\})*)\\}"\r
	\r
	text = document.getElementById("infile").innerHTML\r
	matches = regex.finditer(finalreg, text)\r
\r
	# Get all matches as strings in list\r
	out = []\r
	for match in matches:\r
		outstring = "".join(match.group())\r
		out.append(outstring)\r
\r
	# Sort by function name before first bracket\r
	outsort = sorted(out, key=sortkey())\r
\r
	# Remove all found functions from text and strip trailing whitespace\r
	for i in outsort:\r
		text = text.replace(i, "")\r
	text = text.rstrip(`),$=H(X),K=H(`)\r
	text = text.strip()\r
	\r
\r
	# Now add them in sorted order\r
	for i in outsort:\r
		text += f'\\n{ i }\\n'\r
	#document.getElementById("outmsg").value = text\r
	document.getElementById("mycode").innerHTML = text\r
\r
Element('button').element.addEventListener("click", create_proxy(hello_args))`),this.h()},l(P){s=A(P,"HTML",{lang:!0,class:!0});var I=C(s);_=A(I,"H1",{class:!0});var U=C(_);E=D(U,st),U.forEach(T),x=z(I),r=A(I,"DIV",{class:!0});var R=C(r);o=A(R,"LABEL",{for:!0,class:!0});var J=C(o);t=D(J,"Groovy source input:"),J.forEach(T),c=z(R),i=A(R,"PRE",{id:!0,contenteditable:!0}),C(i).forEach(T),l=z(R),v=A(R,"DIV",{class:!0});var Q=C(v);a=A(Q,"DIV",{class:!0});var W=C(a);h=A(W,"BUTTON",{id:!0,class:!0});var F=C(h);m=D(F,"Sort"),F.forEach(T),W.forEach(T),Q.forEach(T),b=z(R),p=A(R,"LABEL",{for:!0,class:!0});var V=C(p);L=D(V,"Sorted Groovy file:"),V.forEach(T),Y=z(R),ct(N.$$.fragment,R),R.forEach(T),B=z(I),O=A(I,"PY-SCRIPT",{});var Z=C(O);q=D(Z,`from pyodide.ffi import create_proxy\r
import regex\r
from js import document\r
\r
def sortkey():\r
    """Return the basename of function."""\r
    return lambda n: n.split("(")[0].split(" ")[-1]			\r
				\r
def hello_args(self):\r
	finalreg = r"[a-zA-Z]+\\s[A-Za-z0-9]+\\([^)]*\\)\\s*\\{((?:[^{}]|\\{(?1)*\\})*)\\}"\r
	\r
	text = document.getElementById("infile").innerHTML\r
	matches = regex.finditer(finalreg, text)\r
\r
	# Get all matches as strings in list\r
	out = []\r
	for match in matches:\r
		outstring = "".join(match.group())\r
		out.append(outstring)\r
\r
	# Sort by function name before first bracket\r
	outsort = sorted(out, key=sortkey())\r
\r
	# Remove all found functions from text and strip trailing whitespace\r
	for i in outsort:\r
		text = text.replace(i, "")\r
	text = text.rstrip(`),$=D(Z,X),K=D(Z,`)\r
	text = text.strip()\r
	\r
\r
	# Now add them in sorted order\r
	for i in outsort:\r
		text += f'\\n{ i }\\n'\r
	#document.getElementById("outmsg").value = text\r
	document.getElementById("mycode").innerHTML = text\r
\r
Element('button').element.addEventListener("click", create_proxy(hello_args))`),Z.forEach(T),I.forEach(T),this.h()},h(){S(_,"class","title svelte-yglz26"),S(o,"for","infile"),S(o,"class","svelte-yglz26"),S(i,"id","infile"),S(i,"contenteditable",""),S(h,"id","button"),S(h,"class","svelte-yglz26"),S(a,"class","row svelte-yglz26"),S(v,"class","column svelte-yglz26"),S(p,"for","code"),S(p,"class","svelte-yglz26"),S(r,"class","outer svelte-yglz26"),S(s,"lang","en-us"),S(s,"class","svelte-yglz26")},m(P,I){et(P,s,I),g(s,_),g(_,E),g(s,x),g(s,r),g(r,o),g(o,t),g(r,c),g(r,i),g(r,l),g(r,v),g(v,a),g(a,h),g(h,m),g(r,b),g(r,p),g(p,L),g(r,Y),lt(N,r,null),g(s,B),g(s,O),g(O,q),g(O,$),g(O,K),G=!0},p:nt,i(P){G||(ft(N.$$.fragment,P),G=!0)},o(P){dt(N.$$.fragment,P),G=!1},d(P){P&&T(s),pt(N)}}}let st="Groovy sorting";class St extends rt{constructor(s){super(),ot(this,s,null,Et,it,{})}}function Tt(k){let s,_,E,x,r,o,t,c,i,l,v;return l=new St({}),{c(){s=w("head"),_=w("link"),E=j(),x=w("script"),o=j(),t=w("py-config"),c=H("packages=['regex',]"),i=j(),ut(l.$$.fragment),this.h()},l(a){s=A(a,"HEAD",{});var h=C(s);_=A(h,"LINK",{rel:!0,href:!0}),E=z(h),x=A(h,"SCRIPT",{src:!0});var m=C(x);m.forEach(T),o=z(h),t=A(h,"PY-CONFIG",{});var b=C(t);c=D(b,"packages=['regex',]"),b.forEach(T),h.forEach(T),i=z(a),ct(l.$$.fragment,a),this.h()},h(){S(_,"rel","stylesheet"),S(_,"href","https://pyscript.net/latest/pyscript.css"),x.defer=!0,ht(x.src,r="https://pyscript.net/latest/pyscript.js")||S(x,"src",r)},m(a,h){et(a,s,h),g(s,_),g(s,E),g(s,x),g(s,o),g(s,t),g(t,c),et(a,i,h),lt(l,a,h),v=!0},p:nt,i(a){v||(ft(l.$$.fragment,a),v=!0)},o(a){dt(l.$$.fragment,a),v=!1},d(a){a&&T(s),a&&T(i),pt(l,a)}}}class Lt extends rt{constructor(s){super(),ot(this,s,null,Tt,it,{})}}export{Lt as default};
