const pergunta = document.querySelector("[data-pergunta]");

pergunta.addEventListener("click", (e) => {
    const texto = e.path[2].children[1];

    texto.classList.toggle("ativo")
});
