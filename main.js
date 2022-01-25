// opening menu in mobile 
const menuEl = document.querySelector(".mobileMenu")
const headerRightEl = document.querySelector(".header-right")

menuEl.addEventListener("click", function(){
    headerRightEl.classList.toggle("active")
    menuEl.classList.toggle("close")
    // adding comment here
})
