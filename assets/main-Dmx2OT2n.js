import{a as n}from"./style-qAVyp7um.js";const d=async()=>{const s=await(await fetch("/e-commerce/featured.json")).json();return s.forEach(t=>{const a=document.querySelector(".all-featured-products"),i=t.description,r=t.title.substring(0,60),c=i.substring(0,100);a.innerHTML+=`
    <div class="featured-product">
    <div><img src="${t.image}" alt=""></div>
    <div>
      <h4>${r} ....</h4>
    </div>
    <div>
      <p>${c} ...</p>
    </div>
    <div>
      <p class="featured-salePrice">$ ${t.salePrice}</p>
    </div>
    <div>
      <p><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><span class="review-star"> (${t.rating.rate})</span></p>
    </div>
    <div class="featured-btn"><button class="featured-cart-btn" data-id="${t.id}">Add to Cart</button></div>
  </div>
    `}),s};d().then(function(){const e=document.querySelectorAll(".featured-cart-btn");console.log(e),e.forEach(s=>{s.addEventListener("click",t=>{const a=t.target.dataset.id;console.log("clicked"),n(a,1)})})});
