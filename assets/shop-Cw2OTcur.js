import"./style-BwD88q_8.js";const u=document.querySelector(".right"),T=(e,o,n,t)=>` <div class="product-container">
              <div class="product-img"><img src="${e}" alt=""></div>
              <div class="product-title">${o}</div>
              <div class="product-rating">${n.rate}</div>
              <div class="product-price">
                <span><del>${t}</del></span>
                <span>80</span>
              </div>
            </div>`,S=(e,o=1)=>{const n=document.createElement("ul");n.classList.add("product-pagination");for(let t=1;t<=e;t++){const c=document.createElement("li");c.classList.add("pagination-item"),t===o&&c.classList.add("active");const i=document.createElement("a");i.classList.add("pagination-item-link"),i.href="#",c.addEventListener("click",function(l){l.preventDefault(),d(Number(i.dataset.pageNumber)),scrollTo(0,0),i.parentElement.classList.add("active")}),i.dataset.pageNumber=t,i.innerText=t,c.append(i),n.append(c)}document.querySelector(".right").append(n)};async function d(e=1){u.innerHTML="";for(let a=1;a<=20;a++)u.innerHTML+=`<div class = "product-container">

    <div class="loading-img"></div>
    <div class="loading-title"></div>
    <div class="loading-rating"></div>
    <div class="loading-price">
      <span><del></del></span>
      <span></span>
    </div>
    </div>`;const n=new Set,t=new Set,i=await(await fetch("../products.json")).json(),l=Math.ceil(i.length/20);e>l&&(e=1);const v=20*e-20,m=20*e;return i.slice(v,m).forEach((a,h)=>{let s=window.filters??{};const f=Object.keys(s),p={};if(Object.keys(s).forEach(r=>{s[r]===""&&delete s[r]}),f.length&&f.forEach(r=>{r!=="search"?p[r]=a[r]===s[r]:p[r]=a.title.toLowerCase().includes(s[r].toLowerCase())}),Object.values(p).every(r=>r===!0)){const{image:r,title:w,rating:y,price:E,category:L,country:P}=a,C=T(r,w,y,E);h===0&&(u.innerHTML=""),n.add(L),t.add(P),u.innerHTML+=C}}),S(l,e),[n,t]}function b(e){const o=document.querySelector("#categoryFilter");Array.from(e).forEach(t=>{const c=document.createElement("option");c.value=t,c.innerText=t,o.append(c)}),o.addEventListener("change",()=>{window.filters={...window.filters??{},category:o.value},d()})}const g=document.querySelector("#countryFilte");function F(e){Array.from(e).forEach(n=>{const t=document.createElement("option");t.value=n,t.innerText=n,g.append(t)}),g.addEventListener("change",()=>{window.filters={...window.filters??{},country:g.value},d()})}function A(){const e=document.querySelector("#searchFilter");e.addEventListener("submit",o=>{o.preventDefault(),window.filters={...window.filters??{},search:e.search.value},d()})}const[O,M]=await d();b(O);F(M);A();
