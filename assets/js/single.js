import "../style/style.css"
import "../style/single.css"
import { getAllProductsFromAPI } from "./utils";

const productID = Number(location.href.split("id=")[1]);

getAllProductsFromAPI().then(products => {
    const product = products.find(product => product.id === productID);
    const image1 = document.querySelector('.product-image');
    image1.src = product.image1
})