import "../style/style.css";
import "../style/checkout.css";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config";

async function addCountryList() {
    /**
     * @type {HTMLDivElement} addressFields
     */
    const addressFields = document.querySelector("#address-fields");
    const countriesE1 = document.createElement("select");
    const countriesLabel = document.createElement("label");
    countriesE1.name = "country";
    countriesE1.id = "country";
    countriesLabel.textContent = "Country";
    countriesLabel.htmlFor = "country";
    let allFields = {};

    try {
        const response = await fetch("../address-fields.json");
        const data = await response.json();
        allFields = data;
        Object.keys(data).forEach(country => {
            const option = document.createElement("option");
            option.value = country;
            option.textContent = country;
            countriesE1.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching country list:", error);
    } finally {
        const countryContainer = document.createElement("div");
        countryContainer.classList.add("country-container");
        countryContainer.appendChild(countriesLabel);
        countryContainer.appendChild(countriesE1);

        addressFields.prepend(countryContainer);
        return {addressFields, allFields};
    }
}

const createAddressFields = (fieldsDependOnCountry, {label, type, name}) => {
    const fieldContainer = document.createElement("div");
    const inputE1 = document.createElement("input");
    const labelE1 = document.createElement("label");
    inputE1.type = type;
    inputE1.name = name;
    inputE1.id = name;
    labelE1.textContent = label;
    labelE1.htmlFor = name;
    fieldContainer.append(labelE1);
    fieldContainer.append(inputE1);
    fieldsDependOnCountry.append(fieldContainer);
}

addCountryList().then(({addressFields, allFields}) => {
    const selectE1 = addressFields.querySelector("#country");
    const fieldsDependOnCountry = document.querySelector("#fields-depend-on-country");

    selectE1.addEventListener("change", async (e) => {
        const country = e.target.value;
        fieldsDependOnCountry.innerHTML = "";  
        allFields[country].forEach(fieldName => {
            createAddressFields(
                fieldsDependOnCountry, 
                {label: fieldName, 
                 type: "text", 
                 name: fieldName
                });
            })
        })
        selectE1.dispatchEvent(new Event("change"));
});


const submitOrder = async ({fullName, products, address,country,email,shippingMethod,userId}) => {
    let orderId = ""
    try {
        const docRef = await addDoc(collection(db, "/Order"), {
          fullName,
          products,
          address,
          country,
          email,
          shippingMethod,
          userId,
        });
        orderId = docRef.id
      } catch (e) {
        console.error("Error adding document: ", e);
      } finally{
        return orderId;
      }
}

const form = document.querySelector("#checkout-form");
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const fullName = e.target.name.value;
    const email = e.target.email.value;
    const country = e.target.country.value;
    const addressFields = document.querySelector("#fields-depend-on-country").querySelectorAll('input');
    const shippingMethod = e.target.shippingMethod.value;

    let addressString = "";
    const user = JSON.parse(localStorage.getItem("user"))
    const userId = user?.uid ?? "";
    addressFields.forEach((field,index) => {
        addressString += field.value;
        if(addressFields.length - 1 !== index){
            addressString += ", "
        }
    })

    submitOrder({
        fullName,
        products: JSON.parse(localStorage.getItem("dom-commerce-cart-product")),
        address: addressString,
        country,
        email,
        shippingMethod,
        userId,
    }).then(orderId => {
        const alertE1 = document.querySelector(".order-submit-message");
        alertE1.textContent = `Order placed successfully. Your order id is: ${orderId}`
        alertE1.style.display = 'block';
        window.scrollBy(-10000, -10000)

        const checkoutHeader = document.querySelector(".checkout-header");
        checkoutHeader.style.marginBottom = "4px"
    })
})