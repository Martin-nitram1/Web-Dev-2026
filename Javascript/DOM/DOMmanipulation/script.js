const button = document.getElementById("changeContentBtn");

let isOriginalContent = true;

button.addEventListener("click", function(){
    if (isOriginalContent) {
        document.getElementById("title").textContent = "This is the new title after clicking the button!";
        document.querySelector(".description").textContent = "This is the new description after clicking the button!";
        button.textContent = "Change me back!";
        isOriginalContent = false;
    } else {
        document.getElementById("title").textContent = "This is the original title.";
        document.querySelector(".description").textContent = "This is the original description.";   
        button.textContent = "Change Content";
        isOriginalContent = true;
    }
});
