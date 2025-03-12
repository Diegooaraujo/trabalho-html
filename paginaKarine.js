const botao = document.querySelector(".botao-insta")

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
