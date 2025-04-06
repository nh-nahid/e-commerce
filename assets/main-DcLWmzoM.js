import{a as d}from"./style-qAVyp7um.js";const o=async()=>{const s=await(await fetch("/e-commerce/featured.json")).json();return s.forEach(t=>{const e=document.querySelector(".all-featured-products");t.id;const i=t.image,r=t.description,c=t.title.substring(0,60),n=r.substring(0,100);e.innerHTML+=`
    <div class="featured-product">
    <div><img src="${i}" alt=""></div>
    <div>
      <h4>${c} ....</h4>
    </div>
    <div>
      <p>${n} ...</p>
    </div>
    <div>
      <p class="featured-salePrice">$ ${t.salePrice}</p>
    </div>
    <div>
      <p><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><span class="review-star"> (${t.rating.rate})</span></p>
    </div>
    <div class="featured-btn"><button class="featured-cart-btn" data-id="${t.id}">Add to Cart</button></div>
  </div>
    `}),s};o().then(function(){document.querySelectorAll(".featured-cart-btn").forEach(s=>{s.addEventListener("click",t=>{const e=t.target.dataset.id;console.log(e),d(e,1)})})});
