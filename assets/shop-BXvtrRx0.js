import"./style-XjoQjjOA.js";const d=document.querySelector(".right"),p=(o,e,c,t,r,a)=>(o.add(a),` <div class="product-container">
              <div class="product-img"><img src="${e}" alt=""></div>
              <div class="product-title">${c}</div>
              <div class="product-rating">${t}</div>
              <div class="product-price">
                <span><del>${r}</del></span>
                <span>80</span>
              </div>
            </div>`);async function u(){const o=new Set;return(await(await fetch("https://fakestoreapi.com/products")).json()).forEach(({image:t,title:r,rating:a,price:n,category:s})=>{const i=p(o,t,r,a,n,s);d.innerHTML+=i}),[o]}function l(o){const e=document.querySelector("#categoryFilter");Array.from(o).forEach(c=>{const t=document.createElement("option");t.value=c,t.innerText=c,e.append(t)})}const[g]=await u();l(g);
