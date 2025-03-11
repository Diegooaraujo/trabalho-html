const tema = document.querySelector(".tema");
const body = document.querySelector("body")
const botao = document.querySelector(".botao-insta")

tema.addEventListener("click", () => {
   
    if (body.classList.contains("claro")) {
        body.classList.remove("claro")
        tema.style.backgroundImage = 'url("./img/brilho-do-sol.png")';
    } else {
        body.classList.add("claro");
        tema.style.backgroundImage = 'url("./img/lua-crescente.png")';
    }
});

botao.addEventListener("mousemove", (event) => {
    const rect = botao.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (mouseX < 10 || mouseX > rect.width - 10 || mouseY < 10 || mouseY > rect.height - 10) {
        const newLeft = Math.random() * (window.innerWidth - rect.width);
        const newTop = Math.random() * (window.innerHeight - rect.height);
        botao.style.position = "absolute";
        botao.style.left = `${newLeft}px`;
        botao.style.top = `${newTop}px`;
    }
});
