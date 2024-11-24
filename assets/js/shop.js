import "../style/style.css";
import "../style/shop.css";
import { showAllProducts } from "./shop/products/products";
import { addOptionsToCategoryFilter } from "./shop/filter/categories";
import { addOptionsToCountryFilter } from "./shop/filter/country";
import { handleSearchFilter } from "./shop/filter/search";


const [productCategories, productCountries] = await showAllProducts()
 addOptionsToCategoryFilter(productCategories);
 addOptionsToCountryFilter(productCountries)
 handleSearchFilter()
