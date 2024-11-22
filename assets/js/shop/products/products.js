
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


export async function showAllProducts(filters = {}){

   const productCategories = new Set();
   const productTitles = new Set();

    const productsResponse = await fetch('https://fakestoreapi.com/products')
    const productData = await productsResponse.json()

  productContainer.innerHTML = ""

    productData.forEach((props) => {
        const filters = window.filters ?? {}
      const filtersKeys = Object.keys(filters)
      const filterPass = {};

      if(filtersKeys.length){
        filtersKeys.forEach(key =>{
          filterPass[key] = props[key] === filters[key]
        })
      } 

      if(Object.values(filterPass).every(el => el === true)){
        const {image: image, title: title, rating: rating, price: price, category: productCategory} = props;

        const productHTML = createProduct(image, title, rating, price);
// add for filters data
       productCategories.add(productCategory);
       productTitles.add(title);


          productContainer.innerHTML += productHTML;
      }
    
    })
return [productCategories, productTitles]
}