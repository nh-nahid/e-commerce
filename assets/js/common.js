import { isUserLoggedIn } from "./utils.js"

const logInMenuItem = document.querySelector('#login-item')


if(isUserLoggedIn()){
    logInMenuItem.style.display = 'none'
}