import{C as n,s,r as $}from"./index-CfYIJcxX.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class E{constructor(t,i,e,o,r="div"){this.parent=t,this.object=i,this.property=e,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),E.nextNameID=E.nextNameID||0,this.$name.id=`lil-gui-name-${++E.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(e)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class D extends E{constructor(t,i,e){super(t,i,e,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function S(l){let t,i;return(t=l.match(/(#|0x)?([a-f0-9]{6})/i))?i=t[2]:(t=l.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=l.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),i?"#"+i:!1}const I={isPrimitive:!0,match:l=>typeof l=="string",fromHexString:S,toHexString:S},A={isPrimitive:!0,match:l=>typeof l=="number",fromHexString:l=>parseInt(l.substring(1),16),toHexString:l=>"#"+l.toString(16).padStart(6,0)},T={isPrimitive:!1,match:l=>Array.isArray(l)||ArrayBuffer.isView(l),fromHexString(l,t,i=1){const e=A.fromHexString(l);t[0]=(e>>16&255)/255*i,t[1]=(e>>8&255)/255*i,t[2]=(e&255)/255*i},toHexString([l,t,i],e=1){e=255/e;const o=l*e<<16^t*e<<8^i*e<<0;return A.toHexString(o)}},R={isPrimitive:!1,match:l=>Object(l)===l,fromHexString(l,t,i=1){const e=A.fromHexString(l);t.r=(e>>16&255)/255*i,t.g=(e>>8&255)/255*i,t.b=(e&255)/255*i},toHexString({r:l,g:t,b:i},e=1){e=255/e;const o=l*e<<16^t*e<<8^i*e<<0;return A.toHexString(o)}},N=[I,A,T,R];function P(l){return N.find(t=>t.match(l))}class H extends E{constructor(t,i,e,o){super(t,i,e,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=P(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=S(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class x extends E{constructor(t,i,e){super(t,i,e,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class k extends E{constructor(t,i,e,o,r,h){super(t,i,e,"lil-number"),this._initInput(),this.min(o),this.max(r);const c=h!==void 0;this.step(c?h:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let a=parseFloat(this.$input.value);isNaN(a)||(this._stepExplicit&&(a=this._snap(a)),this.setValue(this._clamp(a)))},e=a=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+a),this.$input.value=this.getValue())},o=a=>{a.key==="Enter"&&this.$input.blur(),a.code==="ArrowUp"&&(a.preventDefault(),e(this._step*this._arrowKeyMultiplier(a))),a.code==="ArrowDown"&&(a.preventDefault(),e(this._step*this._arrowKeyMultiplier(a)*-1))},r=a=>{this._inputFocused&&(a.preventDefault(),e(this._step*this._normalizeMouseWheel(a)))};let h=!1,c,g,m,u,_;const v=5,w=a=>{c=a.clientX,g=m=a.clientY,h=!0,u=this.getValue(),_=0,window.addEventListener("mousemove",b),window.addEventListener("mouseup",C)},b=a=>{if(h){const f=a.clientX-c,O=a.clientY-g;Math.abs(O)>v?(a.preventDefault(),this.$input.blur(),h=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>v&&C()}if(!h){const f=a.clientY-m;_-=f*this._step*this._arrowKeyMultiplier(a),u+_>this._max?_=this._max-u:u+_<this._min&&(_=this._min-u),this._snapClampSetValue(u+_)}m=a.clientY},C=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",b),window.removeEventListener("mouseup",C)},F=()=>{this._inputFocused=!0},d=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",o),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",w),this.$input.addEventListener("focus",F),this.$input.addEventListener("blur",d)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(d,a,f,O,M)=>(d-a)/(f-a)*(M-O)+O,i=d=>{const a=this.$slider.getBoundingClientRect();let f=t(d,a.left,a.right,this._min,this._max);this._snapClampSetValue(f)},e=d=>{this._setDraggingStyle(!0),i(d.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",r)},o=d=>{i(d.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",r)};let h=!1,c,g;const m=d=>{d.preventDefault(),this._setDraggingStyle(!0),i(d.touches[0].clientX),h=!1},u=d=>{d.touches.length>1||(this._hasScrollBar?(c=d.touches[0].clientX,g=d.touches[0].clientY,h=!0):m(d),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",v))},_=d=>{if(h){const a=d.touches[0].clientX-c,f=d.touches[0].clientY-g;Math.abs(a)>Math.abs(f)?m(d):(window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v))}else d.preventDefault(),i(d.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",v)},w=this._callOnFinishChange.bind(this),b=400;let C;const F=d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const f=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(C),C=setTimeout(w,b)};this.$slider.addEventListener("mousedown",e),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",F,{passive:!1})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${i}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:e}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,e=-t.wheelDelta/120,e*=this._stepExplicit?1:10),i+-e}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class V extends E{constructor(t,i,e,o){super(t,i,e,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(i=>{const e=document.createElement("option");e.textContent=i,this.$select.appendChild(e)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=i===-1?t:this._names[i],this}}class U extends E{constructor(t,i,e){super(t,i,e,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var G=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function Y(l){const t=document.createElement("style");t.innerHTML=l;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(t,i):document.head.appendChild(t)}let L=!1;class y{constructor({parent:t,autoPlace:i=t===void 0,container:e,width:o,title:r="Controls",closeFolders:h=!1,injectStyles:c=!0,touchStyles:g=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),g&&this.domElement.classList.add("lil-allow-touch-styles"),!L&&c&&(Y(G),L=!0),e?e.appendChild(this.domElement):i&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=h}add(t,i,e,o,r){if(Object(e)===e)return new V(this,t,i,e);const h=t[i];switch(typeof h){case"number":return new k(this,t,i,e,o,r);case"boolean":return new D(this,t,i);case"string":return new U(this,t,i);case"function":return new x(this,t,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,t,`
	value:`,h)}addColor(t,i,e=1){return new H(this,t,i,e)}addFolder(t){const i=new y({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach(e=>{e instanceof x||e._name in t.controllers&&e.load(t.controllers[e._name])}),i&&t.folders&&this.folders.forEach(e=>{e._title in t.folders&&e.load(t.folders[e._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof x)){if(e._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${e._name}"`);i.controllers[e._name]=e.save()}}),t&&this.folders.forEach(e=>{if(e._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${e._title}"`);i.folders[e._title]=e.save()}),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("lil-transition");const e=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",e))};this.$children.addEventListener("transitionend",e);const o=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}let p=null;function B(){p&&p.destroy(),p=new y({title:"Snek Admin"}),p.domElement.style.zIndex="10000";const l=p.addFolder("World");l.add(n,"GRID_SIZE",20,200,1).name("Grid Size (restart)").onFinishChange(s),l.add(n,"NUM_OBSTACLES",0,100,1).name("Obstacles (restart)").onFinishChange(s),l.add(n,"NUM_INITIAL_FOOD",10,500,1).name("Initial Food (restart)").onFinishChange(s),l.add(n,"WALL_HEIGHT",1,10,.5).name("Wall Height").onFinishChange(s),l.add(n,"WALL_THICKNESS",.5,5,.5).name("Wall Thickness").onFinishChange(s),l.addColor(n,"GROUND_COLOR").name("Ground Color").onFinishChange(s),l.addColor(n,"FOG_COLOR").name("Fog Color").onFinishChange(s),l.add(n,"FOG_DENSITY",0,.1,.005).name("Fog Density").onFinishChange(s),l.add(n,"START_SAFE_ZONE",1,20,1).name("Start Safe Zone (restart)").onFinishChange(s),l.close();const t=p.addFolder("Player");t.add(n,"BASE_SNAKE_SPEED",.05,1,.01).name("Base Speed").onFinishChange(s),t.add(n,"MIN_SNAKE_LENGTH",1,10,1).name("Min Length").onFinishChange(s),t.add(n,"ENLARGED_HEAD_DURATION",0,10,.5).name("Enlarged Head Duration").onFinishChange(s),t.add(n,"ENLARGED_HEAD_SCALE",1,5,.1).name("Enlarged Head Scale").onFinishChange(s),t.close();const i=p.addFolder("Camera");i.add(n,"CAMERA_DISTANCE",3,30,.5).name("Distance").onFinishChange(s),i.add(n,"CAMERA_HEIGHT",3,30,.5).name("Height").onFinishChange(s),i.add(n,"CAMERA_LAG",0,1,.05).name("Lag").onFinishChange(s),i.add(n,"CAMERA_POSITION_SMOOTHNESS",.001,.1,.001).name("Pos Smoothness").onFinishChange(s),i.add(n,"CAMERA_ROTATION_SMOOTHNESS",.001,.2,.001).name("Rot Smoothness").onFinishChange(s),i.add(n,"CAMERA_SHAKE_ENABLED").name("Shake Enabled").onFinishChange(s),i.add(n,"CAMERA_SHAKE_DURATION",0,2,.05).name("Shake Duration").onFinishChange(s),i.add(n,"CAMERA_SHAKE_INTENSITY",0,20,.5).name("Shake Intensity").onFinishChange(s),i.close();const e=p.addFolder("Food");e.add(n,"FOOD_SPEED_BOOST_DURATION",1,30,.5).name("Speed Boost Duration").onFinishChange(s),e.add(n,"FOOD_SPEED_BOOST_MULTIPLIER",1,5,.1).name("Speed Boost Multi").onFinishChange(s),e.add(n,"ALPHA_MODE_EXTENSION_PER_FOOD",0,5,.1).name("Alpha Ext/Food").onFinishChange(s);const o=e.addFolder("Spawn Ratios");o.add(n.FOOD_SPAWN_RATIOS,"normal",0,100,1).name("Normal").onFinishChange(s),o.add(n.FOOD_SPAWN_RATIOS,"speed",0,100,1).name("Speed").onFinishChange(s),o.add(n.FOOD_SPAWN_RATIOS,"shrink",0,100,1).name("Shrink").onFinishChange(s),o.add(n.FOOD_SPAWN_RATIOS,"score_x2",0,100,1).name("Score x2").onFinishChange(s),o.add(n.FOOD_SPAWN_RATIOS,"ghost",0,100,1).name("Ghost").onFinishChange(s),e.close();const r=p.addFolder("Enemies");r.add(n,"NUM_ENEMIES",0,30,1).name("Count (restart)").onFinishChange(s),r.add(n,"ENEMY_START_LENGTH",2,20,1).name("Start Length (restart)").onFinishChange(s),r.add(n,"ENEMY_SNAKE_SPEED",.05,2,.01).name("Speed").onFinishChange(s),r.add(n,"ENEMY_START_SAFE_ZONE",1,40,1).name("Safe Zone").onFinishChange(s),r.add(n,"ENEMY_TAIL_EDIBLE_SEGMENTS",1,10,1).name("Edible Tail Segs").onFinishChange(s),r.addColor(n,"ENEMY_TAIL_COLOR").name("Tail Color").onFinishChange(s),r.add(n,"ENEMY_KILL_SCORE",1,100,1).name("Kill Score").onFinishChange(s),r.add(n,"ENEMY_RESPAWN_TIME",1,30,.5).name("Respawn Time").onFinishChange(s),r.add(n,"ENEMY_KILL_SEGMENTS",1,20,1).name("Kill Segments").onFinishChange(s),r.close();const h=p.addFolder("Power-ups");h.add(n,"POWERUP_SPEED_DURATION",1,60,1).name("Speed Duration").onFinishChange(s),h.add(n,"POWERUP_SPEED_MULTIPLIER",1,5,.1).name("Speed Multi").onFinishChange(s),h.add(n,"POWERUP_SHRINK_AMOUNT",1,20,1).name("Shrink Amount").onFinishChange(s),h.add(n,"POWERUP_SCORE_MULTIPLIER",1,10,.5).name("Score Multi").onFinishChange(s),h.add(n,"POWERUP_SCORE_MULTIPLIER_DURATION",1,60,1).name("Score Multi Duration").onFinishChange(s),h.add(n,"POWERUP_GHOST_DURATION",1,30,.5).name("Ghost Duration").onFinishChange(s),h.close();const c=p.addFolder("Alpha Mode");c.add(n,"ALPHA_POINTS_THRESHOLD",5,100,1).name("Points Threshold").onFinishChange(s),c.add(n,"ALPHA_POINTS_FOOD",1,20,1).name("Points/Food").onFinishChange(s),c.add(n,"ALPHA_POINTS_FROG",1,30,1).name("Points/Frog").onFinishChange(s),c.add(n,"ALPHA_POINTS_ENEMY",1,50,1).name("Points/Enemy Kill").onFinishChange(s),c.add(n,"ALPHA_POINTS_DECAY_RATE",0,5,.1).name("Points Decay").onFinishChange(s),c.add(n,"ALPHA_POINTS_FROG_MULTIPLIER",1,5,.1).name("Frog Pts Multi").onFinishChange(s),c.add(n,"ALPHA_MODE_SCORE_THRESHOLD",100,5e3,100).name("Score Threshold").onFinishChange(s),c.add(n,"ALPHA_MODE_DURATION",1,30,.5).name("Duration").onFinishChange(s),c.add(n,"ALPHA_MODE_SPEED_MULTIPLIER",1,5,.1).name("Speed Multi").onFinishChange(s),c.addColor(n,"ALPHA_MODE_COLOR").name("Color").onFinishChange(s),c.add(n,"ALPHA_MODE_EXTENSION_PER_ENEMY",0,10,.5).name("Ext/Enemy Kill").onFinishChange(s),c.add(n,"ALPHA_MODE_SCORE_MULTIPLIER",1,10,.1).name("Score Multi").onFinishChange(s),c.add(n,"ALPHA_MODE_SCORE_MULTIPLIER_DURATION",1,30,.5).name("Score Multi Dur").onFinishChange(s),c.add(n,"ALPHA_MODE_MAX_SCORE_MULTIPLIER",1,50,1).name("Max Score Multi").onFinishChange(s),c.close();const g=p.addFolder("Audio");g.add(n.AUDIO_VOLUME,"MUSIC",0,1,.05).name("Music Volume").onFinishChange(s),g.add(n.AUDIO_VOLUME,"MOVEMENT_SOUNDS",0,1,.05).name("Movement Vol").onFinishChange(s),g.add(n.AUDIO_VOLUME,"EATING_SOUNDS",0,1,.05).name("Eating Vol").onFinishChange(s),g.add(n.AUDIO_VOLUME,"ALPHA_MODE_SOUNDS",0,1,.05).name("Alpha Sound Vol").onFinishChange(s),g.add(n.AUDIO_VOLUME,"DEATH_SOUND",0,1,.05).name("Death Sound Vol").onFinishChange(s),g.add(n.AUDIO_ENABLED,"MUSIC").name("Music On").onFinishChange(s),g.add(n.AUDIO_ENABLED,"SOUND_EFFECTS").name("SFX On").onFinishChange(s),g.close();const m=p.addFolder("Particles");m.add(n,"PARTICLE_COUNT_KILL",0,50,1).name("Kill Count").onFinishChange(s),m.addColor(n,"PARTICLE_COLOR_KILL").name("Kill Color").onFinishChange(s),m.add(n,"PARTICLE_COUNT_NORMAL_FOOD",0,20,1).name("Food Count").onFinishChange(s),m.addColor(n,"PARTICLE_COLOR_NORMAL_FOOD").name("Food Color").onFinishChange(s),m.add(n,"PARTICLE_COUNT_DEATH",0,50,1).name("Death Count").onFinishChange(s),m.add(n,"PARTICLE_SIZE",.5,10,.5).name("Size").onFinishChange(s),m.add(n,"PARTICLE_LIFESPAN",.05,2,.05).name("Lifespan").onFinishChange(s),m.add(n,"PARTICLE_SPEED",.5,20,.5).name("Speed").onFinishChange(s),m.close();const u=p.addFolder("Frog Movement");u.add(n.FROG_MOVEMENT,"BASE_SPEED",.5,10,.5).name("Base Speed").onFinishChange(s),u.add(n.FROG_MOVEMENT,"SPEED_VARIATION",0,5,.1).name("Speed Var").onFinishChange(s),u.add(n.FROG_MOVEMENT,"HOP_HEIGHT",0,2,.1).name("Hop Height").onFinishChange(s),u.add(n.FROG_MOVEMENT,"HOP_FREQUENCY",.1,5,.1).name("Hop Freq").onFinishChange(s),u.add(n.FROG_MOVEMENT,"HOP_FREQUENCY_VARIATION",0,3,.1).name("Hop Freq Var").onFinishChange(s),u.add(n.FROG_MOVEMENT,"MAX_DISTANCE",1,20,1).name("Max Distance").onFinishChange(s),u.add(n.FROG_MOVEMENT,"DISTANCE_VARIATION",0,10,.5).name("Dist Var").onFinishChange(s),u.add(n.FROG_MOVEMENT,"DIRECTION_CHANGE_PROBABILITY",0,.05,.001).name("Dir Change Prob").onFinishChange(s),u.add(n.FROG_MOVEMENT,"MOVEMENT_STYLE",["hop","crawl"]).name("Style").onFinishChange(s),u.add(n.FROG_MOVEMENT,"MOVE_INTERVAL",.1,3,.1).name("Move Interval").onFinishChange(s),u.close();const _=p.addFolder("Actions");return _.add({reset:()=>{$(),p.destroy(),B()}},"reset").name("Reset All to Defaults"),_.add({restart:()=>{window.location.reload()}},"restart").name("Restart Game"),p}export{B as initAdminPanel};
