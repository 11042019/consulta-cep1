let cep = document.querySelector("#cep");
let endereco = document.querySelector("#endereco");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let consultar = document.getElementById("consultar");
let limpar = document.querySelector("#limpar");

function limpa() {
  endereco.value = document.textContent = "";
  bairro.value = document.textContent = "";
  cidade.value = document.textContent = "";
}

limpar.addEventListener("click", limpa);

cep.addEventListener("blur", function (e) {
  let cep = e.target.value;
  let script = document.createElement("script");
  script.src = `http://viacep.com.br/ws/${cep}/json/?callback=popularForm`;
  document.body.appendChild(script);
  console.log(script);
});

function popularForm(resposta) {
  if ("erro" in resposta) {
    endereco.value = "Não encontrado";
    bairro.value = "Não encontrado";
    cidade.value = "Não encontrado";
    return;
  }

  endereco.value = resposta.logradouro;
  bairro.value = resposta.bairro;
  cidade.value = resposta.localidade;
  console.log(resposta);
}
