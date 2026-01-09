const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("open");
  menu.classList.toggle("open");
  document.body.classList.toggle("overflow-hidden");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburguer.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("overflow-hidden");
  });
});
