const pergunta = document.querySelector("[data-pergunta]");
const textos = document.querySelectorAll("[data-texto]");

pergunta.addEventListener("click", (e) => {
    const texto = e.path[2].children[1];
    const classeTexto = texto.classList;

    if(classeTexto[1] == "ativo"){
        classeTexto.remove("ativo");

    } else{
        for(i = 0; i < textos.length; i++){
            textos[i].classList.remove("ativo");
        }

        classeTexto.toggle("ativo");
    }
});
