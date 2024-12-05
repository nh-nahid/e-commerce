import { showProductDetails } from "./product-details";

export const changeQuantityByButton = (isIncrease) => {
    const step  = isIncrease ? 1 : -1;
    const minValue = 1;
    const quantityInputEl = document.querySelector('#quantity');
    quantityInputEl.value = (Number(quantityInputEl.value) + step) >= minValue ? (Number(quantityInputEl.value) + step) : minValue;
    quantityInputEl.dispatchEvent(new Event('change'))
}

export const quantityInit = () => {
    const decrementEl = document.querySelector('#decrement');
    const incrementEl = document.querySelector('#increment');
    decrementEl.addEventListener('click', () => changeQuantityByButton(false))
    incrementEl.addEventListener('click', () => changeQuantityByButton(true))
}