import { getTotalCartData} from "../../utils";
import { offCanvasCart } from "../off-canvas/off-canvas";

const addProductToCart = async (productId, productQuantity) => {

    const prevCartData = JSON.parse(localStorage.getItem('dom-commerce-cart-product')) ?? []
  
    const existingProduct = prevCartData.find(cartData => cartData.productId === productId);
    if(existingProduct !== undefined){
      existingProduct.productQuantity = productQuantity;
    }else{
        prevCartData.push({
            productId,
            productQuantity,
        })
    } 
    
    localStorage.setItem('dom-commerce-cart-product', JSON.stringify(prevCartData))

    // price meter
    const priceMeterPrice = document.querySelector('.priceMeterSubtotal');
    const priceMeterItem = document.querySelector('.priceMeterItemNumber');
  
    const cartData  = await getTotalCartData()
    priceMeterPrice.innerHTML = cartData.totalPrice

    priceMeterItem.innerText = cartData.totalCartItem

}

 
export const removeCartItem = (productId) => {
    const prevCartData = JSON.parse(localStorage.getItem('dom-commerce-cart-product')) ?? [];
    const searchProductIndex = prevCartData.findIndex(cartData => Number(cartData.productId) === Number(productId))
    if(searchProductIndex !== -1){
        prevCartData.splice(searchProductIndex, 1);
        localStorage.setItem('dom-commerce-cart-product',JSON.stringify(prevCartData))
        return true;
    }else{
        return false;
    }
}

// const addCartMsg = () => {
//     const addToCartMsg = document.querySelector('.add-to-cart-msg');

//     addToCartMsg.classList.add('.add-cart-msg-success');
//     setTimeout(() => {
//         addToCartMsg.classList.remove('.add-cart-msg-success');
//       }, 1500)
//   }


export const cartButtonInit = () => {    
    const addToCartEl = document.querySelector('#cart');
    const productId = addToCartEl.dataset.productId;
    addToCartEl.addEventListener('click', () => {
                
        const quantity = document.querySelector('#quantity').value;
        addProductToCart(productId,quantity).then(() => {
            offCanvasCart()
            // addCartMsg()
        })
    }
        
)}

export const refreshOdometer = () => {
    const priceMeterPrice = document.querySelector('.priceMeterSubtotal');
    const priceMeterItem = document.querySelector('.priceMeterItemNumber');
    getTotalCartData().then(cartData => {
        priceMeterPrice.innerHTML = cartData.totalPrice
        priceMeterItem.innerText = cartData.totalCartItem
    })
}

export const updateCartProductQuantity = (productId, quantity) => {
    const cartData = JSON.parse(localStorage.getItem('dom-commerce-cart-product')) 
    const productIndex = cartData.findIndex((cartProduct) => Number(cartProduct.productId) === Number(productId));
    cartData[productIndex].productQuantity = quantity;
    localStorage.setItem('dom-commerce-cart-product', JSON.stringify(cartData));
    
    // update odometer
    try{
        refreshOdometer()
    } catch(error){
        console.log(error)
    }
}