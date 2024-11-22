import"./style-XjoQjjOA.js";const p=document.querySelector(".right"),m=(i,t,c,r)=>` <div class="product-container">
              <div class="product-img"><img src="${i}" alt=""></div>
              <div class="product-title">${t}</div>
              <div class="product-rating">${c.rate}</div>
              <div class="product-price">
                <span><del>${r}</del></span>
                <span>80</span>
              </div>
            </div>`;async function n(i={}){const t=new Set,c=new Set,e=await(await fetch("https://fakestoreapi.com/products")).json();return p.innerHTML="",e.forEach(s=>{const a=window.filters??{},d=Object.keys(a),l={};if(d.length&&d.forEach(o=>{l[o]=s[o]===a[o]}),Object.values(l).every(o=>o===!0)){const{image:o,title:u,rating:f,price:g,category:v}=s,w=m(o,u,f,g);t.add(v),c.add(u),p.innerHTML+=w}}),[t,c]}function y(i){const t=document.querySelector("#categoryFilter");Array.from(i).forEach(r=>{const e=document.createElement("option");e.value=r,e.innerText=r,t.append(e)}),t.addEventListener("change",()=>{window.filters={...window.filters??{},category:t.value},n()})}function T(i){const t=document.querySelector("#titleFilter");Array.from(i).forEach(r=>{const e=document.createElement("option");e.value=r,e.innerText=r,t.append(e)}),t.addEventListener("change",()=>{window.filters={...window.filters??{},title:t.value},n()})}const[h,E]=await n();y(h);T(E);
