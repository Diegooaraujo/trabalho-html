const tema = document.querySelector(".tema");
const body = document.querySelector("body")


tema.addEventListener("click", () => {
   
    if (body.classList.contains("claro")) {
        body.classList.remove("claro")
        tema.style.backgroundImage = 'url("./img/brilho-do-sol.png")';
    } else {
        body.classList.add("claro");
        tema.style.backgroundImage = 'url("./img/lua-crescente.png")';
    }
});


