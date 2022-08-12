let elBtnOpen = document.querySelector(".open-btn")
let elNavShow = document.querySelector(".site-header__nav-show")
let elOverlayshow = document.querySelector(".overlay")
let elBody = document.querySelector("body")

elBtnOpen.addEventListener("click", function(){
    elNavShow.classList.toggle("site-header__nav-show-active")
    elBtnOpen.classList.toggle("open-btn-show")
    elOverlayshow.classList.toggle("overlay-show")
    elBody.classList.toggle("body-active")
})
elOverlayshow.addEventListener("click", function(){
    elBtnOpen.classList.remove("open-btn-show")
    elNavShow.classList.remove("site-header__nav-show-active")
    elOverlayshow.classList.remove("overlay-show")
})
