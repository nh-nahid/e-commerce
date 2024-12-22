export function isUserLoggedIn() {
  const loggedInData = JSON.parse(localStorage.getItem("user"));

  if (loggedInData?.accessToken) {
    return true;
  }
  return false;
}

export function isInRange(number, min, max) {
  min = parseFloat(min);
  max = parseFloat(max);
  number = parseFloat(number);

  if (number >= min && number <= max) {
    return true;
  }

  return false;
}

export const getAllProductsFromAPI = async () => {
  if (!Array.isArray(window.allProductsData)) {
    const productsResponse = await fetch("../products.json");
    const productData = await productsResponse.json();
    window.allProductsData = productData;
  }
  return allProductsData;
};

export const getProductDetails = async (productId) => {
  /**
   * @type {Array} allProducts
   */
  const allProducts = await getAllProductsFromAPI();
  const product = allProducts.find((singleProduct) => {
    if (singleProduct.id === Number(productId)) {
      return singleProduct;
    }
  });

  return product;
};

export const getProductPrice = (price1, price2) => {
  return price1 > price2 ? price2 : price1;
};

export const getAllCartIds = () =>{
  const cartProducts = JSON.parse(localStorage.getItem("dom-commerce-cart-product")) ?? [];
   return cartProducts?.map((cartProduct) => cartProduct.productId);
}
export const getTotalCartData = async () => {
  const cartProducts = JSON.parse(
    localStorage.getItem("dom-commerce-cart-product")
  ) ?? [];
  const allCartIds = getAllCartIds()

  if (allCartIds === undefined) {
    return {
      totalPrice: 0,
      totalCartItem: 0,
    };
  }

  const allProductPricePromises = allCartIds.map(
    (id) =>
      new Promise(async (resolve) => {
        const productDetails = await getProductDetails(id);
        const quantity = cartProducts.find(
          (cartProduct) => cartProduct.productId === id
        ).productQuantity;
        resolve(
          getProductPrice(
            Number(productDetails.price),
            Number(productDetails.salePrice)
          ) * quantity
        );
      })
  );
  const totalPrice = new Promise((resolve) => {
    Promise.all(allProductPricePromises).then((data) => {
      const totalPrice = data.reduce((prev, next) => prev + next, 0);
      resolve(totalPrice);
    });
  });

  return {
    totalPrice: await totalPrice,
    totalCartItem: allProductPricePromises.length,
  };
};





/**for prettier html formatting*/
export const html = String.raw