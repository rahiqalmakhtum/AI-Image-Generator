const body = document.body;
const toggleNightMode = document.getElementById("toggleNight");
const mainSection = document.querySelector("section.bg-gradient-custom");
const promtForm = document.getElementById("promt-form");
const imageGrid = document.querySelectorAll(".imageGrid");
const imageCount = document.getElementById("image-count");


toggleNightMode.addEventListener("click", function() {
console.log("Toggle clicked!");
        
// Toggle body background
body.classList.toggle("bg-gradient-custom");
body.classList.toggle("bg-gradient-custom-night");
        
// Toggle section background

mainSection.classList.toggle("bg-gradient-custom");
mainSection.classList.toggle("bg-gradient-custom-night");

});

function renderImage(count){
    if (count == 1) {
      imageGrid.className = "grid grid-cols-1 gap-4 mt-6";
    } else if (count == 2) {
      imageGrid.className = "grid grid-cols-2 gap-4 mt-6";
    } else if (count == 3) {
      imageGrid.className = "grid grid-cols-3 gap-4 mt-6";
    } else {
      imageGrid.className = "grid grid-cols-1 md:grid-cols-4 gap-4 mt-6";
    }
    imageGrid.forEach((item, index) => {
        if(index <= count){
            item.classList.remove("hidden"); // show
        } else {
            item.classList.add("hidden"); // hide
        }
    });
}

promtForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const count = parseInt(imageCount.value);
    const promptText = document.getElementById("prompt").value;
    const model = document.getElementById("engine").value;
    const ratio = document.getElementById("image-ratio").value;
    console.log(promptText, model, count, ratio);
    if(!count) return; // do nothing if not selected
    renderImage(count);
})
