import{c as r}from"./confetti-BxKCmZ95.js";import{L as S,S as I,a as M}from"./components-DQ87bFGb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();class L{constructor(t){this.wheel=t}createEmptyWheel(){const t=document.createElement("div");t.className="wheel-fallback glass-card",t.innerHTML=`
      <div class="fallback-icon">🎯</div>
      <h3>No Options Added</h3>
      <p>Add some options to get started with your decision wheel!</p>
      <div class="fallback-arrow">👆</div>
    `,t.style.cssText=`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      padding: 2rem;
      max-width: 350px;
      width: 90vw;
      animation: fadeIn 0.5s ease-out;
    `;const e=this.wheel.container.parentElement;e.style.position="relative",e.appendChild(t),this.wheel.container.style.opacity="0.1"}createSegment(t,e,n,i,s,o,h,d){const p=i*Math.PI/180,u=s*Math.PI/180,w=t+n*Math.cos(p),v=e+n*Math.sin(p),x=t+n*Math.cos(u),E=e+n*Math.sin(u),C=s-i>180?1:0,O=[`M ${t} ${e}`,`L ${w} ${v}`,`A ${n} ${n} 0 ${C} 1 ${x} ${E}`,"Z"].join(" "),c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d",O),c.setAttribute("fill",o),c.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),c.setAttribute("stroke-width","1"),c.setAttribute("class","wheel-segment"),c.setAttribute("data-index",d);const m=(i+s)/2,g=n*.7,f=t+g*Math.cos(m*Math.PI/180),y=e+g*Math.sin(m*Math.PI/180),l=document.createElementNS("http://www.w3.org/2000/svg","text");l.setAttribute("x",f),l.setAttribute("y",y),l.setAttribute("text-anchor","middle"),l.setAttribute("dominant-baseline","central"),l.setAttribute("fill","white"),l.setAttribute("font-size",this.calculateFontSize(h,this.wheel.options.length)),l.setAttribute("font-weight","600"),l.setAttribute("transform",`rotate(${m}, ${f}, ${y})`),l.textContent=this.truncateText(h,this.wheel.options.length),this.wheel.segmentsGroup.appendChild(c),this.wheel.segmentsGroup.appendChild(l)}calculateFontSize(t,e){const n=window.innerWidth<=480,i=n?36:28,s=Math.max(.6,1-e/20),o=Math.max(.7,1-t.length/20);return Math.max(n?24:18,i*s*o)}truncateText(t,e){const n=e>8?15:e>4?20:25;return t.length>n?t.substring(0,n-3)+"...":t}createSingleOptionWheel(t,e,n,i){const s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttribute("cx",t),s.setAttribute("cy",e),s.setAttribute("r",n),s.setAttribute("fill",this.wheel.colors[0]),s.setAttribute("stroke","rgba(255, 255, 255, 0.2)"),s.setAttribute("stroke-width","2"),s.setAttribute("class","wheel-segment"),s.setAttribute("data-index","0");const o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("x",t),o.setAttribute("y",e),o.setAttribute("text-anchor","middle"),o.setAttribute("dominant-baseline","central"),o.setAttribute("fill","white"),o.setAttribute("font-size","28"),o.setAttribute("font-weight","700"),o.textContent=this.truncateText(i,1),this.wheel.segmentsGroup.appendChild(s),this.wheel.segmentsGroup.appendChild(o)}waitForSpin(t){return new Promise(e=>setTimeout(e,t))}}class A{constructor(t=null,e="wheel-svg"){typeof t=="string"&&(e=t,t=null),this.languageManager=t,this.container=document.getElementById(e),this.segmentsGroup=document.getElementById("wheel-segments"),this.options=[],this.isSpinning=!1,this.currentRotation=0,this.colors=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FECA57","#FF9FF3","#54A0FF","#5F27CD","#00D2D3","#FF9F43","#FF3838","#2ED573","#1E90FF","#FF6348","#7BED9F"],this.helpers=new L(this),this.initializeEventListeners()}initializeEventListeners(){const t=document.getElementById("spin-btn");t&&t.addEventListener("click",()=>this.spin())}updateOptions(t){this.options=[...t],this.generateWheel(),this.updateSpinButtonState()}generateWheel(){if(!this.segmentsGroup)return;if(this.segmentsGroup.innerHTML="",this.clearFallback(),this.options.length===0){this.helpers.createEmptyWheel();return}this.container.style.opacity="1";const t=360/this.options.length,e=320,n=350,i=350;if(this.options.length===1){this.helpers.createSingleOptionWheel(n,i,e,this.options[0]);return}this.options.forEach((s,o)=>{const h=o*t,d=(o+1)*t,p=this.colors[o%this.colors.length];this.helpers.createSegment(n,i,e,h,d,p,s,o)})}clearFallback(){const e=this.container.parentElement.querySelector(".wheel-fallback");e&&e.remove()}async spin(){if(this.isSpinning||this.options.length===0)return;this.isSpinning=!0,this.updateSpinButtonState();const t=3,n=Math.random()*(6-t)+t,i=Math.random()*360,s=n*360+i,o=this.currentRotation+s;this.container.style.transform=`rotate(${o}deg)`,this.container.style.transition="transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",await this.helpers.waitForSpin(3e3);const h=o%360,d=360/this.options.length,p=(360-h+90)%360,u=Math.floor(p/d)%this.options.length;this.currentRotation=o,this.isSpinning=!1,this.updateSpinButtonState(),this.announceWinner(this.options[u])}announceWinner(t){const e=new CustomEvent("wheelWinner",{detail:{winner:t}});document.dispatchEvent(e)}updateSpinButtonState(){const t=document.getElementById("spin-btn");t&&(t.disabled=this.isSpinning||this.options.length===0,t.textContent=this.isSpinning?"Spinning...":"Spin the Wheel!")}reset(){this.currentRotation=0,this.container.style.transform="rotate(0deg)",this.container.style.transition="none",this.isSpinning=!1,this.updateSpinButtonState()}}class T{constructor(t){this.manager=t}createOptionElement(t,e){const n=document.createElement("div");return n.className="option-item",n.style.opacity="0",n.style.transform="translateX(-20px)",n.innerHTML=`
      <span class="option-text" title="${t}">${t}</span>
      <button class="remove-option" data-index="${e}" title="Remove option">
        ✕
      </button>
    `,n.querySelector(".remove-option").addEventListener("click",()=>{this.animateOptionRemove(n,()=>{this.manager.actions.removeOption(e)})}),n}animateOptionAdd(t){t.offsetHeight,t.style.transition="all 0.3s ease-out",t.style.opacity="1",t.style.transform="translateX(0)",setTimeout(()=>{t.style.transform="scale(1.02)",setTimeout(()=>{t.style.transform="scale(1)"},100)},300)}animateOptionRemove(t,e){t.style.transition="all 0.3s ease-in",t.style.opacity="0",t.style.transform="translateX(20px) scale(0.8)",t.style.maxHeight=t.offsetHeight+"px",setTimeout(()=>{t.style.maxHeight="0",t.style.padding="0",t.style.margin="0",setTimeout(()=>{e()},200)},300)}renderEmptyState(){const t=document.createElement("div");t.className="empty-state",t.style.opacity="0",t.innerHTML=`
      <p style="text-align: center; opacity: 0.7; font-style: italic; padding: 2rem;">
        No options added yet. Add some options to get started!
      </p>
    `,this.manager.optionsList.appendChild(t),setTimeout(()=>{t.style.transition="opacity 0.3s ease-in",t.style.opacity="1"},50)}setInputError(t){this.manager.optionInput&&(this.manager.optionInput.style.borderColor="#ff6b6b",this.manager.optionInput.style.boxShadow="0 0 0 3px rgba(255, 107, 107, 0.2)",this.manager.optionInput.title=t,this.manager.optionInput.style.animation="shake 0.5s ease-in-out",setTimeout(()=>{this.manager.optionInput.style.animation=""},500))}clearInputError(){this.manager.optionInput&&(this.manager.optionInput.style.borderColor="",this.manager.optionInput.style.boxShadow="",this.manager.optionInput.title="",this.manager.optionInput.style.animation="")}showInputError(){this.showToast("Invalid option input","error")}showDuplicateError(){this.showToast("Option already exists","warning")}showMaxOptionsError(){this.showToast(`Maximum ${this.manager.maxOptions} options allowed`,"warning")}showSuccessFeedback(){this.showToast("Option added successfully","success")}showRemovalFeedback(t){this.showToast(`Removed: ${t}`,"info")}showClearFeedback(){this.showToast("All options cleared","info")}showToast(t,e="info"){const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=t,n.style.cssText=`
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
      background: ${this.getToastColor(e)};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="1",n.style.transform="translateX(0)"},50),setTimeout(()=>{n.style.opacity="0",n.style.transform="translateX(100%)",setTimeout(()=>{document.body.removeChild(n)},300)},3e3)}getToastColor(t){const e={success:"linear-gradient(135deg, #2ed573, #1e90ff)",error:"linear-gradient(135deg, #ff6b6b, #ee5a24)",warning:"linear-gradient(135deg, #feca57, #ff9f43)",info:"linear-gradient(135deg, #4ecdc4, #45b7d1)"};return e[t]||e.info}saveOptions(){try{localStorage.setItem("wheelOptions",JSON.stringify(this.manager.options))}catch(t){console.warn("Could not save options to localStorage:",t)}}loadSavedOptions(){try{const t=localStorage.getItem("wheelOptions");if(t){const e=JSON.parse(t);if(Array.isArray(e)&&e.length>0){this.manager.options=e.filter(n=>typeof n=="string"&&this.manager.isValidOption(n)),this.manager.renderOptions(),this.manager.notifyOptionsChanged();return}}this.setDefaultOptions()}catch(t){console.warn("Could not load options from localStorage:",t),this.setDefaultOptions()}}setDefaultOptions(){this.manager.options=["Pizza","Sushi","Tacos","Burgers","Thai Food"],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged()}}class k{constructor(t){this.manager=t}addOption(){if(!this.manager.optionInput)return;const t=this.manager.optionInput.value.trim();if(!this.manager.isValidOption(t)){this.manager.helpers.showInputError();return}if(this.manager.isDuplicate(t)){this.manager.helpers.showDuplicateError();return}if(this.manager.options.length>=this.manager.maxOptions){this.manager.helpers.showMaxOptionsError();return}this.manager.options.push(t),this.manager.clearInput(),this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showSuccessFeedback()}removeOption(t){if(t>=0&&t<this.manager.options.length){const e=this.manager.options.splice(t,1)[0];this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showRemovalFeedback(e)}}clearAllOptions(){this.manager.options.length!==0&&(this.manager.options.length>1&&!confirm(`Are you sure you want to remove all ${this.manager.options.length} options?`)||(this.manager.options=[],this.manager.renderOptions(),this.manager.saveOptions(),this.manager.notifyOptionsChanged(),this.manager.helpers.showClearFeedback()))}}class H{constructor(t=null){this.options=[],this.maxOptions=20,this.minOptionLength=1,this.maxOptionLength=50,this.languageManager=t,this.optionInput=document.getElementById("option-input"),this.addButton=document.getElementById("add-option-btn"),this.clearButton=document.getElementById("clear-all-btn"),this.optionsList=document.getElementById("options-list"),this.helpers=new T(this),this.actions=new k(this),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts(),this.renderOptions(),this.validateInput()})}updateUITexts(){if(!this.languageManager)return;const t=document.getElementById("app-title");t&&(t.textContent=this.languageManager.t("header.title"));const e=document.getElementById("app-subtitle");e&&(e.textContent=this.languageManager.t("header.subtitle")),this.optionInput&&(this.optionInput.placeholder=this.languageManager.t("input.placeholder")),this.addButton&&(this.addButton.textContent=this.languageManager.t("input.addButton")),this.clearButton&&(this.clearButton.textContent=this.languageManager.t("input.clearAllButton"));const n=document.querySelector("#input-section h2");n&&(n.textContent=this.languageManager.t("input.sectionTitle"));const i=document.getElementById("spin-btn");i&&(i.textContent=this.languageManager.t("wheel.spinButton"))}t(t,e={}){return this.languageManager?this.languageManager.t(t,e):t}initializeEventListeners(){this.addButton&&this.addButton.addEventListener("click",()=>this.actions.addOption()),this.optionInput&&(this.optionInput.addEventListener("keypress",t=>{t.key==="Enter"&&this.actions.addOption()}),this.optionInput.addEventListener("input",()=>this.validateInput())),this.clearButton&&this.clearButton.addEventListener("click",()=>this.actions.clearAllOptions())}isValidOption(t){return t.length>=this.minOptionLength&&t.length<=this.maxOptionLength}isDuplicate(t){return this.options.some(e=>e.toLowerCase()===t.toLowerCase())}validateInput(){if(!this.optionInput)return;const t=this.optionInput.value.trim(),e=this.addButton;e&&(t.length===0?(e.disabled=!0,this.helpers.clearInputError()):this.isValidOption(t)?this.isDuplicate(t)?(e.disabled=!0,this.helpers.setInputError(this.t("input.duplicateOptionError"))):this.options.length>=this.maxOptions?(e.disabled=!0,this.helpers.setInputError(this.t("input.maxOptionsReached",{max:this.maxOptions}))):(e.disabled=!1,this.helpers.clearInputError()):(e.disabled=!0,this.helpers.setInputError(this.t("input.optionTooLong",{max:this.maxOptionLength}))))}renderOptions(){if(this.optionsList){if(this.optionsList.innerHTML="",this.options.length===0){this.helpers.renderEmptyState();return}this.options.forEach((t,e)=>{const n=this.helpers.createOptionElement(t,e);this.optionsList.appendChild(n),this.helpers.animateOptionAdd(n)}),this.updateClearButtonState()}}updateClearButtonState(){this.clearButton&&(this.clearButton.disabled=this.options.length===0)}clearInput(){this.optionInput&&(this.optionInput.value="",this.helpers.clearInputError(),this.validateInput())}saveOptions(){this.helpers.saveOptions()}loadSavedOptions(){this.helpers.loadSavedOptions()}notifyOptionsChanged(){const t=new CustomEvent("optionsChanged",{detail:{options:[...this.options]}});document.dispatchEvent(t)}getOptions(){return[...this.options]}setOptions(t){Array.isArray(t)&&(this.options=t.filter(e=>typeof e=="string"&&this.isValidOption(e)).slice(0,this.maxOptions),this.renderOptions(),this.saveOptions(),this.notifyOptionsChanged())}loadSavedOptions(){this.helpers.loadSavedOptions()}}class B{constructor(t){this.modal=t}updateWinnerDisplay(){if(!this.modal.winnerText||!this.modal.currentWinner)return;this.modal.winnerText.innerHTML="";const t=document.createElement("div");t.style.cssText=`
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
    `;const e=document.createElement("span");e.textContent=this.modal.currentWinner,e.style.cssText=`
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 2s ease-in-out infinite;
      font-weight: 800;
      font-size: 2.5rem;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
      display: block;
      text-align: center;
      line-height: 1.2;
    `;const n=document.createElement("div");n.innerHTML="✨",n.style.cssText=`
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite;
    `;const i=document.createElement("div");i.innerHTML="🎉",i.style.cssText=`
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite 0.5s;
    `;const s=document.createElement("div");s.innerHTML="⭐",s.style.cssText=`
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      animation: sparkleFloat 3s ease-in-out infinite 1s;
    `,t.appendChild(n),t.appendChild(i),t.appendChild(e),t.appendChild(s),this.modal.winnerText.appendChild(t),this.addGradientAnimation()}addGradientAnimation(){const t="gradient-animation-styles";if(document.getElementById(t))return;const e=document.createElement("style");e.id=t,e.textContent=`
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
    `,document.head.appendChild(e)}trapFocus(){if(!this.modal.modal)return;const t=this.modal.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=t[0],n=t[t.length-1];e&&e.focus();const i=o=>{o.key==="Tab"&&(o.shiftKey?document.activeElement===e&&(o.preventDefault(),n==null||n.focus()):document.activeElement===n&&(o.preventDefault(),e==null||e.focus()))};this.modal.modal.addEventListener("keydown",i);const s=this.modal.close.bind(this.modal);this.modal.close=()=>{this.modal.modal.removeEventListener("keydown",i),this.modal.close=s,s()}}}class z{constructor(t=null){var e;this.modal=document.getElementById("result-modal"),this.modalContent=(e=this.modal)==null?void 0:e.querySelector(".modal-content"),this.winnerText=document.getElementById("winner-text"),this.closeButton=document.getElementById("close-modal-btn"),this.spinAgainButton=document.getElementById("spin-again-btn"),this.isOpen=!1,this.currentWinner=null,this.languageManager=t,this.helpers=new B(this),this.initializeEventListeners(),this.setupLanguageListeners(),this.updateUITexts()}setupLanguageListeners(){this.languageManager&&this.languageManager.addLanguageChangeListener(()=>{this.updateUITexts()})}updateUITexts(){var e;if(!this.languageManager)return;const t=(e=this.modal)==null?void 0:e.querySelector("h2");t&&(t.textContent=this.languageManager.t("result.winnerTitle")),this.closeButton&&(this.closeButton.textContent=this.languageManager.t("result.closeButton")),this.spinAgainButton&&(this.spinAgainButton.textContent=this.languageManager.t("result.spinAgainButton"))}t(t,e={}){return this.languageManager?this.languageManager.t(t,e):t}initializeEventListeners(){this.closeButton&&this.closeButton.addEventListener("click",()=>this.close()),this.spinAgainButton&&this.spinAgainButton.addEventListener("click",()=>this.spinAgain()),this.modal&&this.modal.addEventListener("click",t=>{t.target===this.modal&&this.close()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&this.isOpen&&this.close()}),document.addEventListener("wheelWinner",t=>{this.showWinner(t.detail.winner)})}showWinner(t){!this.modal||!this.winnerText||(this.currentWinner=t,this.helpers.updateWinnerDisplay(),this.open(),setTimeout(()=>{this.triggerConfetti()},300))}open(){!this.modal||this.isOpen||(this.isOpen=!0,this.modal.classList.remove("hidden"),document.body.style.overflow="hidden",requestAnimationFrame(()=>{this.modal.style.opacity="0",this.modal.style.display="flex",requestAnimationFrame(()=>{this.modal.style.transition="opacity 0.3s ease-out",this.modal.style.opacity="1",this.modalContent&&(this.modalContent.style.animation="modalSlideIn 0.4s ease-out")})}),this.helpers.trapFocus())}close(){!this.modal||!this.isOpen||(this.isOpen=!1,this.modal.style.transition="opacity 0.2s ease-in",this.modal.style.opacity="0",this.modalContent&&(this.modalContent.style.animation="modalSlideOut 0.3s ease-in"),setTimeout(()=>{this.modal.classList.add("hidden"),this.modal.style.display="none",this.modal.style.opacity="",this.modal.style.transition="",this.modalContent&&(this.modalContent.style.animation=""),document.body.style.overflow=""},300),this.currentWinner=null)}spinAgain(){this.close();const t=new CustomEvent("spinAgain");document.dispatchEvent(t)}triggerConfetti(){const t=new CustomEvent("triggerConfetti",{detail:{winner:this.currentWinner,intensity:"high"}});document.dispatchEvent(t)}isModalOpen(){return this.isOpen}getCurrentWinner(){return this.currentWinner}forceClose(){this.modal&&(this.modal.classList.add("hidden"),this.modal.style.display="none",document.body.style.overflow=""),this.isOpen=!1,this.currentWinner=null}}class D{constructor(t){this.effect=t}winnerCelebration(){const t=this.effect.presets.winner;r({...t,particleCount:100,spread:70,origin:{y:.6}}),setTimeout(()=>{r({...t,particleCount:50,angle:60,spread:55,origin:{x:0,y:.8}})},250),setTimeout(()=>{r({...t,particleCount:50,angle:120,spread:55,origin:{x:1,y:.8}})},400)}standardCelebration(){const t=this.effect.presets.celebration,e=()=>{this.effect.isActive&&(r({...t,particleCount:30,spread:60,origin:{x:Math.random()*.6+.2,y:Math.random()*.4+.5}}),this.effect.animationId=setTimeout(e,200))};e()}burstCelebration(){const t=this.effect.presets.burst;r({...t,particleCount:200,spread:100,origin:{y:.5},startVelocity:30,gravity:.5,drift:0})}highIntensityCelebration(){r({particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]}),setTimeout(()=>{this.fireworksEffect()},300),setTimeout(()=>{this.confettiRain()},800)}fireworksEffect(){[30,60,90,120,150].forEach((e,n)=>{setTimeout(()=>{r({particleCount:40,angle:e,spread:30,origin:{x:.1+n*.2,y:.3+Math.random()*.3},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"],startVelocity:25,gravity:.8})},n*100)})}confettiRain(){let t=0;const e=10,n=setInterval(()=>{if(t>=e||!this.effect.isActive){clearInterval(n);return}r({particleCount:20,spread:40,origin:{x:Math.random(),y:-.1},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"],startVelocity:15,gravity:.4,drift:Math.random()*2-1}),t++},200)}}class F{constructor(){this.isActive=!1,this.animationId=null,this.presets={winner:{particleCount:100,spread:70,origin:{y:.6},colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"]},celebration:{particleCount:150,spread:100,origin:{y:.7},colors:["#ff9ff3","#54a0ff","#5f27cd","#00d2d3","#ff9f43"]},burst:{particleCount:200,spread:120,origin:{y:.5},colors:["#ff3838","#2ed573","#1e90ff","#ff6348","#7bed9f"]}},this.patterns=new D(this),this.initializeEventListeners()}initializeEventListeners(){document.addEventListener("triggerConfetti",t=>{const{winner:e,intensity:n}=t.detail;this.celebrate(n||"winner",e)}),document.addEventListener("wheelWinner",t=>{setTimeout(()=>{this.celebrate("winner",t.detail.winner)},500)})}celebrate(t="winner",e=""){switch(this.isActive&&this.stop(),this.isActive=!0,t){case"winner":this.patterns.winnerCelebration();break;case"celebration":this.patterns.standardCelebration();break;case"burst":this.patterns.burstCelebration();break;case"high":this.patterns.highIntensityCelebration();break;default:this.patterns.winnerCelebration()}setTimeout(()=>{this.stop()},3e3)}customShapeConfetti(t="star"){const e={star:"★",heart:"♥",circle:"●",diamond:"♦"};r({particleCount:50,spread:60,origin:{y:.6},shapes:[e[t]||e.star],colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],scalar:1.2})}cannonEffect(t={x:.5,y:.8},e="up"){const n={up:{angle:90,spread:45},left:{angle:45,spread:35},right:{angle:135,spread:35},diagonal:{angle:60,spread:50}},i=n[e]||n.up;r({particleCount:80,angle:i.angle,spread:i.spread,origin:t,colors:["#ff6b6b","#4ecdc4","#45b7d1","#96ceb4","#feca57"],startVelocity:35,gravity:.6})}stop(){this.isActive=!1,this.animationId&&(clearTimeout(this.animationId),this.animationId=null),r.reset()}isConfettiActive(){return this.isActive}randomCelebration(){const t=["winner","celebration","burst"],e=t[Math.floor(Math.random()*t.length)];this.celebrate(e)}}class W{constructor(t){this.app=t}setupEventHandlers(){document.addEventListener("optionsChanged",t=>{const{options:e}=t.detail;this.handleOptionsChange(e)}),document.addEventListener("wheelWinner",t=>{const{winner:e}=t.detail;this.handleWheelWinner(e)}),document.addEventListener("spinAgain",()=>{this.handleSpinAgain()}),document.addEventListener("triggerConfetti",t=>{const{winner:e,intensity:n}=t.detail;this.handleConfettiTrigger(e,n)}),document.addEventListener("keydown",t=>{this.handleKeyboardShortcuts(t)}),window.addEventListener("resize",()=>{this.handleWindowResize()}),document.addEventListener("visibilitychange",()=>{this.handleVisibilityChange()})}handleOptionsChange(t){this.app.components.wheelSpinner&&this.app.components.wheelSpinner.updateOptions(t),this.app.components.historyManager&&t.length>0&&this.app.components.historyManager.saveWheelConfiguration(t)}handleWheelWinner(t){var e;if(console.log(`Winner selected: ${t}`),this.app.components.historyManager){const n=((e=this.app.components.inputManager)==null?void 0:e.getOptions())||[];this.app.components.historyManager.saveSpinResult(n,t)}this.logWinnerToAnalytics(t)}handleSpinAgain(){this.app.components.wheelSpinner,this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}handleConfettiTrigger(t,e){console.log(`Confetti triggered for: ${t}`)}handleKeyboardShortcuts(t){if(!(t.target.tagName==="INPUT"||t.target.tagName==="TEXTAREA"))switch(t.key.toLowerCase()){case" ":case"enter":if(t.preventDefault(),this.app.components.wheelSpinner&&!this.app.components.wheelSpinner.isSpinning){const e=document.getElementById("spin-btn");e&&!e.disabled&&e.click()}break;case"escape":break;case"r":this.app.components.resultModal&&this.app.components.resultModal.isModalOpen()&&this.app.components.resultModal.spinAgain();break;case"h":this.app.components.historyManager&&this.app.components.historyManager.toggleHistoryPanel();break}}handleWindowResize(){this.app.components.wheelSpinner}handleVisibilityChange(){document.hidden&&this.app.components.confettiEffect&&this.app.components.confettiEffect.stop()}logWinnerToAnalytics(t){var n;const e={event:"wheel_spin_result",winner:t,timestamp:new Date().toISOString(),totalOptions:((n=this.app.components.inputManager)==null?void 0:n.getOptions().length)||0};console.log("Analytics:",e)}}class P{constructor(t){this.manager=t}initializeHistoryPanel(){const t=document.querySelector("header");if(t){const n=document.createElement("button");n.id="history-btn",n.className="glass-btn",n.innerHTML="📚 History",n.addEventListener("click",()=>this.manager.toggleHistoryPanel()),t.appendChild(n)}const e=document.createElement("div");e.id="history-panel",e.className="history-panel glass-card hidden",e.innerHTML=`
      <div class="history-header">
        <h3>Wheel History</h3>
        <button id="close-history" class="close-btn">✕</button>
      </div>
      <div class="history-content">
        <div id="history-list" class="history-list"></div>
        <button id="clear-history" class="glass-btn danger">Clear History</button>
      </div>
    `,document.getElementById("app").appendChild(e),document.getElementById("close-history").addEventListener("click",()=>this.manager.closeHistoryPanel()),document.getElementById("clear-history").addEventListener("click",()=>this.manager.clearHistory()),this.addHistoryStyles()}addHistoryStyles(){const t="history-panel-styles";if(document.getElementById(t))return;const e=document.createElement("style");e.id=t,e.textContent=`
      .history-panel {
        position: fixed;
        top: 10vh;
        right: -400px;
        width: 350px;
        height: 80vh;
        overflow-y: auto;
        z-index: 1001;
        box-sizing: border-box;
        margin: 0;
        padding: 1.5rem;
        border: none;
        outline: none;
      }
      
      .history-panel.open {
        right: 20px;
      }
      
      .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
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
      
      .history-list {
        max-height: 400px;
        overflow-y: auto;
        margin-bottom: 1rem;
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
        color: #4ecdc4;
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
          width: calc(100vw - 20px);
          right: -100vw;
          left: 10px;
          transform: translateY(-50%);
        }
        
        .history-panel.open {
          right: auto;
        }
      }
    `,document.head.appendChild(e)}updateHistoryDisplay(){const t=document.getElementById("history-list");if(!t)return;const e=this.manager.getHistory();if(e.length===0){t.innerHTML='<div class="history-empty">No history yet. Spin the wheel to create some!</div>';return}t.innerHTML=e.map(n=>this.createHistoryItemHTML(n)).join(""),t.querySelectorAll(".history-item").forEach((n,i)=>{n.addEventListener("click",()=>this.manager.loadHistoryItem(e[i]))})}createHistoryItemHTML(t){const e=new Date(t.timestamp).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),n=t.options.length>3?`${t.options.slice(0,3).join(", ")}... (+${t.options.length-3} more)`:t.options.join(", "),i=t.winner?`<div class="history-item-winner">🎉 Winner: ${t.winner}</div>`:"";return`
      <div class="history-item" data-id="${t.id}">
        <div class="history-item-date">${e}</div>
        <div class="history-item-options">${n}</div>
        ${i}
      </div>
    `}showLoadFeedback(){const t=document.createElement("div");t.className="toast toast-info",t.textContent="Wheel configuration loaded!",t.style.cssText=`
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
    `,document.body.appendChild(t),setTimeout(()=>document.body.removeChild(t),3e3)}}class R{constructor(t=null){this.languageManager=t,this.historyKey="wheelHistory",this.maxHistoryItems=50,this.isHistoryPanelOpen=!1,this.ui=new P(this),this.ui.initializeHistoryPanel(),this.loadHistory()}saveWheelConfiguration(t){const e=this.getHistory(),n={id:Date.now(),type:"configuration",timestamp:new Date().toISOString(),options:[...t],winner:null};e.some(s=>s.type==="configuration"&&JSON.stringify(s.options)===JSON.stringify(t)&&Date.now()-new Date(s.timestamp).getTime()<6e4)||(e.unshift(n),this.saveHistory(e))}saveSpinResult(t,e){const n=this.getHistory(),i={id:Date.now(),type:"result",timestamp:new Date().toISOString(),options:[...t],winner:e};n.unshift(i),this.saveHistory(n),this.ui.updateHistoryDisplay()}getHistory(){try{const t=localStorage.getItem(this.historyKey);return t?JSON.parse(t):[]}catch(t){return console.warn("Error loading history:",t),[]}}saveHistory(t){try{const e=t.slice(0,this.maxHistoryItems);localStorage.setItem(this.historyKey,JSON.stringify(e))}catch(e){console.warn("Error saving history:",e)}}loadHistory(){this.ui.updateHistoryDisplay()}loadHistoryItem(t){const e=window.DecisionWheelApp;e&&e.components.inputManager&&(e.components.inputManager.setOptions(t.options),this.ui.showLoadFeedback(),this.closeHistoryPanel())}toggleHistoryPanel(){document.getElementById("history-panel")&&(this.isHistoryPanelOpen?this.closeHistoryPanel():this.openHistoryPanel())}openHistoryPanel(){const t=document.getElementById("history-panel");t&&(t.classList.remove("hidden"),t.classList.add("open"),this.isHistoryPanelOpen=!0,this.ui.updateHistoryDisplay())}closeHistoryPanel(){const t=document.getElementById("history-panel");t&&(t.classList.remove("open"),setTimeout(()=>{t.classList.add("hidden")},300),this.isHistoryPanelOpen=!1)}clearHistory(){confirm("Are you sure you want to clear all history?")&&(localStorage.removeItem(this.historyKey),this.ui.updateHistoryDisplay())}}class ${constructor(){this.components={},this.isInitialized=!1,this.eventHandlers=new W(this),this.initializeApp()}async initializeApp(){try{document.readyState==="loading"&&await this.waitForDOMReady(),await this.initializeLanguageSystem(),this.initializeComponents(),this.eventHandlers.setupEventHandlers(),this.loadInitialOptions(),this.setupDefaultState(),this.isInitialized=!0,console.log("Decision Wheel App initialized successfully")}catch(t){console.error("Failed to initialize Decision Wheel App:",t),this.showInitializationError()}}waitForDOMReady(){return new Promise(t=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()})}async initializeLanguageSystem(){try{this.components.languageManager=new S,await this.components.languageManager.initialize(),this.components.seoManager=new I(this.components.languageManager),this.components.languageSelector=new M(this.components.languageManager),window.i18n=this.components.languageManager,console.log("Language system initialized successfully")}catch(t){throw console.error("Error initializing language system:",t),t}}initializeComponents(){try{this.components.inputManager=new H(this.components.languageManager),this.components.wheelSpinner=new A(this.components.languageManager),this.components.resultModal=new z(this.components.languageManager),this.components.confettiEffect=new F,this.components.historyManager=new R(this.components.languageManager),console.log("All components initialized")}catch(t){throw console.error("Error initializing components:",t),t}}loadInitialOptions(){this.components.inputManager&&this.components.inputManager.loadSavedOptions()}setupDefaultState(){}showInitializationError(){document.body.insertAdjacentHTML("beforeend",`
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
    `)}getStatus(){var t,e,n;return{initialized:this.isInitialized,components:Object.keys(this.components),optionsCount:((t=this.components.inputManager)==null?void 0:t.getOptions().length)||0,wheelSpinning:((e=this.components.wheelSpinner)==null?void 0:e.isSpinning)||!1,modalOpen:((n=this.components.resultModal)==null?void 0:n.isModalOpen())||!1}}cleanup(){this.components.confettiEffect&&this.components.confettiEffect.stop(),this.components.resultModal&&this.components.resultModal.forceClose(),this.components.languageSelector&&this.components.languageSelector.cleanup(),this.components.seoManager&&this.components.seoManager.cleanup(),window.i18n&&delete window.i18n,console.log("Application cleaned up")}}const b=new $;window.DecisionWheelApp=b;window.addEventListener("beforeunload",()=>{b.cleanup()});
