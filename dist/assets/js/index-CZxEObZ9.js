import{c as p}from"./confetti-BxKCmZ95.js";import{_ as M,L as C,S as k,a as O}from"./components-Cq6mJ6Hb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();class T{constructor(e){this.wheel=e}createEmptyWheel(){const e=document.createElement("div");e.className="wheel-fallback glass-card";const t=this.wheel.languageManager?this.wheel.languageManager.t("options.noOptionsWheel"):"No Options Added",i=this.wheel.languageManager?this.wheel.languageManager.t("options.noOptionsWheelDesc"):"Add some options to get started with your decision wheel!";e.innerHTML=`
      <div class="fallback-icon">🎯</div>
      <h3>${t}</h3>
      <p>${i}</p>
      <div class="fallback-arrow">👆</div>
    `,e.style.cssText=`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      padding: 2rem;
      max-width: 350px;
      width: 90vw;
      animation: fadeIn 0.5s ease-out;
    `;const n=this.wheel.container.parentElement;n.style.position="relative",n.appendChild(e),this.wheel.container.style.opacity="0.1"}createSegment(e,t,i,n,s,o,r,a){const c=n*Math.PI/180,u=s*Math.PI/180,g=e+i*Math.cos(c),y=t+i*Math.sin(c),f=e+i*Math.cos(u),w=t+i*Math.sin(u),d=s-n>180?1:0,v=[`M ${e} ${t}`,`L ${g} ${y}`,`A ${i} ${i} 0 ${d} 1 ${f} ${w}`,"Z"].join(" "),m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d",v),m.setAttribute("fill",o),m.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),m.setAttribute("stroke-width","1"),m.setAttribute("class","wheel-segment"),m.setAttribute("data-index",a);const b=(n+s)/2,x=i*.6,S=e+x*Math.cos(b*Math.PI/180),E=t+x*Math.sin(b*Math.PI/180),h=document.createElementNS("http://www.w3.org/2000/svg","text");h.setAttribute("x",S),h.setAttribute("y",E),h.setAttribute("text-anchor","middle"),h.setAttribute("dominant-baseline","central"),h.setAttribute("fill","white"),h.setAttribute("font-size",this.calculateFontSize(r,this.wheel.options.length)),h.setAttribute("font-weight","600"),h.setAttribute("font-family","system-ui, -apple-system, sans-serif"),h.setAttribute("transform",`rotate(${b}, ${S}, ${E})`),h.style.textShadow="0.5px 0.5px 1px rgba(0,0,0,0.4)",h.style.filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.4))",h.textContent=this.truncateText(r,this.wheel.options.length),this.wheel.segmentsGroup.appendChild(m),this.wheel.segmentsGroup.appendChild(h)}calculateFontSize(e,t){const i=window.innerWidth<=480,n=window.innerWidth<=768;let s,o;i?(s=50,o=35):n?(s=52,o=35):(s=42,o=24);const r=Math.max(.6,1-t/20),a=Math.max(.5,1-e.length/20),c=r*a;return Math.max(o,s*c)}truncateText(e,t){const i=window.innerWidth<=480,n=window.innerWidth<=768;let s;if(i?s=t>6?6:t>3?8:12:n?s=t>6?8:t>3?12:16:s=t>6?10:t>3?15:20,e.length<=s)return e;const o=e.substring(0,s-1),r=o.lastIndexOf(" ");return r>s*.5?o.substring(0,r)+"…":o+"…"}createSingleOptionWheel(e,t,i,n){const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx",e),s.setAttribute("cy",t),s.setAttribute("r",i),s.setAttribute("fill",this.wheel.colors[0]),s.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),s.setAttribute("stroke-width","2"),s.setAttribute("class","wheel-segment"),s.setAttribute("data-index","0");const o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("x",e),o.setAttribute("y",t),o.setAttribute("text-anchor","middle"),o.setAttribute("dominant-baseline","central"),o.setAttribute("fill","white"),o.setAttribute("font-size",window.innerWidth>768?"48":window.innerWidth>480?"50":"44"),o.setAttribute("font-weight","700"),o.textContent=this.truncateText(n,1),this.wheel.segmentsGroup.appendChild(s),this.wheel.segmentsGroup.appendChild(o)}waitForSpin(e){return new Promise(t=>setTimeout(t,e))}}class L{constructor(e=null,t="wheel-svg"){typeof e=="string"&&(t=e,e=null),this.languageManager=e,this.container=document.getElementById(t),this.segmentsGroup=document.getElementById("wheel-segments"),this.options=[],this.isSpinning=!1,this.currentRotation=0,this.colors=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FECA57","#FF9FF3","#54A0FF","#5F27CD","#00D2D3","#FF9F43","#FF3838","#2ED573","#1E90FF","#FF6348","#7BED9F"],this.helpers=new T(this),this.initializeEventListeners()}initializeEventListeners(){const e=document.getElementById("spin-btn");e&&e.addEventListener("click",()=>this.spin()),document.addEventListener("autoSpin",()=>{this.spin()})}updateOptions(e){this.options=[...e],this.generateWheel(),this.updateSpinButtonState()}generateWheel(){if(!this.segmentsGroup)return;if(this.segmentsGroup.innerHTML="",this.clearFallback(),this.options.length===0){this.helpers.createEmptyWheel();return}this.container.style.opacity="1";const e=360/this.options.length,t=320,i=350,n=350;if(this.options.length===1){this.helpers.createSingleOptionWheel(i,n,t,this.options[0]);return}this.options.forEach((s,o)=>{const r=o*e,a=(o+1)*e,c=this.colors[o%this.colors.length];this.helpers.createSegment(i,n,t,r,a,c,s,o)})}clearFallback(){const t=this.container.parentElement.querySelector(".wheel-fallback");t&&t.remove()}async spin(){if(this.isSpinning||this.options.length===0)return;this.isSpinning=!0,this.updateSpinButtonState();const e=3,i=Math.random()*(6-e)+e,n=Math.random()*360,s=i*360+n,o=this.currentRotation+s;this.container.style.transform=`rotate(${o}deg)`,this.container.style.transition="transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",await this.helpers.waitForSpin(3e3);const r=360/this.options.length;let a=o%360;a<0&&(a+=360);let u=(270-a)%360;u<0&&(u+=360);const g=Math.floor(u/r)%this.options.length;console.log(`Wheel Debug:
      Final rotation: ${o}°
      Normalized rotation: ${a}°
      Pointing angle: ${u}°
      Segment angle: ${r}°
      Winner index: ${g}
      Winner: "${this.options[g]}"
      Options: [${this.options.map((y,f)=>`${f}:"${y}"`).join(", ")}]`),this.currentRotation=o,this.isSpinning=!1,this.updateSpinButtonState(),this.announceWinner(this.options[g])}announceWinner(e){const t=new CustomEvent("wheelWinner",{detail:{winner:e}});document.dispatchEvent(t)}updateSpinButtonState(){const e=document.getElementById("spin-btn");if(e){e.disabled=this.isSpinning||this.options.length===0;const t=this.languageManager?this.languageManager.t("wheel.spinButton"):"Spin the Wheel!",i=this.languageManager?this.languageManager.t("wheel.spinningButton"):"Spinning...";e.textContent=this.isSpinning?i:t}}reset(){this.currentRotation=0,this.container.style.transform="rotate(0deg)",this.container.style.transition="none",this.isSpinning=!1,this.updateSpinButtonState()}}class I{constructor(e){this.manager=e}createOptionElement(e,t){const i=document.createElement("div");i.className="option-item",i.style.opacity="0",i.style.transform="translateX(-20px)";const n=this.manager.t("options.editButton"),s=this.manager.t("options.removeButton");return i.innerHTML=`
      <span class="option-text" title="${e}">${e}</span>
      <div class="option-buttons">
        <button class="edit-option" data-index="${t}" title="${n}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="remove-option" data-index="${t}" title="${s}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    `,i.querySelector(".edit-option").addEventListener("click",()=>{this.manager.actions.editOption(t,i)}),i.querySelector(".remove-option").addEventListener("click",()=>{this.animateOptionRemove(i,()=>{this.manager.actions.removeOption(t)})}),i}animateOptionAdd(e){e.offsetHeight,e.style.transition="all 0.3s ease-out",e.style.opacity="1",e.style.transform="translateX(0)",setTimeout(()=>{e.style.transform="scale(1.02)",setTimeout(()=>{e.style.transform="scale(1)"},100)},300)}animateOptionRemove(e,t){e.style.transition="all 0.3s ease-in",e.style.opacity="0",e.style.transform="translateX(20px) scale(0.8)",e.style.maxHeight=e.offsetHeight+"px",setTimeout(()=>{e.style.maxHeight="0",e.style.padding="0",e.style.margin="0",setTimeout(()=>{t()},200)},300)}renderEmptyState(){const e=document.createElement("div");e.className="empty-state",e.style.opacity="0";const t=this.manager.t("options.noOptionsYet");e.innerHTML=`
      <p style="text-align: center; opacity: 0.7; font-style: italic; padding: 2rem;">
        ${t}
      </p>
    `,this.manager.optionsList.appendChild(e),setTimeout(()=>{e.style.transition="opacity 0.3s ease-in",e.style.opacity="1"},50)}setInputError(e){this.manager.optionInput&&(this.manager.optionInput.style.borderColor="#ff6b6b",this.manager.optionInput.style.boxShadow="0 0 0 3px rgba(255, 107, 107, 0.2)",this.manager.optionInput.title=e,this.manager.optionInput.style.animation="shake 0.5s ease-in-out",setTimeout(()=>{this.manager.optionInput.style.animation=""},500))}clearInputError(){this.manager.optionInput&&(this.manager.optionInput.style.borderColor="",this.manager.optionInput.style.boxShadow="",this.manager.optionInput.title="",this.manager.optionInput.style.animation="")}showInputError(){const e=this.manager.t("input.emptyOptionError");this.showToast(e,"error")}showDuplicateError(){const e=this.manager.t("input.duplicateOptionError");this.showToast(e,"warning")}showMaxOptionsError(){const e=this.manager.t("input.maxOptionsReached",{max:this.manager.maxOptions});this.showToast(e,"warning")}showSuccessFeedback(){const e=this.manager.t("success.optionAdded");this.showToast(e,"success")}showRemovalFeedback(e){const t=this.manager.t("success.optionDeleted");this.showToast(t,"info")}showClearFeedback(){const e=this.manager.t("success.optionsCleared");this.showToast(e,"info")}showEditSuccessFeedback(e,t){const i=this.manager.t("success.optionEdited",{oldText:e,newText:t});this.showToast(i,"success")}showToast(e,t="info"){const i=document.createElement("div");i.className=`toast toast-${t}`,i.textContent=e,i.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      z-index: 10000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease-out;
      background: ${this.getToastColor(t)};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `,document.body.appendChild(i),setTimeout(()=>{i.style.opacity="1",i.style.transform="translateX(0)"},50),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateX(100%)",setTimeout(()=>{document.body.removeChild(i)},300)},3e3)}getToastColor(e){const t={success:"linear-gradient(135deg, #2ed573, #1e90ff)",error:"linear-gradient(135deg, #ff6b6b, #ee5a24)",warning:"linear-gradient(135deg, #feca57, #ff9f43)",info:"linear-gradient(135deg, #4ecdc4, #45b7d1)"};return t[e]||t.info}saveOptions(){try{localStorage.setItem("wheelOptions",JSON.stringify(this.manager.options))}catch(e){console.warn("Could not save options to localStorage:",e)}}loadSavedOptions(){try{const e=localStorage.getItem("wheelOptions");if(e){const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0){this.manager.options=t.filter(i=>typeof i=="string"&&this.manager.isValidOption(i)),this.manager.renderOptions(),this.manager.notifyOptionsChanged();return}}this.setDefaultOptions()}catch(e){console.warn("Could not load options from localStorage:",e),this.setDefaultOptions()}}setDefaultOptions(){this.manager.options=["Pizza","Sushi","Tacos","Burgers","Thai Food"],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged()}}class z{constructor(e){this.manager=e}addOption(){if(!this.manager.optionInput)return;const e=this.manager.optionInput.value.trim();if(!this.manager.isValidOption(e)){this.manager.helpers.showInputError();return}if(this.manager.isDuplicate(e)){this.manager.helpers.showDuplicateError();return}if(this.manager.options.length>=this.manager.maxOptions){this.manager.helpers.showMaxOptionsError();return}this.manager.options.push(e),this.manager.clearInput(),this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showSuccessFeedback()}removeOption(e){if(e>=0&&e<this.manager.options.length){const t=this.manager.options.splice(e,1)[0];this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showRemovalFeedback(t)}}editOption(e,t){if(e<0||e>=this.manager.options.length)return;const i=this.manager.options[e],n=t.querySelector(".option-text"),s=t.querySelector(".option-buttons"),o=document.createElement("input");o.type="text",o.className="edit-option-input",o.value=i,o.maxLength=this.manager.maxOptionLength;const r=this.manager.t("options.saveEditButton"),a=this.manager.t("options.cancelEditButton"),c=document.createElement("div");c.className="edit-controls",c.innerHTML=`
      <button class="save-edit" title="${r}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      </button>
      <button class="cancel-edit" title="${a}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `,n.style.display="none",s.style.display="none",t.insertBefore(o,n),t.insertBefore(c,n),o.focus(),o.select();const u=c.querySelector(".save-edit"),g=c.querySelector(".cancel-edit"),y=()=>{const d=o.value.trim();if(!this.manager.isValidOption(d)){this.manager.helpers.showInputError(),o.focus();return}if(this.manager.options.filter((m,b)=>b!==e).includes(d)){this.manager.helpers.showDuplicateError(),o.focus();return}this.manager.options[e]=d,this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showEditSuccessFeedback(i,d)},f=()=>{o.remove(),c.remove(),n.style.display="",s.style.display=""};u.addEventListener("click",y),g.addEventListener("click",f),o.addEventListener("keydown",d=>{d.key==="Enter"?(d.preventDefault(),y()):d.key==="Escape"&&(d.preventDefault(),f())});const w=d=>{t.contains(d.target)||(f(),document.removeEventListener("click",w))};setTimeout(()=>{document.addEventListener("click",w)},100)}async clearAllOptions(){if(this.manager.options.length!==0){if(this.manager.options.length>1){const e=this.manager.t("input.clearAllButton"),t=this.manager.t("input.clearAllConfirmation",{count:this.manager.options.length}),i=this.manager.t("input.clearAllButton"),n=this.manager.t("options.cancelEdit");if(!await this.manager.confirmationModal.show({title:e,message:t,confirmText:i,cancelText:n}))return}this.manager.options=[],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showClearFeedback()}}}class B{constructor(e=null){this.languageManager=e,this.modal=null,this.isOpen=!1,this.currentResolve=null,this.createModal(),this.setupEventListeners()}createModal(){const e=document.createElement("div");e.id="confirmation-modal",e.className="confirmation-modal hidden",e.innerHTML=`
      <div class="confirmation-overlay"></div>
      <div class="confirmation-content glass-card">
        <div class="confirmation-header">
          <div class="confirmation-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.667-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h3 class="confirmation-title"></h3>
        </div>
        <div class="confirmation-body">
          <p class="confirmation-message"></p>
        </div>
        <div class="confirmation-footer">
          <button class="confirmation-cancel glass-btn">Cancel</button>
          <button class="confirmation-confirm glass-btn danger">Confirm</button>
        </div>
      </div>
    `,document.getElementById("app").appendChild(e),this.modal=e,this.addStyles()}addStyles(){const e="confirmation-modal-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      .confirmation-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }
      
      .confirmation-modal.open {
        opacity: 1;
      }
      
      .confirmation-modal.hidden {
        display: none;
      }
      
      .confirmation-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }
      
      .confirmation-content {
        position: relative;
        max-width: 450px;
        width: 90%;
        margin: 0 auto;
        padding: 0;
        transform: scale(0.9);
        transition: transform 0.3s ease-out;
      }
      
      .confirmation-modal.open .confirmation-content {
        transform: scale(1);
      }
      
      .confirmation-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 1.5rem 1rem 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .confirmation-icon {
        color: #ff6b6b;
        flex-shrink: 0;
      }
      
      .confirmation-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
      }
      
      .confirmation-body {
        padding: 1.5rem;
      }
      
      .confirmation-message {
        margin: 0;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.5;
      }
      
      .confirmation-footer {
        display: flex;
        gap: 0.75rem;
        padding: 1rem 1.5rem 1.5rem 1.5rem;
        justify-content: flex-end;
      }
      
      .confirmation-cancel {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .confirmation-cancel:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      
      .confirmation-confirm.danger {
        background: linear-gradient(135deg, #ff6b6b, #ee5a52);
        border: 1px solid rgba(255, 107, 107, 0.3);
      }
      
      .confirmation-confirm.danger:hover {
        background: linear-gradient(135deg, #ff5252, #e53935);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
      }
      
      @media (max-width: 480px) {
        .confirmation-content {
          width: 95%;
          max-width: none;
        }
        
        .confirmation-footer {
          flex-direction: column;
        }
        
        .confirmation-footer button {
          width: 100%;
        }
      }
      
      /* Disable hover effects on touch devices */
      @media (hover: none) and (pointer: coarse) {
        .confirmation-cancel:hover,
        .confirmation-confirm.danger:hover {
          background: inherit !important;
          transform: none !important;
          box-shadow: inherit !important;
        }
        
        .confirmation-cancel,
        .confirmation-confirm {
          transition: none !important;
        }
        
        .confirmation-cancel:active,
        .confirmation-confirm:active {
          transform: scale(0.98) !important;
          opacity: 0.8 !important;
        }
      }
    `,document.head.appendChild(t)}setupEventListeners(){this.modal.querySelector(".confirmation-overlay").addEventListener("click",()=>{this.close(!1)}),this.modal.querySelector(".confirmation-cancel").addEventListener("click",()=>{this.close(!1)}),this.modal.querySelector(".confirmation-confirm").addEventListener("click",()=>{this.close(!0)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close(!1)})}show(e={}){return new Promise(t=>{this.currentResolve=t;const i=e.title||(this.languageManager?this.languageManager.t("input.clearAllButton"):"Confirm Action"),n=e.message||"Are you sure you want to continue?",s=e.confirmText||(this.languageManager?this.languageManager.t("input.clearAllButton"):"Confirm"),o=e.cancelText||(this.languageManager?this.languageManager.t("options.cancelEdit"):"Cancel");this.modal.querySelector(".confirmation-title").textContent=i,this.modal.querySelector(".confirmation-message").textContent=n,this.modal.querySelector(".confirmation-confirm").textContent=s,this.modal.querySelector(".confirmation-cancel").textContent=o,this.modal.classList.remove("hidden"),this.isOpen=!0,document.body.style.overflow="hidden",requestAnimationFrame(()=>{this.modal.classList.add("open")}),setTimeout(()=>{this.modal.querySelector(".confirmation-cancel").focus()},100)})}close(e){this.isOpen&&(this.isOpen=!1,this.modal.classList.remove("open"),setTimeout(()=>{this.modal.classList.add("hidden"),document.body.style.overflow="",this.currentResolve&&(this.currentResolve(e),this.currentResolve=null)},300))}t(e){return this.languageManager?this.languageManager.t(e):e}}class D{constructor(e=null){this.options=[],this.maxOptions=20,this.minOptionLength=1,this.maxOptionLength=50,this.languageManager=e,this.optionInput=document.getElementById("option-input"),this.addButton=document.getElementById("add-option-btn"),this.clearButton=document.getElementById("clear-all-btn"),this.optionsList=document.getElementById("options-list"),this.helpers=new I(this),this.actions=new z(this),this.confirmationModal=new B(this.languageManager),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts(),this.renderOptions(),this.validateInput()})}updateUITexts(){if(!this.languageManager)return;const e=document.getElementById("app-title");e&&(e.textContent=this.languageManager.t("header.title"));const t=document.getElementById("app-subtitle");t&&(t.textContent=this.languageManager.t("header.subtitle")),this.optionInput&&(this.optionInput.placeholder=this.languageManager.t("input.placeholder")),this.addButton&&(this.addButton.textContent=this.languageManager.t("input.addButton")),this.clearButton&&(this.clearButton.textContent=this.languageManager.t("input.clearAllButton"));const i=document.querySelector("#input-section h2");i&&(i.textContent=this.languageManager.t("input.sectionTitle"));const n=document.getElementById("spin-btn");n&&(n.textContent=this.languageManager.t("wheel.spinButton"))}t(e,t={}){return this.languageManager?this.languageManager.t(e,t):e}initializeEventListeners(){this.addButton&&this.addButton.addEventListener("click",()=>this.actions.addOption()),this.optionInput&&(this.optionInput.addEventListener("keypress",e=>{e.key==="Enter"&&this.actions.addOption()}),this.optionInput.addEventListener("input",()=>this.validateInput())),this.clearButton&&this.clearButton.addEventListener("click",()=>this.actions.clearAllOptions())}isValidOption(e){return e.length>=this.minOptionLength&&e.length<=this.maxOptionLength}isDuplicate(e){return this.options.some(t=>t.toLowerCase()===e.toLowerCase())}validateInput(){if(!this.optionInput)return;const e=this.optionInput.value.trim(),t=this.addButton;t&&(e.length===0?(t.disabled=!0,this.helpers.clearInputError()):this.isValidOption(e)?this.isDuplicate(e)?(t.disabled=!0,this.helpers.setInputError(this.t("input.duplicateOptionError"))):this.options.length>=this.maxOptions?(t.disabled=!0,this.helpers.setInputError(this.t("input.maxOptionsReached",{max:this.maxOptions}))):(t.disabled=!1,this.helpers.clearInputError()):(t.disabled=!0,this.helpers.setInputError(this.t("input.optionTooLong",{max:this.maxOptionLength}))))}renderOptions(){if(this.optionsList){if(this.optionsList.innerHTML="",this.options.length===0){this.helpers.renderEmptyState();return}this.options.forEach((e,t)=>{const i=this.helpers.createOptionElement(e,t);this.optionsList.appendChild(i),this.helpers.animateOptionAdd(i)}),this.updateClearButtonState()}}updateClearButtonState(){this.clearButton&&(this.clearButton.disabled=this.options.length===0)}clearInput(){this.optionInput&&(this.optionInput.value="",this.helpers.clearInputError(),this.validateInput())}saveOptions(){this.helpers.saveOptions()}loadSavedOptions(){this.helpers.loadSavedOptions()}notifyOptionsChanged(){const e=new CustomEvent("optionsChanged",{detail:{options:[...this.options]}});document.dispatchEvent(e)}getOptions(){return[...this.options]}setOptions(e){Array.isArray(e)&&(this.options=e.filter(t=>typeof t=="string"&&this.isValidOption(t)).slice(0,this.maxOptions),this.renderOptions(),this.saveOptions(),this.notifyOptionsChanged())}loadSavedOptions(){this.helpers.loadSavedOptions()}}class H{constructor(e){this.modal=e}updateWinnerDisplay(){if(!this.modal.winnerText||!this.modal.currentWinner)return;this.modal.winnerText.innerHTML="";const e=document.createElement("div");e.style.cssText=`
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 2rem;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    `;const t=document.createElement("span");t.textContent=this.modal.currentWinner;const i=this.calculateModalFontSize(this.modal.currentWinner);t.style.cssText=`
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 2s ease-in-out infinite;
      font-weight: 800;
      font-size: ${i}rem;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
      display: block;
      text-align: center;
      line-height: 1.2;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    `;const n=document.createElement("div");n.innerHTML="✨",n.style.cssText=`
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite;
    `;const s=document.createElement("div");s.innerHTML="🎉",s.style.cssText=`
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite 0.5s;
    `;const o=document.createElement("div");o.innerHTML="⭐",o.style.cssText=`
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      animation: sparkleFloat 3s ease-in-out infinite 1s;
    `,e.appendChild(n),e.appendChild(s),e.appendChild(t),e.appendChild(o),this.modal.winnerText.appendChild(e),this.addGradientAnimation()}calculateModalFontSize(e){if(!e)return 2.5;const t=window.innerWidth<=480,i=window.innerWidth<=768;let n,s,o;t?(n=2.2,s=1.4,o=2.8):i?(n=2.4,s=1.6,o=3):(n=2.8,s=1.8,o=3.5);const r=e.length;let a;return r<=10?a=o:r<=20?a=n:r<=30?a=n*.85:r<=50?a=n*.7:a=s,Math.max(s,Math.min(o,a))}addGradientAnimation(){const e="gradient-animation-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes pulseGlow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
          transform: scale(1.02);
        }
      }
      
      @keyframes sparkleFloat {
        0%, 100% { 
          transform: translateY(0) rotate(0deg);
          opacity: 0.7;
        }
        25% { 
          transform: translateY(-5px) rotate(90deg);
          opacity: 1;
        }
        50% { 
          transform: translateY(-10px) rotate(180deg);
          opacity: 0.8;
        }
        75% { 
          transform: translateY(-5px) rotate(270deg);
          opacity: 1;
        }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
    `,document.head.appendChild(t)}trapFocus(){if(!this.modal.modal)return;const e=this.modal.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],i=e[e.length-1];t&&t.focus();const n=o=>{o.key==="Tab"&&(o.shiftKey?document.activeElement===t&&(o.preventDefault(),i==null||i.focus()):document.activeElement===i&&(o.preventDefault(),t==null||t.focus()))};this.modal.modal.addEventListener("keydown",n);const s=this.modal.close.bind(this.modal);this.modal.close=()=>{this.modal.modal.removeEventListener("keydown",n),this.modal.close=s,s()}}}class ${constructor(e=null){var t;this.modal=document.getElementById("result-modal"),this.modalContent=(t=this.modal)==null?void 0:t.querySelector(".modal-content"),this.winnerText=document.getElementById("winner-text"),this.closeButton=document.getElementById("close-modal-btn"),this.spinAgainButton=document.getElementById("spin-again-btn"),this.isOpen=!1,this.currentWinner=null,this.languageManager=e,this.helpers=new H(this),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts()})}updateUITexts(){var t;if(!this.languageManager)return;const e=(t=this.modal)==null?void 0:t.querySelector("h2");e&&(e.textContent=this.languageManager.t("result.winnerTitle")),this.closeButton&&(this.closeButton.textContent=this.languageManager.t("result.closeButton")),this.spinAgainButton&&(this.spinAgainButton.textContent=this.languageManager.t("result.spinAgainButton"))}t(e,t={}){return this.languageManager?this.languageManager.t(e,t):e}initializeEventListeners(){this.closeButton&&this.closeButton.addEventListener("click",()=>this.close()),this.spinAgainButton&&this.spinAgainButton.addEventListener("click",()=>this.spinAgain()),this.modal&&this.modal.addEventListener("click",e=>{e.target===this.modal&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),document.addEventListener("wheelWinner",e=>{this.showWinner(e.detail.winner)})}showWinner(e){!this.modal||!this.winnerText||(this.currentWinner=e,this.helpers.updateWinnerDisplay(),this.open(),setTimeout(()=>{this.triggerConfetti()},300))}open(){!this.modal||this.isOpen||(this.isOpen=!0,this.modal.classList.remove("hidden"),document.body.style.overflow="hidden",requestAnimationFrame(()=>{this.modal.style.opacity="0",this.modal.style.display="flex",requestAnimationFrame(()=>{this.modal.style.transition="opacity 0.3s ease-out",this.modal.style.opacity="1",this.modalContent&&(this.modalContent.style.animation="modalSlideIn 0.4s ease-out")})}),this.helpers.trapFocus())}close(){!this.modal||!this.isOpen||(this.isOpen=!1,this.modal.style.transition="opacity 0.2s ease-in",this.modal.style.opacity="0",this.modalContent&&(this.modalContent.style.animation="modalSlideOut 0.3s ease-in"),setTimeout(()=>{this.modal.classList.add("hidden"),this.modal.style.display="none",this.modal.style.opacity="",this.modal.style.transition="",this.modalContent&&(this.modalContent.style.animation=""),document.body.style.overflow=""},300),this.currentWinner=null)}spinAgain(){this.close(),setTimeout(()=>{const e=new CustomEvent("autoSpin");document.dispatchEvent(e)},200)}triggerConfetti(){const e=new CustomEvent("triggerConfetti",{detail:{winner:this.currentWinner,intensity:"high"}});document.dispatchEvent(e)}isModalOpen(){return this.isOpen}getCurrentWinner(){return this.currentWinner}forceClose(){this.modal&&(this.modal.classList.add("hidden"),this.modal.style.display="none",document.body.style.overflow=""),this.isOpen=!1,this.currentWinner=null}}class W{constructor(e){this.effect=e}winnerCelebration(){const e=this.effect.presets.winner;p({...e,particleCount:100,spread:70,origin:{y:.6}}),setTimeout(()=>{p({...e,particleCount:50,angle:60,spread:55,origin:{x:0,y:.8}})},250),setTimeout(()=>{p({...e,particleCount:50,angle:120,spread:55,origin:{x:1,y:.8}})},400)}standardCelebration(){const e=this.effect.presets.celebration,t=()=>{this.effect.isActive&&(p({...e,particleCount:30,spread:60,origin:{x:Math.random()*.6+.2,y:Math.random()*.4+.5}}),this.effect.animationId=setTimeout(t,200))};t()}burstCelebration(){const e=this.effect.presets.burst;p({...e,particleCount:200,spread:100,origin:{y:.5},startVelocity:30,gravity:.5,drift:0})}highIntensityCelebration(){p({particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]}),setTimeout(()=>{this.fireworksEffect()},300),setTimeout(()=>{this.confettiRain()},800)}fireworksEffect(){[30,60,90,120,150].forEach((t,i)=>{setTimeout(()=>{p({particleCount:40,angle:t,spread:30,origin:{x:.1+i*.2,y:.3+Math.random()*.3},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"],startVelocity:25,gravity:.8})},i*100)})}confettiRain(){let e=0;const t=10,i=setInterval(()=>{if(e>=t||!this.effect.isActive){clearInterval(i);return}p({particleCount:20,spread:40,origin:{x:Math.random(),y:-.1},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"],startVelocity:15,gravity:.4,drift:Math.random()*2-1}),e++},200)}}class P{constructor(){this.isActive=!1,this.animationId=null,this.presets={winner:{particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]},celebration:{particleCount:150,spread:100,origin:{y:.7},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"]},burst:{particleCount:200,spread:120,origin:{y:.5},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"]}},this.patterns=new W(this),this.initializeEventListeners()}initializeEventListeners(){document.addEventListener("triggerConfetti",e=>{const{winner:t,intensity:i}=e.detail;this.celebrate(i||"winner",t)}),document.addEventListener("wheelWinner",e=>{setTimeout(()=>{this.celebrate("winner",e.detail.winner)},500)})}celebrate(e="winner",t=""){switch(this.isActive&&this.stop(),this.isActive=!0,e){case"winner":this.patterns.winnerCelebration();break;case"celebration":this.patterns.standardCelebration();break;case"burst":this.patterns.burstCelebration();break;case"high":this.patterns.highIntensityCelebration();break;default:this.patterns.winnerCelebration()}setTimeout(()=>{this.stop()},3e3)}customShapeConfetti(e="star"){const t={star:"★",heart:"♥",circle:"●",diamond:"♦"};p({particleCount:50,spread:60,origin:{y:.6},shapes:[t[e]||t.star],colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],scalar:1.2})}cannonEffect(e={x:.5,y:.8},t="up"){const i={up:{angle:90,spread:45},left:{angle:45,spread:35},right:{angle:135,spread:35},diagonal:{angle:60,spread:50}},n=i[t]||i.up;p({particleCount:80,angle:n.angle,spread:n.spread,origin:e,colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],startVelocity:35,gravity:.6})}stop(){this.isActive=!1,this.animationId&&(clearTimeout(this.animationId),this.animationId=null),p.reset()}isConfettiActive(){return this.isActive}randomCelebration(){const e=["winner","celebration","burst"],t=e[Math.floor(Math.random()*e.length)];this.celebrate(t)}}class q{constructor(e){this.app=e}setupEventHandlers(){document.addEventListener("optionsChanged",e=>{const{options:t}=e.detail;this.handleOptionsChange(t)}),document.addEventListener("wheelWinner",e=>{const{winner:t}=e.detail;this.handleWheelWinner(t)}),document.addEventListener("spinAgain",()=>{this.handleSpinAgain()}),document.addEventListener("triggerConfetti",e=>{const{winner:t,intensity:i}=e.detail;this.handleConfettiTrigger(t,i)}),document.addEventListener("keydown",e=>{this.handleKeyboardShortcuts(e)}),window.addEventListener("resize",()=>{this.handleWindowResize()}),document.addEventListener("visibilitychange",()=>{this.handleVisibilityChange()})}handleOptionsChange(e){this.app.components.wheelSpinner&&this.app.components.wheelSpinner.updateOptions(e),this.app.components.historyManager&&e.length>0&&this.app.components.historyManager.saveWheelConfiguration(e)}handleWheelWinner(e){var t;if(console.log(`Winner selected: ${e}`),this.app.components.historyManager){const i=((t=this.app.components.inputManager)==null?void 0:t.getOptions())||[];this.app.components.historyManager.saveSpinResult(i,e)}this.app.components.adManager&&M(async()=>{const{ModalAdUnit:i}=await import("./AdUnits-BzC4ZBo2.js");return{ModalAdUnit:i}},[],import.meta.url).then(({ModalAdUnit:i})=>{const n=new i;n.shouldShow()&&(n.createElement(),setTimeout(()=>n.show(),2e3))}),this.logWinnerToAnalytics(e)}handleSpinAgain(){this.app.components.wheelSpinner,this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}handleConfettiTrigger(e,t){console.log(`Confetti triggered for: ${e}`)}handleKeyboardShortcuts(e){if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))switch(e.key.toLowerCase()){case" ":case"enter":if(e.preventDefault(),this.app.components.wheelSpinner&&!this.app.components.wheelSpinner.isSpinning){const t=document.getElementById("spin-btn");t&&!t.disabled&&t.click()}break;case"escape":break;case"r":this.app.components.resultModal&&this.app.components.resultModal.isModalOpen()&&this.app.components.resultModal.spinAgain();break;case"h":this.app.components.historyManager&&this.app.components.historyManager.toggleHistoryPanel();break}}handleWindowResize(){this.app.components.wheelSpinner}handleVisibilityChange(){document.hidden&&this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}logWinnerToAnalytics(e){var i;const t={event:"wheel_spin_result",winner:e,timestamp:new Date().toISOString(),totalOptions:((i=this.app.components.inputManager)==null?void 0:i.getOptions().length)||0};console.log("Analytics:",t)}}class F{constructor(e){this.manager=e}initializeHistoryPanel(){const e=document.querySelector("header");if(e){const i=document.createElement("button");i.id="history-btn",i.className="glass-btn history-button";const n=this.manager.languageManager?this.manager.languageManager.t("history.button"):"History";i.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l4 2"/>
        </svg>
        <span>${n}</span>
      `,i.style.marginTop="var(--spacing-lg)",i.addEventListener("click",()=>this.manager.toggleHistoryPanel()),e.appendChild(i)}const t=document.createElement("div");t.id="history-panel",t.className="history-panel glass-card hidden",t.innerHTML=`
      <div class="history-header">
        <h3>Wheel History</h3>
        <button id="close-history" class="close-btn">✕</button>
      </div>
      <div class="history-content">
        <div id="history-list" class="history-list"></div>
        <button id="clear-history" class="glass-btn danger">Clear History</button>
      </div>
    `,document.getElementById("app").appendChild(t),document.getElementById("close-history").addEventListener("click",()=>this.manager.closeHistoryPanel()),document.getElementById("clear-history").addEventListener("click",()=>this.manager.clearHistory()),this.addHistoryStyles()}addHistoryStyles(){const e="history-panel-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
      .history-panel {
        position: fixed;
        top: 10vh;
        right: -400px;
        width: 350px;
        height: 80vh;
        overflow: hidden;
        z-index: 1001;
        box-sizing: border-box;
        margin: 0;
        padding: 1.5rem;
        border: none;
        outline: none;
        transition: right 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out;
        display: flex;
        flex-direction: column;
      }
      
      .history-panel.open {
        right: 20px;
      }
      
      .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-shrink: 0;
      }
      
      .history-header h3 {
        margin: 0;
        font-size: 1.5rem;
      }
      
      .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background 0.2s;
      }
      
      .close-btn:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      
      .history-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      }
      
      .history-list {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 1rem;
        min-height: 0;
      }
      
      #clear-history {
        flex-shrink: 0;
        margin-top: auto;
      }
      
      .history-item {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 1rem;
        margin: 0 0 0.5rem 0;
        cursor: pointer;
        box-sizing: border-box;
        display: block;
        width: 100%;
        position: static;
      }
      
      .history-item:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
      }
      
      .history-item-date {
        font-size: 0.8rem;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      }
      
      .history-item-options {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      
      .history-item-winner {
        font-weight: bold;
        color: #00ff88;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }
      
      .history-empty {
        text-align: center;
        opacity: 0.7;
        font-style: italic;
        padding: 2rem;
      }
      
      @media (max-width: 768px) {
        .history-panel {
          width: 300px;
          right: -320px;
        }
        
        .history-panel.open {
          right: 10px;
        }
      }
      
      @media (max-width: 480px) {
        .history-panel {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          right: auto !important;
          transform: translate(-50%, -50%) !important;
          width: calc(100vw - 20px) !important;
          max-width: 350px !important;
          height: 80vh !important;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-out, visibility 0.3s ease-out, transform 0.3s ease-out;
        }
        
        .history-panel.hidden {
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translate(-50%, -50%) scale(0.9) !important;
        }
        
        .history-panel.open {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translate(-50%, -50%) scale(1) !important;
        }
      }
      
      /* Disable hover effects on touch devices */
      @media (hover: none) and (pointer: coarse) {
        .close-btn:hover,
        .history-item:hover {
          background: inherit !important;
          border-color: inherit !important;
          transform: none !important;
        }
        
        .close-btn,
        .history-item {
          transition: none !important;
        }
        
        .history-item:active {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: scale(0.98) !important;
        }
      }
    `,document.head.appendChild(t)}updateHistoryDisplay(){const e=document.getElementById("history-list");if(!e)return;const t=this.manager.getHistory();if(t.length===0){e.innerHTML='<div class="history-empty">No history yet. Spin the wheel to create some!</div>';return}e.innerHTML=t.map(i=>this.createHistoryItemHTML(i)).join(""),e.querySelectorAll(".history-item").forEach((i,n)=>{i.addEventListener("click",()=>this.manager.loadHistoryItem(t[n]))})}createHistoryItemHTML(e){const t=new Date(e.timestamp).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),i=e.options.length>3?`${e.options.slice(0,3).join(", ")}... (+${e.options.length-3} more)`:e.options.join(", "),n=e.winner?`<div class="history-item-winner">🎉 Winner: ${e.winner}</div>`:"";return`
      <div class="history-item" data-id="${e.id}">
        <div class="history-item-date">${t}</div>
        <div class="history-item-options">${i}</div>
        ${n}
      </div>
    `}showLoadFeedback(){const e=document.createElement("div");e.className="toast toast-info";const t=this.manager.languageManager?this.manager.languageManager.t("success.historyLoaded"):"Wheel configuration loaded!";e.textContent=t,e.style.cssText=`
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      z-index: 10000;
      background: linear-gradient(135deg, #4ecdc4, #45b7d1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      animation: slideDown 0.3s ease-out;
    `,document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),3e3)}}class N{constructor(e=null){this.languageManager=e,this.historyKey="wheelHistory",this.maxHistoryItems=50,this.isHistoryPanelOpen=!1,this.ui=new F(this),this.ui.initializeHistoryPanel(),this.loadHistory()}saveWheelConfiguration(e){const t=this.getHistory(),i={id:Date.now(),type:"configuration",timestamp:new Date().toISOString(),options:[...e],winner:null};t.some(s=>s.type==="configuration"&&JSON.stringify(s.options)===JSON.stringify(e)&&Date.now()-new Date(s.timestamp).getTime()<6e4)||(t.unshift(i),this.saveHistory(t))}saveSpinResult(e,t){const i=this.getHistory(),n={id:Date.now(),type:"result",timestamp:new Date().toISOString(),options:[...e],winner:t};i.unshift(n),this.saveHistory(i),this.ui.updateHistoryDisplay()}getHistory(){try{const e=localStorage.getItem(this.historyKey);return e?JSON.parse(e):[]}catch(e){return console.warn("Error loading history:",e),[]}}saveHistory(e){try{const t=e.slice(0,this.maxHistoryItems);localStorage.setItem(this.historyKey,JSON.stringify(t))}catch(t){console.warn("Error saving history:",t)}}loadHistory(){this.ui.updateHistoryDisplay()}loadHistoryItem(e){const t=window.DecisionWheelApp;t&&t.components.inputManager&&(t.components.inputManager.setOptions(e.options),this.ui.showLoadFeedback(),this.closeHistoryPanel())}toggleHistoryPanel(){document.getElementById("history-panel")&&(this.isHistoryPanelOpen?this.closeHistoryPanel():this.openHistoryPanel())}openHistoryPanel(){const e=document.getElementById("history-panel");e&&(e.classList.remove("hidden"),e.classList.add("open"),this.isHistoryPanelOpen=!0,this.ui.updateHistoryDisplay())}closeHistoryPanel(){const e=document.getElementById("history-panel");e&&(e.classList.remove("open"),setTimeout(()=>{e.classList.add("hidden")},300),this.isHistoryPanelOpen=!1)}clearHistory(){confirm("Are you sure you want to clear all history?")&&(localStorage.removeItem(this.historyKey),this.ui.updateHistoryDisplay())}}class R{constructor(e){this.seoManager=e,this.performanceObserver=null,this.webVitalsData={fcp:null,lcp:null,fid:null,cls:null},this.initialize()}initialize(){try{this.setupPerformanceMonitoring(),this.setupLazyLoading(),this.setupServiceWorker(),this.addBreadcrumbStructuredData(),this.setupFAQStructuredData(),console.log("Advanced SEO Manager initialized successfully")}catch(e){console.error("Error initializing Advanced SEO Manager:",e)}}setupPerformanceMonitoring(){"PerformanceObserver"in window&&(this.observePaintMetrics(),this.observeLayoutShift(),this.observeInputDelay()),this.measureBasicPerformance()}observePaintMetrics(){try{new PerformanceObserver(t=>{t.getEntries().forEach(n=>{n.name==="first-contentful-paint"&&(this.webVitalsData.fcp=n.startTime,this.reportWebVital("FCP",n.startTime)),n.entryType==="largest-contentful-paint"&&(this.webVitalsData.lcp=n.startTime,this.reportWebVital("LCP",n.startTime))})}).observe({entryTypes:["paint","largest-contentful-paint"]})}catch(e){console.warn("Could not observe paint metrics:",e)}}observeLayoutShift(){try{let e=0;new PerformanceObserver(i=>{i.getEntries().forEach(s=>{s.hadRecentInput||(e+=s.value)}),this.webVitalsData.cls=e,this.reportWebVital("CLS",e)}).observe({entryTypes:["layout-shift"]})}catch(e){console.warn("Could not observe layout shift:",e)}}observeInputDelay(){try{new PerformanceObserver(t=>{t.getEntries().forEach(n=>{this.webVitalsData.fid=n.processingStart-n.startTime,this.reportWebVital("FID",this.webVitalsData.fid)})}).observe({entryTypes:["first-input"]})}catch(e){console.warn("Could not observe input delay:",e)}}measureBasicPerformance(){window.addEventListener("load",()=>{const e=performance.getEntriesByType("navigation")[0];if(e){const t={pageLoadTime:e.loadEventEnd-e.fetchStart,domContentLoaded:e.domContentLoadedEventEnd-e.fetchStart,firstByte:e.responseStart-e.fetchStart};console.log("Basic Performance Metrics:",t),this.reportPerformanceMetrics(t)}})}reportWebVital(e,t){console.log(`Web Vital - ${e}:`,t)}reportPerformanceMetrics(e){console.log("Performance Metrics:",e)}setupLazyLoading(){if("IntersectionObserver"in window){const e=document.querySelectorAll("img[data-src]");if(e.length>0){const t=new IntersectionObserver(i=>{i.forEach(n=>{if(n.isIntersecting){const s=n.target;s.src=s.dataset.src,s.classList.remove("lazy"),t.unobserve(s)}})});e.forEach(i=>t.observe(i))}}}setupServiceWorker(){"serviceWorker"in navigator&&console.log("Service Worker support detected")}addBreadcrumbStructuredData(){const e={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://wheelspinner.app/"},{"@type":"ListItem",position:2,name:"Decision Wheel Spinner",item:"https://wheelspinner.app/"}]};this.addStructuredData("breadcrumb-data",e)}setupFAQStructuredData(){const e={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does the decision wheel spinner work?",acceptedAnswer:{"@type":"Answer",text:"Simply add your options to the wheel, then click the spin button. The wheel will randomly select one of your options to help you make a decision."}},{"@type":"Question",name:"Is the wheel spinner really random?",acceptedAnswer:{"@type":"Answer",text:"Yes, our wheel spinner uses JavaScript's built-in random number generator to ensure fair and unbiased results."}},{"@type":"Question",name:"Can I customize the wheel colors?",acceptedAnswer:{"@type":"Answer",text:"The wheel automatically assigns different colors to each option to make them easily distinguishable."}},{"@type":"Question",name:"How many options can I add to the wheel?",acceptedAnswer:{"@type":"Answer",text:"You can add multiple options to the wheel. The wheel will automatically adjust to accommodate all your choices."}}]};this.addStructuredData("faq-data",e)}addStructuredData(e,t){const i=document.getElementById(e);i&&i.remove();const n=document.createElement("script");n.type="application/ld+json",n.id=e,n.textContent=JSON.stringify(t,null,2),document.head.appendChild(n)}addPageSpecificMeta(e,t){const i=[];switch(e){case"home":i.push({name:"article:author",content:"Decision Wheel Spinner Team"},{name:"article:section",content:"Tools"},{name:"article:tag",content:"decision making, wheel spinner, random choice"});break}i.forEach(n=>{const s=document.createElement("meta");Object.keys(n).forEach(o=>{s.setAttribute(o,n[o])}),document.head.appendChild(s)})}optimizeImages(){document.querySelectorAll("img").forEach(t=>{t.hasAttribute("loading")||t.setAttribute("loading","lazy"),t.hasAttribute("decoding")||t.setAttribute("decoding","async"),t.hasAttribute("alt")||console.warn("Image missing alt text:",t.src)})}addPreloadHints(){[{href:"/src/styles/globals.css",as:"style"},{href:"/src/styles/glassmorphism.css",as:"style"},{href:"/assets/img/wheelicon.png",as:"image"}].forEach(t=>{const i=document.createElement("link");i.rel="preload",i.href=t.href,i.as=t.as,document.querySelector(`link[href="${t.href}"]`)||document.head.appendChild(i)})}updateSocialMetaTags(e){[{property:"og:type",content:"website"},{property:"og:site_name",content:e.siteName||"Decision Wheel Spinner"},{property:"og:image:type",content:"image/png"},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:domain",content:"wheelspinner.app"}].forEach(i=>{const n=i.property?`meta[property="${i.property}"]`:`meta[name="${i.name}"]`;let s=document.querySelector(n);s||(s=document.createElement("meta"),i.property?s.setAttribute("property",i.property):s.setAttribute("name",i.name),document.head.appendChild(s)),s.setAttribute("content",i.content)})}getSEOAudit(){var t,i,n,s;return{meta:{title:document.title,description:(t=document.querySelector('meta[name="description"]'))==null?void 0:t.content,keywords:(i=document.querySelector('meta[name="keywords"]'))==null?void 0:i.content,canonical:(n=document.querySelector('link[rel="canonical"]'))==null?void 0:n.href,robots:(s=document.querySelector('meta[name="robots"]'))==null?void 0:s.content},images:{total:document.querySelectorAll("img").length,withAlt:document.querySelectorAll("img[alt]").length,withLazyLoading:document.querySelectorAll('img[loading="lazy"]').length},performance:this.webVitalsData,structuredData:{scripts:document.querySelectorAll('script[type="application/ld+json"]').length},socialMedia:{ogTags:document.querySelectorAll('meta[property^="og:"]').length,twitterTags:document.querySelectorAll('meta[name^="twitter:"]').length}}}cleanup(){this.performanceObserver&&this.performanceObserver.disconnect(),console.log("Advanced SEO Manager cleanup completed")}}class j{constructor(){this.weights={title:15,description:15,keywords:10,headings:10,images:10,structuredData:15,performance:15,socialMedia:5,accessibility:5},this.initialize()}initialize(){console.log("SEO Analyzer initialized")}analyze(){const e={timestamp:new Date().toISOString(),url:window.location.href,score:0,maxScore:100,categories:{title:this.analyzeTitleTag(),description:this.analyzeDescription(),keywords:this.analyzeKeywords(),headings:this.analyzeHeadings(),images:this.analyzeImages(),structuredData:this.analyzeStructuredData(),performance:this.analyzePerformance(),socialMedia:this.analyzeSocialMedia(),accessibility:this.analyzeAccessibility()},recommendations:[],criticalIssues:[],warnings:[]};return e.score=this.calculateOverallScore(e.categories),e.recommendations=this.generateRecommendations(e.categories),e.criticalIssues=this.identifyCriticalIssues(e.categories),e.warnings=this.generateWarnings(e.categories),e}analyzeTitleTag(){const e=document.querySelector("title"),t=e?e.textContent:"",i={score:0,maxScore:this.weights.title,title:t,length:t.length,issues:[]};return t?(t.length<30?(i.issues.push("Title is too short (less than 30 characters)"),i.score+=5):t.length<=60?i.score+=15:t.length<=70?(i.issues.push("Title is slightly long (over 60 characters)"),i.score+=10):(i.issues.push("Title is too long (over 70 characters)"),i.score+=5),t.toLowerCase().includes("wheel")||t.toLowerCase().includes("spinner")||t.toLowerCase().includes("decision")?i.score+=5:i.issues.push("Title does not contain main keywords"),i):(i.issues.push("No title tag found"),i)}analyzeDescription(){const e=document.querySelector('meta[name="description"]'),t=e?e.getAttribute("content"):"",i={score:0,maxScore:this.weights.description,description:t,length:t.length,issues:[]};return t?(t.length<120?(i.issues.push("Description is too short (less than 120 characters)"),i.score+=8):t.length<=160?i.score+=15:t.length<=180?(i.issues.push("Description is slightly long (over 160 characters)"),i.score+=10):(i.issues.push("Description is too long (over 180 characters)"),i.score+=5),i):(i.issues.push("No meta description found"),i)}analyzeKeywords(){const e=document.querySelector('meta[name="keywords"]'),t=e?e.getAttribute("content"):"",i={score:0,maxScore:this.weights.keywords,keywords:t,keywordCount:t?t.split(",").length:0,issues:[]};if(!t)i.issues.push("No meta keywords found"),i.score+=5;else{const n=t.split(",").map(s=>s.trim());n.length>10?(i.issues.push("Too many keywords (over 10)"),i.score+=5):n.length>=5?i.score+=10:(i.issues.push("Too few keywords (less than 5)"),i.score+=7)}return i}analyzeHeadings(){const e=document.querySelectorAll("h1"),t=document.querySelectorAll("h2"),i=document.querySelectorAll("h3"),n={score:0,maxScore:this.weights.headings,h1Count:e.length,h2Count:t.length,h3Count:i.length,issues:[]};return e.length===0?n.issues.push("No H1 tag found"):e.length>1?(n.issues.push("Multiple H1 tags found (should be only one)"),n.score+=5):n.score+=8,t.length>0?n.score+=2:n.issues.push("No H2 tags found"),n}analyzeImages(){const e=document.querySelectorAll("img"),t=document.querySelectorAll("img[alt]"),i=document.querySelectorAll('img[loading="lazy"]'),n={score:0,maxScore:this.weights.images,totalImages:e.length,imagesWithAlt:t.length,imagesWithLazyLoading:i.length,issues:[]};if(e.length===0)return n.score+=10,n;const s=t.length/e.length*100;return s===100?n.score+=5:(n.issues.push(`${e.length-t.length} images missing alt text`),n.score+=Math.floor(s/20)),i.length/e.length*100>=50?n.score+=5:(n.issues.push("Consider adding lazy loading to images"),n.score+=2),n}analyzeStructuredData(){const e=document.querySelectorAll('script[type="application/ld+json"]'),t={score:0,maxScore:this.weights.structuredData,scriptsCount:e.length,validSchemas:0,issues:[]};if(e.length===0)return t.issues.push("No structured data found"),t;let i=0;return e.forEach(n=>{try{const s=JSON.parse(n.textContent);s["@context"]&&s["@type"]&&i++}catch{t.issues.push("Invalid JSON-LD structured data found")}}),t.validSchemas=i,i>=2?t.score+=15:i===1?t.score+=10:t.score+=3,t}analyzePerformance(){const e={score:0,maxScore:this.weights.performance,metrics:{},issues:[]};if(!window.performance)return e.issues.push("Performance API not available"),e.score+=5,e;try{const t=performance.getEntriesByType("navigation")[0];if(t){const i=t.loadEventEnd-t.fetchStart,n=t.domContentLoadedEventEnd-t.fetchStart;e.metrics={pageLoadTime:Math.round(i),domContentLoaded:Math.round(n)},i<1e3?e.score+=15:i<2e3?e.score+=12:i<3e3?(e.score+=8,e.issues.push("Page load time is above 2 seconds")):(e.score+=3,e.issues.push("Page load time is above 3 seconds"))}}catch{e.issues.push("Could not measure performance metrics"),e.score+=5}return e}analyzeSocialMedia(){const e=document.querySelectorAll('meta[property^="og:"]'),t=document.querySelectorAll('meta[name^="twitter:"]'),i={score:0,maxScore:this.weights.socialMedia,openGraphTags:e.length,twitterTags:t.length,issues:[]},s=["og:title","og:description","og:image","og:url"].filter(a=>!document.querySelector(`meta[property="${a}"]`));s.length===0?i.score+=3:(i.issues.push(`Missing OpenGraph tags: ${s.join(", ")}`),i.score+=1);const r=["twitter:title","twitter:description","twitter:image"].filter(a=>!document.querySelector(`meta[name="${a}"]`));return r.length===0?i.score+=2:(i.issues.push(`Missing Twitter tags: ${r.join(", ")}`),i.score+=0),i}analyzeAccessibility(){const e={score:0,maxScore:this.weights.accessibility,issues:[]};return document.documentElement.getAttribute("lang")?e.score+=2:e.issues.push("HTML lang attribute missing"),document.querySelector('meta[name="viewport"]')?e.score+=2:e.issues.push("Viewport meta tag missing"),document.querySelectorAll('a[href^="#"]').length>0?e.score+=1:e.issues.push("Consider adding skip navigation links"),e}calculateOverallScore(e){let t=0;return Object.keys(e).forEach(i=>{t+=e[i].score}),Math.round(t)}generateRecommendations(e){const t=[];return Object.keys(e).forEach(i=>{const n=e[i];n.issues&&n.issues.length>0&&n.issues.forEach(s=>{t.push({category:i,priority:this.getIssuePriority(s),issue:s,solution:this.getSolution(s)})})}),t.sort((i,n)=>this.getPriorityWeight(n.priority)-this.getPriorityWeight(i.priority))}identifyCriticalIssues(e){const t=[];return e.title.score===0&&t.push("Missing title tag"),e.description.score===0&&t.push("Missing meta description"),e.headings.h1Count===0&&t.push("Missing H1 tag"),e.performance.metrics.pageLoadTime>5e3&&t.push("Extremely slow page load time"),t}generateWarnings(e){const t=[];return e.title.length>60&&t.push("Title tag may be truncated in search results"),e.description.length>160&&t.push("Meta description may be truncated in search results"),e.structuredData.scriptsCount===0&&t.push("No structured data found - consider adding JSON-LD markup"),t}getIssuePriority(e){const t=["title","description","h1","missing"],i=["long","short","slow"],n=e.toLowerCase();return t.some(s=>n.includes(s))?"high":i.some(s=>n.includes(s))?"medium":"low"}getPriorityWeight(e){switch(e){case"high":return 3;case"medium":return 2;case"low":return 1;default:return 0}}getSolution(e){const t={"No title tag found":"Add a descriptive title tag between 50-60 characters","No meta description found":"Add a compelling meta description between 150-160 characters","No H1 tag found":"Add a single H1 tag that describes the main content","Title is too short":"Expand title to be more descriptive (30+ characters)","Title is too long":"Shorten title to under 60 characters","Description is too short":"Expand description to be more informative (120+ characters)","Description is too long":"Shorten description to under 160 characters","images missing alt text":"Add descriptive alt text to all images","No structured data found":"Add JSON-LD structured data markup","Page load time":"Optimize images, minify CSS/JS, and enable compression"};for(const i in t)if(e.toLowerCase().includes(i.toLowerCase()))return t[i];return"Review and optimize this element for better SEO"}generateReport(e="console"){const t=this.analyze();switch(e){case"json":return JSON.stringify(t,null,2);case"html":return this.generateHTMLReport(t);case"console":default:return this.logConsoleReport(t),t}}generateHTMLReport(e){return`
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
        <h1>SEO Analysis Report</h1>
        <div style="background: #f0f0f0; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
          <h2>Overall Score: ${e.score}/${e.maxScore}</h2>
          <div style="background: #ddd; height: 20px; border-radius: 10px;">
            <div style="background: ${e.score>=80?"#4CAF50":e.score>=60?"#FF9800":"#F44336"}; 
                        height: 100%; width: ${e.score}%; border-radius: 10px;"></div>
          </div>
        </div>
        
        ${e.criticalIssues.length>0?`
        <div style="background: #ffebee; border-left: 4px solid #f44336; padding: 15px; margin-bottom: 20px;">
          <h3>Critical Issues</h3>
          <ul>
            ${e.criticalIssues.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>
        `:""}
        
        <div style="background: #fff3e0; border-left: 4px solid #ff9800; padding: 15px; margin-bottom: 20px;">
          <h3>Top Recommendations</h3>
          <ol>
            ${e.recommendations.slice(0,5).map(t=>`
              <li><strong>${t.category}</strong>: ${t.issue} - ${t.solution}</li>
            `).join("")}
          </ol>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
          ${Object.keys(e.categories).map(t=>{const i=e.categories[t];return`
              <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
                <h4>${t.charAt(0).toUpperCase()+t.slice(1)}</h4>
                <p>Score: ${i.score}/${i.maxScore}</p>
                ${i.issues&&i.issues.length>0?`
                  <ul style="font-size: 0.9em; color: #666;">
                    ${i.issues.map(n=>`<li>${n}</li>`).join("")}
                  </ul>
                `:'<p style="color: #4CAF50;">✓ No issues found</p>'}
              </div>
            `}).join("")}
        </div>
      </div>
    `}logConsoleReport(e){console.group("🔍 SEO Analysis Report"),console.log(`Overall Score: ${e.score}/${e.maxScore}`),e.criticalIssues.length>0&&(console.group("🚨 Critical Issues"),e.criticalIssues.forEach(t=>console.error(t)),console.groupEnd()),e.recommendations.length>0&&(console.group("💡 Top Recommendations"),e.recommendations.slice(0,5).forEach(t=>{console.log(`${t.category}: ${t.issue}`),console.log(`   Solution: ${t.solution}`)}),console.groupEnd()),console.group("📊 Category Breakdown"),Object.keys(e.categories).forEach(t=>{const i=e.categories[t];console.log(`${t}: ${i.score}/${i.maxScore}`),i.issues&&i.issues.length>0&&i.issues.forEach(n=>console.warn(`  - ${n}`))}),console.groupEnd(),console.groupEnd()}}class V{constructor(){this.adConfig={header:{enabled:!0,size:{width:728,height:90},mobileSize:{width:320,height:50},adUnitId:"ca-pub-7898475614767076/1940254660",position:"header"},sidebar:{enabled:!1,size:{width:300,height:250},adUnitId:"ca-pub-7898475614767076/1940254660",position:"sidebar",desktopOnly:!0},content:{enabled:!0,size:{width:320,height:100},adUnitId:"ca-pub-7898475614767076/1940254660",position:"content"},footer:{enabled:!0,size:{width:728,height:90},mobileSize:{width:320,height:50},adUnitId:"ca-pub-7898475614767076/1940254660",position:"footer"},wheelBottom:{enabled:!0,size:{width:300,height:250},adUnitId:"ca-pub-7898475614767076/1940254660",position:"wheel-bottom",desktopOnly:!0},afterWheel1:{enabled:!0,size:{width:728,height:90},mobileSize:{width:320,height:50},adUnitId:"ca-pub-7898475614767076/1940254660",position:"after-wheel-1"},afterWheel2:{enabled:!0,size:{width:300,height:250},adUnitId:"ca-pub-7898475614767076/1940254660",position:"after-wheel-2"}},this.adMetrics={loaded:{},viewed:{},clicked:{},errors:{}},this.adBlockerDetected=!1,this.init()}async init(){try{await this.detectAdBlocker(),this.adBlockerDetected||await this.initializeAdSense(),this.createAdContainers(),this.setupResponsiveBehavior(),console.log("AdManager initialized successfully")}catch(e){console.error("AdManager initialization failed:",e),this.handleAdError("initialization",e)}}async detectAdBlocker(){return new Promise(e=>{const t=document.createElement("div");t.innerHTML="&nbsp;",t.className="adsbox",t.style.position="absolute",t.style.left="-10000px",document.body.appendChild(t),setTimeout(()=>{const i=t.offsetHeight===0;document.body.removeChild(t),i&&(this.adBlockerDetected=!0,this.showAdBlockerMessage()),e(i)},100)})}async initializeAdSense(){if(!window.adsbygoogle)return new Promise((e,t)=>{const i=document.createElement("script");i.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",i.async=!0,i.crossOrigin="anonymous",i.onload=()=>{window.adsbygoogle=window.adsbygoogle||[],e()},i.onerror=()=>{this.adBlockerDetected=!0,t(new Error("Failed to load AdSense script"))},document.head.appendChild(i)})}createAdContainers(){Object.entries(this.adConfig).forEach(([e,t])=>{t.enabled&&this.createAdUnit(e,t)})}createAdUnit(e,t){const i=document.createElement("div");i.className=`ad-container ad-${e}`,i.id=`ad-${e}`,t.desktopOnly&&this.isMobile()&&(i.style.display="none");const n=document.createElement("ins");if(n.className="adsbygoogle",n.style.display="block",n.setAttribute("data-ad-client","ca-pub-7898475614767076"),n.setAttribute("data-ad-slot","1940254660"),n.setAttribute("data-ad-format","auto"),n.setAttribute("data-full-width-responsive","true"),t.mobileSize&&this.isMobile()?(n.style.width=`${t.mobileSize.width}px`,n.style.height=`${t.mobileSize.height}px`):(n.style.width=`${t.size.width}px`,n.style.height=`${t.size.height}px`),i.appendChild(n),this.insertAdContainer(e,i),!this.adBlockerDetected&&window.adsbygoogle)try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),this.trackAdMetric("loaded",e)}catch(s){console.error(`Failed to load ad for ${e}:`,s),this.handleAdError(e,s)}}insertAdContainer(e,t){switch(e){case"header":const i=document.querySelector("header");i&&i.appendChild(t);break;case"sidebar":let n=document.querySelector(".sidebar");if(!n){n=document.createElement("aside"),n.className="sidebar";const c=document.querySelector(".main-container");c&&c.parentNode&&c.parentNode.insertBefore(n,c.nextSibling)}n.appendChild(t);break;case"content":const s=document.querySelector("#wheel-section");s&&s.parentNode&&s.parentNode.insertBefore(t,s.nextSibling);break;case"footer":const o=document.querySelector("#app");o&&o.appendChild(t);break;case"wheel-bottom":const r=document.querySelector(".wheel-container");r&&r.appendChild(t);break;case"after-wheel-1":case"after-wheel-2":const a=document.querySelector(".main-container");a&&a.parentNode&&a.parentNode.insertBefore(t,a.nextSibling);break}}setupResponsiveBehavior(){const e=()=>{this.updateAdSizes(),this.toggleMobileAds()};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}updateAdSizes(){Object.entries(this.adConfig).forEach(([e,t])=>{const i=document.querySelector(`#ad-${e}`),n=i==null?void 0:i.querySelector(".adsbygoogle");if(n&&t.mobileSize){const o=this.isMobile()?t.mobileSize:t.size;n.style.width=`${o.width}px`,n.style.height=`${o.height}px`}})}toggleMobileAds(){const e=this.isMobile();Object.entries(this.adConfig).forEach(([t,i])=>{if(i.desktopOnly){const n=document.querySelector(`#ad-${t}`);n&&(n.style.display=e?"none":"block")}})}showAdBlockerMessage(){const e=document.createElement("div");e.className="ad-blocker-message glass-card",e.innerHTML=`
      <h3>🚫 Ad Blocker Detected</h3>
      <p>We use ads to keep this service free. Please consider disabling your ad blocker or supporting us directly.</p>
      <button class="glass-btn" onclick="this.parentElement.style.display='none'">Dismiss</button>
    `;const t=document.querySelector("header");t&&t.nextSibling&&t.parentNode.insertBefore(e,t.nextSibling)}trackAdMetric(e,t,i={}){this.adMetrics[e]||(this.adMetrics[e]={}),this.adMetrics[e][t]||(this.adMetrics[e][t]=0),this.adMetrics[e][t]++,console.log(`Ad ${e}:`,{placement:t,count:this.adMetrics[e][t],...i})}handleAdError(e,t){this.trackAdMetric("errors",e,{error:t.message});const i=document.querySelector(`#ad-${e}`);i&&(i.innerHTML=`
        <div class="ad-fallback glass-card">
          <p>Advertisement space</p>
        </div>
      `)}isMobile(){return window.innerWidth<=768||/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}getMetrics(){return{...this.adMetrics,adBlockerDetected:this.adBlockerDetected,activeAds:Object.keys(this.adConfig).filter(e=>this.adConfig[e].enabled).length}}toggleAdPlacement(e,t){if(this.adConfig[e]){this.adConfig[e].enabled=t;const i=document.querySelector(`#ad-${e}`);i&&(i.style.display=t?"block":"none")}}refreshAds(){if(!this.adBlockerDetected&&window.adsbygoogle)try{window.adsbygoogle.forEach((e,t)=>{e.innerHTML="",(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(e){console.error("Error refreshing ads:",e)}}}const U=new V;class K{static createAd(e){const t=document.getElementById(e);if(!t){console.error(`Container with ID ${e} not found`);return}t.innerHTML=`
      <!-- wheelspinner -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-7898475614767076"
           data-ad-slot="1940254660"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),console.log(`Ad loaded in container: ${e}`)}catch(i){console.error("Error loading ad:",i)}}static initializeAds(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{this.createAdContainers()}):this.createAdContainers()}static createAdContainers(){this.createAdContainer("header-ad","header"),this.createAdContainer("content-ad","after-wheel-section"),this.createAdContainer("footer-ad","#app")}static createAdContainer(e,t){if(!document.querySelector(t)){console.log(`Target ${t} not found for ad ${e}`);return}const n=document.createElement("div");if(n.id=e,n.className="ad-container simple-ad",n.style.cssText=`
      text-align: center;
      margin: 20px 0;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      backdrop-filter: blur(20px);
    `,t==="header"){const s=document.querySelector("header");s&&s.parentNode&&s.parentNode.insertBefore(n,s.nextSibling)}else if(t==="after-wheel-section"){const s=document.querySelector("#wheel-section");s&&s.parentNode&&s.parentNode.insertBefore(n,s.nextSibling)}else if(t==="#app"){const s=document.querySelector("#app");s&&s.appendChild(n)}setTimeout(()=>{this.createAd(e)},100)}static createTestAd(e){const t=document.getElementById(e);t&&(t.innerHTML=`
      <div style="
        background: rgba(255, 255, 255, 0.1);
        border: 2px dashed rgba(255, 255, 255, 0.3);
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        padding: 40px 20px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
      ">
        <h4 style="margin: 0 0 10px 0;">📢 Espacio Publicitario</h4>
        <p style="margin: 0; font-size: 14px;">
          Anuncio de AdSense (ID: 1940254660)<br>
          <small>Los anuncios aparecerán aquí en producción</small>
        </p>
      </div>
    `)}}typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&(console.log("🎯 SimpleAd: Modo desarrollo detectado"),console.log("💡 Para cargar anuncios reales, usa: SimpleAd.initializeAds()"),console.log('🧪 Para anuncios de prueba, usa: SimpleAd.createTestAd("container-id")'));class J{constructor(){this.components={},this.isInitialized=!1,this.eventHandlers=new q(this),this.initializeApp()}async initializeApp(){try{document.readyState==="loading"&&await this.waitForDOMReady(),await this.initializeLanguageSystem(),this.initializeComponents(),this.eventHandlers.setupEventHandlers(),this.loadInitialOptions(),this.setupDefaultState(),this.isInitialized=!0,console.log("Decision Wheel App initialized successfully")}catch(e){console.error("Failed to initialize Decision Wheel App:",e),this.showInitializationError()}}waitForDOMReady(){return new Promise(e=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})}async initializeLanguageSystem(){try{this.components.languageManager=new C,await this.components.languageManager.initialize(),this.components.seoManager=new k(this.components.languageManager),this.components.seoAdvancedManager=new R(this.components.seoManager),this.components.seoAnalyzer=new j,this.components.languageSelector=new O(this.components.languageManager),window.i18n=this.components.languageManager,console.log("Language system initialized successfully")}catch(e){throw console.error("Error initializing language system:",e),e}}initializeComponents(){try{this.components.inputManager=new D(this.components.languageManager),this.components.wheelSpinner=new L(this.components.languageManager),this.components.resultModal=new $(this.components.languageManager),this.components.confettiEffect=new P,this.components.historyManager=new N(this.components.languageManager),this.components.adManager=U,this.components.simpleAd=K,console.log("All components initialized")}catch(e){throw console.error("Error initializing components:",e),e}}loadInitialOptions(){this.components.inputManager&&this.components.inputManager.loadSavedOptions()}setupDefaultState(){}showInitializationError(){document.body.insertAdjacentHTML("beforeend",`
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 0, 0, 0.9);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        z-index: 9999;
      ">
        <h2>⚠️ Application Error</h2>
        <p>Failed to initialize the Decision Wheel app.</p>
        <p>Please refresh the page to try again.</p>
        <button onclick="location.reload()" style="
          background: white;
          color: red;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 1rem;
        ">
          Refresh Page
        </button>
      </div>
    `)}getStatus(){var e,t,i;return{initialized:this.isInitialized,components:Object.keys(this.components),optionsCount:((e=this.components.inputManager)==null?void 0:e.getOptions().length)||0,wheelSpinning:((t=this.components.wheelSpinner)==null?void 0:t.isSpinning)||!1,modalOpen:((i=this.components.resultModal)==null?void 0:i.isModalOpen())||!1}}runSEOAnalysis(e="console"){return this.components.seoAnalyzer?this.components.seoAnalyzer.generateReport(e):(console.error("SEO Analyzer not initialized"),null)}cleanup(){this.components.confettiEffect&&this.components.confettiEffect.stop(),this.components.resultModal&&this.components.resultModal.forceClose(),this.components.languageSelector&&this.components.languageSelector.cleanup(),this.components.seoAdvancedManager&&this.components.seoAdvancedManager.cleanup(),this.components.seoManager&&this.components.seoManager.cleanup(),this.components.adManager&&console.log("Ad Manager cleaned up"),window.i18n&&delete window.i18n,console.log("Application cleaned up")}}const A=new J;window.DecisionWheelApp=A;window.addEventListener("beforeunload",()=>{A.cleanup()});
