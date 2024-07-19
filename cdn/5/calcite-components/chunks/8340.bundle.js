/*! For license information please see 8340.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8340],{2097:(t,e,o)=>{o.d(e,{E:()=>p,a:()=>u,b:()=>d,g:()=>c,o:()=>r,q:()=>h,t:()=>f});var n=o(9113),i=o(7146),a=o(9163),s=o(3543);const r=150,l=t=>t.reduce(((t,e)=>t+e),0)/t.length,c=t=>{const e=t.filter((t=>t.slot!==a.S.menuActions)),o=e?.length;return{actionWidth:o?l(e.map((t=>t.clientWidth||0))):0,actionHeight:o?l(e.map((t=>t.clientHeight||0))):0}},d=({layout:t,actionCount:e,actionWidth:o,width:n,actionHeight:i,height:a,groupCount:s})=>Math.max(e-(({width:t,actionWidth:e,layout:o,height:n,actionHeight:i,groupCount:a})=>{const s="horizontal"===o?t:n,r="horizontal"===o?e:i;return Math.floor((s-2*a)/r)})({width:n,actionWidth:o,layout:t,height:a,actionHeight:i,groupCount:s}),0),h=t=>Array.from(t.querySelectorAll("calcite-action")).filter((t=>!t.closest("calcite-action-menu")||t.slot===s.S.trigger)),u=({actionGroups:t,expanded:e,overflowCount:o})=>{let i=o;t.reverse().forEach((t=>{let o=0;const s=h(t).reverse();s.forEach((t=>{t.slot===a.S.menuActions&&(t.removeAttribute("slot"),t.textEnabled=e)})),i>0&&s.some((t=>(s.filter((t=>!t.slot)).length>1&&s.length>2&&!t.closest("calcite-action-menu")&&(t.textEnabled=!0,t.setAttribute("slot",a.S.menuActions),o++,o>1&&i--),i<1))),(0,n.f)(t)}))};function f({el:t,expanded:e}){h(t).filter((t=>t.slot!==a.S.menuActions)).forEach((t=>t.textEnabled=e)),t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t=>t.expanded=e))}const p=({expanded:t,expandText:e,collapseText:o,toggle:a,el:s,position:r,tooltip:l,ref:c,scale:d})=>{const h="rtl"===(0,i.g)(s),u=t?o:e,f=["chevrons-left","chevrons-right"];h&&f.reverse();const p="end"===function(t,e){return t||e.closest("calcite-shell-panel")?.position||"start"}(r,s),g=p?f[1]:f[0],v=p?f[0]:f[1],b=(0,n.h)("calcite-action",{icon:t?g:v,onClick:a,scale:d,text:u,textEnabled:t,title:t||l?null:u,ref:e=>(({tooltip:t,referenceElement:e,expanded:o,ref:n})=>(t&&(t.referenceElement=!o&&e?e:null),n&&n(e),e))({tooltip:l,referenceElement:e,expanded:t,ref:c})});return b}},8340:(t,e,o)=>{o.r(e),o.d(e,{calcite_action_bar:()=>u});var n=o(9113),i=o(4189),a=o(7146),s=o(8545),r=o(3213),l=o(8773),c=o(8065),d=o(2097),h=o(9046);o(8220),o(9163),o(3543);const u=class{constructor(t){(0,n.r)(this,t),this.calciteActionBarToggle=(0,n.c)(this,"calciteActionBarToggle",6),this.mutationObserver=(0,l.c)("mutation",(()=>{const{el:t,expanded:e}=this;(0,d.t)({el:t,expanded:e}),this.overflowActions()})),this.resizeObserver=(0,l.c)("resize",(t=>this.resizeHandlerEntries(t))),this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const e=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{e.includes(t)||(t.menuOpen=!1)}))}},this.resizeHandlerEntries=t=>{t.forEach(this.resizeHandler)},this.resizeHandler=t=>{const{width:e,height:o}=t.contentRect;this.resize({width:e,height:o})},this.resize=(0,h.d)((({width:t,height:e})=>{const{el:o,expanded:n,expandDisabled:i,layout:a,overflowActionsDisabled:s}=this;if(s||"vertical"===a&&!e||"horizontal"===a&&!t)return;const r=(0,d.q)(o),l=i?r.length:r.length+1,c=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(c);const h=this.hasActionsEnd||this.hasBottomActions||!i?c.length+1:c.length,{actionHeight:u,actionWidth:f}=(0,d.g)(r),p=(0,d.b)({layout:a,actionCount:l,actionHeight:u,actionWidth:f,height:e,width:t,groupCount:h});(0,d.a)({actionGroups:c,expanded:n,overflowCount:p})}),d.o),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=t=>{this.expandToggleEl=t},this.handleDefaultSlotChange=t=>{const e=(0,a.s)(t).filter((t=>t.matches("calcite-action-group")));this.setGroupLayout(e)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=(0,a.b)(t)},this.handleBottomActionsSlotChange=t=>{this.hasBottomActions=(0,a.b)(t)},this.handleTooltipSlotChange=t=>{const e=(0,a.s)(t).filter((t=>t?.matches("calcite-tooltip")));this.expandTooltip=e[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:t,expanded:e}=this;(0,d.t)({el:t,expanded:e}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(t){t?this.resizeObserver?.disconnect():(this.resizeObserver?.observe(this.el),this.overflowActions())}onMessagesChange(){}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}componentDidLoad(){const{el:t,expanded:e}=this;(0,s.a)(this),(0,d.t)({el:t,expanded:e}),this.overflowActions()}connectedCallback(){const{el:t,expanded:e}=this;(0,r.c)(this),(0,c.c)(this),(0,d.t)({el:t,expanded:e}),this.mutationObserver?.observe(t,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(t),this.overflowActions(),(0,i.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,c.s)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,i.d)(this),(0,r.d)(this),(0,c.d)(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await(0,s.c)(this),(0,a.f)(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(t){t.forEach((t=>t.layout=this.layout))}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,el:o,position:i,toggleExpand:a,scale:s,layout:r,messages:l,actionsEndGroupLabel:c,overlayPositioning:h}=this,u=e?null:(0,n.h)(d.E,{collapseText:l.collapse,el:o,expandText:l.expand,expanded:t,position:i,scale:s,toggle:a,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return(0,n.h)("calcite-action-group",{class:"action-group--end",hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:c,layout:r,overlayPositioning:h,scale:s},(0,n.h)("slot",{name:"actions-end",onSlotchange:this.handleActionsEndSlotChange}),(0,n.h)("slot",{name:"bottom-actions",onSlotchange:this.handleBottomActionsSlotChange}),(0,n.h)("slot",{name:"expand-tooltip",onSlotchange:this.handleTooltipSlotChange}),u)}render(){return(0,n.h)(n.H,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},(0,n.h)("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};u.style=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}"},4189:(t,e,o)=>{o.d(e,{c:()=>l,d:()=>c});var n=o(9113),i=o(8773);const a=new Set;let s;const r={childList:!0};function l(t){s||(s=(0,i.c)("mutation",d)),s.observe(t.el,r)}function c(t){a.delete(t.el),d(s.takeRecords()),s.disconnect();for(const[t]of a.entries())s.observe(t,r)}function d(t){t.forEach((({target:t})=>{(0,n.f)(t)}))}},9046:(t,e,o)=>{o.d(e,{S:()=>s,a:()=>m,b:()=>g,c:()=>v,d:()=>M,f:()=>n,i:()=>w,r:()=>a});var n="object"==typeof global&&global&&global.Object===Object&&global,i="object"==typeof self&&self&&self.Object===Object&&self,a=n||i||Function("return this")(),s=a.Symbol,r=Object.prototype,l=r.hasOwnProperty,c=r.toString,d=s?s.toStringTag:void 0,h=Object.prototype.toString,u="[object Null]",f="[object Undefined]",p=s?s.toStringTag:void 0;function g(t){return null==t?void 0===t?f:u:p&&p in Object(t)?function(t){var e=l.call(t,d),o=t[d];try{t[d]=void 0;var n=!0}catch(t){}var i=c.call(t);return n&&(e?t[d]=o:delete t[d]),i}(t):function(t){return h.call(t)}(t)}function v(t){return null!=t&&"object"==typeof t}var b="[object Symbol]";function m(t){return"symbol"==typeof t||v(t)&&g(t)==b}var x=/\s/,y=/^\s+/;function w(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var A=NaN,E=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,C=/^0o[0-7]+$/i,z=parseInt;function O(t){if("number"==typeof t)return t;if(m(t))return A;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;var o;t=(o=t)?o.slice(0,function(t){for(var e=t.length;e--&&x.test(t.charAt(e)););return e}(o)+1).replace(y,""):o;var n=S.test(t);return n||C.test(t)?z(t.slice(2),n?2:8):E.test(t)?A:+t}var T=function(){return a.Date.now()},H="Expected a function",j=Math.max,L=Math.min;function M(t,e,o){var n,i,a,s,r,l,c=0,d=!1,h=!1,u=!0;if("function"!=typeof t)throw new TypeError(H);function f(e){var o=n,a=i;return n=i=void 0,c=e,s=t.apply(a,o)}function p(t){var o=t-l;return void 0===l||o>=e||o<0||h&&t-c>=a}function g(){var t=T();if(p(t))return v(t);r=setTimeout(g,function(t){var o=e-(t-l);return h?L(o,a-(t-c)):o}(t))}function v(t){return r=void 0,u&&n?f(t):(n=i=void 0,s)}function b(){var t=T(),o=p(t);if(n=arguments,i=this,l=t,o){if(void 0===r)return function(t){return c=t,r=setTimeout(g,e),d?f(t):s}(l);if(h)return clearTimeout(r),r=setTimeout(g,e),f(l)}return void 0===r&&(r=setTimeout(g,e)),s}return e=O(e)||0,w(o)&&(d=!!o.leading,a=(h="maxWait"in o)?j(O(o.maxWait)||0,e):a,u="trailing"in o?!!o.trailing:u),b.cancel=function(){void 0!==r&&clearTimeout(r),c=0,n=l=i=r=void 0},b.flush=function(){return void 0===r?s:v(T())},b}},8545:(t,e,o)=>{o.d(e,{a:()=>r,b:()=>l,c:()=>c,s:()=>s});var n=o(9113);const i=new WeakMap,a=new WeakMap;function s(t){a.set(t,new Promise((e=>i.set(t,e))))}function r(t){i.get(t)()}function l(t){return a.get(t)}async function c(t){return await l(t),(0,n.f)(t),new Promise((t=>requestAnimationFrame((()=>t()))))}},3543:(t,e,o)=>{o.d(e,{C:()=>n,I:()=>a,S:()=>i,a:()=>s});const n={menu:"menu",defaultTrigger:"default-trigger"},i={tooltip:"tooltip",trigger:"trigger"},a={menu:"ellipsis"},s="data-active"},9163:(t,e,o)=>{o.d(e,{C:()=>a,I:()=>i,S:()=>n});const n={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},i={menu:"ellipsis"},a={container:"container"}},8065:(t,e,o)=>{o.d(e,{c:()=>h,d:()=>u,s:()=>l,u:()=>d});var n=o(9113),i=o(3213);const a={};function s(){throw new Error("could not fetch component message bundle")}function r(t){t.messages={...t.defaultMessages,...t.messageOverrides}}async function l(t){t.defaultMessages=await c(t,t.effectiveLocale),r(t)}async function c(t,e){const{el:o}=t,r=o.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const o=`${e}_${t}`;return a[o]||(a[o]=fetch((0,n.a)(`./assets/${e}/t9n/messages_${t}.json`)).then((t=>(t.ok||s(),t.json()))).catch((()=>s()))),a[o]}((0,i.g)(e,"t9n"),r)}async function d(t,e){t.defaultMessages=await c(t,e),r(t)}function h(t){t.onMessagesChange=f}function u(t){t.onMessagesChange=void 0}function f(){r(this)}}}]);