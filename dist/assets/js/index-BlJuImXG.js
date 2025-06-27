var we=(v,e)=>()=>(e||v((e={exports:{}}).exports,e),e.exports);import{_ as ve,L as xe,S as Me,a as Se}from"./components-B4hNhO3t.js";var je=we((_e,j)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();class Ee{constructor(e){this.wheel=e}createEmptyWheel(){const e=document.createElement("div");e.className="wheel-fallback glass-card";const t=this.wheel.languageManager?this.wheel.languageManager.t("options.noOptionsWheel"):"No Options Added",n=this.wheel.languageManager?this.wheel.languageManager.t("options.noOptionsWheelDesc"):"Add some options to get started with your decision wheel!";e.innerHTML=`
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
    `;const i=this.wheel.container.parentElement;i.style.position="relative",i.appendChild(e),this.wheel.container.style.opacity="0.1"}createSegment(e,t,n,i,a,r,y,f){const x=i*Math.PI/180,O=a*Math.PI/180,L=e+n*Math.cos(x),$=t+n*Math.sin(x),H=e+n*Math.cos(O),q=t+n*Math.sin(O),A=a-i>180?1:0,M=[`M ${e} ${t}`,`L ${L} ${$}`,`A ${n} ${n} 0 ${A} 1 ${H} ${q}`,"Z"].join(" "),D=document.createElementNS("http://www.w3.org/2000/svg","path");D.setAttribute("d",M),D.setAttribute("fill",r),D.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),D.setAttribute("stroke-width","1"),D.setAttribute("class","wheel-segment"),D.setAttribute("data-index",f);const W=(i+a)/2,R=n*.6,V=e+R*Math.cos(W*Math.PI/180),U=t+R*Math.sin(W*Math.PI/180),k=document.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("x",V),k.setAttribute("y",U),k.setAttribute("text-anchor","middle"),k.setAttribute("dominant-baseline","central"),k.setAttribute("fill","white"),k.setAttribute("font-size",this.calculateFontSize(y,this.wheel.options.length)),k.setAttribute("font-weight","600"),k.setAttribute("font-family","system-ui, -apple-system, sans-serif"),k.setAttribute("transform",`rotate(${W}, ${V}, ${U})`),k.style.textShadow="0.5px 0.5px 1px rgba(0,0,0,0.4)",k.style.filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.4))",k.textContent=this.truncateText(y,this.wheel.options.length),this.wheel.segmentsGroup.appendChild(D),this.wheel.segmentsGroup.appendChild(k)}calculateFontSize(e,t){const n=window.innerWidth<=480,i=window.innerWidth<=768;let a,r;n?(a=50,r=35):i?(a=52,r=35):(a=42,r=24);const y=Math.max(.6,1-t/20),f=Math.max(.5,1-e.length/20),x=y*f;return Math.max(r,a*x)}truncateText(e,t){const n=window.innerWidth<=480,i=window.innerWidth<=768;let a;if(n?a=t>6?6:t>3?8:12:i?a=t>6?8:t>3?12:16:a=t>6?10:t>3?15:20,e.length<=a)return e;const r=e.substring(0,a-1),y=r.lastIndexOf(" ");return y>a*.5?r.substring(0,y)+"…":r+"…"}createSingleOptionWheel(e,t,n,i){const a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttribute("cx",e),a.setAttribute("cy",t),a.setAttribute("r",n),a.setAttribute("fill",this.wheel.colors[0]),a.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),a.setAttribute("stroke-width","2"),a.setAttribute("class","wheel-segment"),a.setAttribute("data-index","0");const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("x",e),r.setAttribute("y",t),r.setAttribute("text-anchor","middle"),r.setAttribute("dominant-baseline","central"),r.setAttribute("fill","white"),r.setAttribute("font-size",window.innerWidth>768?"48":window.innerWidth>480?"50":"44"),r.setAttribute("font-weight","700"),r.textContent=this.truncateText(i,1),this.wheel.segmentsGroup.appendChild(a),this.wheel.segmentsGroup.appendChild(r)}waitForSpin(e){return new Promise(t=>setTimeout(t,e))}}class Ce{constructor(e=null,t="wheel-svg"){typeof e=="string"&&(t=e,e=null),this.languageManager=e,this.container=document.getElementById(t),this.segmentsGroup=document.getElementById("wheel-segments"),this.options=[],this.isSpinning=!1,this.currentRotation=0,this.colors=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FECA57","#FF9FF3","#54A0FF","#5F27CD","#00D2D3","#FF9F43","#FF3838","#2ED573","#1E90FF","#FF6348","#7BED9F"],this.helpers=new Ee(this),this.initializeEventListeners()}initializeEventListeners(){const e=document.getElementById("spin-btn");e&&e.addEventListener("click",()=>this.spin()),document.addEventListener("autoSpin",()=>{this.spin()})}updateOptions(e){this.options=[...e],this.generateWheel(),this.updateSpinButtonState()}generateWheel(){if(!this.segmentsGroup)return;if(this.segmentsGroup.innerHTML="",this.clearFallback(),this.options.length===0){this.helpers.createEmptyWheel();return}this.container.style.opacity="1";const e=360/this.options.length,t=320,n=350,i=350;if(this.options.length===1){this.helpers.createSingleOptionWheel(n,i,t,this.options[0]);return}this.options.forEach((a,r)=>{const y=r*e,f=(r+1)*e,x=this.colors[r%this.colors.length];this.helpers.createSegment(n,i,t,y,f,x,a,r)})}clearFallback(){const t=this.container.parentElement.querySelector(".wheel-fallback");t&&t.remove()}async spin(){if(this.isSpinning||this.options.length===0)return;this.isSpinning=!0,this.updateSpinButtonState();const e=3,n=Math.random()*(6-e)+e,i=Math.random()*360,a=n*360+i,r=this.currentRotation+a;this.container.style.transform=`rotate(${r}deg)`,this.container.style.transition="transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",await this.helpers.waitForSpin(3e3);const y=360/this.options.length;let f=r%360;f<0&&(f+=360);let O=(270-f)%360;O<0&&(O+=360);const L=Math.floor(O/y)%this.options.length;console.log(`Wheel Debug:
      Final rotation: ${r}°
      Normalized rotation: ${f}°
      Pointing angle: ${O}°
      Segment angle: ${y}°
      Winner index: ${L}
      Winner: "${this.options[L]}"
      Options: [${this.options.map(($,H)=>`${H}:"${$}"`).join(", ")}]`),this.currentRotation=r,this.isSpinning=!1,this.updateSpinButtonState(),this.announceWinner(this.options[L])}announceWinner(e){const t=new CustomEvent("wheelWinner",{detail:{winner:e}});document.dispatchEvent(t)}updateSpinButtonState(){const e=document.getElementById("spin-btn");if(e){e.disabled=this.isSpinning||this.options.length===0;const t=this.languageManager?this.languageManager.t("wheel.spinButton"):"Spin the Wheel!",n=this.languageManager?this.languageManager.t("wheel.spinningButton"):"Spinning...";e.textContent=this.isSpinning?n:t}}reset(){this.currentRotation=0,this.container.style.transform="rotate(0deg)",this.container.style.transition="none",this.isSpinning=!1,this.updateSpinButtonState()}}class Ae{constructor(e){this.manager=e}createOptionElement(e,t){const n=document.createElement("div");n.className="option-item",n.style.opacity="0",n.style.transform="translateX(-20px)";const i=this.manager.t("options.editButton"),a=this.manager.t("options.removeButton");return n.innerHTML=`
      <span class="option-text" title="${e}">${e}</span>
      <div class="option-buttons">
        <button class="edit-option" data-index="${t}" title="${i}">
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
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="1",n.style.transform="translateX(0)"},50),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(100%)",setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}getToastColor(e){const t={success:"linear-gradient(135deg, #2ed573, #1e90ff)",error:"linear-gradient(135deg, #ff6b6b, #ee5a24)",warning:"linear-gradient(135deg, #feca57, #ff9f43)",info:"linear-gradient(135deg, #4ecdc4, #45b7d1)"};return t[e]||t.info}saveOptions(){try{localStorage.setItem("wheelOptions",JSON.stringify(this.manager.options))}catch(e){console.warn("Could not save options to localStorage:",e)}}loadSavedOptions(){try{const e=localStorage.getItem("wheelOptions");if(e){const t=JSON.parse(e);if(Array.isArray(t)&&t.length>0){this.manager.options=t.filter(n=>typeof n=="string"&&this.manager.isValidOption(n)),this.manager.renderOptions(),this.manager.notifyOptionsChanged();return}}this.setDefaultOptions()}catch(e){console.warn("Could not load options from localStorage:",e),this.setDefaultOptions()}}setDefaultOptions(){this.manager.options=["Pizza","Sushi","Tacos","Burgers","Thai Food"],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged()}}class ke{constructor(e){this.manager=e}addOption(){if(!this.manager.optionInput)return;const e=this.manager.optionInput.value.trim();if(!this.manager.isValidOption(e)){this.manager.helpers.showInputError();return}if(this.manager.isDuplicate(e)){this.manager.helpers.showDuplicateError();return}if(this.manager.options.length>=this.manager.maxOptions){this.manager.helpers.showMaxOptionsError();return}this.manager.options.push(e),this.manager.clearInput(),this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showSuccessFeedback()}removeOption(e){if(e>=0&&e<this.manager.options.length){const t=this.manager.options.splice(e,1)[0];this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showRemovalFeedback(t)}}editOption(e,t){if(e<0||e>=this.manager.options.length)return;const n=this.manager.options[e],i=t.querySelector(".option-text"),a=t.querySelector(".option-buttons"),r=document.createElement("input");r.type="text",r.className="edit-option-input",r.value=n,r.maxLength=this.manager.maxOptionLength;const y=this.manager.t("options.saveEditButton"),f=this.manager.t("options.cancelEditButton"),x=document.createElement("div");x.className="edit-controls",x.innerHTML=`
      <button class="save-edit" title="${y}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      </button>
      <button class="cancel-edit" title="${f}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `,i.style.display="none",a.style.display="none",t.insertBefore(r,i),t.insertBefore(x,i),r.focus(),r.select();const O=x.querySelector(".save-edit"),L=x.querySelector(".cancel-edit"),$=()=>{const A=r.value.trim();if(!this.manager.isValidOption(A)){this.manager.helpers.showInputError(),r.focus();return}if(this.manager.options.filter((D,W)=>W!==e).includes(A)){this.manager.helpers.showDuplicateError(),r.focus();return}this.manager.options[e]=A,this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showEditSuccessFeedback(n,A)},H=()=>{r.remove(),x.remove(),i.style.display="",a.style.display=""};O.addEventListener("click",$),L.addEventListener("click",H),r.addEventListener("keydown",A=>{A.key==="Enter"?(A.preventDefault(),$()):A.key==="Escape"&&(A.preventDefault(),H())});const q=A=>{t.contains(A.target)||(H(),document.removeEventListener("click",q))};setTimeout(()=>{document.addEventListener("click",q)},100)}async clearAllOptions(){if(this.manager.options.length!==0){if(this.manager.options.length>1){const e=this.manager.t("input.clearAllButton"),t=this.manager.t("input.clearAllConfirmation",{count:this.manager.options.length}),n=this.manager.t("input.clearAllButton"),i=this.manager.t("options.cancelEdit");if(!await this.manager.confirmationModal.show({title:e,message:t,confirmText:n,cancelText:i}))return}this.manager.options=[],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showClearFeedback()}}}class Te{constructor(e=null){this.languageManager=e,this.modal=null,this.isOpen=!1,this.currentResolve=null,this.createModal(),this.setupEventListeners()}createModal(){const e=document.createElement("div");e.id="confirmation-modal",e.className="confirmation-modal hidden",e.innerHTML=`
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
    `,document.head.appendChild(t)}setupEventListeners(){this.modal.querySelector(".confirmation-overlay").addEventListener("click",()=>{this.close(!1)}),this.modal.querySelector(".confirmation-cancel").addEventListener("click",()=>{this.close(!1)}),this.modal.querySelector(".confirmation-confirm").addEventListener("click",()=>{this.close(!0)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close(!1)})}show(e={}){return new Promise(t=>{this.currentResolve=t;const n=e.title||(this.languageManager?this.languageManager.t("input.clearAllButton"):"Confirm Action"),i=e.message||"Are you sure you want to continue?",a=e.confirmText||(this.languageManager?this.languageManager.t("input.clearAllButton"):"Confirm"),r=e.cancelText||(this.languageManager?this.languageManager.t("options.cancelEdit"):"Cancel");this.modal.querySelector(".confirmation-title").textContent=n,this.modal.querySelector(".confirmation-message").textContent=i,this.modal.querySelector(".confirmation-confirm").textContent=a,this.modal.querySelector(".confirmation-cancel").textContent=r,this.modal.classList.remove("hidden"),this.isOpen=!0,document.body.style.overflow="hidden",requestAnimationFrame(()=>{this.modal.classList.add("open")}),setTimeout(()=>{this.modal.querySelector(".confirmation-cancel").focus()},100)})}close(e){this.isOpen&&(this.isOpen=!1,this.modal.classList.remove("open"),setTimeout(()=>{this.modal.classList.add("hidden"),document.body.style.overflow="",this.currentResolve&&(this.currentResolve(e),this.currentResolve=null)},300))}t(e){return this.languageManager?this.languageManager.t(e):e}}class Oe{constructor(e=null){this.options=[],this.maxOptions=20,this.minOptionLength=1,this.maxOptionLength=50,this.languageManager=e,this.optionInput=document.getElementById("option-input"),this.addButton=document.getElementById("add-option-btn"),this.clearButton=document.getElementById("clear-all-btn"),this.optionsList=document.getElementById("options-list"),this.helpers=new Ae(this),this.actions=new ke(this),this.confirmationModal=new Te(this.languageManager),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts(),this.renderOptions(),this.validateInput()})}updateUITexts(){if(!this.languageManager)return;const e=document.getElementById("app-title");e&&(e.textContent=this.languageManager.t("header.title"));const t=document.getElementById("app-subtitle");t&&(t.textContent=this.languageManager.t("header.subtitle")),this.optionInput&&(this.optionInput.placeholder=this.languageManager.t("input.placeholder")),this.addButton&&(this.addButton.textContent=this.languageManager.t("input.addButton")),this.clearButton&&(this.clearButton.textContent=this.languageManager.t("input.clearAllButton"));const n=document.querySelector("#input-section h2");n&&(n.textContent=this.languageManager.t("input.sectionTitle"));const i=document.getElementById("spin-btn");i&&(i.textContent=this.languageManager.t("wheel.spinButton"))}t(e,t={}){return this.languageManager?this.languageManager.t(e,t):e}initializeEventListeners(){this.addButton&&this.addButton.addEventListener("click",()=>this.actions.addOption()),this.optionInput&&(this.optionInput.addEventListener("keypress",e=>{e.key==="Enter"&&this.actions.addOption()}),this.optionInput.addEventListener("input",()=>this.validateInput())),this.clearButton&&this.clearButton.addEventListener("click",()=>this.actions.clearAllOptions())}isValidOption(e){return e.length>=this.minOptionLength&&e.length<=this.maxOptionLength}isDuplicate(e){return this.options.some(t=>t.toLowerCase()===e.toLowerCase())}validateInput(){if(!this.optionInput)return;const e=this.optionInput.value.trim(),t=this.addButton;t&&(e.length===0?(t.disabled=!0,this.helpers.clearInputError()):this.isValidOption(e)?this.isDuplicate(e)?(t.disabled=!0,this.helpers.setInputError(this.t("input.duplicateOptionError"))):this.options.length>=this.maxOptions?(t.disabled=!0,this.helpers.setInputError(this.t("input.maxOptionsReached",{max:this.maxOptions}))):(t.disabled=!1,this.helpers.clearInputError()):(t.disabled=!0,this.helpers.setInputError(this.t("input.optionTooLong",{max:this.maxOptionLength}))))}renderOptions(){if(this.optionsList){if(this.optionsList.innerHTML="",this.options.length===0){this.helpers.renderEmptyState();return}this.options.forEach((e,t)=>{const n=this.helpers.createOptionElement(e,t);this.optionsList.appendChild(n),this.helpers.animateOptionAdd(n)}),this.updateClearButtonState()}}updateClearButtonState(){this.clearButton&&(this.clearButton.disabled=this.options.length===0)}clearInput(){this.optionInput&&(this.optionInput.value="",this.helpers.clearInputError(),this.validateInput())}saveOptions(){this.helpers.saveOptions()}loadSavedOptions(){this.helpers.loadSavedOptions()}notifyOptionsChanged(){const e=new CustomEvent("optionsChanged",{detail:{options:[...this.options]}});document.dispatchEvent(e)}getOptions(){return[...this.options]}setOptions(e){Array.isArray(e)&&(this.options=e.filter(t=>typeof t=="string"&&this.isValidOption(t)).slice(0,this.maxOptions),this.renderOptions(),this.saveOptions(),this.notifyOptionsChanged())}loadSavedOptions(){this.helpers.loadSavedOptions()}}class Le{constructor(e){this.modal=e}updateWinnerDisplay(){if(!this.modal.winnerText||!this.modal.currentWinner)return;this.modal.winnerText.innerHTML="";const e=document.createElement("div");e.style.cssText=`
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
    `;const i=document.createElement("div");i.innerHTML="✨",i.style.cssText=`
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
    `,e.appendChild(i),e.appendChild(a),e.appendChild(t),e.appendChild(r),this.modal.winnerText.appendChild(e),this.addGradientAnimation()}calculateModalFontSize(e){if(!e)return 2.5;const t=window.innerWidth<=480,n=window.innerWidth<=768;let i,a,r;t?(i=2.2,a=1.4,r=2.8):n?(i=2.4,a=1.6,r=3):(i=2.8,a=1.8,r=3.5);const y=e.length;let f;return y<=10?f=r:y<=20?f=i:y<=30?f=i*.85:y<=50?f=i*.7:f=a,Math.max(a,Math.min(r,f))}addGradientAnimation(){const e="gradient-animation-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
    `,document.head.appendChild(t)}trapFocus(){if(!this.modal.modal)return;const e=this.modal.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),t=e[0],n=e[e.length-1];t&&t.focus();const i=r=>{r.key==="Tab"&&(r.shiftKey?document.activeElement===t&&(r.preventDefault(),n==null||n.focus()):document.activeElement===n&&(r.preventDefault(),t==null||t.focus()))};this.modal.modal.addEventListener("keydown",i);const a=this.modal.close.bind(this.modal);this.modal.close=()=>{this.modal.modal.removeEventListener("keydown",i),this.modal.close=a,a()}}}class Ie{constructor(e=null){var t;this.modal=document.getElementById("result-modal"),this.modalContent=(t=this.modal)==null?void 0:t.querySelector(".modal-content"),this.winnerText=document.getElementById("winner-text"),this.closeButton=document.getElementById("close-modal-btn"),this.spinAgainButton=document.getElementById("spin-again-btn"),this.isOpen=!1,this.currentWinner=null,this.languageManager=e,this.helpers=new Le(this),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts()})}updateUITexts(){var t;if(!this.languageManager)return;const e=(t=this.modal)==null?void 0:t.querySelector("h2");e&&(e.textContent=this.languageManager.t("result.winnerTitle")),this.closeButton&&(this.closeButton.textContent=this.languageManager.t("result.closeButton")),this.spinAgainButton&&(this.spinAgainButton.textContent=this.languageManager.t("result.spinAgainButton"))}t(e,t={}){return this.languageManager?this.languageManager.t(e,t):e}initializeEventListeners(){this.closeButton&&this.closeButton.addEventListener("click",()=>this.close()),this.spinAgainButton&&this.spinAgainButton.addEventListener("click",()=>this.spinAgain()),this.modal&&this.modal.addEventListener("click",e=>{e.target===this.modal&&this.close()}),document.addEventListener("keydown",e=>{e.key==="Escape"&&this.isOpen&&this.close()}),document.addEventListener("wheelWinner",e=>{this.showWinner(e.detail.winner)})}showWinner(e){!this.modal||!this.winnerText||(this.currentWinner=e,this.helpers.updateWinnerDisplay(),this.open(),setTimeout(()=>{this.triggerConfetti()},300))}open(){!this.modal||this.isOpen||(this.isOpen=!0,this.modal.classList.remove("hidden"),document.body.style.overflow="hidden",requestAnimationFrame(()=>{this.modal.style.opacity="0",this.modal.style.display="flex",requestAnimationFrame(()=>{this.modal.style.transition="opacity 0.3s ease-out",this.modal.style.opacity="1",this.modalContent&&(this.modalContent.style.animation="modalSlideIn 0.4s ease-out")})}),this.helpers.trapFocus())}close(){!this.modal||!this.isOpen||(this.isOpen=!1,this.modal.style.transition="opacity 0.2s ease-in",this.modal.style.opacity="0",this.modalContent&&(this.modalContent.style.animation="modalSlideOut 0.3s ease-in"),setTimeout(()=>{this.modal.classList.add("hidden"),this.modal.style.display="none",this.modal.style.opacity="",this.modal.style.transition="",this.modalContent&&(this.modalContent.style.animation=""),document.body.style.overflow=""},300),this.currentWinner=null)}spinAgain(){this.close(),setTimeout(()=>{const e=new CustomEvent("autoSpin");document.dispatchEvent(e)},200)}triggerConfetti(){const e=new CustomEvent("triggerConfetti",{detail:{winner:this.currentWinner,intensity:"high"}});document.dispatchEvent(e)}isModalOpen(){return this.isOpen}getCurrentWinner(){return this.currentWinner}forceClose(){this.modal&&(this.modal.classList.add("hidden"),this.modal.style.display="none",document.body.style.overflow=""),this.isOpen=!1,this.currentWinner=null}}var j={};(function v(e,t,n,i){var a=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),r=typeof Path2D=="function"&&typeof DOMMatrix=="function",y=function(){if(!e.OffscreenCanvas)return!1;var o=new OffscreenCanvas(1,1),s=o.getContext("2d");s.fillRect(0,0,1,1);var l=o.transferToImageBitmap();try{s.createPattern(l,"no-repeat")}catch{return!1}return!0}();function f(){}function x(o){var s=t.exports.Promise,l=s!==void 0?s:e.Promise;return typeof l=="function"?new l(o):(o(f,f),null)}var O=function(o,s){return{transform:function(l){if(o)return l;if(s.has(l))return s.get(l);var d=new OffscreenCanvas(l.width,l.height),h=d.getContext("2d");return h.drawImage(l,0,0),s.set(l,d),d},clear:function(){s.clear()}}}(y,new Map),L=function(){var o=Math.floor(16.666666666666668),s,l,d={},h=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(s=function(p){var u=Math.random();return d[u]=requestAnimationFrame(function c(m){h===m||h+o-1<m?(h=m,delete d[u],p()):d[u]=requestAnimationFrame(c)}),u},l=function(p){d[p]&&cancelAnimationFrame(d[p])}):(s=function(p){return setTimeout(p,o)},l=function(p){return clearTimeout(p)}),{frame:s,cancel:l}}(),$=function(){var o,s,l={};function d(h){function p(u,c){h.postMessage({options:u||{},callback:c})}h.init=function(c){var m=c.transferControlToOffscreen();h.postMessage({canvas:m},[m])},h.fire=function(c,m,b){if(s)return p(c,null),s;var S=Math.random().toString(36).slice(2);return s=x(function(w){function E(C){C.data.callback===S&&(delete l[S],h.removeEventListener("message",E),s=null,O.clear(),b(),w())}h.addEventListener("message",E),p(c,S),l[S]=E.bind(null,{data:{callback:S}})}),s},h.reset=function(){h.postMessage({reset:!0});for(var c in l)l[c](),delete l[c]}}return function(){if(o)return o;if(!n&&a){var h=["var CONFETTI, SIZE = {}, module = {};","("+v.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{o=new Worker(URL.createObjectURL(new Blob([h])))}catch(p){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",p),null}d(o)}return o}}(),H={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function q(o,s){return s?s(o):o}function A(o){return o!=null}function M(o,s,l){return q(o&&A(o[s])?o[s]:H[s],l)}function D(o){return o<0?0:Math.floor(o)}function W(o,s){return Math.floor(Math.random()*(s-o))+o}function R(o){return parseInt(o,16)}function V(o){return o.map(U)}function U(o){var s=String(o).replace(/[^0-9a-f]/gi,"");return s.length<6&&(s=s[0]+s[0]+s[1]+s[1]+s[2]+s[2]),{r:R(s.substring(0,2)),g:R(s.substring(2,4)),b:R(s.substring(4,6))}}function k(o){var s=M(o,"origin",Object);return s.x=M(s,"x",Number),s.y=M(s,"y",Number),s}function te(o){o.width=document.documentElement.clientWidth,o.height=document.documentElement.clientHeight}function ne(o){var s=o.getBoundingClientRect();o.width=s.width,o.height=s.height}function ie(o){var s=document.createElement("canvas");return s.style.position="fixed",s.style.top="0px",s.style.left="0px",s.style.pointerEvents="none",s.style.zIndex=o,s}function se(o,s,l,d,h,p,u,c,m){o.save(),o.translate(s,l),o.rotate(p),o.scale(d,h),o.arc(0,0,1,u,c,m),o.restore()}function oe(o){var s=o.angle*(Math.PI/180),l=o.spread*(Math.PI/180);return{x:o.x,y:o.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:o.startVelocity*.5+Math.random()*o.startVelocity,angle2D:-s+(.5*l-Math.random()*l),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:o.gravity*3,ovalScalar:.6,scalar:o.scalar,flat:o.flat}}function ae(o,s){s.x+=Math.cos(s.angle2D)*s.velocity+s.drift,s.y+=Math.sin(s.angle2D)*s.velocity+s.gravity,s.velocity*=s.decay,s.flat?(s.wobble=0,s.wobbleX=s.x+10*s.scalar,s.wobbleY=s.y+10*s.scalar,s.tiltSin=0,s.tiltCos=0,s.random=1):(s.wobble+=s.wobbleSpeed,s.wobbleX=s.x+10*s.scalar*Math.cos(s.wobble),s.wobbleY=s.y+10*s.scalar*Math.sin(s.wobble),s.tiltAngle+=.1,s.tiltSin=Math.sin(s.tiltAngle),s.tiltCos=Math.cos(s.tiltAngle),s.random=Math.random()+2);var l=s.tick++/s.totalTicks,d=s.x+s.random*s.tiltCos,h=s.y+s.random*s.tiltSin,p=s.wobbleX+s.random*s.tiltCos,u=s.wobbleY+s.random*s.tiltSin;if(o.fillStyle="rgba("+s.color.r+", "+s.color.g+", "+s.color.b+", "+(1-l)+")",o.beginPath(),r&&s.shape.type==="path"&&typeof s.shape.path=="string"&&Array.isArray(s.shape.matrix))o.fill(le(s.shape.path,s.shape.matrix,s.x,s.y,Math.abs(p-d)*.1,Math.abs(u-h)*.1,Math.PI/10*s.wobble));else if(s.shape.type==="bitmap"){var c=Math.PI/10*s.wobble,m=Math.abs(p-d)*.1,b=Math.abs(u-h)*.1,S=s.shape.bitmap.width*s.scalar,w=s.shape.bitmap.height*s.scalar,E=new DOMMatrix([Math.cos(c)*m,Math.sin(c)*m,-Math.sin(c)*b,Math.cos(c)*b,s.x,s.y]);E.multiplySelf(new DOMMatrix(s.shape.matrix));var C=o.createPattern(O.transform(s.shape.bitmap),"no-repeat");C.setTransform(E),o.globalAlpha=1-l,o.fillStyle=C,o.fillRect(s.x-S/2,s.y-w/2,S,w),o.globalAlpha=1}else if(s.shape==="circle")o.ellipse?o.ellipse(s.x,s.y,Math.abs(p-d)*s.ovalScalar,Math.abs(u-h)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI):se(o,s.x,s.y,Math.abs(p-d)*s.ovalScalar,Math.abs(u-h)*s.ovalScalar,Math.PI/10*s.wobble,0,2*Math.PI);else if(s.shape==="star")for(var g=Math.PI/2*3,T=4*s.scalar,I=8*s.scalar,z=s.x,F=s.y,N=5,P=Math.PI/N;N--;)z=s.x+Math.cos(g)*I,F=s.y+Math.sin(g)*I,o.lineTo(z,F),g+=P,z=s.x+Math.cos(g)*T,F=s.y+Math.sin(g)*T,o.lineTo(z,F),g+=P;else o.moveTo(Math.floor(s.x),Math.floor(s.y)),o.lineTo(Math.floor(s.wobbleX),Math.floor(h)),o.lineTo(Math.floor(p),Math.floor(u)),o.lineTo(Math.floor(d),Math.floor(s.wobbleY));return o.closePath(),o.fill(),s.tick<s.totalTicks}function re(o,s,l,d,h){var p=s.slice(),u=o.getContext("2d"),c,m,b=x(function(S){function w(){c=m=null,u.clearRect(0,0,d.width,d.height),O.clear(),h(),S()}function E(){n&&!(d.width===i.width&&d.height===i.height)&&(d.width=o.width=i.width,d.height=o.height=i.height),!d.width&&!d.height&&(l(o),d.width=o.width,d.height=o.height),u.clearRect(0,0,d.width,d.height),p=p.filter(function(C){return ae(u,C)}),p.length?c=L.frame(E):w()}c=L.frame(E),m=w});return{addFettis:function(S){return p=p.concat(S),b},canvas:o,promise:b,reset:function(){c&&L.cancel(c),m&&m()}}}function J(o,s){var l=!o,d=!!M(s||{},"resize"),h=!1,p=M(s,"disableForReducedMotion",Boolean),u=a&&!!M(s||{},"useWorker"),c=u?$():null,m=l?te:ne,b=o&&c?!!o.__confetti_initialized:!1,S=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,w;function E(g,T,I){for(var z=M(g,"particleCount",D),F=M(g,"angle",Number),N=M(g,"spread",Number),P=M(g,"startVelocity",Number),he=M(g,"decay",Number),pe=M(g,"gravity",Number),ue=M(g,"drift",Number),X=M(g,"colors",V),me=M(g,"ticks",Number),Q=M(g,"shapes"),ge=M(g,"scalar"),fe=!!M(g,"flat"),Z=k(g),Y=z,K=[],ye=o.width*Z.x,be=o.height*Z.y;Y--;)K.push(oe({x:ye,y:be,angle:F,spread:N,startVelocity:P,color:X[Y%X.length],shape:Q[W(0,Q.length)],ticks:me,decay:he,gravity:pe,drift:ue,scalar:ge,flat:fe}));return w?w.addFettis(K):(w=re(o,K,m,T,I),w.promise)}function C(g){var T=p||M(g,"disableForReducedMotion",Boolean),I=M(g,"zIndex",Number);if(T&&S)return x(function(P){P()});l&&w?o=w.canvas:l&&!o&&(o=ie(I),document.body.appendChild(o)),d&&!b&&m(o);var z={width:o.width,height:o.height};c&&!b&&c.init(o),b=!0,c&&(o.__confetti_initialized=!0);function F(){if(c){var P={getBoundingClientRect:function(){if(!l)return o.getBoundingClientRect()}};m(P),c.postMessage({resize:{width:P.width,height:P.height}});return}z.width=z.height=null}function N(){w=null,d&&(h=!1,e.removeEventListener("resize",F)),l&&o&&(document.body.contains(o)&&document.body.removeChild(o),o=null,b=!1)}return d&&!h&&(h=!0,e.addEventListener("resize",F,!1)),c?c.fire(g,z,N):E(g,z,N)}return C.reset=function(){c&&c.reset(),w&&w.reset()},C}var _;function G(){return _||(_=J(null,{useWorker:!0,resize:!0})),_}function le(o,s,l,d,h,p,u){var c=new Path2D(o),m=new Path2D;m.addPath(c,new DOMMatrix(s));var b=new Path2D;return b.addPath(m,new DOMMatrix([Math.cos(u)*h,Math.sin(u)*h,-Math.sin(u)*p,Math.cos(u)*p,l,d])),b}function ce(o){if(!r)throw new Error("path confetti are not supported in this browser");var s,l;typeof o=="string"?s=o:(s=o.path,l=o.matrix);var d=new Path2D(s),h=document.createElement("canvas"),p=h.getContext("2d");if(!l){for(var u=1e3,c=u,m=u,b=0,S=0,w,E,C=0;C<u;C+=2)for(var g=0;g<u;g+=2)p.isPointInPath(d,C,g,"nonzero")&&(c=Math.min(c,C),m=Math.min(m,g),b=Math.max(b,C),S=Math.max(S,g));w=b-c,E=S-m;var T=10,I=Math.min(T/w,T/E);l=[I,0,0,I,-Math.round(w/2+c)*I,-Math.round(E/2+m)*I]}return{type:"path",path:s,matrix:l}}function de(o){var s,l=1,d="#000000",h='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof o=="string"?s=o:(s=o.text,l="scalar"in o?o.scalar:l,h="fontFamily"in o?o.fontFamily:h,d="color"in o?o.color:d);var p=10*l,u=""+p+"px "+h,c=new OffscreenCanvas(p,p),m=c.getContext("2d");m.font=u;var b=m.measureText(s),S=Math.ceil(b.actualBoundingBoxRight+b.actualBoundingBoxLeft),w=Math.ceil(b.actualBoundingBoxAscent+b.actualBoundingBoxDescent),E=2,C=b.actualBoundingBoxLeft+E,g=b.actualBoundingBoxAscent+E;S+=E+E,w+=E+E,c=new OffscreenCanvas(S,w),m=c.getContext("2d"),m.font=u,m.fillStyle=d,m.fillText(s,C,g);var T=1/l;return{type:"bitmap",bitmap:c.transferToImageBitmap(),matrix:[T,0,0,T,-S*T/2,-w*T/2]}}t.exports=function(){return G().apply(this,arguments)},t.exports.reset=function(){G().reset()},t.exports.create=J,t.exports.shapeFromPath=ce,t.exports.shapeFromText=de})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),j,!1);const B=j.exports;j.exports.create;class ze{constructor(e){this.effect=e}winnerCelebration(){const e=this.effect.presets.winner;B({...e,particleCount:100,spread:70,origin:{y:.6}}),setTimeout(()=>{B({...e,particleCount:50,angle:60,spread:55,origin:{x:0,y:.8}})},250),setTimeout(()=>{B({...e,particleCount:50,angle:120,spread:55,origin:{x:1,y:.8}})},400)}standardCelebration(){const e=this.effect.presets.celebration,t=()=>{this.effect.isActive&&(B({...e,particleCount:30,spread:60,origin:{x:Math.random()*.6+.2,y:Math.random()*.4+.5}}),this.effect.animationId=setTimeout(t,200))};t()}burstCelebration(){const e=this.effect.presets.burst;B({...e,particleCount:200,spread:100,origin:{y:.5},startVelocity:30,gravity:.5,drift:0})}highIntensityCelebration(){B({particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]}),setTimeout(()=>{this.fireworksEffect()},300),setTimeout(()=>{this.confettiRain()},800)}fireworksEffect(){[30,60,90,120,150].forEach((t,n)=>{setTimeout(()=>{B({particleCount:40,angle:t,spread:30,origin:{x:.1+n*.2,y:.3+Math.random()*.3},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"],startVelocity:25,gravity:.8})},n*100)})}confettiRain(){let e=0;const t=10,n=setInterval(()=>{if(e>=t||!this.effect.isActive){clearInterval(n);return}B({particleCount:20,spread:40,origin:{x:Math.random(),y:-.1},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"],startVelocity:15,gravity:.4,drift:Math.random()*2-1}),e++},200)}}class Be{constructor(){this.isActive=!1,this.animationId=null,this.presets={winner:{particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]},celebration:{particleCount:150,spread:100,origin:{y:.7},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"]},burst:{particleCount:200,spread:120,origin:{y:.5},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"]}},this.patterns=new ze(this),this.initializeEventListeners()}initializeEventListeners(){document.addEventListener("triggerConfetti",e=>{const{winner:t,intensity:n}=e.detail;this.celebrate(n||"winner",t)}),document.addEventListener("wheelWinner",e=>{setTimeout(()=>{this.celebrate("winner",e.detail.winner)},500)})}celebrate(e="winner",t=""){switch(this.isActive&&this.stop(),this.isActive=!0,e){case"winner":this.patterns.winnerCelebration();break;case"celebration":this.patterns.standardCelebration();break;case"burst":this.patterns.burstCelebration();break;case"high":this.patterns.highIntensityCelebration();break;default:this.patterns.winnerCelebration()}setTimeout(()=>{this.stop()},3e3)}customShapeConfetti(e="star"){const t={star:"★",heart:"♥",circle:"●",diamond:"♦"};B({particleCount:50,spread:60,origin:{y:.6},shapes:[t[e]||t.star],colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],scalar:1.2})}cannonEffect(e={x:.5,y:.8},t="up"){const n={up:{angle:90,spread:45},left:{angle:45,spread:35},right:{angle:135,spread:35},diagonal:{angle:60,spread:50}},i=n[t]||n.up;B({particleCount:80,angle:i.angle,spread:i.spread,origin:e,colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],startVelocity:35,gravity:.6})}stop(){this.isActive=!1,this.animationId&&(clearTimeout(this.animationId),this.animationId=null),B.reset()}isConfettiActive(){return this.isActive}randomCelebration(){const e=["winner","celebration","burst"],t=e[Math.floor(Math.random()*e.length)];this.celebrate(t)}}class De{constructor(e){this.app=e}setupEventHandlers(){document.addEventListener("optionsChanged",e=>{const{options:t}=e.detail;this.handleOptionsChange(t)}),document.addEventListener("wheelWinner",e=>{const{winner:t}=e.detail;this.handleWheelWinner(t)}),document.addEventListener("spinAgain",()=>{this.handleSpinAgain()}),document.addEventListener("triggerConfetti",e=>{const{winner:t,intensity:n}=e.detail;this.handleConfettiTrigger(t,n)}),document.addEventListener("keydown",e=>{this.handleKeyboardShortcuts(e)}),window.addEventListener("resize",()=>{this.handleWindowResize()}),document.addEventListener("visibilitychange",()=>{this.handleVisibilityChange()})}handleOptionsChange(e){this.app.components.wheelSpinner&&this.app.components.wheelSpinner.updateOptions(e),this.app.components.historyManager&&e.length>0&&this.app.components.historyManager.saveWheelConfiguration(e)}handleWheelWinner(e){var t;if(console.log(`Winner selected: ${e}`),this.app.components.historyManager){const n=((t=this.app.components.inputManager)==null?void 0:t.getOptions())||[];this.app.components.historyManager.saveSpinResult(n,e)}this.app.components.adManager&&ve(async()=>{const{ModalAdUnit:n}=await import("./AdUnits-BzC4ZBo2.js");return{ModalAdUnit:n}},[]).then(({ModalAdUnit:n})=>{const i=new n;i.shouldShow()&&(i.createElement(),setTimeout(()=>i.show(),2e3))}),this.logWinnerToAnalytics(e)}handleSpinAgain(){this.app.components.wheelSpinner,this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}handleConfettiTrigger(e,t){console.log(`Confetti triggered for: ${e}`)}handleKeyboardShortcuts(e){if(!(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA"))switch(e.key.toLowerCase()){case" ":case"enter":if(e.preventDefault(),this.app.components.wheelSpinner&&!this.app.components.wheelSpinner.isSpinning){const t=document.getElementById("spin-btn");t&&!t.disabled&&t.click()}break;case"escape":break;case"r":this.app.components.resultModal&&this.app.components.resultModal.isModalOpen()&&this.app.components.resultModal.spinAgain();break;case"h":this.app.components.historyManager&&this.app.components.historyManager.toggleHistoryPanel();break}}handleWindowResize(){this.app.components.wheelSpinner}handleVisibilityChange(){document.hidden&&this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}logWinnerToAnalytics(e){var n;const t={event:"wheel_spin_result",winner:e,timestamp:new Date().toISOString(),totalOptions:((n=this.app.components.inputManager)==null?void 0:n.getOptions().length)||0};console.log("Analytics:",t)}}class Pe{constructor(e){this.manager=e}initializeHistoryPanel(){const e=document.querySelector("header");if(e){const n=document.createElement("button");n.id="history-btn",n.className="glass-btn history-button";const i=this.manager.languageManager?this.manager.languageManager.t("history.button"):"History";n.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l4 2"/>
        </svg>
        <span>${i}</span>
      `,n.style.marginTop="var(--spacing-lg)",n.addEventListener("click",()=>this.manager.toggleHistoryPanel()),e.appendChild(n)}const t=document.createElement("div");t.id="history-panel",t.className="history-panel glass-card hidden",t.innerHTML=`
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
    `,document.head.appendChild(t)}updateHistoryDisplay(){const e=document.getElementById("history-list");if(!e)return;const t=this.manager.getHistory();if(t.length===0){e.innerHTML='<div class="history-empty">No history yet. Spin the wheel to create some!</div>';return}e.innerHTML=t.map(n=>this.createHistoryItemHTML(n)).join(""),e.querySelectorAll(".history-item").forEach((n,i)=>{n.addEventListener("click",()=>this.manager.loadHistoryItem(t[i]))})}createHistoryItemHTML(e){const t=new Date(e.timestamp).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),n=e.options.length>3?`${e.options.slice(0,3).join(", ")}... (+${e.options.length-3} more)`:e.options.join(", "),i=e.winner?`<div class="history-item-winner">🎉 Winner: ${e.winner}</div>`:"";return`
      <div class="history-item" data-id="${e.id}">
        <div class="history-item-date">${t}</div>
        <div class="history-item-options">${n}</div>
        ${i}
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
    `,document.body.appendChild(e),setTimeout(()=>document.body.removeChild(e),3e3)}}class He{constructor(e=null){this.languageManager=e,this.historyKey="wheelHistory",this.maxHistoryItems=50,this.isHistoryPanelOpen=!1,this.ui=new Pe(this),this.ui.initializeHistoryPanel(),this.loadHistory()}saveWheelConfiguration(e){const t=this.getHistory(),n={id:Date.now(),type:"configuration",timestamp:new Date().toISOString(),options:[...e],winner:null};t.some(a=>a.type==="configuration"&&JSON.stringify(a.options)===JSON.stringify(e)&&Date.now()-new Date(a.timestamp).getTime()<6e4)||(t.unshift(n),this.saveHistory(t))}saveSpinResult(e,t){const n=this.getHistory(),i={id:Date.now(),type:"result",timestamp:new Date().toISOString(),options:[...e],winner:t};n.unshift(i),this.saveHistory(n),this.ui.updateHistoryDisplay()}getHistory(){try{const e=localStorage.getItem(this.historyKey);return e?JSON.parse(e):[]}catch(e){return console.warn("Error loading history:",e),[]}}saveHistory(e){try{const t=e.slice(0,this.maxHistoryItems);localStorage.setItem(this.historyKey,JSON.stringify(t))}catch(t){console.warn("Error saving history:",t)}}loadHistory(){this.ui.updateHistoryDisplay()}loadHistoryItem(e){const t=window.DecisionWheelApp;t&&t.components.inputManager&&(t.components.inputManager.setOptions(e.options),this.ui.showLoadFeedback(),this.closeHistoryPanel())}toggleHistoryPanel(){document.getElementById("history-panel")&&(this.isHistoryPanelOpen?this.closeHistoryPanel():this.openHistoryPanel())}openHistoryPanel(){const e=document.getElementById("history-panel");e&&(e.classList.remove("hidden"),e.classList.add("open"),this.isHistoryPanelOpen=!0,this.ui.updateHistoryDisplay())}closeHistoryPanel(){const e=document.getElementById("history-panel");e&&(e.classList.remove("open"),setTimeout(()=>{e.classList.add("hidden")},300),this.isHistoryPanelOpen=!1)}clearHistory(){confirm("Are you sure you want to clear all history?")&&(localStorage.removeItem(this.historyKey),this.ui.updateHistoryDisplay())}}class Fe{constructor(e){this.seoManager=e,this.performanceObserver=null,this.webVitalsData={fcp:null,lcp:null,fid:null,cls:null},this.initialize()}initialize(){try{this.setupPerformanceMonitoring(),this.setupLazyLoading(),this.setupServiceWorker(),this.addBreadcrumbStructuredData(),this.setupFAQStructuredData(),console.log("Advanced SEO Manager initialized successfully")}catch(e){console.error("Error initializing Advanced SEO Manager:",e)}}setupPerformanceMonitoring(){"PerformanceObserver"in window&&(this.observePaintMetrics(),this.observeLayoutShift(),this.observeInputDelay()),this.measureBasicPerformance()}observePaintMetrics(){try{new PerformanceObserver(t=>{t.getEntries().forEach(i=>{i.name==="first-contentful-paint"&&(this.webVitalsData.fcp=i.startTime,this.reportWebVital("FCP",i.startTime)),i.entryType==="largest-contentful-paint"&&(this.webVitalsData.lcp=i.startTime,this.reportWebVital("LCP",i.startTime))})}).observe({entryTypes:["paint","largest-contentful-paint"]})}catch(e){console.warn("Could not observe paint metrics:",e)}}observeLayoutShift(){try{let e=0;new PerformanceObserver(n=>{n.getEntries().forEach(a=>{a.hadRecentInput||(e+=a.value)}),this.webVitalsData.cls=e,this.reportWebVital("CLS",e)}).observe({entryTypes:["layout-shift"]})}catch(e){console.warn("Could not observe layout shift:",e)}}observeInputDelay(){try{new PerformanceObserver(t=>{t.getEntries().forEach(i=>{this.webVitalsData.fid=i.processingStart-i.startTime,this.reportWebVital("FID",this.webVitalsData.fid)})}).observe({entryTypes:["first-input"]})}catch(e){console.warn("Could not observe input delay:",e)}}measureBasicPerformance(){window.addEventListener("load",()=>{const e=performance.getEntriesByType("navigation")[0];if(e){const t={pageLoadTime:e.loadEventEnd-e.fetchStart,domContentLoaded:e.domContentLoadedEventEnd-e.fetchStart,firstByte:e.responseStart-e.fetchStart};console.log("Basic Performance Metrics:",t),this.reportPerformanceMetrics(t)}})}reportWebVital(e,t){console.log(`Web Vital - ${e}:`,t)}reportPerformanceMetrics(e){console.log("Performance Metrics:",e)}setupLazyLoading(){if("IntersectionObserver"in window){const e=document.querySelectorAll("img[data-src]");if(e.length>0){const t=new IntersectionObserver(n=>{n.forEach(i=>{if(i.isIntersecting){const a=i.target;a.src=a.dataset.src,a.classList.remove("lazy"),t.unobserve(a)}})});e.forEach(n=>t.observe(n))}}}setupServiceWorker(){"serviceWorker"in navigator&&console.log("Service Worker support detected")}addBreadcrumbStructuredData(){const e={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://wheelspinner.app/"},{"@type":"ListItem",position:2,name:"Decision Wheel Spinner",item:"https://wheelspinner.app/"}]};this.addStructuredData("breadcrumb-data",e)}setupFAQStructuredData(){const e={"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How does the decision wheel spinner work?",acceptedAnswer:{"@type":"Answer",text:"Simply add your options to the wheel, then click the spin button. The wheel will randomly select one of your options to help you make a decision."}},{"@type":"Question",name:"Is the wheel spinner really random?",acceptedAnswer:{"@type":"Answer",text:"Yes, our wheel spinner uses JavaScript's built-in random number generator to ensure fair and unbiased results."}},{"@type":"Question",name:"Can I customize the wheel colors?",acceptedAnswer:{"@type":"Answer",text:"The wheel automatically assigns different colors to each option to make them easily distinguishable."}},{"@type":"Question",name:"How many options can I add to the wheel?",acceptedAnswer:{"@type":"Answer",text:"You can add multiple options to the wheel. The wheel will automatically adjust to accommodate all your choices."}}]};this.addStructuredData("faq-data",e)}addStructuredData(e,t){const n=document.getElementById(e);n&&n.remove();const i=document.createElement("script");i.type="application/ld+json",i.id=e,i.textContent=JSON.stringify(t,null,2),document.head.appendChild(i)}addPageSpecificMeta(e,t){const n=[];switch(e){case"home":n.push({name:"article:author",content:"Decision Wheel Spinner Team"},{name:"article:section",content:"Tools"},{name:"article:tag",content:"decision making, wheel spinner, random choice"});break}n.forEach(i=>{const a=document.createElement("meta");Object.keys(i).forEach(r=>{a.setAttribute(r,i[r])}),document.head.appendChild(a)})}optimizeImages(){document.querySelectorAll("img").forEach(t=>{t.hasAttribute("loading")||t.setAttribute("loading","lazy"),t.hasAttribute("decoding")||t.setAttribute("decoding","async"),t.hasAttribute("alt")||console.warn("Image missing alt text:",t.src)})}addPreloadHints(){[{href:"/src/styles/globals.css",as:"style"},{href:"/src/styles/glassmorphism.css",as:"style"},{href:"/assets/img/wheelicon.png",as:"image"}].forEach(t=>{const n=document.createElement("link");n.rel="preload",n.href=t.href,n.as=t.as,document.querySelector(`link[href="${t.href}"]`)||document.head.appendChild(n)})}updateSocialMetaTags(e){[{property:"og:type",content:"website"},{property:"og:site_name",content:e.siteName||"Decision Wheel Spinner"},{property:"og:image:type",content:"image/png"},{property:"og:image:width",content:"512"},{property:"og:image:height",content:"512"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:domain",content:"wheelspinner.app"}].forEach(n=>{const i=n.property?`meta[property="${n.property}"]`:`meta[name="${n.name}"]`;let a=document.querySelector(i);a||(a=document.createElement("meta"),n.property?a.setAttribute("property",n.property):a.setAttribute("name",n.name),document.head.appendChild(a)),a.setAttribute("content",n.content)})}getSEOAudit(){var t,n,i,a;return{meta:{title:document.title,description:(t=document.querySelector('meta[name="description"]'))==null?void 0:t.content,keywords:(n=document.querySelector('meta[name="keywords"]'))==null?void 0:n.content,canonical:(i=document.querySelector('link[rel="canonical"]'))==null?void 0:i.href,robots:(a=document.querySelector('meta[name="robots"]'))==null?void 0:a.content},images:{total:document.querySelectorAll("img").length,withAlt:document.querySelectorAll("img[alt]").length,withLazyLoading:document.querySelectorAll('img[loading="lazy"]').length},performance:this.webVitalsData,structuredData:{scripts:document.querySelectorAll('script[type="application/ld+json"]').length},socialMedia:{ogTags:document.querySelectorAll('meta[property^="og:"]').length,twitterTags:document.querySelectorAll('meta[name^="twitter:"]').length}}}cleanup(){this.performanceObserver&&this.performanceObserver.disconnect(),console.log("Advanced SEO Manager cleanup completed")}}class $e{constructor(){this.weights={title:15,description:15,keywords:10,headings:10,images:10,structuredData:15,performance:15,socialMedia:5,accessibility:5},this.initialize()}initialize(){console.log("SEO Analyzer initialized")}analyze(){const e={timestamp:new Date().toISOString(),url:window.location.href,score:0,maxScore:100,categories:{title:this.analyzeTitleTag(),description:this.analyzeDescription(),keywords:this.analyzeKeywords(),headings:this.analyzeHeadings(),images:this.analyzeImages(),structuredData:this.analyzeStructuredData(),performance:this.analyzePerformance(),socialMedia:this.analyzeSocialMedia(),accessibility:this.analyzeAccessibility()},recommendations:[],criticalIssues:[],warnings:[]};return e.score=this.calculateOverallScore(e.categories),e.recommendations=this.generateRecommendations(e.categories),e.criticalIssues=this.identifyCriticalIssues(e.categories),e.warnings=this.generateWarnings(e.categories),e}analyzeTitleTag(){const e=document.querySelector("title"),t=e?e.textContent:"",n={score:0,maxScore:this.weights.title,title:t,length:t.length,issues:[]};return t?(t.length<30?(n.issues.push("Title is too short (less than 30 characters)"),n.score+=5):t.length<=60?n.score+=15:t.length<=70?(n.issues.push("Title is slightly long (over 60 characters)"),n.score+=10):(n.issues.push("Title is too long (over 70 characters)"),n.score+=5),t.toLowerCase().includes("wheel")||t.toLowerCase().includes("spinner")||t.toLowerCase().includes("decision")?n.score+=5:n.issues.push("Title does not contain main keywords"),n):(n.issues.push("No title tag found"),n)}analyzeDescription(){const e=document.querySelector('meta[name="description"]'),t=e?e.getAttribute("content"):"",n={score:0,maxScore:this.weights.description,description:t,length:t.length,issues:[]};return t?(t.length<120?(n.issues.push("Description is too short (less than 120 characters)"),n.score+=8):t.length<=160?n.score+=15:t.length<=180?(n.issues.push("Description is slightly long (over 160 characters)"),n.score+=10):(n.issues.push("Description is too long (over 180 characters)"),n.score+=5),n):(n.issues.push("No meta description found"),n)}analyzeKeywords(){const e=document.querySelector('meta[name="keywords"]'),t=e?e.getAttribute("content"):"",n={score:0,maxScore:this.weights.keywords,keywords:t,keywordCount:t?t.split(",").length:0,issues:[]};if(!t)n.issues.push("No meta keywords found"),n.score+=5;else{const i=t.split(",").map(a=>a.trim());i.length>10?(n.issues.push("Too many keywords (over 10)"),n.score+=5):i.length>=5?n.score+=10:(n.issues.push("Too few keywords (less than 5)"),n.score+=7)}return n}analyzeHeadings(){const e=document.querySelectorAll("h1"),t=document.querySelectorAll("h2"),n=document.querySelectorAll("h3"),i={score:0,maxScore:this.weights.headings,h1Count:e.length,h2Count:t.length,h3Count:n.length,issues:[]};return e.length===0?i.issues.push("No H1 tag found"):e.length>1?(i.issues.push("Multiple H1 tags found (should be only one)"),i.score+=5):i.score+=8,t.length>0?i.score+=2:i.issues.push("No H2 tags found"),i}analyzeImages(){const e=document.querySelectorAll("img"),t=document.querySelectorAll("img[alt]"),n=document.querySelectorAll('img[loading="lazy"]'),i={score:0,maxScore:this.weights.images,totalImages:e.length,imagesWithAlt:t.length,imagesWithLazyLoading:n.length,issues:[]};if(e.length===0)return i.score+=10,i;const a=t.length/e.length*100;return a===100?i.score+=5:(i.issues.push(`${e.length-t.length} images missing alt text`),i.score+=Math.floor(a/20)),n.length/e.length*100>=50?i.score+=5:(i.issues.push("Consider adding lazy loading to images"),i.score+=2),i}analyzeStructuredData(){const e=document.querySelectorAll('script[type="application/ld+json"]'),t={score:0,maxScore:this.weights.structuredData,scriptsCount:e.length,validSchemas:0,issues:[]};if(e.length===0)return t.issues.push("No structured data found"),t;let n=0;return e.forEach(i=>{try{const a=JSON.parse(i.textContent);a["@context"]&&a["@type"]&&n++}catch{t.issues.push("Invalid JSON-LD structured data found")}}),t.validSchemas=n,n>=2?t.score+=15:n===1?t.score+=10:t.score+=3,t}analyzePerformance(){const e={score:0,maxScore:this.weights.performance,metrics:{},issues:[]};if(!window.performance)return e.issues.push("Performance API not available"),e.score+=5,e;try{const t=performance.getEntriesByType("navigation")[0];if(t){const n=t.loadEventEnd-t.fetchStart,i=t.domContentLoadedEventEnd-t.fetchStart;e.metrics={pageLoadTime:Math.round(n),domContentLoaded:Math.round(i)},n<1e3?e.score+=15:n<2e3?e.score+=12:n<3e3?(e.score+=8,e.issues.push("Page load time is above 2 seconds")):(e.score+=3,e.issues.push("Page load time is above 3 seconds"))}}catch{e.issues.push("Could not measure performance metrics"),e.score+=5}return e}analyzeSocialMedia(){const e=document.querySelectorAll('meta[property^="og:"]'),t=document.querySelectorAll('meta[name^="twitter:"]'),n={score:0,maxScore:this.weights.socialMedia,openGraphTags:e.length,twitterTags:t.length,issues:[]},a=["og:title","og:description","og:image","og:url"].filter(f=>!document.querySelector(`meta[property="${f}"]`));a.length===0?n.score+=3:(n.issues.push(`Missing OpenGraph tags: ${a.join(", ")}`),n.score+=1);const y=["twitter:title","twitter:description","twitter:image"].filter(f=>!document.querySelector(`meta[name="${f}"]`));return y.length===0?n.score+=2:(n.issues.push(`Missing Twitter tags: ${y.join(", ")}`),n.score+=0),n}analyzeAccessibility(){const e={score:0,maxScore:this.weights.accessibility,issues:[]};return document.documentElement.getAttribute("lang")?e.score+=2:e.issues.push("HTML lang attribute missing"),document.querySelector('meta[name="viewport"]')?e.score+=2:e.issues.push("Viewport meta tag missing"),document.querySelectorAll('a[href^="#"]').length>0?e.score+=1:e.issues.push("Consider adding skip navigation links"),e}calculateOverallScore(e){let t=0;return Object.keys(e).forEach(n=>{t+=e[n].score}),Math.round(t)}generateRecommendations(e){const t=[];return Object.keys(e).forEach(n=>{const i=e[n];i.issues&&i.issues.length>0&&i.issues.forEach(a=>{t.push({category:n,priority:this.getIssuePriority(a),issue:a,solution:this.getSolution(a)})})}),t.sort((n,i)=>this.getPriorityWeight(i.priority)-this.getPriorityWeight(n.priority))}identifyCriticalIssues(e){const t=[];return e.title.score===0&&t.push("Missing title tag"),e.description.score===0&&t.push("Missing meta description"),e.headings.h1Count===0&&t.push("Missing H1 tag"),e.performance.metrics.pageLoadTime>5e3&&t.push("Extremely slow page load time"),t}generateWarnings(e){const t=[];return e.title.length>60&&t.push("Title tag may be truncated in search results"),e.description.length>160&&t.push("Meta description may be truncated in search results"),e.structuredData.scriptsCount===0&&t.push("No structured data found - consider adding JSON-LD markup"),t}getIssuePriority(e){const t=["title","description","h1","missing"],n=["long","short","slow"],i=e.toLowerCase();return t.some(a=>i.includes(a))?"high":n.some(a=>i.includes(a))?"medium":"low"}getPriorityWeight(e){switch(e){case"high":return 3;case"medium":return 2;case"low":return 1;default:return 0}}getSolution(e){const t={"No title tag found":"Add a descriptive title tag between 50-60 characters","No meta description found":"Add a compelling meta description between 150-160 characters","No H1 tag found":"Add a single H1 tag that describes the main content","Title is too short":"Expand title to be more descriptive (30+ characters)","Title is too long":"Shorten title to under 60 characters","Description is too short":"Expand description to be more informative (120+ characters)","Description is too long":"Shorten description to under 160 characters","images missing alt text":"Add descriptive alt text to all images","No structured data found":"Add JSON-LD structured data markup","Page load time":"Optimize images, minify CSS/JS, and enable compression"};for(const n in t)if(e.toLowerCase().includes(n.toLowerCase()))return t[n];return"Review and optimize this element for better SEO"}generateReport(e="console"){const t=this.analyze();switch(e){case"json":return JSON.stringify(t,null,2);case"html":return this.generateHTMLReport(t);case"console":default:return this.logConsoleReport(t),t}}generateHTMLReport(e){return`
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
                    ${n.issues.map(i=>`<li>${i}</li>`).join("")}
                  </ul>
                `:'<p style="color: #4CAF50;">✓ No issues found</p>'}
              </div>
            `}).join("")}
        </div>
      </div>
    `}logConsoleReport(e){console.group("🔍 SEO Analysis Report"),console.log(`Overall Score: ${e.score}/${e.maxScore}`),e.criticalIssues.length>0&&(console.group("🚨 Critical Issues"),e.criticalIssues.forEach(t=>console.error(t)),console.groupEnd()),e.recommendations.length>0&&(console.group("💡 Top Recommendations"),e.recommendations.slice(0,5).forEach(t=>{console.log(`${t.category}: ${t.issue}`),console.log(`   Solution: ${t.solution}`)}),console.groupEnd()),console.group("📊 Category Breakdown"),Object.keys(e.categories).forEach(t=>{const n=e.categories[t];console.log(`${t}: ${n.score}/${n.maxScore}`),n.issues&&n.issues.length>0&&n.issues.forEach(i=>console.warn(`  - ${i}`))}),console.groupEnd(),console.groupEnd()}}class We{constructor(){this.adConfig={header:{enabled:!0,size:{width:728,height:90},mobileSize:{width:320,height:50},adUnitId:"ca-pub-7898475614767076/1940254660",position:"header"},sidebar:{enabled:!1,size:{width:300,height:250},adUnitId:"ca-pub-7898475614767076/1940254660",position:"sidebar",desktopOnly:!0},content:{enabled:!0,size:{width:320,height:100},adUnitId:"ca-pub-7898475614767076/1940254660",position:"content"},footer:{enabled:!0,size:{width:728,height:90},mobileSize:{width:320,height:50},adUnitId:"ca-pub-7898475614767076/1940254660",position:"footer"},wheelBottom:{enabled:!0,size:{width:300,height:250},adUnitId:"ca-pub-7898475614767076/1940254660",position:"wheel-bottom",desktopOnly:!0},afterWheel1:{enabled:!0,size:{width:728,height:90},mobileSize:{width:320,height:50},adUnitId:"ca-pub-7898475614767076/1940254660",position:"after-wheel-1"},afterWheel2:{enabled:!0,size:{width:300,height:250},adUnitId:"ca-pub-7898475614767076/1940254660",position:"after-wheel-2"}},this.adMetrics={loaded:{},viewed:{},clicked:{},errors:{}},this.adBlockerDetected=!1,this.init()}async init(){try{await this.detectAdBlocker(),this.adBlockerDetected||await this.initializeAdSense(),this.createAdContainers(),this.setupResponsiveBehavior(),console.log("AdManager initialized successfully")}catch(e){console.error("AdManager initialization failed:",e),this.handleAdError("initialization",e)}}async detectAdBlocker(){return new Promise(e=>{const t=document.createElement("div");t.innerHTML="&nbsp;",t.className="adsbox",t.style.position="absolute",t.style.left="-10000px",document.body.appendChild(t),setTimeout(()=>{const n=t.offsetHeight===0;document.body.removeChild(t),n&&(this.adBlockerDetected=!0,this.showAdBlockerMessage()),e(n)},100)})}async initializeAdSense(){if(!window.adsbygoogle)return new Promise((e,t)=>{const n=document.createElement("script");n.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",n.async=!0,n.crossOrigin="anonymous",n.onload=()=>{window.adsbygoogle=window.adsbygoogle||[],e()},n.onerror=()=>{this.adBlockerDetected=!0,t(new Error("Failed to load AdSense script"))},document.head.appendChild(n)})}createAdContainers(){Object.entries(this.adConfig).forEach(([e,t])=>{t.enabled&&this.createAdUnit(e,t)})}createAdUnit(e,t){const n=document.createElement("div");n.className=`ad-container ad-${e}`,n.id=`ad-${e}`,t.desktopOnly&&this.isMobile()&&(n.style.display="none");const i=document.createElement("ins");if(i.className="adsbygoogle",i.style.display="block",i.setAttribute("data-ad-client","ca-pub-7898475614767076"),i.setAttribute("data-ad-slot","1940254660"),i.setAttribute("data-ad-format","auto"),i.setAttribute("data-full-width-responsive","true"),t.mobileSize&&this.isMobile()?(i.style.width=`${t.mobileSize.width}px`,i.style.height=`${t.mobileSize.height}px`):(i.style.width=`${t.size.width}px`,i.style.height=`${t.size.height}px`),n.appendChild(i),this.insertAdContainer(e,n),!this.adBlockerDetected&&window.adsbygoogle)try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),this.trackAdMetric("loaded",e)}catch(a){console.error(`Failed to load ad for ${e}:`,a),this.handleAdError(e,a)}}insertAdContainer(e,t){switch(e){case"header":const n=document.querySelector("header");n&&n.appendChild(t);break;case"sidebar":let i=document.querySelector(".sidebar");if(!i){i=document.createElement("aside"),i.className="sidebar";const x=document.querySelector(".main-container");x&&x.parentNode&&x.parentNode.insertBefore(i,x.nextSibling)}i.appendChild(t);break;case"content":const a=document.querySelector("#wheel-section");a&&a.parentNode&&a.parentNode.insertBefore(t,a.nextSibling);break;case"footer":const r=document.querySelector("#app");r&&r.appendChild(t);break;case"wheel-bottom":const y=document.querySelector(".wheel-container");y&&y.appendChild(t);break;case"after-wheel-1":case"after-wheel-2":const f=document.querySelector(".main-container");f&&f.parentNode&&f.parentNode.insertBefore(t,f.nextSibling);break}}setupResponsiveBehavior(){const e=()=>{this.updateAdSizes(),this.toggleMobileAds()};window.addEventListener("resize",e),window.addEventListener("orientationchange",e)}updateAdSizes(){Object.entries(this.adConfig).forEach(([e,t])=>{const n=document.querySelector(`#ad-${e}`),i=n==null?void 0:n.querySelector(".adsbygoogle");if(i&&t.mobileSize){const r=this.isMobile()?t.mobileSize:t.size;i.style.width=`${r.width}px`,i.style.height=`${r.height}px`}})}toggleMobileAds(){const e=this.isMobile();Object.entries(this.adConfig).forEach(([t,n])=>{if(n.desktopOnly){const i=document.querySelector(`#ad-${t}`);i&&(i.style.display=e?"none":"block")}})}showAdBlockerMessage(){const e=document.createElement("div");e.className="ad-blocker-message glass-card",e.innerHTML=`
      <h3>🚫 Ad Blocker Detected</h3>
      <p>We use ads to keep this service free. Please consider disabling your ad blocker or supporting us directly.</p>
      <button class="glass-btn" onclick="this.parentElement.style.display='none'">Dismiss</button>
    `;const t=document.querySelector("header");t&&t.nextSibling&&t.parentNode.insertBefore(e,t.nextSibling)}trackAdMetric(e,t,n={}){this.adMetrics[e]||(this.adMetrics[e]={}),this.adMetrics[e][t]||(this.adMetrics[e][t]=0),this.adMetrics[e][t]++,console.log(`Ad ${e}:`,{placement:t,count:this.adMetrics[e][t],...n})}handleAdError(e,t){this.trackAdMetric("errors",e,{error:t.message});const n=document.querySelector(`#ad-${e}`);n&&(n.innerHTML=`
        <div class="ad-fallback glass-card">
          <p>Advertisement space</p>
        </div>
      `)}isMobile(){return window.innerWidth<=768||/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}getMetrics(){return{...this.adMetrics,adBlockerDetected:this.adBlockerDetected,activeAds:Object.keys(this.adConfig).filter(e=>this.adConfig[e].enabled).length}}toggleAdPlacement(e,t){if(this.adConfig[e]){this.adConfig[e].enabled=t;const n=document.querySelector(`#ad-${e}`);n&&(n.style.display=t?"block":"none")}}refreshAds(){if(!this.adBlockerDetected&&window.adsbygoogle)try{window.adsbygoogle.forEach((e,t)=>{e.innerHTML="",(window.adsbygoogle=window.adsbygoogle||[]).push({})})}catch(e){console.error("Error refreshing ads:",e)}}}const Ne=new We;class qe{static createAd(e){const t=document.getElementById(e);if(!t){console.error(`Container with ID ${e} not found`);return}t.innerHTML=`
      <!-- wheelspinner -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-7898475614767076"
           data-ad-slot="1940254660"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `;try{(window.adsbygoogle=window.adsbygoogle||[]).push({}),console.log(`Ad loaded in container: ${e}`)}catch(n){console.error("Error loading ad:",n)}}static initializeAds(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{this.createAdContainers()}):this.createAdContainers()}static createAdContainers(){this.createAdContainer("header-ad","header"),this.createAdContainer("content-ad","after-wheel-section"),this.createAdContainer("footer-ad","#app")}static createAdContainer(e,t){if(!document.querySelector(t)){console.log(`Target ${t} not found for ad ${e}`);return}const i=document.createElement("div");if(i.id=e,i.className="ad-container simple-ad",i.style.cssText=`
      text-align: center;
      margin: 20px 0;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      backdrop-filter: blur(20px);
    `,t==="header"){const a=document.querySelector("header");a&&a.parentNode&&a.parentNode.insertBefore(i,a.nextSibling)}else if(t==="after-wheel-section"){const a=document.querySelector("#wheel-section");a&&a.parentNode&&a.parentNode.insertBefore(i,a.nextSibling)}else if(t==="#app"){const a=document.querySelector("#app");a&&a.appendChild(i)}setTimeout(()=>{this.createAd(e)},100)}static createTestAd(e){const t=document.getElementById(e);t&&(t.innerHTML=`
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
    `)}}typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&(console.log("🎯 SimpleAd: Modo desarrollo detectado"),console.log("💡 Para cargar anuncios reales, usa: SimpleAd.initializeAds()"),console.log('🧪 Para anuncios de prueba, usa: SimpleAd.createTestAd("container-id")'));class Re{constructor(){this.components={},this.isInitialized=!1,this.eventHandlers=new De(this),this.initializeApp()}async initializeApp(){try{document.readyState==="loading"&&await this.waitForDOMReady(),await this.initializeLanguageSystem(),this.initializeComponents(),this.eventHandlers.setupEventHandlers(),this.loadInitialOptions(),this.setupDefaultState(),this.isInitialized=!0,console.log("Decision Wheel App initialized successfully")}catch(e){console.error("Failed to initialize Decision Wheel App:",e),this.showInitializationError()}}waitForDOMReady(){return new Promise(e=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})}async initializeLanguageSystem(){try{this.components.languageManager=new xe,await this.components.languageManager.initialize(),this.components.seoManager=new Me(this.components.languageManager),this.components.seoAdvancedManager=new Fe(this.components.seoManager),this.components.seoAnalyzer=new $e,this.components.languageSelector=new Se(this.components.languageManager),window.i18n=this.components.languageManager,console.log("Language system initialized successfully")}catch(e){throw console.error("Error initializing language system:",e),e}}initializeComponents(){try{this.components.inputManager=new Oe(this.components.languageManager),this.components.wheelSpinner=new Ce(this.components.languageManager),this.components.resultModal=new Ie(this.components.languageManager),this.components.confettiEffect=new Be,this.components.historyManager=new He(this.components.languageManager),this.components.adManager=Ne,this.components.simpleAd=qe,console.log("All components initialized")}catch(e){throw console.error("Error initializing components:",e),e}}loadInitialOptions(){this.components.inputManager&&this.components.inputManager.loadSavedOptions()}setupDefaultState(){}showInitializationError(){document.body.insertAdjacentHTML("beforeend",`
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
    `)}getStatus(){var e,t,n;return{initialized:this.isInitialized,components:Object.keys(this.components),optionsCount:((e=this.components.inputManager)==null?void 0:e.getOptions().length)||0,wheelSpinning:((t=this.components.wheelSpinner)==null?void 0:t.isSpinning)||!1,modalOpen:((n=this.components.resultModal)==null?void 0:n.isModalOpen())||!1}}runSEOAnalysis(e="console"){return this.components.seoAnalyzer?this.components.seoAnalyzer.generateReport(e):(console.error("SEO Analyzer not initialized"),null)}cleanup(){this.components.confettiEffect&&this.components.confettiEffect.stop(),this.components.resultModal&&this.components.resultModal.forceClose(),this.components.languageSelector&&this.components.languageSelector.cleanup(),this.components.seoAdvancedManager&&this.components.seoAdvancedManager.cleanup(),this.components.seoManager&&this.components.seoManager.cleanup(),this.components.adManager&&console.log("Ad Manager cleaned up"),window.i18n&&delete window.i18n,console.log("Application cleaned up")}}const ee=new Re;window.DecisionWheelApp=ee;window.addEventListener("beforeunload",()=>{ee.cleanup()})});export default je();
