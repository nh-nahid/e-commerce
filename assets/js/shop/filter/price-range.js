import noUiSlider from 'nouislider';
import "../../../../node_modules/nouislider/dist/nouislider.min.css";
import { showAllProducts } from '../products/products';

export function addPriceRangeFilter(){
    const minPriceValueE1 = document.querySelector("#minPriceValue");
    const maxPriceValueE1 = document.querySelector("#maxPriceValue");

    const slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [parseFloat(minPriceValueE1.innerText), parseFloat(maxPriceValueE1.innerText)],
        connect: true,
        range: {
            'min': 0,
            'max': 2500
        }
    });

    slider.noUiSlider.on('update', function (values, handle){
        minPriceValueE1.innerText = values[0];
        maxPriceValueE1.innerText = values[1];

        window.filters = {
            ...(window.filters ?? {}),
            "price-range": values
        }
        showAllProducts()
    })
    }

