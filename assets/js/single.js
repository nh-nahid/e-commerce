import "../style/style.css"
import "../style/single.css"
import { getAllProductsFromAPI } from "./utils";
import { showProductDetails } from "./shop/single-product/product-details";
import { quantityInit } from "./shop/single-product/quantity";
import { cartButtonInit } from "./shop/single-product/cart";
import { wishlistInit } from "./shop/single-product/wishlist";

const productID = Number(location.href.split("id=")[1]);

showProductDetails(productID).then(() => {
    quantityInit();
    cartButtonInit();
    wishlistInit();
})
