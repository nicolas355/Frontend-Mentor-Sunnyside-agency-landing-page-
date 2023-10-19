const hamburguesa = document.getElementById("hamburguesa");
const menu = document.getElementById("menu");

hamburguesa.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});