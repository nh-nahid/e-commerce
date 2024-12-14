import { getProductDetails, getProductPrice, getTotalCartData, isUserLoggedIn, viewOffCanvasCart } from "./utils.js"
import Odometer from "odometer";
import 'odometer/themes/odometer-theme-default.css'

const logInMenuItem = document.querySelector('#login-item')


if(isUserLoggedIn()){
    logInMenuItem.style.display = 'none'
}

const cartBtn = document.querySelector('.view-cart');


cartBtn.addEventListener('click', function(e){
    e.preventDefault();
    viewOffCanvasCart()
    
});



getTotalCartData().then(cartData => {

    
const priceMeter = document.createElement('div');

priceMeter.innerHTML = /*html*/ `
            <div class="priceMeter">
                <div>Item : <span class="priceMeterItemNumber">${cartData.totalCartItem}</span></div>
                <div>$<span class="priceMeterSubtotal">${cartData.totalPrice}</span></div>
            </div>
`
document.querySelector("body").append(priceMeter);
const priceMeterContainer = document.querySelector('.priceMeter');

priceMeterContainer.addEventListener('click', () => {
    viewOffCanvasCart()
})


  new Odometer({
     el: document.querySelector('.priceMeterSubtotal'),   
     // Any option (other than auto and selector) can be passed in here
     value: cartData.totalPrice,
     format: '(,ddd).dd',
     theme: 'default'
   });
})



// odometer element
