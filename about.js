window.onload = function(){
    document.querySelector("main").style.opacity = 1;
}

const cards = document.getElementsByClassName("t-card")

Array.from(cards).forEach((element)=>{
    element.addEventListener("click", ()=>{
        element.classList.toggle("open")
    })
})
