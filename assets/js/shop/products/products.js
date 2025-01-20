import { getAllProductsFromAPI, isInRange } from "../../utils";

const productContainer = document.querySelector(".right");

/**
 * create HTML of product structure
 *
 * @returns {string} HTML of product structure
 */

const createProduct = (productID, image, title, rating, price, salePrice) => {
  return /*html*/ ` <div class="product-container">
              <a class="product-link" href="single.html?id=${+productID}"><div class="product-img"><img src="${image}" alt=""></div></a>
             <a class="product-link" href="single.html?id=${+productID}"> <div class="product-title">${title}</div></a>
              <div class="product-rating">${rating.rate}</div>
              <div class="product-price">
                <span><del>$ ${price}</del></span>
                <span>$ ${salePrice}</span>
              </div>
            </div>`;
};

const paginationTemplate = (numberOfPage, activePageNumber = 1) => {
  const ul = document.createElement("ul");
  ul.classList.add("product-pagination");

  for (let i = 1; i <= numberOfPage; i++) {
    const li = document.createElement("li");
    li.classList.add("pagination-item");

    if (i === activePageNumber) {
      li.classList.add("active");
    }
    const a = document.createElement("a");
    a.classList.add("pagination-item-link");
    a.href = "#";
    li.addEventListener("click", function (e) {
      e.preventDefault();

      showAllProducts(Number(a.dataset.pageNumber));
      scrollTo(0, 0);
      a.parentElement.classList.add("active");
    });
    a.dataset.pageNumber = i;
    a.innerText = i;
    li.append(a);
    ul.append(li);
  }
  document.querySelector(".right").append(ul);
};

const getFilterData = async () => {
  const productData = await getAllProductsFromAPI();

  const filteredProducts = [];

  productData.forEach((props) => {
    let filters = window.filters ?? {};
    const filtersKeys = Object.keys(filters);
    const filterPass = {};

    // delete empty key value

    Object.keys(filters).forEach((key) => {
      if (filters[key] === "") {
        delete filters[key];
      }
    });
    if (filtersKeys.length) {
      filtersKeys.forEach((key) => {
        if (key === "search") {
          filterPass[key] = props.title
            .toLowerCase()
            .includes(filters[key].toLowerCase());
        } else if (key === "price-range") {
          filterPass[key] = isInRange(
            props["price"],
            filters[key][0],
            filters[key][1]
          );
        } else {
          filterPass[key] = props[key] === filters[key];
        }
      });
    }
    if (Object.values(filterPass).every((value) => value === true)) {
      filteredProducts.push(props);
    }
  });
  return filteredProducts;
};

export async function showAllProducts(paged = 1) {
  const productsPerPage = 20;
  productContainer.innerHTML = "";

  for (let i = 1; i <= productsPerPage; i++) {
    productContainer.innerHTML += /*html*/ `<div class = "product-container">

    <div class="loading-img"></div>
    <div class="loading-title"></div>
    <div class="loading-rating"></div>
    <div class="loading-price">
      <span><del></del></span>
      <span></span>
    </div>
    </div>`;
  }
  const productCategories = new Set();
  const productCountries = new Set();
  const productData = await getFilterData();

  // pagination page calculation
  const totalPageNumber = Math.ceil(productData.length / productsPerPage);

  if (paged > totalPageNumber) {
    paged = 1;
  }

  const productStartNumber = productsPerPage * paged - productsPerPage;
  const productEndNumber = productsPerPage * paged;

  productContainer.innerHTML = "";

  const currentPageProducts = productData.slice(
    productStartNumber,
    productEndNumber
  );

  if (currentPageProducts.length === 0) {
    productContainer.innerHTML = `<h3 class="not-found-msg">No Products Found...</h3>`;
  }

  currentPageProducts.forEach((props) => {
    const {
      id,
      image: image,
      title: title,
      rating: rating,
      price: price,
      salePrice: salePrice,
      category: productCategory,
      country: country,
    } = props;

    const productHTML = createProduct(
      id,
      image,
      title,
      rating,
      price,
      salePrice,
      country
    );

    // add for filters data
    productCategories.add(productCategory);
    productCountries.add(country);

    productContainer.innerHTML += productHTML;
  });
  // insert pagination to DOM
  paginationTemplate(totalPageNumber, paged);

  return [productCategories, productCountries];
}
