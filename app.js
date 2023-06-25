const nav = document.querySelector("nav")
const header = document.querySelector("header")
const mainNav = document.getElementById("main-nav")
const main = document.querySelector("main")

nav.addEventListener("click", ()=>{
    header.classList.toggle("black-nav")
    mainNav.classList.toggle("active")
})

// fade out when going to another link 
function handleLink(targetLink){
    document.querySelector("body").style.backgroundColor = "#C3BBB2"
    main.style.opacity = 0;
    nav.click()
    setTimeout(()=>{
        console.log("set out")
        window.location.href = "/" + targetLink
    }, 2000);
}

window.onload = () =>{
    document.getElementById("index-page").classList.add("loaded")
}