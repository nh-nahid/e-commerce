import { isUserLoggedIn } from "./utils.js"

const logInMenuItem = document.querySelector('#login-item')


if(isUserLoggedIn()){
    logInMenuItem.style.display = 'none'
}

const cartBtn = document.querySelector('.view-cart');
const offCanvasContainer = document.querySelector('.off-canvas');
const offCanvasOverlay = document.querySelector('.off-canvas-overlay');
const offCanvasClose = document.querySelector('.close-icon');


cartBtn.addEventListener('click', function(e){
    e.preventDefault();
    offCanvasContainer.classList.add('show-off-canvas')
    offCanvasOverlay.classList.add('show-off-canvas-overlay')
    
});
offCanvasOverlay.addEventListener('click',function(e){
    e.preventDefault()
    offCanvasContainer.classList.remove('show-off-canvas')
    offCanvasOverlay.classList.remove('show-off-canvas-overlay')

})
offCanvasClose.addEventListener('click',function(e){
    e.preventDefault()
    offCanvasContainer.classList.remove('show-off-canvas')
    offCanvasOverlay.classList.remove('show-off-canvas-overlay')

})