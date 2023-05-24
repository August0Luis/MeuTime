// 71 e 72 numeros das ligas br
const token = "7cd1c6ea56db6be77d538c979936dfb1"
const formulario = document.querySelector('[data-formulario]');
const input = document.getElementById("input")

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  validaInput();
})

function validaInput() {
  const respostaDoInput = input.value
  if (respostaDoInput == token) {
    window.location.href = "./index2.html";
  } else {
    alert("Token Incorreto")
    input.value = ''
  }
}