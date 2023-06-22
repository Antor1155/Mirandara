const nav = document.querySelector("nav")
const header = document.querySelector("header")
const mainNav = document.getElementById("main-nav")

nav.addEventListener("click", ()=>{
    header.classList.toggle("black-nav")
    console.log("doing toggle")
    console.log(nav, header)
    mainNav.classList.toggle("active")
})

