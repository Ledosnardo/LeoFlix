const pergunta = document.querySelector("[data-pergunta]");
const respostas = document.querySelectorAll("[data-texto]");

pergunta.addEventListener("click", (e) => {
    const texto = e.path[2].children[1];
    const classeTexto = texto.classList;

    if(classeTexto[1] == "ativo"){
        classeTexto.remove("ativo");

    } else{
        for(let i = 0; i < respostas.length; i++){
            respostas[i].classList.remove("ativo");
        }
        classeTexto.add("ativo");
    }
});
