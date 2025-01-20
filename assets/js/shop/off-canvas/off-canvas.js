import { getAllCartIds, getProductDetails, getProductPrice, getTotalCartData, html } from "../../utils";
import { removeCartItem, updateCartProductQuantity } from "../single-product/cart";



export const viewOffCanvasCart = () => {
  const offCanvasContainer = document.querySelector(".off-canvas");
  const offCanvasOverlay = document.querySelector(".off-canvas-overlay");

  offCanvasContainer.classList.add("show-off-canvas");
  offCanvasOverlay.classList.add("show-off-canvas-overlay");

};

export const closeOffCanvasCart = () => {
  const offCanvasContainer = document.querySelector(".off-canvas");
  const offCanvasOverlay = document.querySelector(".off-canvas-overlay");

  offCanvasContainer.classList.remove("show-off-canvas");
  offCanvasOverlay.classList.remove("show-off-canvas-overlay");

  const closeBtnOffCanvas = document.querySelector('.close-icon')
  closeBtnOffCanvas.addEventListener('click',function(e){
    e.preventDefault()
  offCanvasOverlay.classList.remove("show-off-canvas-overlay");
  offCanvasContainer.classList.remove("show-off-canvas");

});
}

export const offCanvasOverlayInit = () => {

  document.querySelector('.off-canvas-overlay').addEventListener("click", function (e) {
    e.preventDefault();
    closeOffCanvasCart()
  });
  
}


export function offCanvasCartProducts({
    imageLink,productTilte,productCategory,productPrice,productId,quantity
}) {
  const offCanvasContainer = document.querySelector(".cart-product-container");
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
            value="${quantity}"
            type="number"
            class="off-cart-quantity"
          />
          <button data-product-id="${productId}" class="off-canvas-btn increase">+</button>
        </div>
      </div>
      <div data-product-id="${productId}" class="off-canvas-cart-remove"><i class="fa-solid fa-trash"></i></div>
    </div>
    <hr class="off-canvas-horizontal-line">
  `;

  // insert off canvas cart footer
    offCanvasCartFooter()
}

const offCanvasCartFooter = async () => {

  // cart footer
  const cartTotalPrice = (await getTotalCartData()).totalPrice;
  const tax = 20;
  const shippingCost = 50;

  const offCanvasFooter = document.querySelector('.cart-footer')
  offCanvasFooter.innerHTML = html`
  <div><h4>SubTotal: $ ${cartTotalPrice.toFixed(2)}</h4></div>
  <div><h4>Tax: $ ${tax.toFixed(2)}</h4></div>
  <div><h4>Shipping Cost: $ ${shippingCost.toFixed(2)}</h4></div>
  <hr>
  <div><h4>Total: $ ${(cartTotalPrice + tax + shippingCost).toFixed(2)}</h4></div>
  <div><a href="../../../pages/checkout.html">Checkout</a></div>
`
}

export const offCanvasCart = () => {



const cartIds = getAllCartIds();
const cartProductsData = cartIds.map((id) => {
 return new Promise((resolve) =>{
    getProductDetails(id).then((details) => {
      const productQuantity = JSON.parse(localStorage.getItem('dom-commerce-cart-product')).find(cartData => Number(cartData.productId) === Number(id)).productQuantity
        resolve({
            quantity: Number(productQuantity),
            imageLink: details.image,
            productCategory: details.category,
            productTilte: details.title,
            productPrice: `$ `+ getProductPrice(details.price, details.salePrice),
            productId: details.id
          })
      });
 })
});

Promise.all(cartProductsData).then(allCartData => {
  const offCanvasContainer = document.querySelector(".cart-product-container");

offCanvasContainer.innerHTML = "";
    allCartData.forEach(productData =>{
     
        offCanvasCartProducts(productData)
    })
}).finally(() =>{
    
  const increaseButtons = document.querySelectorAll('.off-canvas-btn.increase')
  const decreaseButtons = document.querySelectorAll('.off-canvas-btn.decrease')
  const removeButtons = document.querySelectorAll('.off-canvas-cart-remove')

  increaseButtons.forEach(increaseBtn => {
    increaseBtn.addEventListener('click', function(){
        const quantityInput = document.querySelector('.off-cart-quantity');
        quantityInput.value = parseInt(quantityInput.value) + 1;
        updateCartProductQuantity(increaseBtn.dataset.productId,quantityInput.value)

        // refresh off canvas footer
       offCanvasCartFooter()

    })
  })

  decreaseButtons.forEach(decreaseBtn => {
    decreaseBtn.addEventListener('click', function(){
        const quantityInput = document.querySelector('.off-cart-quantity');
        if((quantityInput.value) > 1){
          quantityInput.value = parseInt(quantityInput.value) - 1;
        updateCartProductQuantity(decreaseBtn.dataset.productId,quantityInput.value)
  
        // refresh off canvas footer
        offCanvasCartFooter()
        }
    })
  })

  removeButtons.forEach(removeBtn => {
    removeBtn.addEventListener('click', function(){
        removeCartItem(removeBtn.dataset.productId);
         offCanvasCart()
    })
  })
})
}
