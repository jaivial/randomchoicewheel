var we=(f,e)=>()=>(e||f((e={exports:{}}).exports,e),e.exports);import{L as be,S as xe,a as Me}from"./components-CXRhvJPv.js";var Ke=we((Xe,U)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();class Se{constructor(e){this.wheel=e}createEmptyWheel(){const e=document.createElement("div");e.className="wheel-fallback glass-card";const t=this.wheel.languageManager?this.wheel.languageManager.t("options.noOptionsWheel"):"No Options Added",n=this.wheel.languageManager?this.wheel.languageManager.t("options.noOptionsWheelDesc"):"Add some options to get started with your decision wheel!";e.innerHTML=`
      <div class="fallback-icon">🎯</div>
      <h3>${t}</h3>
      <p>${n}</p>
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
    `;const s=this.wheel.container.parentElement;s.style.position="relative",s.appendChild(e),this.wheel.container.style.opacity="0.1"}createSegment(e,t,n,s,a,r,w,y){const E=s*Math.PI/180,I=a*Math.PI/180,A=e+n*Math.cos(E),F=t+n*Math.sin(E),H=e+n*Math.cos(I),N=t+n*Math.sin(I),T=a-s>180?1:0,x=[`M ${e} ${t}`,`L ${A} ${F}`,`A ${n} ${n} 0 ${T} 1 ${H} ${N}`,"Z"].join(" "),$=document.createElementNS("http://www.w3.org/2000/svg","path");$.setAttribute("d",x),$.setAttribute("fill",r),$.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),$.setAttribute("stroke-width","1"),$.setAttribute("class","wheel-segment"),$.setAttribute("data-index",y);const W=(s+a)/2,q=n*.6,j=e+q*Math.cos(W*Math.PI/180),V=t+q*Math.sin(W*Math.PI/180),O=document.createElementNS("http://www.w3.org/2000/svg","text");O.setAttribute("x",j),O.setAttribute("y",V),O.setAttribute("text-anchor","middle"),O.setAttribute("dominant-baseline","central"),O.setAttribute("fill","white"),O.setAttribute("font-size",this.calculateFontSize(w,this.wheel.options.length)),O.setAttribute("font-weight","600"),O.setAttribute("font-family","system-ui, -apple-system, sans-serif"),O.setAttribute("transform",`rotate(${W}, ${j}, ${V})`),O.style.textShadow="0.5px 0.5px 1px rgba(0,0,0,0.4)",O.style.filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.4))",O.textContent=this.truncateText(w,this.wheel.options.length),this.wheel.segmentsGroup.appendChild($),this.wheel.segmentsGroup.appendChild(O)}calculateFontSize(e,t){const n=window.innerWidth<=480,s=window.innerWidth<=768;let a,r;n?(a=50,r=35):s?(a=52,r=35):(a=42,r=24);const w=Math.max(.6,1-t/20),y=Math.max(.5,1-e.length/20),E=w*y;return Math.max(r,a*E)}truncateText(e,t){const n=window.innerWidth<=480,s=window.innerWidth<=768;let a;if(n?a=t>6?6:t>3?8:12:s?a=t>6?8:t>3?12:16:a=t>6?10:t>3?15:20,e.length<=a)return e;const r=e.substring(0,a-1),w=r.lastIndexOf(" ");return w>a*.5?r.substring(0,w)+"…":r+"…"}createSingleOptionWheel(e,t,n,s){const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx",e),a.setAttribute("cy",t),a.setAttribute("r",n),a.setAttribute("fill",this.wheel.colors[0]),a.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),a.setAttribute("stroke-width","2"),a.setAttribute("class","wheel-segment"),a.setAttribute("data-index","0");const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("x",e),r.setAttribute("y",t),r.setAttribute("text-anchor","middle"),r.setAttribute("dominant-baseline","central"),r.setAttribute("fill","white"),r.setAttribute("font-size",window.innerWidth>768?"48":window.innerWidth>480?"50":"44"),r.setAttribute("font-weight","700"),r.textContent=this.truncateText(s,1),this.wheel.segmentsGroup.appendChild(a),this.wheel.segmentsGroup.appendChild(r)}waitForSpin(e){return new Promise(t=>setTimeout(t,e))}}class Ee{constructor(e=null,t="wheel-svg"){typeof e=="string"&&(t=e,e=null),this.languageManager=e,this.container=document.getElementById(t),this.segmentsGroup=document.getElementById("wheel-segments"),this.options=[],this.isSpinning=!1,this.currentRotation=0,this.colors=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FECA57","#FF9FF3","#54A0FF","#5F27CD","#00D2D3","#FF9F43","#FF3838","#2ED573","#1E90FF","#FF6348","#7BED9F"],this.helpers=new Se(this),this.initializeEventListeners()}initializeEventListeners(){const e=document.getElementById("spin-btn");e&&e.addEventListener("click",()=>this.spin()),document.addEventListener("autoSpin",()=>{this.spin()})}updateOptions(e){this.options=[...e],this.generateWheel(),this.updateSpinButtonState()}generateWheel(){if(!this.segmentsGroup)return;if(this.segmentsGroup.innerHTML="",this.clearFallback(),this.options.length===0){this.helpers.createEmptyWheel();return}this.container.style.opacity="1";const e=360/this.options.length,t=320,n=350,s=350;if(this.options.length===1){this.helpers.createSingleOptionWheel(n,s,t,this.options[0]);return}this.options.forEach((a,r)=>{const w=r*e,y=(r+1)*e,E=this.colors[r%this.colors.length];this.helpers.createSegment(n,s,t,w,y,E,a,r)})}clearFallback(){const t=this.container.parentElement.querySelector(".wheel-fallback");t&&t.remove()}async spin(){if(this.isSpinning||this.options.length===0)return;this.isSpinning=!0,this.updateSpinButtonState();const e=3,n=Math.random()*(6-e)+e,s=Math.random()*360,a=n*360+s,r=this.currentRotation+a;this.container.style.transform=`rotate(${r}deg)`,this.container.style.transition="transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",await this.helpers.waitForSpin(3e3);const w=360/this.options.length;let y=r%360;y<0&&(y+=360);let I=(270-y)%360;I<0&&(I+=360);const A=Math.floor(I/w)%this.options.length;console.log(`Wheel Debug:
      Final rotation: ${r}°
      Normalized rotation: ${y}°
      Pointing angle: ${I}°
      Segment angle: ${w}°
      Winner index: ${A}
      Winner: "${this.options[A]}"
      Options: [${this.options.map((F,H)=>`${H}:"${F}"`).join(", ")}]`),this.currentRotation=r,this.isSpinning=!1,this.updateSpinButtonState(),this.announceWinner(this.options[A])}announceWinner(e){const t=new CustomEvent("wheelWinner",{detail:{winner:e}});document.dispatchEvent(t)}updateSpinButtonState(){const e=document.getElementById("spin-btn");if(e){e.disabled=this.isSpinning||this.options.length===0;const t=this.languageManager?this.languageManager.t("wheel.spinButton"):"Spin the Wheel!",n=this.languageManager?this.languageManager.t("wheel.spinningButton"):"Spinning...";e.textContent=this.isSpinning?n:t}}reset(){this.currentRotation=0,this.container.style.transform="rotate(0deg)",this.container.style.transition="none",this.isSpinning=!1,this.updateSpinButtonState()}}class Ce{constructor(e){this.manager=e}createOptionElement(e,t){const n=document.createElement("div");n.className="option-item",n.style.opacity="0",n.style.transform="translateX(-20px)";const s=this.manager.t("options.editButton"),a=this.manager.t("options.removeButton");return n.innerHTML=`
      <span class="option-text" title="${e}">${e}</span>
      <div class="option-buttons">
        <button class="edit-option" data-index="${t}" title="${s}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="remove-option" data-index="${t}" title="${a}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    `,n.querySelector(".edit-option").addEventListener("click",()=>{this.manager.actions.editOption(t,n)}),n.querySelector(".remove-option").addEventListener("click",()=>{this.animateOptionRemove(n,()=>{this.manager.actions.removeOption(t)})}),n}animateOptionAdd(e){e.offsetHeight,e.style.transition="all 0.3s ease-out",e.style.opacity="1",e.style.transform="translateX(0)",setTimeout(()=>{e.style.transform="scale(1.02)",setTimeout(()=>{e.style.transform="scale(1)"},100)},300)}animateOptionRemove(e,t){e.style.transition="all 0.3s ease-in",e.style.opacity="0",e.style.transform="translateX(20px) scale(0.8)",e.style.maxHeight=e.offsetHeight+"px",setTimeout(()=>{e.style.maxHeight="0",e.style.padding="0",e.style.margin="0",setTimeout(()=>{t()},200)},300)}renderEmptyState(){const e=document.createElement("div");e.className="empty-state",e.style.opacity="0";const t=this.manager.t("options.noOptionsYet");e.innerHTML=`
      <p style="text-align: center; opacity: 0.7; font-style: italic; padding: 2rem;">
        ${t}
      </p>
    `,this.manager.optionsList.appendChild(e),setTimeout(()=>{e.style.transition="opacity 0.3s ease-in",e.style.opacity="1"},50)}setInputError(e){this.manager.optionInput&&(this.manager.optionInput.style.borderColor="#ff6b6b",this.manager.optionInput.style.boxShadow="0 0 0 3px rgba(255, 107, 107, 0.2)",this.manager.optionInput.title=e,this.manager.optionInput.style.animation="shake 0.5s ease-in-out",setTimeout(()=>{this.manager.optionInput.style.animation=""},500))}clearInputError(){this.manager.optionInput&&(this.manager.optionInput.style.borderColor="",this.manager.optionInput.style.boxShadow="",this.manager.optionInput.title="",this.manager.optionInput.style.animation="")}showInputError(){const e=this.manager.t("input.emptyOptionError");this.showToast(e,"error")}showDuplicateError(){const e=this.manager.t("input.duplicateOptionError");this.showToast(e,"warning")}showMaxOptionsError(){const e=this.manager.t("input.maxOptionsReached",{max:this.manager.maxOptions});this.showToast(e,"warning")}showSuccessFeedback(){const e=this.manager.t("success.optionAdded");this.showToast(e,"success")}showRemovalFeedback(e){const t=this.manager.t("success.optionDeleted");this.showToast(t,"info")}showClearFeedback(){const e=this.manager.t("success.optionsCleared");this.showToast(e,"info")}showEditSuccessFeedback(e,t){const n=this.manager.t("success.optionEdited",{oldText:e,newText:t});this.showToast(n,"success")}showToast(e,t="info"){const n=document.createElement("div");n.className=`toast toast-${t}`,n.textContent=e,n.style.cssText=`
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
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="1",n.style.transform="translateX(0)"},50),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(100%)",setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}getToastColor(e){const t={success:"linear-gradient(135deg, #2ed573, #1e90ff)",error:"linear-gradient(135deg, #ff6b6b, #ee5a24)",warning:"linear-gradient(135deg, #feca57, #ff9f43)",info:"linear-gradient(135deg, #4ecdc4, #45b7d1)"};return t[e]||t.info}saveOptions(){try{localStorage.setItem("wheelOptions",JSON.stringify(this.manager.options))}catch(e){console.warn("Could not save options to localStorage:",e)}}loadSavedOptions(){try{const e=localStorage.getItem("wheelOptions");if(e){const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0){this.manager.options=t.filter(n=>typeof n=="string"&&this.manager.isValidOption(n)),this.manager.renderOptions(),this.manager.notifyOptionsChanged();return}}this.setDefaultOptions()}catch(e){console.warn("Could not load options from localStorage:",e),this.setDefaultOptions()}}setDefaultOptions(){this.manager.options=["Pizza","Sushi","Tacos","Burgers","Thai Food"],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged()}}class Te{constructor(e){this.manager=e}addOption(){if(!this.manager.optionInput)return;const e=this.manager.optionInput.value.trim();if(!this.manager.isValidOption(e)){this.manager.helpers.showInputError();return}if(this.manager.isDuplicate(e)){this.manager.helpers.showDuplicateError();return}if(this.manager.options.length>=this.manager.maxOptions){this.manager.helpers.showMaxOptionsError();return}this.manager.options.push(e),this.manager.clearInput(),this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showSuccessFeedback()}removeOption(e){if(e>=0&&e<this.manager.options.length){const t=this.manager.options.splice(e,1)[0];this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showRemovalFeedback(t)}}editOption(e,t){if(e<0||e>=this.manager.options.length)return;const n=this.manager.options[e],s=t.querySelector(".option-text"),a=t.querySelector(".option-buttons"),r=document.createElement("input");r.type="text",r.className="edit-option-input",r.value=n;const w=this.manager.t("options.saveEditButton"),y=this.manager.t("options.cancelEditButton"),E=document.createElement("div");E.className="edit-controls",E.innerHTML=`
      <button class="save-edit" title="${w}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      </button>
      <button class="cancel-edit" title="${y}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `,s.style.display="none",a.style.display="none",t.insertBefore(r,s),t.insertBefore(E,s),r.focus(),r.select();const I=E.querySelector(".save-edit"),A=E.querySelector(".cancel-edit"),F=()=>{const T=r.value.trim();if(!this.manager.isValidOption(T)){this.manager.helpers.showInputError(),r.focus();return}if(this.manager.options.filter(($,W)=>W!==e).includes(T)){this.manager.helpers.showDuplicateError(),r.focus();return}this.manager.options[e]=T,this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showEditSuccessFeedback(n,T)},H=()=>{r.remove(),E.remove(),s.style.display="",a.style.display=""};I.addEventListener("click",F),A.addEventListener("click",H),r.addEventListener("keydown",T=>{T.key==="Enter"?(T.preventDefault(),F()):T.key==="Escape"&&(T.preventDefault(),H())});const N=T=>{t.contains(T.target)||(H(),document.removeEventListener("click",N))};setTimeout(()=>{document.addEventListener("click",N)},100)}async clearAllOptions(){if(this.manager.options.length!==0){if(this.manager.options.length>1){const e=this.manager.t("input.clearAllButton"),t=this.manager.t("input.clearAllConfirmation",{count:this.manager.options.length}),n=this.manager.t("input.clearAllButton"),s=this.manager.t("options.cancelEdit");if(!await this.manager.confirmationModal.show({title:e,message:t,confirmText:n,cancelText:s}))return}this.manager.options=[],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showClearFeedback()}}}class Oe{constructor(e=null){this.languageManager=e,this.modal=null,this.isOpen=!1,this.currentResolve=null,this.createModal(),this.setupEventListeners()}createModal(){const e=document.createElement("div");e.id="confirmation-modal",e.className="confirmation-modal hidden",e.innerHTML=`
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
    `,document.head.appendChild(t)}setupEventListeners(){this.modal.querySelector(".confirmation-overlay").addEventListener("click",()=>{this.close(!1)}),this.modal.querySelector(".confirmation-cancel").addEventListener("click",()=>{this.close(!1)}),this.modal.querySelector(".confirmation-confirm").addEventListener("click",()=>{this.close(!0)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close(!1)})}show(e={}){return new Promise(t=>{this.currentResolve=t;const n=e.title||(this.languageManager?this.languageManager.t("input.clearAllButton"):"Confirm Action"),s=e.message||"Are you sure you want to continue?",a=e.confirmText||(this.languageManager?this.languageManager.t("input.clearAllButton"):"Confirm"),r=e.cancelText||(this.languageManager?this.languageManager.t("options.cancelEdit"):"Cancel");this.modal.querySelector(".confirmation-title").textContent=n,this.modal.querySelector(".confirmation-message").textContent=s,this.modal.querySelector(".confirmation-confirm").textContent=a,this.modal.querySelector(".confirmation-cancel").textContent=r,this.modal.classList.remove("hidden"),this.isOpen=!0,document.body.style.overflow="hidden",requestAnimationFrame(()=>{this.modal.classList.add("open")}),setTimeout(()=>{this.modal.querySelector(".confirmation-cancel").focus()},100)})}close(e){this.isOpen&&(this.isOpen=!1,this.modal.classList.remove("open"),setTimeout(()=>{this.modal.classList.add("hidden"),document.body.style.overflow="",this.currentResolve&&(this.currentResolve(e),this.currentResolve=null)},300))}t(e){return this.languageManager?this.languageManager.t(e):e}}class Le{constructor(e){this.manager=e}renderOptions(){if(this.manager.optionsList){if(this.manager.optionsList.innerHTML="",this.manager.options.length===0){this.manager.helpers.renderEmptyState();return}this.manager.options.forEach((e,t)=>{const n=this.manager.helpers.createOptionElement(e,t);this.manager.optionsList.appendChild(n),this.manager.helpers.animateOptionAdd(n)}),this.updateClearButtonState()}}updateClearButtonState(){this.manager.clearButton&&(this.manager.clearButton.disabled=this.manager.options.length===0)}clearInput(){this.manager.optionInput&&(this.manager.optionInput.value="",this.manager.helpers.clearInputError(),this.manager.validateInput())}saveOptions(){this.manager.helpers.saveOptions()}loadSavedOptions(){this.manager.helpers.loadSavedOptions()}notifyOptionsChanged(){const e=new CustomEvent("optionsChanged",{detail:{options:[...this.manager.options]}});document.dispatchEvent(e)}getOptions(){return[...this.manager.options]}setOptions(e){Array.isArray(e)&&(this.manager.options=e.filter(t=>typeof t=="string"&&this.manager.isValidOption(t)).slice(0,this.manager.maxOptions),this.renderOptions(),this.saveOptions(),this.notifyOptionsChanged())}}class Ie{renderOptions(){return this.core2.renderOptions()}updateClearButtonState(){return this.core2.updateClearButtonState()}clearInput(){return this.core2.clearInput()}saveOptions(){return this.core2.saveOptions()}loadSavedOptions(){return this.core2.loadSavedOptions()}notifyOptionsChanged(){return this.core2.notifyOptionsChanged()}getOptions(){return this.core2.getOptions()}setOptions(e){return this.core2.setOptions(e)}constructor(e=null){this.options=[],this.maxOptions=20,this.minOptionLength=1,this.maxOptionLength=Number.MAX_SAFE_INTEGER,this.languageManager=e,this.optionInput=document.getElementById("option-input"),this.addButton=document.getElementById("add-option-btn"),this.clearButton=document.getElementById("clear-all-btn"),this.optionsList=document.getElementById("options-list"),this.helpers=new Ce(this),this.actions=new Te(this),this.core2=new Le(this),this.confirmationModal=new Oe(this.languageManager),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts(),this.core2.renderOptions(),this.validateInput()})}updateUITexts(){if(!this.languageManager)return;const e=document.getElementById("app-title");e&&(e.textContent=this.languageManager.t("header.title"));const t=document.getElementById("app-subtitle");t&&(t.textContent=this.languageManager.t("header.subtitle")),this.optionInput&&(this.optionInput.placeholder=this.languageManager.t("input.placeholder")),this.addButton&&(this.addButton.textContent=this.languageManager.t("input.addButton")),this.clearButton&&(this.clearButton.textContent=this.languageManager.t("input.clearAllButton"));const n=document.querySelector("#input-section h2");n&&(n.textContent=this.languageManager.t("input.sectionTitle"));const s=document.getElementById("spin-btn");s&&(s.textContent=this.languageManager.t("wheel.spinButton"))}t(e,t={}){return this.languageManager?this.languageManager.t(e,t):e}initializeEventListeners(){this.addButton&&this.addButton.addEventListener("click",()=>this.actions.addOption()),this.optionInput&&(this.optionInput.addEventListener("keypress",e=>{e.key==="Enter"&&this.actions.addOption()}),this.optionInput.addEventListener("input",()=>this.validateInput())),this.clearButton&&this.clearButton.addEventListener("click",()=>this.actions.clearAllOptions())}isValidOption(e){return e.length>=this.minOptionLength&&e.length<=this.maxOptionLength}isDuplicate(e){return this.options.some(t=>t.toLowerCase()===e.toLowerCase())}validateInput(){if(!this.optionInput)return;const e=this.optionInput.value.trim(),t=this.addButton;t&&(e.length===0?(t.disabled=!0,this.helpers.clearInputError()):this.isValidOption(e)?this.isDuplicate(e)?(t.disabled=!0,this.helpers.setInputError(this.t("input.duplicateOptionError"))):this.options.length>=this.maxOptions?(t.disabled=!0,this.helpers.setInputError(this.t("input.maxOptionsReached",{max:this.maxOptions}))):(t.disabled=!1,this.helpers.clearInputError()):(t.disabled=!0,this.helpers.setInputError(this.t("input.optionTooLong",{max:this.maxOptionLength}))))}}class Ae{constructor(e){this.modal=e}updateWinnerDisplay(){if(!this.modal.winnerText||!this.modal.currentWinner)return;this.modal.winnerText.innerHTML="";const e=document.createElement("div");e.style.cssText=`
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
    `;const t=document.createElement("span");t.textContent=this.modal.currentWinner;const n=this.calculateModalFontSize(this.modal.currentWinner);t.style.cssText=`
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 2s ease-in-out infinite;
      font-weight: 800;
      font-size: ${n}rem;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
      display: block;
      text-align: center;
      line-height: 1.2;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    `;const s=document.createElement("div");s.innerHTML="✨",s.style.cssText=`
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite;
    `;const a=document.createElement("div");a.innerHTML="🎉",a.style.cssText=`
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite 0.5s;
    `;const r=document.createElement("div");r.innerHTML="⭐",r.style.cssText=`
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      animation: sparkleFloat 3s ease-in-out infinite 1s;
    `,e.appendChild(s),e.appendChild(a),e.appendChild(t),e.appendChild(r),this.modal.winnerText.appendChild(e),this.addGradientAnimation()}calculateModalFontSize(e){if(!e)return 2.5;const t=window.innerWidth<=480,n=window.innerWidth<=768;let s,a,r;t?(s=2.2,a=1.4,r=2.8):n?(s=2.4,a=1.6,r=3):(s=2.8,a=1.8,r=3.5);const w=e.length;let y;return w<=10?y=r:w<=20?y=s:w<=30?y=s*.85:w<=50?y=s*.7:y=a,Math.max(a,Math.min(r,y))}addGradientAnimation(){const e="gradient-animation-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
    `,document.head.appendChild(t)}trapFocus(){if(!this.modal.modal)return;const e=this.modal.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],n=e[e.length-1];t&&t.focus();const s=r=>{r.key==="Tab"&&(r.shiftKey?document.activeElement===t&&(r.preventDefault(),n==null||n.focus()):document.activeElement===n&&(r.preventDefault(),t==null||t.focus()))};this.modal.modal.addEventListener("keydown",s);const a=this.modal.close.bind(this.modal);this.modal.close=()=>{this.modal.modal.removeEventListener("keydown",s),this.modal.close=a,a()}}}class ke{constructor(e=null){var t;this.modal=document.getElementById("result-modal"),this.modalContent=(t=this.modal)==null?void 0:t.querySelector(".modal-content"),this.winnerText=document.getElementById("winner-text"),this.closeButton=document.getElementById("close-modal-btn"),this.spinAgainButton=document.getElementById("spin-again-btn"),this.isOpen=!1,this.currentWinner=null,this.languageManager=e,this.helpers=new Ae(this),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts()})}updateUITexts(){var t;if(!this.languageManager)return;const e=(t=this.modal)==null?void 0:t.querySelector("h2");e&&(e.textContent=this.languageManager.t("result.winnerTitle")),this.closeButton&&(this.closeButton.textContent=this.languageManager.t("result.closeButton")),this.spinAgainButton&&(this.spinAgainButton.textContent=this.languageManager.t("result.spinAgainButton"))}t(e,t={}){return this.languageManager?this.languageManager.t(e,t):e}initializeEventListeners(){this.closeButton&&this.closeButton.addEventListener("click",()=>this.close()),this.spinAgainButton&&this.spinAgainButton.addEventListener("click",()=>this.spinAgain()),this.modal&&this.modal.addEventListener("click",e=>{e.target===this.modal&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),document.addEventListener("wheelWinner",e=>{this.showWinner(e.detail.winner)})}showWinner(e){!this.modal||!this.winnerText||(this.currentWinner=e,this.helpers.updateWinnerDisplay(),this.open(),setTimeout(()=>{this.triggerConfetti()},300))}open(){!this.modal||this.isOpen||(this.isOpen=!0,this.modal.classList.remove("hidden"),document.body.style.overflow="hidden",requestAnimationFrame(()=>{this.modal.style.opacity="0",this.modal.style.display="flex",requestAnimationFrame(()=>{this.modal.style.transition="opacity 0.3s ease-out",this.modal.style.opacity="1",this.modalContent&&(this.modalContent.style.animation="modalSlideIn 0.4s ease-out")})}),this.helpers.trapFocus())}close(){!this.modal||!this.isOpen||(this.isOpen=!1,this.modal.style.transition="opacity 0.2s ease-in",this.modal.style.opacity="0",this.modalContent&&(this.modalContent.style.animation="modalSlideOut 0.3s ease-in"),setTimeout(()=>{this.modal.classList.add("hidden"),this.modal.style.display="none",this.modal.style.opacity="",this.modal.style.transition="",this.modalContent&&(this.modalContent.style.animation=""),document.body.style.overflow=""},300),this.currentWinner=null)}spinAgain(){this.close(),setTimeout(()=>{const e=new CustomEvent("autoSpin");document.dispatchEvent(e)},200)}triggerConfetti(){const e=new CustomEvent("triggerConfetti",{detail:{winner:this.currentWinner,intensity:"high"}});document.dispatchEvent(e)}isModalOpen(){return this.isOpen}getCurrentWinner(){return this.currentWinner}forceClose(){this.modal&&(this.modal.classList.add("hidden"),this.modal.style.display="none",document.body.style.overflow=""),this.isOpen=!1,this.currentWinner=null}}var U={};(function f(e,t,n,s){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",w=function(){if(!e.OffscreenCanvas)return!1;var o=new OffscreenCanvas(1,1),i=o.getContext("2d");i.fillRect(0,0,1,1);var l=o.transferToImageBitmap();try{i.createPattern(l,"no-repeat")}catch{return!1}return!0}();function y(){}function E(o){var i=t.exports.Promise,l=i!==void 0?i:e.Promise;return typeof l=="function"?new l(o):(o(y,y),null)}var I=function(o,i){return{transform:function(l){if(o)return l;if(i.has(l))return i.get(l);var h=new OffscreenCanvas(l.width,l.height),d=h.getContext("2d");return d.drawImage(l,0,0),i.set(l,h),h},clear:function(){i.clear()}}}(w,new Map),A=function(){var o=Math.floor(16.666666666666668),i,l,h={},d=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(i=function(p){var u=Math.random();return h[u]=requestAnimationFrame(function c(m){d===m||d+o-1<m?(d=m,delete h[u],p()):h[u]=requestAnimationFrame(c)}),u},l=function(p){h[p]&&cancelAnimationFrame(h[p])}):(i=function(p){return setTimeout(p,o)},l=function(p){return clearTimeout(p)}),{frame:i,cancel:l}}(),F=function(){var o,i,l={};function h(d){function p(u,c){d.postMessage({options:u||{},callback:c})}d.init=function(c){var m=c.transferControlToOffscreen();d.postMessage({canvas:m},[m])},d.fire=function(c,m,v){if(i)return p(c,null),i;var M=Math.random().toString(36).slice(2);return i=E(function(b){function S(C){C.data.callback===M&&(delete l[M],d.removeEventListener("message",S),i=null,I.clear(),v(),b())}d.addEventListener("message",S),p(c,M),l[M]=S.bind(null,{data:{callback:M}})}),i},d.reset=function(){d.postMessage({reset:!0});for(var c in l)l[c](),delete l[c]}}return function(){if(o)return o;if(!n&&a){var d=["var CONFETTI, SIZE = {}, module = {};","("+f.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{o=new Worker(URL.createObjectURL(new Blob([d])))}catch(p){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",p),null}h(o)}return o}}(),H={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function N(o,i){return i?i(o):o}function T(o){return o!=null}function x(o,i,l){return N(o&&T(o[i])?o[i]:H[i],l)}function $(o){return o<0?0:Math.floor(o)}function W(o,i){return Math.floor(Math.random()*(i-o))+o}function q(o){return parseInt(o,16)}function j(o){return o.map(V)}function V(o){var i=String(o).replace(/[^0-9a-f]/gi,"");return i.length<6&&(i=i[0]+i[0]+i[1]+i[1]+i[2]+i[2]),{r:q(i.substring(0,2)),g:q(i.substring(2,4)),b:q(i.substring(4,6))}}function O(o){var i=x(o,"origin",Object);return i.x=x(i,"x",Number),i.y=x(i,"y",Number),i}function te(o){o.width=document.documentElement.clientWidth,o.height=document.documentElement.clientHeight}function ne(o){var i=o.getBoundingClientRect();o.width=i.width,o.height=i.height}function ie(o){var i=document.createElement("canvas");return i.style.position="fixed",i.style.top="0px",i.style.left="0px",i.style.pointerEvents="none",i.style.zIndex=o,i}function se(o,i,l,h,d,p,u,c,m){o.save(),o.translate(i,l),o.rotate(p),o.scale(h,d),o.arc(0,0,1,u,c,m),o.restore()}function oe(o){var i=o.angle*(Math.PI/180),l=o.spread*(Math.PI/180);return{x:o.x,y:o.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:o.startVelocity*.5+Math.random()*o.startVelocity,angle2D:-i+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:o.gravity*3,ovalScalar:.6,scalar:o.scalar,flat:o.flat}}function ae(o,i){i.x+=Math.cos(i.angle2D)*i.velocity+i.drift,i.y+=Math.sin(i.angle2D)*i.velocity+i.gravity,i.velocity*=i.decay,i.flat?(i.wobble=0,i.wobbleX=i.x+10*i.scalar,i.wobbleY=i.y+10*i.scalar,i.tiltSin=0,i.tiltCos=0,i.random=1):(i.wobble+=i.wobbleSpeed,i.wobbleX=i.x+10*i.scalar*Math.cos(i.wobble),i.wobbleY=i.y+10*i.scalar*Math.sin(i.wobble),i.tiltAngle+=.1,i.tiltSin=Math.sin(i.tiltAngle),i.tiltCos=Math.cos(i.tiltAngle),i.random=Math.random()+2);var l=i.tick++/i.totalTicks,h=i.x+i.random*i.tiltCos,d=i.y+i.random*i.tiltSin,p=i.wobbleX+i.random*i.tiltCos,u=i.wobbleY+i.random*i.tiltSin;if(o.fillStyle="rgba("+i.color.r+", "+i.color.g+", "+i.color.b+", "+(1-l)+")",o.beginPath(),r&&i.shape.type==="path"&&typeof i.shape.path=="string"&&Array.isArray(i.shape.matrix))o.fill(le(i.shape.path,i.shape.matrix,i.x,i.y,Math.abs(p-h)*.1,Math.abs(u-d)*.1,Math.PI/10*i.wobble));else if(i.shape.type==="bitmap"){var c=Math.PI/10*i.wobble,m=Math.abs(p-h)*.1,v=Math.abs(u-d)*.1,M=i.shape.bitmap.width*i.scalar,b=i.shape.bitmap.height*i.scalar,S=new DOMMatrix([Math.cos(c)*m,Math.sin(c)*m,-Math.sin(c)*v,Math.cos(c)*v,i.x,i.y]);S.multiplySelf(new DOMMatrix(i.shape.matrix));var C=o.createPattern(I.transform(i.shape.bitmap),"no-repeat");C.setTransform(S),o.globalAlpha=1-l,o.fillStyle=C,o.fillRect(i.x-M/2,i.y-b/2,M,b),o.globalAlpha=1}else if(i.shape==="circle")o.ellipse?o.ellipse(i.x,i.y,Math.abs(p-h)*i.ovalScalar,Math.abs(u-d)*i.ovalScalar,Math.PI/10*i.wobble,0,2*Math.PI):se(o,i.x,i.y,Math.abs(p-h)*i.ovalScalar,Math.abs(u-d)*i.ovalScalar,Math.PI/10*i.wobble,0,2*Math.PI);else if(i.shape==="star")for(var g=Math.PI/2*3,L=4*i.scalar,k=8*i.scalar,B=i.x,P=i.y,R=5,D=Math.PI/R;R--;)B=i.x+Math.cos(g)*k,P=i.y+Math.sin(g)*k,o.lineTo(B,P),g+=D,B=i.x+Math.cos(g)*L,P=i.y+Math.sin(g)*L,o.lineTo(B,P),g+=D;else o.moveTo(Math.floor(i.x),Math.floor(i.y)),o.lineTo(Math.floor(i.wobbleX),Math.floor(d)),o.lineTo(Math.floor(p),Math.floor(u)),o.lineTo(Math.floor(h),Math.floor(i.wobbleY));return o.closePath(),o.fill(),i.tick<i.totalTicks}function re(o,i,l,h,d){var p=i.slice(),u=o.getContext("2d"),c,m,v=E(function(M){function b(){c=m=null,u.clearRect(0,0,h.width,h.height),I.clear(),d(),M()}function S(){n&&!(h.width===s.width&&h.height===s.height)&&(h.width=o.width=s.width,h.height=o.height=s.height),!h.width&&!h.height&&(l(o),h.width=o.width,h.height=o.height),u.clearRect(0,0,h.width,h.height),p=p.filter(function(C){return ae(u,C)}),p.length?c=A.frame(S):b()}c=A.frame(S),m=b});return{addFettis:function(M){return p=p.concat(M),v},canvas:o,promise:v,reset:function(){c&&A.cancel(c),m&&m()}}}function J(o,i){var l=!o,h=!!x(i||{},"resize"),d=!1,p=x(i,"disableForReducedMotion",Boolean),u=a&&!!x(i||{},"useWorker"),c=u?F():null,m=l?te:ne,v=o&&c?!!o.__confetti_initialized:!1,M=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,b;function S(g,L,k){for(var B=x(g,"particleCount",$),P=x(g,"angle",Number),R=x(g,"spread",Number),D=x(g,"startVelocity",Number),de=x(g,"decay",Number),pe=x(g,"gravity",Number),ue=x(g,"drift",Number),X=x(g,"colors",j),me=x(g,"ticks",Number),Q=x(g,"shapes"),ge=x(g,"scalar"),fe=!!x(g,"flat"),Z=O(g),Y=B,K=[],ye=o.width*Z.x,ve=o.height*Z.y;Y--;)K.push(oe({x:ye,y:ve,angle:P,spread:R,startVelocity:D,color:X[Y%X.length],shape:Q[W(0,Q.length)],ticks:me,decay:de,gravity:pe,drift:ue,scalar:ge,flat:fe}));return b?b.addFettis(K):(b=re(o,K,m,L,k),b.promise)}function C(g){var L=p||x(g,"disableForReducedMotion",Boolean),k=x(g,"zIndex",Number);if(L&&M)return E(function(D){D()});l&&b?o=b.canvas:l&&!o&&(o=ie(k),document.body.appendChild(o)),h&&!v&&m(o);var B={width:o.width,height:o.height};c&&!v&&c.init(o),v=!0,c&&(o.__confetti_initialized=!0);function P(){if(c){var D={getBoundingClientRect:function(){if(!l)return o.getBoundingClientRect()}};m(D),c.postMessage({resize:{width:D.width,height:D.height}});return}B.width=B.height=null}function R(){b=null,h&&(d=!1,e.removeEventListener("resize",P)),l&&o&&(document.body.contains(o)&&document.body.removeChild(o),o=null,v=!1)}return h&&!d&&(d=!0,e.addEventListener("resize",P,!1)),c?c.fire(g,B,R):S(g,B,R)}return C.reset=function(){c&&c.reset(),b&&b.reset()},C}var G;function _(){return G||(G=J(null,{useWorker:!0,resize:!0})),G}function le(o,i,l,h,d,p,u){var c=new Path2D(o),m=new Path2D;m.addPath(c,new DOMMatrix(i));var v=new Path2D;return v.addPath(m,new DOMMatrix([Math.cos(u)*d,Math.sin(u)*d,-Math.sin(u)*p,Math.cos(u)*p,l,h])),v}function ce(o){if(!r)throw new Error("path confetti are not supported in this browser");var i,l;typeof o=="string"?i=o:(i=o.path,l=o.matrix);var h=new Path2D(i),d=document.createElement("canvas"),p=d.getContext("2d");if(!l){for(var u=1e3,c=u,m=u,v=0,M=0,b,S,C=0;C<u;C+=2)for(var g=0;g<u;g+=2)p.isPointInPath(h,C,g,"nonzero")&&(c=Math.min(c,C),m=Math.min(m,g),v=Math.max(v,C),M=Math.max(M,g));b=v-c,S=M-m;var L=10,k=Math.min(L/b,L/S);l=[k,0,0,k,-Math.round(b/2+c)*k,-Math.round(S/2+m)*k]}return{type:"path",path:i,matrix:l}}function he(o){var i,l=1,h="#000000",d='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof o=="string"?i=o:(i=o.text,l="scalar"in o?o.scalar:l,d="fontFamily"in o?o.fontFamily:d,h="color"in o?o.color:h);var p=10*l,u=""+p+"px "+d,c=new OffscreenCanvas(p,p),m=c.getContext("2d");m.font=u;var v=m.measureText(i),M=Math.ceil(v.actualBoundingBoxRight+v.actualBoundingBoxLeft),b=Math.ceil(v.actualBoundingBoxAscent+v.actualBoundingBoxDescent),S=2,C=v.actualBoundingBoxLeft+S,g=v.actualBoundingBoxAscent+S;M+=S+S,b+=S+S,c=new OffscreenCanvas(M,b),m=c.getContext("2d"),m.font=u,m.fillStyle=h,m.fillText(i,C,g);var L=1/l;return{type:"bitmap",bitmap:c.transferToImageBitmap(),matrix:[L,0,0,L,-M*L/2,-b*L/2]}}t.exports=function(){return _().apply(this,arguments)},t.exports.reset=function(){_().reset()},t.exports.create=J,t.exports.shapeFromPath=ce,t.exports.shapeFromText=he})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),U,!1);const z=U.exports;U.exports.create;class Be{constructor(e){this.effect=e}winnerCelebration(){const e=this.effect.presets.winner;z({...e,particleCount:100,spread:70,origin:{y:.6}}),setTimeout(()=>{z({...e,particleCount:50,angle:60,spread:55,origin:{x:0,y:.8}})},250),setTimeout(()=>{z({...e,particleCount:50,angle:120,spread:55,origin:{x:1,y:.8}})},400)}standardCelebration(){const e=this.effect.presets.celebration,t=()=>{this.effect.isActive&&(z({...e,particleCount:30,spread:60,origin:{x:Math.random()*.6+.2,y:Math.random()*.4+.5}}),this.effect.animationId=setTimeout(t,200))};t()}burstCelebration(){const e=this.effect.presets.burst;z({...e,particleCount:200,spread:100,origin:{y:.5},startVelocity:30,gravity:.5,drift:0})}highIntensityCelebration(){z({particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]}),setTimeout(()=>{this.fireworksEffect()},300),setTimeout(()=>{this.confettiRain()},800)}fireworksEffect(){[30,60,90,120,150].forEach((t,n)=>{setTimeout(()=>{z({particleCount:40,angle:t,spread:30,origin:{x:.1+n*.2,y:.3+Math.random()*.3},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"],startVelocity:25,gravity:.8})},n*100)})}confettiRain(){let e=0;const t=10,n=setInterval(()=>{if(e>=t||!this.effect.isActive){clearInterval(n);return}z({particleCount:20,spread:40,origin:{x:Math.random(),y:-.1},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"],startVelocity:15,gravity:.4,drift:Math.random()*2-1}),e++},200)}}class ze{constructor(){this.isActive=!1,this.animationId=null,this.presets={winner:{particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]},celebration:{particleCount:150,spread:100,origin:{y:.7},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"]},burst:{particleCount:200,spread:120,origin:{y:.5},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"]}},this.patterns=new Be(this),this.initializeEventListeners()}initializeEventListeners(){document.addEventListener("triggerConfetti",e=>{const{winner:t,intensity:n}=e.detail;this.celebrate(n||"winner",t)}),document.addEventListener("wheelWinner",e=>{setTimeout(()=>{this.celebrate("winner",e.detail.winner)},500)})}celebrate(e="winner",t=""){switch(this.isActive&&this.stop(),this.isActive=!0,e){case"winner":this.patterns.winnerCelebration();break;case"celebration":this.patterns.standardCelebration();break;case"burst":this.patterns.burstCelebration();break;case"high":this.patterns.highIntensityCelebration();break;default:this.patterns.winnerCelebration()}setTimeout(()=>{this.stop()},3e3)}customShapeConfetti(e="star"){const t={star:"★",heart:"♥",circle:"●",diamond:"♦"};z({particleCount:50,spread:60,origin:{y:.6},shapes:[t[e]||t.star],colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],scalar:1.2})}cannonEffect(e={x:.5,y:.8},t="up"){const n={up:{angle:90,spread:45},left:{angle:45,spread:35},right:{angle:135,spread:35},diagonal:{angle:60,spread:50}},s=n[t]||n.up;z({particleCount:80,angle:s.angle,spread:s.spread,origin:e,colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],startVelocity:35,gravity:.6})}stop(){this.isActive=!1,this.animationId&&(clearTimeout(this.animationId),this.animationId=null),z.reset()}isConfettiActive(){return this.isActive}randomCelebration(){const e=["winner","celebration","burst"],t=e[Math.floor(Math.random()*e.length)];this.celebrate(t)}}class $e{constructor(e){this.app=e}setupEventHandlers(){document.addEventListener("optionsChanged",e=>{const{options:t}=e.detail;this.handleOptionsChange(t)}),document.addEventListener("wheelWinner",e=>{const{winner:t}=e.detail;this.handleWheelWinner(t)}),document.addEventListener("spinAgain",()=>{this.handleSpinAgain()}),document.addEventListener("triggerConfetti",e=>{const{winner:t,intensity:n}=e.detail;this.handleConfettiTrigger(t,n)}),document.addEventListener("keydown",e=>{this.handleKeyboardShortcuts(e)}),window.addEventListener("resize",()=>{this.handleWindowResize()}),document.addEventListener("visibilitychange",()=>{this.handleVisibilityChange()})}handleOptionsChange(e){this.app.components.wheelSpinner&&this.app.components.wheelSpinner.updateOptions(e),this.app.components.historyManager&&e.length>0&&this.app.components.historyManager.saveWheelConfiguration(e)}handleWheelWinner(e){var t;if(console.log(`Winner selected: ${e}`),this.app.components.historyManager){const n=((t=this.app.components.inputManager)==null?void 0:t.getOptions())||[];this.app.components.historyManager.saveSpinResult(n,e)}this.logWinnerToAnalytics(e)}handleSpinAgain(){this.app.components.wheelSpinner,this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}handleConfettiTrigger(e,t){console.log(`Confetti triggered for: ${e}`)}handleKeyboardShortcuts(e){if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))switch(e.key.toLowerCase()){case" ":case"enter":if(e.preventDefault(),this.app.components.wheelSpinner&&!this.app.components.wheelSpinner.isSpinning){const t=document.getElementById("spin-btn");t&&!t.disabled&&t.click()}break;case"escape":break;case"r":this.app.components.resultModal&&this.app.components.resultModal.isModalOpen()&&this.app.components.resultModal.spinAgain();break;case"h":this.app.components.historyManager&&this.app.components.historyManager.toggleHistoryPanel();break}}handleWindowResize(){this.app.components.wheelSpinner}handleVisibilityChange(){document.hidden&&this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}logWinnerToAnalytics(e){var n;const t={event:"wheel_spin_result",winner:e,timestamp:new Date().toISOString(),totalOptions:((n=this.app.components.inputManager)==null?void 0:n.getOptions().length)||0};console.log("Analytics:",t)}}class De{constructor(e){this.manager=e}initializeHistoryPanel(){const e=document.querySelector("header");if(e){const a=document.createElement("button");a.id="history-btn",a.className="glass-btn history-button";const r=this.manager.languageManager?this.manager.languageManager.t("history.historyButton"):"History";a.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l4 2"/>
        </svg>
        <span>${r}</span>
      `,a.style.marginTop="var(--spacing-lg)",a.addEventListener("click",()=>this.manager.toggleHistoryPanel()),e.appendChild(a)}const t=document.createElement("div");t.id="history-panel",t.className="history-panel glass-card hidden";const n=this.manager.languageManager?this.manager.languageManager.t("history.title"):"Wheel History",s=this.manager.languageManager?this.manager.languageManager.t("history.clearHistory"):"Clear History";t.innerHTML=`
      <div class="history-header">
        <h3>${n}</h3>
        <button id="close-history" class="close-btn">✕</button>
      </div>
      <div class="history-content">
        <div id="history-list" class="history-list"></div>
        <button id="clear-history" class="glass-btn danger">${s}</button>
      </div>
    `,document.getElementById("app").appendChild(t),document.getElementById("close-history").addEventListener("click",()=>this.manager.closeHistoryPanel()),document.getElementById("clear-history").addEventListener("click",()=>this.manager.clearHistory())}updateHistoryDisplay(){const e=document.getElementById("history-list");if(!e)return;const t=this.manager.getHistory();if(t.length===0){const n=this.manager.languageManager?this.manager.languageManager.t("history.noHistory"):"No history yet. Spin the wheel to create some!";e.innerHTML=`<div class="history-empty">${n}</div>`;return}e.innerHTML=t.map(n=>this.createHistoryItemHTML(n)).join(""),e.querySelectorAll(".history-item").forEach((n,s)=>{n.addEventListener("click",()=>this.manager.loadHistoryItem(t[s]))})}createHistoryItemHTML(e){const t=new Date(e.timestamp).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),n=e.options.length>3?`${e.options.slice(0,3).join(", ")}... (+${e.options.length-3} more)`:e.options.join(", "),s=e.winner?`<div class="history-item-winner">🎉 Winner: ${e.winner}</div>`:"";return`
      <div class="history-item" data-id="${e.id}">
        <div class="history-item-date">${t}</div>
        <div class="history-item-options">${n}</div>
        ${s}
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
    `,document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),3e3)}}class He{constructor(e){this.manager=e}addHistoryStyles(){const e="history-panel-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
        .history-panel,
        .history-panel.open,
        .history-panel.hidden {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          right: auto !important;
          width: calc(100vw - 20px) !important;
          max-width: 350px !important;
          height: 80vh !important;
          transition: opacity 0.3s ease-out, visibility 0.3s ease-out, transform 0.3s ease-out !important;
        }
        
        .history-panel {
          transform: translate(-50%, -50%) scale(0.9) !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        
        .history-panel.open {
          transform: translate(-50%, -50%) scale(1) !important;
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
        }
        
        .history-panel.hidden {
          transform: translate(-50%, -50%) scale(0.9) !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          display: none !important;
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
    `,document.head.appendChild(t)}}class Pe{constructor(e){this.manager=e,this.ui=new De(e),this.styles=new He(e)}initializeHistoryPanel(){this.ui.initializeHistoryPanel(),this.styles.addHistoryStyles()}updateHistoryDisplay(){this.ui.updateHistoryDisplay()}createHistoryItemHTML(e){return this.ui.createHistoryItemHTML(e)}showLoadFeedback(){this.ui.showLoadFeedback()}}class Fe{constructor(e=null){this.languageManager=e,this.historyKey="wheelHistory",this.maxHistoryItems=50,this.isHistoryPanelOpen=!1,this.ui=new Pe(this),this.ui.initializeHistoryPanel(),this.loadHistory(),this.setupLanguageListeners()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts()})}updateUITexts(){if(!this.languageManager)return;const e=document.getElementById("history-btn");if(e){const a=this.languageManager.t("history.historyButton"),r=e.querySelector("span");r&&(r.textContent=a)}const t=document.querySelector("#history-panel .history-header h3");t&&(t.textContent=this.languageManager.t("history.title"));const n=document.getElementById("clear-history");n&&(n.textContent=this.languageManager.t("history.clearHistory"));const s=document.querySelector(".history-empty");s&&(s.textContent=this.languageManager.t("history.noHistory"))}saveWheelConfiguration(e){const t=this.getHistory(),n={id:Date.now(),type:"configuration",timestamp:new Date().toISOString(),options:[...e],winner:null};t.some(a=>a.type==="configuration"&&JSON.stringify(a.options)===JSON.stringify(e)&&Date.now()-new Date(a.timestamp).getTime()<6e4)||(t.unshift(n),this.saveHistory(t))}saveSpinResult(e,t){const n=this.getHistory(),s={id:Date.now(),type:"result",timestamp:new Date().toISOString(),options:[...e],winner:t};n.unshift(s),this.saveHistory(n),this.ui.updateHistoryDisplay()}getHistory(){try{const e=localStorage.getItem(this.historyKey);return e?JSON.parse(e):[]}catch(e){return console.warn("Error loading history:",e),[]}}saveHistory(e){try{const t=e.slice(0,this.maxHistoryItems);localStorage.setItem(this.historyKey,JSON.stringify(t))}catch(t){console.warn("Error saving history:",t)}}loadHistory(){this.ui.updateHistoryDisplay()}loadHistoryItem(e){const t=window.DecisionWheelApp;t&&t.components.inputManager&&(t.components.inputManager.setOptions(e.options),this.ui.showLoadFeedback(),this.closeHistoryPanel())}toggleHistoryPanel(){document.getElementById("history-panel")&&(this.isHistoryPanelOpen?this.closeHistoryPanel():this.openHistoryPanel())}openHistoryPanel(){const e=document.getElementById("history-panel");e&&(e.classList.remove("hidden"),e.classList.add("open"),this.isHistoryPanelOpen=!0,this.ui.updateHistoryDisplay())}closeHistoryPanel(){const e=document.getElementById("history-panel");e&&(e.classList.remove("open"),setTimeout(()=>{e.classList.add("hidden")},300),this.isHistoryPanelOpen=!1)}clearHistory(){confirm("Are you sure you want to clear all history?")&&(localStorage.removeItem(this.historyKey),this.ui.updateHistoryDisplay())}}class We{constructor(e){this.languageManager=e,this.element=null,this.languageManager.addLanguageChangeListener(()=>{this.render()})}create(){return this.element=document.createElement("section"),this.element.className="content-section glass-card",this.element.style.marginTop="2rem",this.render(),this.element}render(){if(!this.element)return;const e=this.languageManager.t.bind(this.languageManager);this.element.innerHTML=`
      <h2>${e("content.howToUse.title")}</h2>
      <div class="content-grid">
        <div class="content-item">
          <h3>${e("content.howToUse.step1.title")}</h3>
          <p>${e("content.howToUse.step1.description")}</p>
        </div>
        <div class="content-item">
          <h3>${e("content.howToUse.step2.title")}</h3>
          <p>${e("content.howToUse.step2.description")}</p>
        </div>
        <div class="content-item">
          <h3>${e("content.howToUse.step3.title")}</h3>
          <p>${e("content.howToUse.step3.description")}</p>
        </div>
      </div>
    `}getElement(){return this.element||this.create()}destroy(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null}}class Re{constructor(e){this.languageManager=e,this.element=null,this.languageManager.addLanguageChangeListener(()=>{this.render()})}create(){return this.element=document.createElement("section"),this.element.className="content-section glass-card",this.element.style.marginTop="2rem",this.render(),this.element}render(){if(!this.element)return;const e=this.languageManager.t.bind(this.languageManager);this.element.innerHTML=`
      <h2>${e("content.popularUses.title")}</h2>
      <div class="use-cases-grid">
        <div class="use-case">
          <h3>${e("content.popularUses.foodDecisions.title")}</h3>
          <p>${e("content.popularUses.foodDecisions.description")}</p>
        </div>
        <div class="use-case">
          <h3>${e("content.popularUses.entertainmentChoices.title")}</h3>
          <p>${e("content.popularUses.entertainmentChoices.description")}</p>
        </div>
        <div class="use-case">
          <h3>${e("content.popularUses.travelPlanning.title")}</h3>
          <p>${e("content.popularUses.travelPlanning.description")}</p>
        </div>
        <div class="use-case">
          <h3>${e("content.popularUses.dailyActivities.title")}</h3>
          <p>${e("content.popularUses.dailyActivities.description")}</p>
        </div>
        <div class="use-case">
          <h3>${e("content.popularUses.partyGames.title")}</h3>
          <p>${e("content.popularUses.partyGames.description")}</p>
        </div>
        <div class="use-case">
          <h3>${e("content.popularUses.educationalTools.title")}</h3>
          <p>${e("content.popularUses.educationalTools.description")}</p>
        </div>
      </div>
    `}getElement(){return this.element||this.create()}destroy(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null}}class Ne{constructor(e){this.languageManager=e,this.element=null,this.languageManager.addLanguageChangeListener(()=>{this.render()})}create(){return this.element=document.createElement("section"),this.element.className="content-section glass-card",this.element.style.marginTop="2rem",this.render(),this.element}render(){if(!this.element)return;const e=this.languageManager.t.bind(this.languageManager);this.element.innerHTML=`
      <h2>${e("content.whyChoose.title")}</h2>
      <div class="features-list">
        <div class="feature">
          <h3>${e("content.whyChoose.randomResults.title")}</h3>
          <p>${e("content.whyChoose.randomResults.description")}</p>
        </div>
        <div class="feature">
          <h3>${e("content.whyChoose.mobileFriendly.title")}</h3>
          <p>${e("content.whyChoose.mobileFriendly.description")}</p>
        </div>
        <div class="feature">
          <h3>${e("content.whyChoose.noRegistration.title")}</h3>
          <p>${e("content.whyChoose.noRegistration.description")}</p>
        </div>
        <div class="feature">
          <h3>${e("content.whyChoose.beautifulDesign.title")}</h3>
          <p>${e("content.whyChoose.beautifulDesign.description")}</p>
        </div>
        <div class="feature">
          <h3>${e("content.whyChoose.fastPerformance.title")}</h3>
          <p>${e("content.whyChoose.fastPerformance.description")}</p>
        </div>
        <div class="feature">
          <h3>${e("content.whyChoose.multipleLanguages.title")}</h3>
          <p>${e("content.whyChoose.multipleLanguages.description")}</p>
        </div>
      </div>
    `}getElement(){return this.element||this.create()}destroy(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null}}class qe{constructor(e){this.languageManager=e,this.element=null,this.languageManager.addLanguageChangeListener(()=>{this.render()})}create(){return this.element=document.createElement("section"),this.element.className="content-section glass-card",this.element.style.marginTop="2rem",this.render(),this.element}render(){if(!this.element)return;const e=this.languageManager.t.bind(this.languageManager);this.element.innerHTML=`
      <h2>${e("content.tips.title")}</h2>
      <div class="tips-content">
        <h3>${e("content.tips.subtitle")}</h3>
        <ul class="tips-list">
          <li><strong>${e("content.tips.beSpecific.title")}</strong> ${e("content.tips.beSpecific.description")}</li>
          <li><strong>${e("content.tips.considerWeight.title")}</strong> ${e("content.tips.considerWeight.description")}</li>
          <li><strong>${e("content.tips.reviewOptions.title")}</strong> ${e("content.tips.reviewOptions.description")}</li>
          <li><strong>${e("content.tips.trustProcess.title")}</strong> ${e("content.tips.trustProcess.description")}</li>
          <li><strong>${e("content.tips.useBrainstorming.title")}</strong> ${e("content.tips.useBrainstorming.description")}</li>
        </ul>
      </div>
    `}getElement(){return this.element||this.create()}destroy(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null}}class Ue{constructor(e){this.languageManager=e,this.container=null,this.sections={},this.init()}init(){this.sections={howToUse:new We(this.languageManager),popularUses:new Re(this.languageManager),whyChoose:new Ne(this.languageManager),tips:new qe(this.languageManager)}}render(e){e&&(this.container=e,Object.keys(this.sections).forEach(t=>{const s=this.sections[t].create();e.appendChild(s)}))}replaceStaticContent(){const e=document.querySelector("main");if(!e)return;e.querySelectorAll(".content-section").forEach(n=>n.remove()),this.render(e)}updateLanguage(){Object.keys(this.sections).forEach(e=>{this.sections[e].render()})}getSection(e){return this.sections[e]}destroy(){Object.keys(this.sections).forEach(e=>{this.sections[e].destroy()}),this.sections={},this.container=null}}class je{constructor(e){this.seoManager=e,this.performanceObserver=null,this.webVitalsData={fcp:null,lcp:null,fid:null,cls:null},this.initialize()}initialize(){try{this.setupPerformanceMonitoring(),this.setupLazyLoading(),this.setupServiceWorker(),this.addBreadcrumbStructuredData(),this.setupFAQStructuredData(),console.log("Advanced SEO Manager initialized successfully")}catch(e){console.error("Error initializing Advanced SEO Manager:",e)}}setupPerformanceMonitoring(){"PerformanceObserver"in window&&(this.observePaintMetrics(),this.observeLayoutShift(),this.observeInputDelay()),this.measureBasicPerformance()}observePaintMetrics(){try{new PerformanceObserver(t=>{t.getEntries().forEach(s=>{s.name==="first-contentful-paint"&&(this.webVitalsData.fcp=s.startTime,this.reportWebVital("FCP",s.startTime)),s.entryType==="largest-contentful-paint"&&(this.webVitalsData.lcp=s.startTime,this.reportWebVital("LCP",s.startTime))})}).observe({entryTypes:["paint","largest-contentful-paint"]})}catch(e){console.warn("Could not observe paint metrics:",e)}}observeLayoutShift(){try{let e=0;new PerformanceObserver(n=>{n.getEntries().forEach(a=>{a.hadRecentInput||(e+=a.value)}),this.webVitalsData.cls=e,this.reportWebVital("CLS",e)}).observe({entryTypes:["layout-shift"]})}catch(e){console.warn("Could not observe layout shift:",e)}}observeInputDelay(){try{new PerformanceObserver(t=>{t.getEntries().forEach(s=>{this.webVitalsData.fid=s.processingStart-s.startTime,this.reportWebVital("FID",this.webVitalsData.fid)})}).observe({entryTypes:["first-input"]})}catch(e){console.warn("Could not observe input delay:",e)}}measureBasicPerformance(){window.addEventListener("load",()=>{const e=performance.getEntriesByType("navigation")[0];if(e){const t={pageLoadTime:e.loadEventEnd-e.fetchStart,domContentLoaded:e.domContentLoadedEventEnd-e.fetchStart,firstByte:e.responseStart-e.fetchStart};console.log("Basic Performance Metrics:",t),this.reportPerformanceMetrics(t)}})}reportWebVital(e,t){console.log(`Web Vital - ${e}:`,t)}reportPerformanceMetrics(e){console.log("Performance Metrics:",e)}setupLazyLoading(){if("IntersectionObserver"in window){const e=document.querySelectorAll("img[data-src]");if(e.length>0){const t=new IntersectionObserver(n=>{n.forEach(s=>{if(s.isIntersecting){const a=s.target;a.src=a.dataset.src,a.classList.remove("lazy"),t.unobserve(a)}})});e.forEach(n=>t.observe(n))}}}setupServiceWorker(){"serviceWorker"in navigator&&console.log("Service Worker support detected")}addBreadcrumbStructuredData(){const e={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://wheelspinner.app/"},{"@type":"ListItem",position:2,name:"Decision Wheel Spinner",item:"https://wheelspinner.app/"}]};this.addStructuredData("breadcrumb-data",e)}setupFAQStructuredData(){const e={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does the decision wheel spinner work?",acceptedAnswer:{"@type":"Answer",text:"Simply add your options to the wheel, then click the spin button. The wheel will randomly select one of your options to help you make a decision."}},{"@type":"Question",name:"Is the wheel spinner really random?",acceptedAnswer:{"@type":"Answer",text:"Yes, our wheel spinner uses JavaScript's built-in random number generator to ensure fair and unbiased results."}},{"@type":"Question",name:"Can I customize the wheel colors?",acceptedAnswer:{"@type":"Answer",text:"The wheel automatically assigns different colors to each option to make them easily distinguishable."}},{"@type":"Question",name:"How many options can I add to the wheel?",acceptedAnswer:{"@type":"Answer",text:"You can add multiple options to the wheel. The wheel will automatically adjust to accommodate all your choices."}}]};this.addStructuredData("faq-data",e)}addStructuredData(e,t){const n=document.getElementById(e);n&&n.remove();const s=document.createElement("script");s.type="application/ld+json",s.id=e,s.textContent=JSON.stringify(t,null,2),document.head.appendChild(s)}addPageSpecificMeta(e,t){const n=[];switch(e){case"home":n.push({name:"article:author",content:"Decision Wheel Spinner Team"},{name:"article:section",content:"Tools"},{name:"article:tag",content:"decision making, wheel spinner, random choice"});break}n.forEach(s=>{const a=document.createElement("meta");Object.keys(s).forEach(r=>{a.setAttribute(r,s[r])}),document.head.appendChild(a)})}optimizeImages(){document.querySelectorAll("img").forEach(t=>{t.hasAttribute("loading")||t.setAttribute("loading","lazy"),t.hasAttribute("decoding")||t.setAttribute("decoding","async"),t.hasAttribute("alt")||console.warn("Image missing alt text:",t.src)})}addPreloadHints(){[{href:"/src/styles/globals.css",as:"style"},{href:"/src/styles/glassmorphism.css",as:"style"},{href:"/assets/img/wheelicon.png",as:"image"}].forEach(t=>{const n=document.createElement("link");n.rel="preload",n.href=t.href,n.as=t.as,document.querySelector(`link[href="${t.href}"]`)||document.head.appendChild(n)})}updateSocialMetaTags(e){[{property:"og:type",content:"website"},{property:"og:site_name",content:e.siteName||"Decision Wheel Spinner"},{property:"og:image:type",content:"image/png"},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:domain",content:"wheelspinner.app"}].forEach(n=>{const s=n.property?`meta[property="${n.property}"]`:`meta[name="${n.name}"]`;let a=document.querySelector(s);a||(a=document.createElement("meta"),n.property?a.setAttribute("property",n.property):a.setAttribute("name",n.name),document.head.appendChild(a)),a.setAttribute("content",n.content)})}getSEOAudit(){var t,n,s,a;return{meta:{title:document.title,description:(t=document.querySelector('meta[name="description"]'))==null?void 0:t.content,keywords:(n=document.querySelector('meta[name="keywords"]'))==null?void 0:n.content,canonical:(s=document.querySelector('link[rel="canonical"]'))==null?void 0:s.href,robots:(a=document.querySelector('meta[name="robots"]'))==null?void 0:a.content},images:{total:document.querySelectorAll("img").length,withAlt:document.querySelectorAll("img[alt]").length,withLazyLoading:document.querySelectorAll('img[loading="lazy"]').length},performance:this.webVitalsData,structuredData:{scripts:document.querySelectorAll('script[type="application/ld+json"]').length},socialMedia:{ogTags:document.querySelectorAll('meta[property^="og:"]').length,twitterTags:document.querySelectorAll('meta[name^="twitter:"]').length}}}cleanup(){this.performanceObserver&&this.performanceObserver.disconnect(),console.log("Advanced SEO Manager cleanup completed")}}class Ve{constructor(){this.weights={title:15,description:15,keywords:10,headings:10,images:10,structuredData:15,performance:15,socialMedia:5,accessibility:5},this.initialize()}initialize(){console.log("SEO Analyzer initialized")}analyze(){const e={timestamp:new Date().toISOString(),url:window.location.href,score:0,maxScore:100,categories:{title:this.analyzeTitleTag(),description:this.analyzeDescription(),keywords:this.analyzeKeywords(),headings:this.analyzeHeadings(),images:this.analyzeImages(),structuredData:this.analyzeStructuredData(),performance:this.analyzePerformance(),socialMedia:this.analyzeSocialMedia(),accessibility:this.analyzeAccessibility()},recommendations:[],criticalIssues:[],warnings:[]};return e.score=this.calculateOverallScore(e.categories),e.recommendations=this.generateRecommendations(e.categories),e.criticalIssues=this.identifyCriticalIssues(e.categories),e.warnings=this.generateWarnings(e.categories),e}analyzeTitleTag(){const e=document.querySelector("title"),t=e?e.textContent:"",n={score:0,maxScore:this.weights.title,title:t,length:t.length,issues:[]};return t?(t.length<30?(n.issues.push("Title is too short (less than 30 characters)"),n.score+=5):t.length<=60?n.score+=15:t.length<=70?(n.issues.push("Title is slightly long (over 60 characters)"),n.score+=10):(n.issues.push("Title is too long (over 70 characters)"),n.score+=5),t.toLowerCase().includes("wheel")||t.toLowerCase().includes("spinner")||t.toLowerCase().includes("decision")?n.score+=5:n.issues.push("Title does not contain main keywords"),n):(n.issues.push("No title tag found"),n)}analyzeDescription(){const e=document.querySelector('meta[name="description"]'),t=e?e.getAttribute("content"):"",n={score:0,maxScore:this.weights.description,description:t,length:t.length,issues:[]};return t?(t.length<120?(n.issues.push("Description is too short (less than 120 characters)"),n.score+=8):t.length<=160?n.score+=15:t.length<=180?(n.issues.push("Description is slightly long (over 160 characters)"),n.score+=10):(n.issues.push("Description is too long (over 180 characters)"),n.score+=5),n):(n.issues.push("No meta description found"),n)}analyzeKeywords(){const e=document.querySelector('meta[name="keywords"]'),t=e?e.getAttribute("content"):"",n={score:0,maxScore:this.weights.keywords,keywords:t,keywordCount:t?t.split(",").length:0,issues:[]};if(!t)n.issues.push("No meta keywords found"),n.score+=5;else{const s=t.split(",").map(a=>a.trim());s.length>10?(n.issues.push("Too many keywords (over 10)"),n.score+=5):s.length>=5?n.score+=10:(n.issues.push("Too few keywords (less than 5)"),n.score+=7)}return n}analyzeHeadings(){const e=document.querySelectorAll("h1"),t=document.querySelectorAll("h2"),n=document.querySelectorAll("h3"),s={score:0,maxScore:this.weights.headings,h1Count:e.length,h2Count:t.length,h3Count:n.length,issues:[]};return e.length===0?s.issues.push("No H1 tag found"):e.length>1?(s.issues.push("Multiple H1 tags found (should be only one)"),s.score+=5):s.score+=8,t.length>0?s.score+=2:s.issues.push("No H2 tags found"),s}analyzeImages(){const e=document.querySelectorAll("img"),t=document.querySelectorAll("img[alt]"),n=document.querySelectorAll('img[loading="lazy"]'),s={score:0,maxScore:this.weights.images,totalImages:e.length,imagesWithAlt:t.length,imagesWithLazyLoading:n.length,issues:[]};if(e.length===0)return s.score+=10,s;const a=t.length/e.length*100;return a===100?s.score+=5:(s.issues.push(`${e.length-t.length} images missing alt text`),s.score+=Math.floor(a/20)),n.length/e.length*100>=50?s.score+=5:(s.issues.push("Consider adding lazy loading to images"),s.score+=2),s}analyzeStructuredData(){const e=document.querySelectorAll('script[type="application/ld+json"]'),t={score:0,maxScore:this.weights.structuredData,scriptsCount:e.length,validSchemas:0,issues:[]};if(e.length===0)return t.issues.push("No structured data found"),t;let n=0;return e.forEach(s=>{try{const a=JSON.parse(s.textContent);a["@context"]&&a["@type"]&&n++}catch{t.issues.push("Invalid JSON-LD structured data found")}}),t.validSchemas=n,n>=2?t.score+=15:n===1?t.score+=10:t.score+=3,t}analyzePerformance(){const e={score:0,maxScore:this.weights.performance,metrics:{},issues:[]};if(!window.performance)return e.issues.push("Performance API not available"),e.score+=5,e;try{const t=performance.getEntriesByType("navigation")[0];if(t){const n=t.loadEventEnd-t.fetchStart,s=t.domContentLoadedEventEnd-t.fetchStart;e.metrics={pageLoadTime:Math.round(n),domContentLoaded:Math.round(s)},n<1e3?e.score+=15:n<2e3?e.score+=12:n<3e3?(e.score+=8,e.issues.push("Page load time is above 2 seconds")):(e.score+=3,e.issues.push("Page load time is above 3 seconds"))}}catch{e.issues.push("Could not measure performance metrics"),e.score+=5}return e}analyzeSocialMedia(){const e=document.querySelectorAll('meta[property^="og:"]'),t=document.querySelectorAll('meta[name^="twitter:"]'),n={score:0,maxScore:this.weights.socialMedia,openGraphTags:e.length,twitterTags:t.length,issues:[]},a=["og:title","og:description","og:image","og:url"].filter(y=>!document.querySelector(`meta[property="${y}"]`));a.length===0?n.score+=3:(n.issues.push(`Missing OpenGraph tags: ${a.join(", ")}`),n.score+=1);const w=["twitter:title","twitter:description","twitter:image"].filter(y=>!document.querySelector(`meta[name="${y}"]`));return w.length===0?n.score+=2:(n.issues.push(`Missing Twitter tags: ${w.join(", ")}`),n.score+=0),n}analyzeAccessibility(){const e={score:0,maxScore:this.weights.accessibility,issues:[]};return document.documentElement.getAttribute("lang")?e.score+=2:e.issues.push("HTML lang attribute missing"),document.querySelector('meta[name="viewport"]')?e.score+=2:e.issues.push("Viewport meta tag missing"),document.querySelectorAll('a[href^="#"]').length>0?e.score+=1:e.issues.push("Consider adding skip navigation links"),e}calculateOverallScore(e){let t=0;return Object.keys(e).forEach(n=>{t+=e[n].score}),Math.round(t)}generateRecommendations(e){const t=[];return Object.keys(e).forEach(n=>{const s=e[n];s.issues&&s.issues.length>0&&s.issues.forEach(a=>{t.push({category:n,priority:this.getIssuePriority(a),issue:a,solution:this.getSolution(a)})})}),t.sort((n,s)=>this.getPriorityWeight(s.priority)-this.getPriorityWeight(n.priority))}identifyCriticalIssues(e){const t=[];return e.title.score===0&&t.push("Missing title tag"),e.description.score===0&&t.push("Missing meta description"),e.headings.h1Count===0&&t.push("Missing H1 tag"),e.performance.metrics.pageLoadTime>5e3&&t.push("Extremely slow page load time"),t}generateWarnings(e){const t=[];return e.title.length>60&&t.push("Title tag may be truncated in search results"),e.description.length>160&&t.push("Meta description may be truncated in search results"),e.structuredData.scriptsCount===0&&t.push("No structured data found - consider adding JSON-LD markup"),t}getIssuePriority(e){const t=["title","description","h1","missing"],n=["long","short","slow"],s=e.toLowerCase();return t.some(a=>s.includes(a))?"high":n.some(a=>s.includes(a))?"medium":"low"}getPriorityWeight(e){switch(e){case"high":return 3;case"medium":return 2;case"low":return 1;default:return 0}}getSolution(e){const t={"No title tag found":"Add a descriptive title tag between 50-60 characters","No meta description found":"Add a compelling meta description between 150-160 characters","No H1 tag found":"Add a single H1 tag that describes the main content","Title is too short":"Expand title to be more descriptive (30+ characters)","Title is too long":"Shorten title to under 60 characters","Description is too short":"Expand description to be more informative (120+ characters)","Description is too long":"Shorten description to under 160 characters","images missing alt text":"Add descriptive alt text to all images","No structured data found":"Add JSON-LD structured data markup","Page load time":"Optimize images, minify CSS/JS, and enable compression"};for(const n in t)if(e.toLowerCase().includes(n.toLowerCase()))return t[n];return"Review and optimize this element for better SEO"}generateReport(e="console"){const t=this.analyze();switch(e){case"json":return JSON.stringify(t,null,2);case"html":return this.generateHTMLReport(t);case"console":default:return this.logConsoleReport(t),t}}generateHTMLReport(e){return`
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
          ${Object.keys(e.categories).map(t=>{const n=e.categories[t];return`
              <div style="border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
                <h4>${t.charAt(0).toUpperCase()+t.slice(1)}</h4>
                <p>Score: ${n.score}/${n.maxScore}</p>
                ${n.issues&&n.issues.length>0?`
                  <ul style="font-size: 0.9em; color: #666;">
                    ${n.issues.map(s=>`<li>${s}</li>`).join("")}
                  </ul>
                `:'<p style="color: #4CAF50;">✓ No issues found</p>'}
              </div>
            `}).join("")}
        </div>
      </div>
    `}logConsoleReport(e){console.group("🔍 SEO Analysis Report"),console.log(`Overall Score: ${e.score}/${e.maxScore}`),e.criticalIssues.length>0&&(console.group("🚨 Critical Issues"),e.criticalIssues.forEach(t=>console.error(t)),console.groupEnd()),e.recommendations.length>0&&(console.group("💡 Top Recommendations"),e.recommendations.slice(0,5).forEach(t=>{console.log(`${t.category}: ${t.issue}`),console.log(`   Solution: ${t.solution}`)}),console.groupEnd()),console.group("📊 Category Breakdown"),Object.keys(e.categories).forEach(t=>{const n=e.categories[t];console.log(`${t}: ${n.score}/${n.maxScore}`),n.issues&&n.issues.length>0&&n.issues.forEach(s=>console.warn(`  - ${s}`))}),console.groupEnd(),console.groupEnd()}}class Ge{constructor(){this.components={},this.isInitialized=!1,this.eventHandlers=new $e(this),this.initializeApp()}async initializeApp(){try{document.readyState==="loading"&&await this.waitForDOMReady(),await this.initializeLanguageSystem(),this.initializeComponents(),this.eventHandlers.setupEventHandlers(),this.loadInitialOptions(),this.setupDefaultState(),this.setupDynamicContent(),this.isInitialized=!0,console.log("Decision Wheel App initialized successfully")}catch(e){console.error("Failed to initialize Decision Wheel App:",e),this.showInitializationError()}}waitForDOMReady(){return new Promise(e=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})}async initializeLanguageSystem(){try{this.components.languageManager=new be,await this.components.languageManager.initialize(),this.components.seoManager=new xe(this.components.languageManager),this.components.seoAdvancedManager=new je(this.components.seoManager),this.components.seoAnalyzer=new Ve,this.components.languageSelector=new Me(this.components.languageManager),window.i18n=this.components.languageManager,console.log("Language system initialized successfully")}catch(e){throw console.error("Error initializing language system:",e),e}}initializeComponents(){try{this.components.inputManager=new Ie(this.components.languageManager),this.components.wheelSpinner=new Ee(this.components.languageManager),this.components.resultModal=new ke(this.components.languageManager),this.components.confettiEffect=new ze,this.components.historyManager=new Fe(this.components.languageManager),this.components.contentSections=new Ue(this.components.languageManager),console.log("All components initialized")}catch(e){throw console.error("Error initializing components:",e),e}}loadInitialOptions(){this.components.inputManager&&this.components.inputManager.loadSavedOptions()}setupDefaultState(){}setupDynamicContent(){try{this.components.contentSections&&(this.components.contentSections.replaceStaticContent(),console.log("Dynamic content sections initialized"))}catch(e){console.error("Error setting up dynamic content:",e)}}showInitializationError(){document.body.insertAdjacentHTML("beforeend",`
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
    `)}getStatus(){var e,t,n;return{initialized:this.isInitialized,components:Object.keys(this.components),optionsCount:((e=this.components.inputManager)==null?void 0:e.getOptions().length)||0,wheelSpinning:((t=this.components.wheelSpinner)==null?void 0:t.isSpinning)||!1,modalOpen:((n=this.components.resultModal)==null?void 0:n.isModalOpen())||!1}}runSEOAnalysis(e="console"){return this.components.seoAnalyzer?this.components.seoAnalyzer.generateReport(e):(console.error("SEO Analyzer not initialized"),null)}cleanup(){this.components.confettiEffect&&this.components.confettiEffect.stop(),this.components.resultModal&&this.components.resultModal.forceClose(),this.components.languageSelector&&this.components.languageSelector.cleanup(),this.components.contentSections&&this.components.contentSections.destroy(),this.components.seoAdvancedManager&&this.components.seoAdvancedManager.cleanup(),this.components.seoManager&&this.components.seoManager.cleanup(),window.i18n&&delete window.i18n,console.log("Application cleaned up")}}const ee=new Ge;window.DecisionWheelApp=ee;window.addEventListener("beforeunload",()=>{ee.cleanup()})});export default Ke();
