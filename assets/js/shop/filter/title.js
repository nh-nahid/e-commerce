import { showAllProducts } from "../products/products"


export function addOptionsToTitleFilter(productTitles){

/** set title to title filter
 * @param {HTMLSelectElement}
 */
    const titleFilterSelect = document.querySelector('#titleFilter')

/**
 * @type {string[]}
 */
    const productTitlesArr = Array.from(productTitles)
    
    productTitlesArr.forEach(productName => {
        const titleOption = document.createElement('option')
        titleOption.value = productName
        titleOption.innerText = productName

        titleFilterSelect.append(titleOption)
    })

    titleFilterSelect.addEventListener('change', () => {
        window.filters = {
            ...(window.filters ?? {}),
            "title": titleFilterSelect.value
        }
        showAllProducts()
    })
}

       