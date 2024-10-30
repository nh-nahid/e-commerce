

export function addOptionsToCategoryFilter(productCategories){
    // Set option to category filter
    const categoryFilterSelect = document.querySelector('#categoryFilter')

    Array.from(productCategories).forEach(categoryName => {
        const categoryOption = document.createElement('option')
        categoryOption.value = categoryName
        categoryOption.innerText = categoryName
    
        categoryFilterSelect.append(categoryOption)
    })
}

       