const toggleNightMode = document.getElementById("toggleNight");
const body = document.querySelector("body");

toggleNightMode.addEventListener("click", () => {
  body.classList.toggle("bg-gradient-custom"); // day gradient
  body.classList.toggle("bg-black"); // night background
});
