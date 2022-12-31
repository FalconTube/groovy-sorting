import{S as it,i as at,s as st,k as A,l as C,m as L,h as S,n as T,b as nt,B as rt,o as mt,q as F,a as N,w as lt,r as U,c as I,x as ft,G as g,y as dt,f as pt,t as yt,z as ht,I as vt,J as gt}from"../../chunks/index-67050652.js";var bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ut={},_t={get exports(){return ut},set exports(w){ut=w}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(w,i){(function(E,b){w.exports=b()})(bt,function(){return function(){var _={686:function(r,a,t){t.d(a,{default:function(){return tt}});var c=t(279),s=t.n(c),l=t(370),v=t.n(l),o=t(817),m=t.n(o);function h(d){try{return document.execCommand(d)}catch{return!1}}var x=function(n){var e=m()(n);return h("cut"),e},p=x;function k(d){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var u=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(u,"px"),e.setAttribute("readonly",""),e.value=d,e}var Y=function(n,e){var u=k(n);e.container.appendChild(u);var f=m()(u);return h("copy"),u.remove(),f},z=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},u="";return typeof n=="string"?u=Y(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?u=Y(n.value,e):(u=m()(n),h("copy")),u},B=z;function H(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?H=function(e){return typeof e}:H=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(d)}var j=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,u=e===void 0?"copy":e,f=n.container,y=n.target,$=n.text;if(u!=="copy"&&u!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(y!==void 0)if(y&&H(y)==="object"&&y.nodeType===1){if(u==="copy"&&y.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(u==="cut"&&(y.hasAttribute("readonly")||y.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if($)return B($,{container:f});if(y)return u==="cut"?p(y):B(y,{container:f})},J=j;function R(d){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(e){return typeof e}:R=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(d)}function K(d,n){if(!(d instanceof n))throw new TypeError("Cannot call a class as a function")}function D(d,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(d,u.key,u)}}function P(d,n,e){return n&&D(d.prototype,n),e&&D(d,e),d}function M(d,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(n&&n.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),n&&V(d,n)}function V(d,n){return V=Object.setPrototypeOf||function(u,f){return u.__proto__=f,u},V(d,n)}function O(d){var n=Z();return function(){var u=G(d),f;if(n){var y=G(this).constructor;f=Reflect.construct(u,arguments,y)}else f=u.apply(this,arguments);return X(this,f)}}function X(d,n){return n&&(R(n)==="object"||typeof n=="function")?n:Q(d)}function Q(d){if(d===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d}function Z(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function G(d){return G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},G(d)}function q(d,n){var e="data-clipboard-".concat(d);if(n.hasAttribute(e))return n.getAttribute(e)}var W=function(d){M(e,d);var n=O(e);function e(u,f){var y;return K(this,e),y=n.call(this),y.resolveOptions(f),y.listenClick(u),y}return P(e,[{key:"resolveOptions",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof f.action=="function"?f.action:this.defaultAction,this.target=typeof f.target=="function"?f.target:this.defaultTarget,this.text=typeof f.text=="function"?f.text:this.defaultText,this.container=R(f.container)==="object"?f.container:document.body}},{key:"listenClick",value:function(f){var y=this;this.listener=v()(f,"click",function($){return y.onClick($)})}},{key:"onClick",value:function(f){var y=f.delegateTarget||f.currentTarget,$=this.action(y)||"copy",et=J({action:$,container:this.container,target:this.target(y),text:this.text(y)});this.emit(et?"success":"error",{action:$,text:et,trigger:y,clearSelection:function(){y&&y.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(f){return q("action",f)}},{key:"defaultTarget",value:function(f){var y=q("target",f);if(y)return document.querySelector(y)}},{key:"defaultText",value:function(f){return q("text",f)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(f){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return B(f,y)}},{key:"cut",value:function(f){return p(f)}},{key:"isSupported",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],y=typeof f=="string"?[f]:f,$=!!document.queryCommandSupported;return y.forEach(function(et){$=$&&!!document.queryCommandSupported(et)}),$}}]),e}(s()),tt=W},828:function(r){var a=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(s,l){for(;s&&s.nodeType!==a;){if(typeof s.matches=="function"&&s.matches(l))return s;s=s.parentNode}}r.exports=c},438:function(r,a,t){var c=t(828);function s(o,m,h,x,p){var k=v.apply(this,arguments);return o.addEventListener(h,k,p),{destroy:function(){o.removeEventListener(h,k,p)}}}function l(o,m,h,x,p){return typeof o.addEventListener=="function"?s.apply(null,arguments):typeof h=="function"?s.bind(null,document).apply(null,arguments):(typeof o=="string"&&(o=document.querySelectorAll(o)),Array.prototype.map.call(o,function(k){return s(k,m,h,x,p)}))}function v(o,m,h,x){return function(p){p.delegateTarget=c(p.target,m),p.delegateTarget&&x.call(o,p)}}r.exports=l},879:function(r,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(r,a,t){var c=t(879),s=t(438);function l(h,x,p){if(!h&&!x&&!p)throw new Error("Missing required arguments");if(!c.string(x))throw new TypeError("Second argument must be a String");if(!c.fn(p))throw new TypeError("Third argument must be a Function");if(c.node(h))return v(h,x,p);if(c.nodeList(h))return o(h,x,p);if(c.string(h))return m(h,x,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(h,x,p){return h.addEventListener(x,p),{destroy:function(){h.removeEventListener(x,p)}}}function o(h,x,p){return Array.prototype.forEach.call(h,function(k){k.addEventListener(x,p)}),{destroy:function(){Array.prototype.forEach.call(h,function(k){k.removeEventListener(x,p)})}}}function m(h,x,p){return s(document.body,h,x,p)}r.exports=l},817:function(r){function a(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),v=document.createRange();v.selectNodeContents(t),l.removeAllRanges(),l.addRange(v),c=l.toString()}return c}r.exports=a},279:function(r){function a(){}a.prototype={on:function(t,c,s){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:c,ctx:s}),this},once:function(t,c,s){var l=this;function v(){l.off(t,v),c.apply(s,arguments)}return v._=c,this.on(t,v,s)},emit:function(t){var c=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),l=0,v=s.length;for(l;l<v;l++)s[l].fn.apply(s[l].ctx,c);return this},off:function(t,c){var s=this.e||(this.e={}),l=s[t],v=[];if(l&&c)for(var o=0,m=l.length;o<m;o++)l[o].fn!==c&&l[o].fn._!==c&&v.push(l[o]);return v.length?s[t]=v:delete s[t],this}},r.exports=a,r.exports.TinyEmitter=a}},E={};function b(r){if(E[r])return E[r].exports;var a=E[r]={exports:{}};return _[r](a,a.exports,b),a.exports}return function(){b.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return b.d(a,{a}),a}}(),function(){b.d=function(r,a){for(var t in a)b.o(a,t)&&!b.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:a[t]})}}(),function(){b.o=function(r,a){return Object.prototype.hasOwnProperty.call(r,a)}}(),b(686)}().default})})(_t);function xt(w){let i;return{c(){i=A("pre"),this.h()},l(_){i=C(_,"PRE",{id:!0,contenteditable:!0});var E=L(i);E.forEach(S),this.h()},h(){T(i,"id","mycode"),T(i,"contenteditable","")},m(_,E){nt(_,i,E),i.innerHTML=w[0]},p(_,[E]){E&1&&(i.innerHTML=_[0])},i:rt,o:rt,d(_){_&&S(i)}}}function Et(w,i,_){let{code:E=""}=i;return mt(async()=>{}),w.$$set=b=>{"code"in b&&_(0,E=b.code)},[E]}class ot extends it{constructor(i){super(),at(this,i,Et,xt,st,{code:0})}}function Tt(w){let i,_,E,b,r,a,t,c,s,l,v,o,m,h,x,p,k,Y,z,B,H,j,J,R,K,D;return j=new w[0]({props:{code:""}}),{c(){i=A("html"),_=A("h1"),E=F(ct),b=N(),r=A("div"),a=A("label"),t=F("Groovy source input:"),c=N(),s=A("pre"),l=N(),v=A("div"),o=A("div"),m=A("button"),h=F("Sort"),x=N(),p=A("button"),k=F("Copy to Clipboard"),Y=N(),z=A("label"),B=F("Sorted Groovy file:"),H=N(),lt(j.$$.fragment),J=N(),R=A("py-script"),K=F(`from pyodide.ffi import create_proxy\r
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
	\r
\r
	# Now add them in sorted order\r
	for i in outsort:\r
		text += f'\\n{ i }\\n'\r
	text = text.strip()\r
	#document.getElementById("outmsg").value = text\r
	document.getElementById("mycode").innerHTML = text\r
	console.log(text)\r
\r
Element('button').element.addEventListener("click", create_proxy(hello_args))`),this.h()},l(P){i=C(P,"HTML",{lang:!0,class:!0});var M=L(i);_=C(M,"H1",{class:!0});var V=L(_);E=U(V,ct),V.forEach(S),b=I(M),r=C(M,"DIV",{class:!0});var O=L(r);a=C(O,"LABEL",{for:!0,class:!0});var X=L(a);t=U(X,"Groovy source input:"),X.forEach(S),c=I(O),s=C(O,"PRE",{id:!0,contenteditable:!0}),L(s).forEach(S),l=I(O),v=C(O,"DIV",{class:!0});var Q=L(v);o=C(Q,"DIV",{class:!0});var Z=L(o);m=C(Z,"BUTTON",{id:!0,class:!0});var G=L(m);h=U(G,"Sort"),G.forEach(S),x=I(Z),p=C(Z,"BUTTON",{class:!0});var q=L(p);k=U(q,"Copy to Clipboard"),q.forEach(S),Z.forEach(S),Q.forEach(S),Y=I(O),z=C(O,"LABEL",{for:!0,class:!0});var W=L(z);B=U(W,"Sorted Groovy file:"),W.forEach(S),H=I(O),ft(j.$$.fragment,O),O.forEach(S),J=I(M),R=C(M,"PY-SCRIPT",{});var tt=L(R);K=U(tt,`from pyodide.ffi import create_proxy\r
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
	\r
\r
	# Now add them in sorted order\r
	for i in outsort:\r
		text += f'\\n{ i }\\n'\r
	text = text.strip()\r
	#document.getElementById("outmsg").value = text\r
	document.getElementById("mycode").innerHTML = text\r
	console.log(text)\r
\r
Element('button').element.addEventListener("click", create_proxy(hello_args))`),tt.forEach(S),M.forEach(S),this.h()},h(){T(_,"class","title svelte-yglz26"),T(a,"for","infile"),T(a,"class","svelte-yglz26"),T(s,"id","infile"),T(s,"contenteditable",""),T(m,"id","button"),T(m,"class","svelte-yglz26"),T(p,"class","svelte-yglz26"),T(o,"class","row svelte-yglz26"),T(v,"class","column svelte-yglz26"),T(z,"for","code"),T(z,"class","svelte-yglz26"),T(r,"class","outer svelte-yglz26"),T(i,"lang","en-us"),T(i,"class","svelte-yglz26")},m(P,M){nt(P,i,M),g(i,_),g(_,E),g(i,b),g(i,r),g(r,a),g(a,t),g(r,c),g(r,s),g(r,l),g(r,v),g(v,o),g(o,m),g(m,h),g(o,x),g(o,p),g(p,k),w[1](p),g(r,Y),g(r,z),g(z,B),g(r,H),dt(j,r,null),g(i,J),g(i,R),g(R,K),D=!0},p:rt,i(P){D||(pt(j.$$.fragment,P),D=!0)},o(P){yt(j.$$.fragment,P),D=!1},d(P){P&&S(i),w[1](null),ht(j)}}}let ct="Groovy sorting";function St(w,i,_){function E(b){vt[b?"unshift":"push"](()=>{ot.button=b,_(0,ot)})}return[ot,E]}class wt extends it{constructor(i){super(),at(this,i,St,Tt,st,{})}}function At(w){let i,_,E,b,r,a,t,c,s,l,v;return l=new wt({}),{c(){i=A("head"),_=A("link"),E=N(),b=A("script"),a=N(),t=A("py-config"),c=F("packages=['regex',]"),s=N(),lt(l.$$.fragment),this.h()},l(o){i=C(o,"HEAD",{});var m=L(i);_=C(m,"LINK",{rel:!0,href:!0}),E=I(m),b=C(m,"SCRIPT",{src:!0});var h=L(b);h.forEach(S),a=I(m),t=C(m,"PY-CONFIG",{});var x=L(t);c=U(x,"packages=['regex',]"),x.forEach(S),m.forEach(S),s=I(o),ft(l.$$.fragment,o),this.h()},h(){T(_,"rel","stylesheet"),T(_,"href","https://pyscript.net/latest/pyscript.css"),b.defer=!0,gt(b.src,r="https://pyscript.net/latest/pyscript.js")||T(b,"src",r)},m(o,m){nt(o,i,m),g(i,_),g(i,E),g(i,b),g(i,a),g(i,t),g(t,c),nt(o,s,m),dt(l,o,m),v=!0},p:rt,i(o){v||(pt(l.$$.fragment,o),v=!0)},o(o){yt(l.$$.fragment,o),v=!1},d(o){o&&S(i),o&&S(s),ht(l,o)}}}class kt extends it{constructor(i){super(),at(this,i,null,At,st,{})}}export{kt as default};