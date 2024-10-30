import "../style/style.css";
import "../style/shop.css";
import { showAllProducts } from "./shop/products/products";
import { addOptionsToCategoryFilter } from "./shop/filter/categories";


const [productCategories] = await showAllProducts()
 addOptionsToCategoryFilter(productCategories)
