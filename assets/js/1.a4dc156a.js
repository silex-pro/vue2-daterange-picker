(window.webpackJsonp=window.webpackJsonp||[]).push([[1,15,20,24],{481:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return h})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(58),n(267),n(111),n(112),n(12),n(47),n(160),n(483),n(113),n(115);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=a(t);return s.test(i)?t:i+".html"+n}function p(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&a(t.path)===a(e)}function h(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=a(e),i=0;i<t.length;i++)if(a(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,r){var i=n.pages,s=n.themeConfig,o=r&&s.locales&&s.locales[r]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return g(t);var a=o.sidebar||s.sidebar;if(a){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,a),c=u.base,l=u.config;return"auto"===l?g(t):l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return h(n,e,r);if(Array.isArray(e))return Object.assign(h(n,e[0],r),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(h(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},483:function(t,e,n){"use strict";var r=n(13),i=n(265),s=n(14),o=n(80),a=n(114),u=n(15),c=n(30),l=n(81),f=n(268),p=n(266);i("match",(function(t,e,n){return[function(e){var n=c(this),i=o(e)?void 0:l(e,t);return i?r(i,e,n):new RegExp(e)[t](u(n))},function(t){var r=s(this),i=u(t),o=n(e,r,i);if(o.done)return o.value;if(!r.global)return p(r,i);var c=r.unicode;r.lastIndex=0;for(var l,h=[],d=0;null!==(l=p(r,i));){var g=u(l[0]);h[d]=g,""===g&&(r.lastIndex=f(i,a(r.lastIndex),c)),d++}return 0===d?null:h}]}))},485:function(t,e,n){"use strict";var r=n(3),i=n(496);r({target:"String",proto:!0,forced:n(497)("link")},{link:function(t){return i(this,"a","href",t)}})},486:function(t,e,n){},494:function(t,e,n){"use strict";n.r(e);n(485),n(161),n(12);var r=n(481),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(79),o=Object(s.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=o.exports},495:function(t,e,n){"use strict";n.r(e);var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(498),n(79)),s=Object(i.a)(r,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},496:function(t,e,n){"use strict";var r=n(2),i=n(30),s=n(15),o=/"/g,a=r("".replace);t.exports=function(t,e,n,r){var u=s(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+a(s(r),o,"&quot;")+'"'),c+">"+u+"</"+e+">"}},497:function(t,e,n){"use strict";var r=n(1);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},498:function(t,e,n){"use strict";n(486)},502:function(t,e,n){},517:function(t,e,n){"use strict";n.r(e);n(485);var r=n(77),i=(n(271),n(111),n(161),n(12),n(524),n(525),n(47),n(526),n(160),n(270),n(483),n(113),n(556)),s=n(481),o={name:"NavLinks",components:{NavLink:n(494).default,DropdownLink:i.default},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(r){var o,a=e[r],u=s[r]&&s[r].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,r),i.some((function(t){return t.path===o}))||(o=r)),{text:u,link:o}}))};return[].concat(Object(r.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(s.j)(t),{items:(t.items||[]).map(s.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var r=e[n];if(new RegExp(r,"i").test(t))return r}return"Source"}}}},a=(n(576),n(79)),u=Object(a.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=u.exports},522:function(t,e,n){"use strict";n(502)},524:function(t,e,n){"use strict";var r=n(10),i=n(5),s=n(2),o=n(169),a=n(170),u=n(33),c=n(51),l=n(63).f,f=n(50),p=n(286),h=n(15),d=n(290),g=n(269),v=n(282),m=n(31),b=n(1),k=n(7),w=n(60).enforce,x=n(575),y=n(4),L=n(273),_=n(289),O=y("match"),C=i.RegExp,j=C.prototype,I=i.SyntaxError,$=s(j.exec),A=s("".charAt),R=s("".replace),E=s("".indexOf),N=s("".slice),D=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,S=/a/g,T=/a/g,H=new C(S)!==S,U=g.MISSED_STICKY,q=g.UNSUPPORTED_Y,B=r&&(!H||U||L||_||b((function(){return T[O]=!1,C(S)!==S||C(T)===T||"/a/i"!==String(C(S,"i"))})));if(o("RegExp",B)){for(var G=function(t,e){var n,r,i,s,o,l,g=f(j,this),v=p(t),m=void 0===e,b=[],x=t;if(!g&&v&&m&&t.constructor===G)return t;if((v||f(j,t))&&(t=t.source,m&&(e=d(x))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),x=t,L&&"dotAll"in S&&(r=!!e&&E(e,"s")>-1)&&(e=R(e,/s/g,"")),n=e,U&&"sticky"in S&&(i=!!e&&E(e,"y")>-1)&&q&&(e=R(e,/y/g,"")),_&&(t=(s=function(t){for(var e,n=t.length,r=0,i="",s=[],o=c(null),a=!1,u=!1,l=0,f="";r<=n;r++){if("\\"===(e=A(t,r)))e+=A(t,++r);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:if(i+=e,"?:"===N(t,r+1,r+3))continue;$(D,N(t,r+1))&&(r+=2,u=!0),l++;continue;case">"===e&&u:if(""===f||k(o,f))throw new I("Invalid capture group name");o[f]=!0,s[s.length]=[f,l],u=!1,f="";continue}u?f+=e:i+=e}return[i,s]}(t))[0],b=s[1]),o=a(C(t,e),g?this:j,G),(r||i||b.length)&&(l=w(o),r&&(l.dotAll=!0,l.raw=G(function(t){for(var e,n=t.length,r=0,i="",s=!1;r<=n;r++)"\\"!==(e=A(t,r))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),i+=e):i+="[\\s\\S]":i+=e+A(t,++r);return i}(t),n)),i&&(l.sticky=!0),b.length&&(l.groups=b)),t!==x)try{u(o,"source",""===x?"(?:)":x)}catch(t){}return o},P=l(C),Y=0;P.length>Y;)v(G,C,P[Y++]);j.constructor=G,G.prototype=j,m(i,"RegExp",G,{constructor:!0})}x("RegExp")},525:function(t,e,n){"use strict";var r=n(10),i=n(273),s=n(25),o=n(82),a=n(60).get,u=RegExp.prototype,c=TypeError;r&&i&&o(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!a(this).dotAll;throw new c("Incompatible receiver, RegExp required")}}})},526:function(t,e,n){"use strict";var r=n(10),i=n(269).MISSED_STICKY,s=n(25),o=n(82),a=n(60).get,u=RegExp.prototype,c=TypeError;r&&i&&o(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===s(this))return!!a(this).sticky;throw new c("Incompatible receiver, RegExp required")}}})},544:function(t,e,n){},556:function(t,e,n){"use strict";n.r(e);n(485);var r=n(494),i=n(495),s=n(277),o=n.n(s),a={name:"DropdownLink",components:{NavLink:r.default,DropdownTransition:i.default},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},u=(n(522),n(79)),c=Object(u.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow down"})]),t._v(" "),e("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[e("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,r){return e("li",{key:n.link||r,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v("\n          "+t._s(n.text)+"\n        ")]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(r){return e("li",{key:r.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:r},on:{focusout:function(e){t.isLastItemOfArray(r,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0):e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=c.exports},575:function(t,e,n){"use strict";var r=n(26),i=n(82),s=n(4),o=n(10),a=s("species");t.exports=function(t){var e=r(t);o&&e&&!e[a]&&i(e,a,{configurable:!0,get:function(){return this}})}},576:function(t,e,n){"use strict";n(544)}}]);