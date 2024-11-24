import { showAllProducts } from "../products/products"


export function handleSearchFilter(){
const searchForm = document.querySelector('#searchFilter')

    searchForm.addEventListener('submit', e => {
        e.preventDefault()
        
        window.filters = {
            ...(window.filters ?? {}),
            "search": searchForm.search.value
        }
    showAllProducts()
    })
}
