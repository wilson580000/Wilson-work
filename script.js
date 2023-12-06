var hamBtn = document.querySelector(".fa-bars")
var hamMenu = document.querySelector(".ham-menu")
var hamRemove = document.querySelector(".fa-xmark")


hamBtn.addEventListener("click", () => {
    hamMenu.classList.add("active")
})
hamRemove.addEventListener("click", () => {
    hamMenu.classList.remove("active")
})  