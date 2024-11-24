
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


export async function showAllProducts(){

   const productCategories = new Set();
   const productCountries = new Set();

    const productsResponse = await fetch('../products.json')
    
    const productData = await productsResponse.json()
  productContainer.innerHTML = ""

    productData.forEach((props) => {
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
          if(key !== "search"){
            filterPass[key] = props[key] === filters[key]
          } else{
            filterPass[key] = props.title.toLowerCase().includes(filters[key].toLowerCase())
          }
         
        })
      } 

      if(Object.values(filterPass).every(el => el === true)){
        const {image: image, title: title, rating: rating, price: price, category: productCategory, country: country} = props;

        const productHTML = createProduct(image, title, rating, price, country);
// add for filters data
       productCategories.add(productCategory);
       productCountries.add(country);


          productContainer.innerHTML += productHTML;
      }
    
    })
return [productCategories, productCountries]
}