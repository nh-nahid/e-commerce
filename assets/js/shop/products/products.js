
const productContainer = document.querySelector('.right')

/**
 * create HTML of product structure 
 * @param {string} imageLink 
 * @param {string} productTitle 
 * @param {number} productRating 
 * @param {number} productRegularPrice 
 * @param {number} productSalePrice 
 * @returns {string} HTML of product structure
 */



const createProduct = (productCategories, image, title, rating, price, productCategory) => {
    productCategories.add(productCategory)
    return/*html*/ ` <div class="product-container">
              <div class="product-img"><img src="${image}" alt=""></div>
              <div class="product-title">${title}</div>
              <div class="product-rating">${rating}</div>
              <div class="product-price">
                <span><del>${price}</del></span>
                <span>80</span>
              </div>
            </div>`
}


export async function showAllProducts(){
   const productCategories = new Set();
    const productsResponse = await fetch('https://fakestoreapi.com/products')
    const productData = await productsResponse.json()
   
    productData.forEach(({image: image, title: title, rating: rating, price: price, category: productCategory}) => {
        const productHTML = createProduct(productCategories, image, title, rating, price, productCategory)
        productContainer.innerHTML += productHTML
    })
return [productCategories]
}