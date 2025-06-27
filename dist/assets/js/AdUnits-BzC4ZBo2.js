class a{constructor(e,s={}){this.placement=e,this.config={size:{width:300,height:250},adUnitId:"ca-pub-7898475614767076/1940254660",responsive:!0,lazy:!0,...s},this.element=null,this.loaded=!1,this.visible=!1}createElement(){const e=document.createElement("div");e.className=`ad-container ad-${this.placement}`,e.id=`ad-${this.placement}`;const s=document.createElement("div");s.className="ad-label",s.textContent="Advertisement",e.appendChild(s);const t=document.createElement("ins");return t.className="adsbygoogle",t.style.display="block",t.setAttribute("data-ad-client","ca-pub-7898475614767076"),t.setAttribute("data-ad-slot","1940254660"),this.config.responsive?(t.setAttribute("data-ad-format","auto"),t.setAttribute("data-full-width-responsive","true")):(t.style.width=`${this.config.size.width}px`,t.style.height=`${this.config.size.height}px`),e.appendChild(t),this.element=e,e}load(){if(!(this.loaded||!this.element))try{this.element.classList.add("loading"),window.adsbygoogle&&((window.adsbygoogle=window.adsbygoogle||[]).push({}),this.loaded=!0,setTimeout(()=>{var e;(e=this.element)==null||e.classList.remove("loading")},2e3))}catch(e){console.error(`Failed to load ad unit ${this.placement}:`,e),this.showFallback()}}showFallback(){if(!this.element)return;const e=document.createElement("div");e.className="ad-fallback",e.innerHTML=`
      <p>Advertisement Space</p>
    `;const s=this.element.querySelector(".adsbygoogle");s&&s.parentNode.replaceChild(e,s)}setupLazyLoading(){if(!this.config.lazy||!this.element)return;const e=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&!this.loaded&&(this.load(),this.visible=!0,e.unobserve(t.target))})},{threshold:.1,rootMargin:"50px"});e.observe(this.element)}destroy(){this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.loaded=!1,this.visible=!1}}class n extends a{constructor(e={}){super("modal",{size:{width:300,height:250},responsive:!0,frequency:3,...e}),this.spinCount=0}shouldShow(){return this.spinCount++,this.spinCount%this.config.frequency===0}createElement(){const e=super.createElement(),s=document.createElement("div");s.className="modal-overlay ad-modal-overlay",s.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--z-modal);
    `;const t=document.createElement("button");return t.className="glass-btn",t.textContent="✕",t.style.cssText=`
      position: absolute;
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    `,t.addEventListener("click",()=>{this.hide()}),e.appendChild(t),s.appendChild(e),this.overlay=s,s}show(){!this.shouldShow()||!this.overlay||(document.body.appendChild(this.overlay),this.load(),setTimeout(()=>{this.hide()},1e4))}hide(){this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)}}export{a as BaseAdUnit,n as ModalAdUnit};
