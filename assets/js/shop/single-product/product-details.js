import { getAllProductsFromAPI } from "../../utils";

export const showProductDetails = async (productID) =>{
   const products = await getAllProductsFromAPI()
    
        const product = products.find(product => product.id === productID);
    
        const image1 = document.querySelector('.product-image');
        const title1 = document.querySelector('.product-title');
        const rating1 = document.querySelector('.product-rating');
        const salePrice1 = document.querySelector('.sale-price');
        const regularPrice1 = document.querySelector('.regular-price');
        const totalPrice1 = document.querySelector('.total-price');
        const description = document.querySelector('.product-description');
        const addToCartEl = document.querySelector('#add-to-cart');
        const wishlistEl = document.querySelector('#wishlist');
        const quantityInputEl = document.querySelector('#quantity');


        image1.src = product.image;
        title1.innerText = product.title;
        rating1.innerText = product.rating.count + ` Ratings`;
        salePrice1.innerText = product.salePrice;
        regularPrice1.innerText = product.price;
        totalPrice1.innerText = (product.salePrice)
        description.innerText = product.description;
        addToCartEl.dataset.productID = product.id;
        wishlistEl.dataset.productID = product.id
    
    }
