export function isUserLoggedIn(){
    const loggedInData = JSON.parse(localStorage.getItem('user'));

    if(loggedInData?.accessToken){
        return true
    }
    return false
}

export function isInRange(number, min, max){
    min = parseFloat(min);
    max = parseFloat(max);
    number = parseFloat(number);

    if(number >= min && number <= max){
        return true;
    }

    return false;
}

export const getAllProductsFromAPI = async () => {

    if(!Array.isArray(window.allProductsData)){
      const productsResponse = await fetch('../products.json');
      const productData = await productsResponse.json();
      window.allProductsData = productData;
    }
    return allProductsData;
  }
