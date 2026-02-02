const btn = document.getElementById("colorBtn");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    btn.textContent = "Dark";
}

btn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        btn.textContent = "Dark";
        localStorage.setItem("theme", "light");
    } else {
        btn.textContent = "Light";
        localStorage.setItem("theme", "dark");
    }
});