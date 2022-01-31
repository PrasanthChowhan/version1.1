// opening menu in mobile 
const menuEl = document.querySelector(".mobileMenu")
const headerRightEl = document.querySelector(".header-right")
const searchEl = document.querySelector(".search")
const searchContEl = document.querySelector(".search-container")
const BodyEl = document.querySelector("body")

menuEl.addEventListener("click", function(){
    headerRightEl.classList.toggle("active")
    menuEl.classList.toggle("close")
    // adding comment here
})
searchEl.addEventListener("click", function(){
    searchContEl.classList.toggle("active")
    // adding comment here
})
BodyEl.addEventListener("click")