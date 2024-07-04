/*! For license information please see 7287.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7287],{3849:(e,t,s)=>{function i(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}s.d(t,{g:()=>i})},7287:(e,t,s)=>{s.r(t),s.d(t,{calcite_chip_group:()=>r});var i=s(9113),n=s(7146),c=s(2627),a=s(8773),o=s(8545);s(8220);const r=class{constructor(e){(0,i.r)(this,e),this.calciteChipGroupSelect=(0,i.c)(this,"calciteChipGroupSelect",6),this.mutationObserver=(0,a.c)("mutation",(()=>this.updateItems())),this.items=[],this.updateItems=e=>{const t=e?e.target:this.slotRefEl;this.items=t?.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-chip"))),this.items?.forEach((e=>{e.interactive=!0,e.scale=this.scale,e.selectionMode=this.selectionMode})),this.setSelectedItems(!1)},this.setSelectedItems=(e,t)=>{t&&this.items?.forEach((e=>{const s=t===e;switch(this.selectionMode){case"multiple":s&&(e.selected=!e.selected);break;case"single":e.selected=!!s&&!e.selected;break;case"single-persist":e.selected=!!s}})),this.selectedItems=this.items?.filter((e=>e.selected)),e&&this.calciteChipGroupSelect.emit()},this.disabled=!1,this.label=void 0,this.scale="m",this.selectionMode="none",this.selectedItems=[]}onSelectionModeChange(){this.updateItems()}connectedCallback(){(0,c.c)(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentDidRender(){(0,c.d)(this),(0,c.u)(this)}componentDidLoad(){(0,o.a)(this)}disconnectedCallback(){this.mutationObserver?.disconnect()}async componentWillLoad(){(0,o.s)(this)}calciteInternalChipKeyEventListener(e){if(e.composedPath().includes(this.el)){const t=this.items?.filter((e=>!e.disabled));switch(e.detail.key){case"ArrowRight":(0,n.l)(t,e.detail.target,"next");break;case"ArrowLeft":(0,n.l)(t,e.detail.target,"previous");break;case"Home":(0,n.l)(t,e.detail.target,"first");break;case"End":(0,n.l)(t,e.detail.target,"last")}}}calciteChipCloseListener(e){const t=e.target;this.items?.includes(t)&&(this.items?.indexOf(t)>0?(0,n.l)(this.items,t,"previous"):0===this.items?.indexOf(t)?(0,n.l)(this.items,t,"next"):(0,n.l)(this.items,t,"first")),this.items=this.items?.filter((e=>e!==t))}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(!0,e.target)}async setFocus(){if(await(0,o.c)(this),!this.disabled)return(this.selectedItems[0]||this.items[0])?.setFocus()}render(){const e="none"===this.selectionMode||"multiple"===this.selectionMode?"group":"radiogroup",{disabled:t}=this;return(0,i.h)(c.I,{disabled:t},(0,i.h)("div",{"aria-disabled":(0,n.t)(t),"aria-label":this.label,class:"container",role:e},(0,i.h)("slot",{onSlotchange:this.updateItems,ref:e=>this.slotRefEl=e})))}get el(){return(0,i.g)(this)}static get watchers(){return{selectionMode:["onSelectionModeChange"]}}};r.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:0.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:0.25rem}:host([scale=l]) .container{gap:0.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"},2627:(e,t,s)=>{s.d(t,{I:()=>k,c:()=>v,d:()=>g,u:()=>u});var i=s(3849),n=s(9113);const c=/firefox/i.test((0,i.g)()),a=c?new WeakMap:null;function o(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function r(e){const t=e.target;if(c&&!a.get(t))return;const{disabled:s}=t;s&&e.preventDefault()}const l=["mousedown","mouseup","click"];function d(e){const t=e.target;c&&!a.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const h={capture:!0};function u(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void p(e);b(e),e.el.removeAttribute("aria-disabled")}function p(e){if(e.el.click=o,c){const t=function(e){return e.el.parentElement||e.el}(e),s=a.get(e.el);return s!==t&&(f(s),a.set(e.el,t)),void m(a.get(e.el))}m(e.el)}function m(e){e&&(e.addEventListener("pointerdown",r,h),l.forEach((t=>e.addEventListener(t,d,h))))}function b(e){if(delete e.el.click,c)return f(a.get(e.el)),void a.delete(e.el);f(e.el)}function f(e){e&&(e.removeEventListener("pointerdown",r,h),l.forEach((t=>e.removeEventListener(t,d,h))))}function v(e){e.disabled&&c&&p(e)}function g(e){c&&b(e)}const w={container:"interaction-container"};function k({disabled:e},t){return(0,n.h)("div",{class:w.container,inert:e},...t)}},8545:(e,t,s)=>{s.d(t,{a:()=>o,b:()=>r,c:()=>l,s:()=>a});var i=s(9113);const n=new WeakMap,c=new WeakMap;function a(e){c.set(e,new Promise((t=>n.set(e,t))))}function o(e){n.get(e)()}function r(e){return c.get(e)}async function l(e){return await r(e),(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},8773:(e,t,s)=>{function i(e,t,s){const i=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new i(t,s)}s.d(t,{c:()=>i})}}]);