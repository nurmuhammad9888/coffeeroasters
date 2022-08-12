let elBtnOpen = document.querySelector(".open-btn")
let elNavShow = document.querySelector(".site-header__nav-show")
let elOverlayshow = document.querySelector(".overlay")


elBtnOpen.addEventListener("click", function(){
    elNavShow.classList.toggle("site-header__nav-show-active")
    elBtnOpen.classList.toggle("open-btn-show")
    elOverlayshow.classList.toggle("overlay-show")
})