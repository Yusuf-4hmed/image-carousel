const backBtn = document.getElementById("back");
const nextBtn = document.getElementById("next");
const img = document.getElementById("img");
const imgContainer = document.getElementById("img-container")

let count = 0;

nextBtn.addEventListener("click", () => {
    if (count === 4) {
        count = 0;
        imgContainer.children[0].classList.remove("hidden")
        imgContainer.children[4].classList.add("hidden")
    } else {
        imgContainer.children[count].classList.add("hidden")
        count++;
        imgContainer.children[count].classList.remove("hidden")
        console.log(count)  
    }
    
})

backBtn.addEventListener("click", () => {
    if (count === 0) {
        count = 4;
        imgContainer.children[0].classList.add("hidden")
        imgContainer.children[4].classList.remove("hidden")
    } else {
        imgContainer.children[count].classList.add("hidden")
        count--;
        imgContainer.children[count].classList.remove("hidden")
        console.log(count)  
    }
    
})