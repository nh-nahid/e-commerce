import "../style/style.css";
import "../style/home.css";
import { addProductToCart } from "./shop/single-product/cart";


 const fetchFeaturedProducts = async () => {
  const response = await fetch("/e-commerce/featured.json");
  const data = await response.json();
  data.forEach((product) => {

    const featuredProductContainer = document.querySelector(".all-featured-products");
    const tempDescription = product.description;
    const tempTitle = product.title;
    const resultTitle = tempTitle.substring(0, 60);
    const resultDescription = tempDescription.substring(0, 100);
    
    /*html*/
    featuredProductContainer.innerHTML += `
    <div class="featured-product">
    <div><img src="${product.image}" alt=""></div>
    <div>
      <h4>${resultTitle} ....</h4>
    </div>
    <div>
      <p>${resultDescription} ...</p>
    </div>
    <div>
      <p class="featured-salePrice">$ ${product.salePrice}</p>
    </div>
    <div>
      <p><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><i class='bx bxs-star'></i><span class="review-star"> (${product.rating.rate})</span></p>
    </div>
    <div class="featured-btn"><button class="featured-cart-btn" data-id="${product.id}">Add to Cart</button></div>
  </div>
    `;

  });


  return data;
}
fetchFeaturedProducts().then(function(){
  const allcartbtn = document.querySelectorAll(".featured-cart-btn")
  console.log(allcartbtn)
  allcartbtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const productId = e.target.dataset.id;
      console.log("clicked")
      addProductToCart(productId, 1)
    })
  })
})

