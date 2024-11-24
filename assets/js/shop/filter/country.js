import { showAllProducts } from "../products/products"
const countryFilterSelect = document.querySelector('#countryFilte')


export function addOptionsToCountryFilter(productCountries){

/** set title to title filter
 * @param {HTMLSelectElement}
 */

/**
 * @type {string[]}
 */
    const productCountriesArr = Array.from(productCountries)
    
    productCountriesArr.forEach(productCountry => {
        const countryOption = document.createElement('option')
        countryOption.value = productCountry
        countryOption.innerText = productCountry

        countryFilterSelect.append(countryOption)
    })

    countryFilterSelect.addEventListener('change', () => {
        window.filters = {
            ...(window.filters ?? {}),
            "country": countryFilterSelect.value
        }
        showAllProducts()
    })
}

       