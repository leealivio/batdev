window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return r(b.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&y[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+j.join(r+" ")+r).split(" "),s(o,t,n))}var u="2.6.2",f={},d=!0,p=t.documentElement,m="modernizr",h=t.createElement(m),y=h.style,v,g={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",C=E.split(" "),j=E.toLowerCase().split(" "),w={},x={},S={},N=[],F=N.slice,k,M=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:m+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),l.id=m,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=p.style.overflow,p.style.overflow="hidden",p.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),p.style.overflow=s),!!a},O={}.hasOwnProperty,T;T=i(O,"undefined")||i(O.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=F.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(F.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(F.call(arguments)))};return r}),w.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in p.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},w.csstransitions=function(){return l("transition")};for(var L in w)T(w,L)&&(k=L.toLowerCase(),f[k]=w[L](),N.push((f[k]?"":"no-")+k));return f.addTest=function(e,t){if("object"==typeof e)for(var r in e)T(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof d&&d&&(p.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),h=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=h[e[p]];return t||(t={},m++,e[p]=m,h[m]=t),t}function i(e,n,r){if(n||(n=t),y)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!u.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),y)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function s(e){e||(e=t);var r=o(e);return v.shivCSS&&!d&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),y||c(e,r),e}var l=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d,p="_html5shiv",m=0,h={},y;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,y=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,y=!0}}();var v={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:l.shivCSS!==!1,supportsUnknownElements:y,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=v,s(t)}(this,t),f._version=u,f._prefixes=b,f._domPrefixes=j,f._cssomPrefixes=C,f.testProp=function(e){return c([e])},f.testAllProps=l,f.testStyles=M,f.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(d?" js "+N.join(" "):""),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==m.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=h.shift();y=1,e?e.t?d(function(){("c"==e.t?F.injectCss:F.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!m&&a(f.readyState)&&(E.r=m=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&d(function(){b.removeChild(f)},50);for(var r in x[n])x[n].hasOwnProperty(r)&&x[n][r].onload()}}var l=l||F.errorTimeout,f=t.createElement(e),m=0,v=0,E={t:r,s:n,e:i,a:s,x:l};1===x[n]&&(v=1,x[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,v)},h.splice(o,0,E),"img"!=e&&(v||2===x[n]?(b.insertBefore(f,g?null:p),d(u,l)):x[n].push(f))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?C:E,e,t,this.i++,n,r,i):(h.splice(this.i++,0,e),1==h.length&&c()),this}function u(){var e=F;return e.loader={load:l,i:0},e}var f=t.documentElement,d=e.setTimeout,p=t.getElementsByTagName("script")[0],m={}.toString,h=[],y=0,v="MozAppearance"in f.style,g=v&&!!t.createRange().compareNode,b=g?f:p.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,E=v?"object":f?"script":"img",C=f?"script":E,j=Array.isArray||function(e){return"[object Array]"==m.call(e)},w=[],x={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},N,F;F=function(e){function t(e){var e=e.split("!"),t=w.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,i,a;for(i=0;r>i;i++)a=e[i].split("="),(o=S[a.shift()])&&(n=o(n,a));for(i=0;t>i;i++)n=w[i](n);return n}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(x[s.url]?s.noexec=!0:x[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),x[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(l=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}),a(e,l,t,0,c);else if(Object(e)===e)for(p in d=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--d&&(r(l)?l=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}:l[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(u[p])),a(e[p],l,t,p,c))}else!n&&f()}var c=!!e.test,s=e.load||e.both,l=e.callback||i,u=l,f=e.complete||i,d,p;n(c?e.yep:e.nope,!!s),s&&n(s)}var s,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(j(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,f,0):j(l)?F(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)},F.addPrefix=function(e,t){S[e]=t},F.addFilter=function(e){w.push(e)},F.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",N=function(){t.removeEventListener("DOMContentLoaded",N,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u=t.createElement("script"),f,m,o=o||F.errorTimeout;u.src=e;for(m in r)u.setAttribute(m,r[m]);n=l?c:n||i,u.onreadystatechange=u.onload=function(){!f&&a(u.readyState)&&(f=1,n(),u.onload=u.onreadystatechange=null)},d(function(){f||(f=1,n(1))},o),s?u.onload():p.parentNode.insertBefore(u,p)},e.yepnope.injectCss=function(e,n,r,o,a,s){var o=t.createElement("link"),l,n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(p.parentNode.insertBefore(o,p),d(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};