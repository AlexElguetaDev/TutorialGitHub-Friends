let number1 = document.getElementById("calculo1");
let number2 = document.getElementById("calculo2");
let button = document.getElementById("btnCalcular");
let result = document.getElementById("result");
let form = document.getElementById("form");

form.addEventListener("submit", sumar);

function sumar(event) {
  event.preventDefault();
  let resultado = parseInt(number1.value) + parseInt(number2.value);
  result.innerText = `El resultado es : ${resultado}`;
}
