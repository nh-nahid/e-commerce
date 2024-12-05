
const hasProductWishList = (productId) => {
    const prevWishlistData = JSON.parse(localStorage.getItem('dom-commerce-wishlist-product')) ?? []
     return prevWishlistData.find(wishlistProductId => wishlistProductId === Number(productId)) !== undefined
}


const disableWishlistButton = (wishlistEl) => {
    wishlistEl.innerText = "Already Added";
    wishlistEl.setAttribute('disabled', '');
}


const addProductToWishList = (productId, wishlistEl) => {
    const prevWishlistData = JSON.parse(localStorage.getItem('dom-commerce-wishlist-product')) ?? []
        prevWishlistData.push(Number(productId))
    localStorage.setItem('dom-commerce-wishlist-product', JSON.stringify(prevWishlistData))
    disableWishlistButton(wishlistEl)
}




export const wishlistInit = () =>{
    const wishlistEl = document.querySelector('#wishlist');
    const productId = wishlistEl.dataset.productId;
    if(hasProductWishList(productId)){
       disableWishlistButton(wishlistEl)
        return;
    }
    wishlistEl.addEventListener('click', () => addProductToWishList(productId, wishlistEl))
}