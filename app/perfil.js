const dados = localStorage.getItem("dados");
const dadosJson = JSON.parse(dados);

const nome = dadosJson.nome;

const mostrarNome = document.querySelector("[data-nome]");
mostrarNome.innerHTML = nome;
