import"./style-IP-hOuS1.js";import{u as m,v as p,w as y}from"./config-vHi9TOLx.js";async function h(){const n=document.querySelector("#address-fields"),c=document.createElement("select"),s=document.createElement("label");c.name="country",c.id="country",s.textContent="Country",s.htmlFor="country";let o={};try{const r=await(await fetch("../address-fields.json")).json();o=r,Object.keys(r).forEach(t=>{const d=document.createElement("option");d.value=t,d.textContent=t,c.appendChild(d)})}catch(e){console.error("Error fetching country list:",e)}finally{const e=document.createElement("div");return e.classList.add("country-container"),e.appendChild(s),e.appendChild(c),n.prepend(e),{addressFields:n,allFields:o}}}const f=(n,{label:c,type:s,name:o})=>{const e=document.createElement("div"),r=document.createElement("input"),t=document.createElement("label");r.type=s,r.name=o,r.id=o,t.textContent=c,t.htmlFor=o,e.append(t),e.append(r),n.append(e)};h().then(({addressFields:n,allFields:c})=>{const s=n.querySelector("#country"),o=document.querySelector("#fields-depend-on-country");s.addEventListener("change",async e=>{const r=e.target.value;o.innerHTML="",c[r].forEach(t=>{f(o,{label:t,type:"text",name:t})})}),s.dispatchEvent(new Event("change"))});const E=async({fullName:n,products:c,address:s,country:o,email:e,shippingMethod:r,userId:t})=>{let d="";try{d=(await m(p(y,"/Order"),{fullName:n,products:c,address:s,country:o,email:e,shippingMethod:r,userId:t})).id}catch(a){console.error("Error adding document: ",a)}finally{return d}},g=document.querySelector("#checkout-form");g.addEventListener("submit",n=>{n.preventDefault();const c=n.target.name.value,s=n.target.email.value,o=n.target.country.value,e=document.querySelector("#fields-depend-on-country").querySelectorAll("input"),r=n.target.shippingMethod.value;let t="";const a=JSON.parse(localStorage.getItem("user"))?.uid??"";e.forEach((u,l)=>{t+=u.value,e.length-1!==l&&(t+=", ")}),E({fullName:c,products:JSON.parse(localStorage.getItem("dom-commerce-cart-product")),address:t,country:o,email:s,shippingMethod:r,userId:a}).then(u=>{const l=document.querySelector(".order-submit-message");l.textContent=`Order placed successfully. Your order id is: ${u}`,l.style.display="block",window.scrollBy(-1e4,-1e4);const i=document.querySelector(".checkout-header");i.style.marginBottom="4px"})});
