import "../style/style.css";
import "../style/shop.css";
import { showAllProducts } from "./shop/products/products";
import { addOptionsToCategoryFilter } from "./shop/filter/categories";
import { addOptionsToTitleFilter } from "./shop/filter/title";


const [productCategories, productTitles] = await showAllProducts()
 addOptionsToCategoryFilter(productCategories);
 addOptionsToTitleFilter(productTitles)

