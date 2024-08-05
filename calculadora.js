
function calcularIMC() {

  var pesoInput = document.getElementById("peso")
  var alturaInput = document.getElementById("altura")
  var resultadoInput = document.getElementById("resultadoInput")

  var peso = parseFloat(pesoInput.value);
  var altura = parseFloat(alturaInput.value) / 100;

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultadoInput.value = 'Parece que ingresaste valores incorrectos. ¡Inténtalo de nuevo!';
    return;
  }

  var imc = peso / (altura * altura)
  var resultado = imc.toFixed(2)

  resultadoInput.value = resultado;

  console.log("Se hizo clic en el botón 'Calcular'")
}

var calcularBtn = document.getElementById("calcularBtn")
calcularBtn.addEventListener("click", calcularIMC)
  