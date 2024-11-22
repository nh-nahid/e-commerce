import { showAllProducts } from "../products/products"


export function addOptionsToCategoryFilter(productCategories){

/** set category to category filter
 * @param {HTMLSelectElement}
 */
    const categoryFilterSelect = document.querySelector('#categoryFilter')

/**
 * @type {string[]}
 */
    const productCountriesArr = Array.from(productCategories)
    
    productCountriesArr.forEach(categoryName => {
        const categoryOption = document.createElement('option')
        categoryOption.value = categoryName
        categoryOption.innerText = categoryName

        categoryFilterSelect.append(categoryOption)
    })

    categoryFilterSelect.addEventListener('change', () => {
        window.filters = {
            ...(window.filters ?? {}),
            "category": categoryFilterSelect.value
        }
        showAllProducts()
    })
}

       