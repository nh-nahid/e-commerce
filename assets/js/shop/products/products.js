import { isInRange } from "../../utils";

const productContainer = document.querySelector('.right')

/**
 * create HTML of product structure 
 * 
 * @returns {string} HTML of product structure
 */


const createProduct = ( image, title, rating, price) => {

    return/*html*/ ` <div class="product-container">
              <div class="product-img"><img src="${image}" alt=""></div>
              <div class="product-title">${title}</div>
              <div class="product-rating">${rating.rate}</div>
              <div class="product-price">
                <span><del>${price}</del></span>
                <span>80</span>
              </div>
            </div>`
}

const paginationTemplate = (numberOfPage, activePageNumber = 1) => {
        const ul = document.createElement('ul');
      ul.classList.add('product-pagination');

    for(let i = 1; i <= numberOfPage; i++){
      const li = document.createElement('li');
      li.classList.add('pagination-item');

      if(i === activePageNumber){
        li.classList.add('active')
      }
      const a = document.createElement('a');
      a.classList.add('pagination-item-link');
      a.href = "#";
      li.addEventListener('click', function(e){
        e.preventDefault();

        showAllProducts(Number(a.dataset.pageNumber));
        scrollTo(0, 0)
        a.parentElement.classList.add('active')
        
      })
      a.dataset.pageNumber = i
      a.innerText = i 
      li.append(a);
      ul.append(li)
    }
    document.querySelector('.right').append(ul)
} 

export async function showAllProducts(paged = 1){
    const productsPerPage = 20;
    productContainer.innerHTML = ""
  
  for(let i = 1; i <= productsPerPage; i++){

    productContainer.innerHTML +=    /*html*/ `<div class = "product-container">

    <div class="loading-img"></div>
    <div class="loading-title"></div>
    <div class="loading-rating"></div>
    <div class="loading-price">
      <span><del></del></span>
      <span></span>
    </div>
    </div>`
    
  }
   const productCategories = new Set();
   const productCountries = new Set();

    const productsResponse = await fetch('../products.json')
    
    const productData = await productsResponse.json()

  // pagination page calculation
  const totalPageNumber = Math.ceil(productData.length / productsPerPage);

  if(paged > totalPageNumber){
    paged = 1;
  }
  
  const productStartNumber = (productsPerPage * paged) - productsPerPage;
  const productEndNumber = (productsPerPage * paged)

    productData.slice(productStartNumber, productEndNumber).forEach((props, i) => {
        let filters = window.filters ?? {}
      const filtersKeys = Object.keys(filters)
      const filterPass = {};

      // delete empty key value

    Object.keys(filters).forEach(key => {
      if(filters[key] === ""){
        delete filters[key]
      }
    })
      if(filtersKeys.length){
        filtersKeys.forEach(key =>{
          if(key === "search"){
            filterPass[key] = props.title.toLowerCase().includes(filters[key].toLowerCase())
          } else if(key === "price-range"){
            filterPass[key] = isInRange(props["price"], filters[key][0], filters[key][1]);
          } else {
            filterPass[key] = props[key] === filters[key]
          }
         
        })
      } 

      if(Object.values(filterPass).every(el => el === true)){
        const {image: image, title: title, rating: rating, price: price, category: productCategory, country: country} = props;

        const productHTML = createProduct(image, title, rating, price, country);

        if(i === 0){
          productContainer.innerHTML = ""

        }
// add for filters data
       productCategories.add(productCategory);
       productCountries.add(country);


          productContainer.innerHTML += productHTML;
      }
    
    })
    // insert pagination to DOM
    paginationTemplate(totalPageNumber, paged)

return [productCategories, productCountries]
}