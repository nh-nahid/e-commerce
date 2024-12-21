import { getAllProductsFromAPI, getTotalCartData} from "../../utils";
import { offCanvasCartProducts } from "../off-canvas/off-canvas";

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


export const cartButtonInit = () => {    
    const addToCartEl = document.querySelector('#cart');
    const productId = addToCartEl.dataset.productId;
    addToCartEl.addEventListener('click', () => {
        const quantity = document.querySelector('#quantity').value;
        addProductToCart(productId,quantity).then(() => {
        })
    }
        
)}
