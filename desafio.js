 const closeBtn = document.createElement("button");
 const btnInscricao = document.getElementById("btn-inscricao");

 const selectInscricao = document.getElementById("inscricao");
 const nome = document.getElementById("nome");
const email = document.getElementById("email");

const result = document.getElementById("result");

const form = document.getElementById("form");



function gerarCard(event) {
    event.preventDefault();
    result.innerHTML = "";
    const report = gerarInscricao();
    result.appendChild(report);   
  }

function gerarInscricao() {  

  const modal = document.createElement("div");
  modal.classList.add("modal");
  const divContainer = document.createElement("div");
  divContainer.classList.add("container-report");
  
  const divText = document.createElement("div");
  divText.classList.add("container-text-report");

  const title = document.createElement("h2");  
  const paragrafo = document.createElement("p");

  divText.append(title, paragrafo)

  title.innerText = `Parabéns! Seu número de inscrição é: 000${gerarNumerodeInscricao(nome.value.length, email.value.length)}`
  closeBtn.innerText = "Fechar";
  closeBtn.classList.add("btnClose");

  divContainer.append(divText, closeBtn);
  modal.appendChild(divContainer);


  paragrafo.innerText = `
  Obrigada ${nome.value}, por fazer sua inscrição! Enviamos um email de confirmação para ${email.value}. Te aguardamos na competição ${selectInscricao.value}.
  Boa sorte!`
  ;

return modal;
}


function gerarNumerodeInscricao (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


form.addEventListener("submit", gerarCard);
closeBtn.addEventListener("click", function () {
    result.innerHTML = "";
  });