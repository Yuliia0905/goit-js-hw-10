import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as h}from"./assets/vendor-77e16229.js";const f="/goit-js-hw-10/assets/error-d4e007c6.svg",t=document.querySelector("[data-start]"),r=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),v=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let c,a;t.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a>new Date?(t.disabled=!1,t.classList.add("is-active")):(t.disabled=!0,h.error({position:"topRight",theme:"dark",messageColor:"white",iconUrl:f,color:"#ef4040",message:"Please choose a date in the future"}))}};m(r,S);t.addEventListener("click",()=>{c=setInterval(()=>{const e=Date.now(),s=a-e,o=g(s);t.disabled=!0,r.disabled=!0,r.classList.add("active"),t.classList.remove("is-active"),y.textContent=n(o.days),v.textContent=n(o.hours),b.textContent=n(o.minutes),p.textContent=n(o.seconds),s<0&&(clearInterval(c),r.disabled=!1,t.disabled=!1,t.classList.remove("is-active"))},1e3)});function n(e){return String(e).padStart(2,"0")}function g(e){const i=Math.floor(e/864e5),d=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:d,minutes:u,seconds:l}}const x=document.querySelector("body"),L=`<section>
      <a href="./index.html" class="nav-link-timer">Go to home</a>
    </section>`;x.insertAdjacentHTML("afterbegin",L);
//# sourceMappingURL=commonHelpers.js.map
