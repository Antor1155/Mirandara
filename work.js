// script for work page cards 
const scroll = document.getElementById("scroll")
let left = 0

const talk = document.getElementById("talk")

const cardTitle = document.getElementsByClassName("work-card")

const cardDescription = document.getElementsByClassName("description")


Array.from(cardTitle).forEach((element, index) => {
    element.addEventListener("click", () => {
        const ele = cardDescription[index]
        ele.classList.toggle("zero-width")

        // const zeroWidth = ele.classList.value.
        // includes("zero-width")

        // console.log(left)
        // if(!zeroWidth){
        //     ele.scrollIntoView()
        // }
        // else{
        //     scroll.style.left = left + 20 + "%"
        // }
    })
});

window.addEventListener("wheel", (event) => {
    const yVal = -(event.deltaY)
    if(yVal < 0){
        left -= 1
        if (yVal < -100){
            left -= 5
        }
    }
    else if(left < 0){
        left += 1
        if (yVal > 100){
            left += 5
        }
    }

    scroll.style.left = left + "vw";
    console.log(talk)
    
})


function handleScroll (){
    left = 0
    scroll.style.left = left + "vw";
}