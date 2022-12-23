const entrarBtn = document.querySelector("[data-btn-entrar]");
const inputs = document.querySelectorAll("[data-input]");
const mensagemErro = document.querySelectorAll("[data-mensagem-erro]")

entrarBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = inputs[0];
    const senha = inputs[1];
    const form = {
        "nome": nome.value,
        "senha": senha.value
    }


    if(nome.value === ""){
        verificaCampo(nome);
    } 
    // if(senha.value === ""){
    //     verificaCampo(senha);
    // }
    else{
        localStorage.setItem("dados", JSON.stringify(form));
        window.location.href = "../pages/perfis.html";
    }
});


inputs.forEach((input) => {
    input.addEventListener("blur", () => verificaCampo(input));
})



function verificaCampo(input){
    const valor = input.dataset.input;


    if(valor == "nome"){
        verificaNome(input);
    }
    // if(valor == "senha"){
    //     verificaSenha(input);
    // }
}


function verificaNome(nome){
    const nomeValor = nome.value;
    const erro = nome.parentElement.children[2];


    if(nomeValor === ""){
        erro.innerHTML = `Digite um nome`;
    } else{
        erro.innerHTML = "";
    }
}

function verificaSenha(senha){
    const senhaValor = senha.value;
    const erro = senha.parentElement.children[2];

    if(senhaValor === ""){
        erro.innerHTML = `Digite uma senha`;
    } else{
        erro.innerHTML = ``;
    }
}