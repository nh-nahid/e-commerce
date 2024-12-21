import { getAllCartIds, getProductDetails, getProductPrice, html } from "../../utils";

export function offCanvasCartProducts({
    imageLink,productTilte,productCategory,productPrice,productId
}) {
  const offCanvasContainer = document.querySelector("#cart-off-canvas");

  offCanvasContainer.innerHTML += html`
    <div class="cart-product">
      <div>
        <img
          src="${imageLink}"
          alt=""
        />
      </div>

      <div class="cart-product-details">
        <div>
          <h4>
            ${productTilte}
          </h4>
        </div>
        <h5>${productCategory}</h5>
        <h5>${productPrice}</h5>
        <div class="off-cart-btn">
          <button data-product-id="${productId}" class="off-canvas-btn decrease">-</button>
          <input
            min="1"
            max="10"
            value="1"
            type="number"
            class="off-cart-quantity"
          />
          <button data-product-id="${productId}" class="off-canvas-btn increase">+</button>
        </div>
      </div>
      <div data-product-id="${productId}" class="off-canvas-cart-remove"><i class="fa-solid fa-trash"></i></div>
    </div>

  `;
  
}


const cartIds = getAllCartIds();
const cartProductsData = cartIds.map((id) => {
 return new Promise((resolve) =>{
    getProductDetails(id).then((details) => {
        resolve({
            imageLink: details.image,
            productCategory: details.category,
            productTilte: details.title,
            productPrice: `$` + getProductPrice(100, 50),
            productId: details.id
          })
      });
 })
});

Promise.all(cartProductsData).then(allCartData => {
    allCartData.forEach(productData =>{
        offCanvasCartProducts(productData)
    })
}).finally(() =>{
    
  const increaseButtons = document.querySelectorAll('.off-canvas-btn.increase')
  const decreaseButtons = document.querySelectorAll('.off-canvas-btn.decrease')
  const removeButtons = document.querySelectorAll('.off-canvas-cart-remove')

  increaseButtons.forEach(increaseBtn => {
    increaseBtn.addEventListener('click', function(){
        console.log(increaseBtn.dataset.productId);
        
    })
  })

  decreaseButtons.forEach(decreaseBtn => {
    decreaseBtn.addEventListener('click', function(){
        console.log(decreaseBtn.dataset.productId);
        
    })
  })

  removeButtons.forEach(removeBtn => {
    removeBtn.addEventListener('click', function(){
        console.log(removeBtn.dataset.productId);
        
    })
  })
})