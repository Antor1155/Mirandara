// script for work page cards 

const cardTitle = document.getElementsByClassName("work-card")

const cardDescription = document.getElementsByClassName("description")


Array.from(cardTitle).forEach((element, index) => {
    console.log("element is ", element)
    element.addEventListener("click",()=>{
        cardDescription[index].classList.toggle("zero-width")
    })
});