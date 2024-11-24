import"./style-CdkV8UZ4.js";const l=document.querySelector(".right"),y=(e,r,c,o)=>` <div class="product-container">
              <div class="product-img"><img src="${e}" alt=""></div>
              <div class="product-title">${r}</div>
              <div class="product-rating">${c.rate}</div>
              <div class="product-price">
                <span><del>${o}</del></span>
                <span>80</span>
              </div>
            </div>`;async function s(){const e=new Set,r=new Set,o=await(await fetch("../products.json")).json();return l.innerHTML="",o.forEach(n=>{let i=window.filters??{};const u=Object.keys(i),a={};if(Object.keys(i).forEach(t=>{i[t]===""&&delete i[t]}),u.length&&u.forEach(t=>{t!=="search"?a[t]=n[t]===i[t]:a[t]=n.title.toLowerCase().includes(i[t].toLowerCase())}),Object.values(a).every(t=>t===!0)){const{image:t,title:p,rating:f,price:w,category:g,country:v}=n,h=y(t,p,f,w);e.add(g),r.add(v),l.innerHTML+=h}}),[e,r]}function m(e){const r=document.querySelector("#categoryFilter");Array.from(e).forEach(o=>{const n=document.createElement("option");n.value=o,n.innerText=o,r.append(n)}),r.addEventListener("change",()=>{window.filters={...window.filters??{},category:r.value},s()})}const d=document.querySelector("#countryFilte");function C(e){Array.from(e).forEach(c=>{const o=document.createElement("option");o.value=c,o.innerText=c,d.append(o)}),d.addEventListener("change",()=>{window.filters={...window.filters??{},country:d.value},s()})}function E(){const e=document.querySelector("#searchFilter");e.addEventListener("submit",r=>{r.preventDefault(),window.filters={...window.filters??{},search:e.search.value},s()})}const[F,S]=await s();m(F);C(S);E();
