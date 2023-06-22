const nav = document.querySelector("nav")
const header = document.querySelector("header")

nav.addEventListener("click", ()=>{
    header.classList.toggle("black-nav")
    console.log("doing toggle")
    console.log(nav, header)
})

