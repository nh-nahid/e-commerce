const addProductToCart = (productId, productQuantity) => {
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
}
 

export const cartButtonInit = () => {
    const addToCartEl = document.querySelector('#add-to-cart');
    const productId = addToCartEl.dataset.productId;
    addToCartEl.addEventListener('click', () => {
        const quantity = document.querySelector('#quantity').value;
        addProductToCart(productId,quantity)
    }
        
)}

cartButtonInit()