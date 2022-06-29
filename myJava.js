const hamburgher = document.querySelector(".hamburgher");
const navmenu = document.querySelector(".nav-menu");

hamburgher.addEventListener("click", () => {
    hamburgher.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n >= n.addEventListener("click", () => {
    hamburgher.classList.remove("active");
    navmenu.classList.remove("active");
}))