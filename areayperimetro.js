// Obtiene referencias a los elementos del DOM
const figuraSelect = document.getElementById("figuraSelect"); // Selector de figura
const inputsDiv = document.getElementById("inputsFigura"); // Contenedor de inputs dinámicos
const resultadoDiv = document.getElementById("resultado"); // Contenedor del resultado

// Evento: cuando cambia la figura seleccionada, muestra los inputs correspondientes
figuraSelect.addEventListener("change", function () {
  // console.log(figuraSelect.value);

  resultadoDiv.innerHTML = ""; // Limpia el resultado anterior
  console.log(this);

  if (this.value === "triangulo") {
    // Inputs para triángulo
    inputsDiv.innerHTML = `
      <label>Lado 1 (cm): <input type="number" id="lado1" min="0.01" required></label><br>
      <label>Lado 2 (cm): <input type="number" id="lado2" min="0.01" required></label><br>
      <label>Lado 3 (cm): <input type="number" id="lado3" min="0.01" required></label><br>
      <label>Base (cm): <input type="number" id="base" min="0.01" required></label><br>
      <label>Altura (cm): <input type="number" id="altura" min="0.01" required></label><br>
      <button onclick="calcularTriangulo()">Calcular</button>`;
  } else if (this.value === "circulo") {
    // Inputs para círculo
    inputsDiv.innerHTML = `
      <label>Radio (cm): <input type="number" id="radio" min="0.01" required></label><br>
      <button onclick="calcularCirculo()">Calcular</button>`;
  } else if (this.value === "trapecio") {
    // Inputs para trapecio
    inputsDiv.innerHTML = `<label>Base mayor (cm): <input type="number" id="baseMayor" min="0.01" required></label><br>
      <label>Base menor (cm): <input type="number" id="baseMenor" min="0.01" required></label><br>
      <label>Lado 1 (cm): <input type="number" id="lado1" min="0.01" required></label><br>
      <label>Lado 2 (cm): <input type="number" id="lado2" min="0.01" required></label><br>
      <label>Altura (cm): <input type="number" id="altura" min="0.01" required></label><br>
      <button onclick="calcularTrapecio()">Calcular</button> `;
  } else {
    // Si no hay figura seleccionada, limpia los inputs
    inputsDiv.innerHTML = "";
  }
});

// Calcula área y perímetro de un triángulo
function calcularTriangulo() {
  // Obtiene los valores de los lados, base y altura
  const l1 = parseFloat(document.getElementById("lado1").value);
  const l2 = parseFloat(document.getElementById("lado2").value);
  const l3 = parseFloat(document.getElementById("lado3").value);
  const base = parseFloat(document.getElementById("base").value);
  const altura = parseFloat(document.getElementById("altura").value);
  // Valida que todos los valores sean positivos y válidos
  if ([l1, l2, l3, base, altura].some((v) => isNaN(v) || v <= 0)) {
    resultadoDiv.innerHTML =
      '<span style="color:red">Ingrese todos los valores correctamente.</span>';
    return;
  }
  // Perímetro: suma de los lados
  const perimetro = l1 + l2 + l3;
  // Área: (base * altura) / 2
  const area = (base * altura) / 2;
  // Muestra el resultado
  resultadoDiv.innerHTML = `<strong>Área:</strong> ${area.toFixed(
    2
  )} cm²<br><strong>Perímetro:</strong> ${perimetro.toFixed(2)} cm`;
}

// Calcula área y perímetro de un círculo
function calcularCirculo() {
  // Obtiene el valor del radio
  const radio = parseFloat(document.getElementById("radio").value);
  // Valida que el radio sea positivo y válido
  if (isNaN(radio) || radio <= 0) {
    resultadoDiv.innerHTML =
      '<span style="color:red">Ingrese el radio correctamente.</span>';
    return;
  }
  // Área: π * radio^2
  const area = Math.PI * Math.pow(radio, 2);
  // Perímetro: 2 * π * radio
  const perimetro = 2 * Math.PI * radio;
  // Muestra el resultado
  resultadoDiv.innerHTML = `<strong>Área:</strong> ${area.toFixed(
    2
  )} cm²<br><strong>Perímetro:</strong> ${perimetro.toFixed(2)} cm`;
}

// Calcula área y perímetro de un trapecio
function calcularTrapecio() {
  // Obtiene los valores de las bases, lados y altura
  const baseMayor = parseFloat(document.getElementById("baseMayor").value);
  const baseMenor = parseFloat(document.getElementById("baseMenor").value);
  const lado1 = parseFloat(document.getElementById("lado1").value);
  const lado2 = parseFloat(document.getElementById("lado2").value);
  const altura = parseFloat(document.getElementById("altura").value);
  // Valida que todos los valores sean positivos y válidos
  if (
    [baseMayor, baseMenor, lado1, lado2, altura].some((v) => isNaN(v) || v <= 0)
  ) {
    resultadoDiv.innerHTML =
      '<span style="color:red">Ingrese todos los valores correctamente.</span>';
    return;
  }
  // Área: ((baseMayor + baseMenor) * altura) / 2
  const area = ((baseMayor + baseMenor) * altura) / 2;
  // Perímetro: suma de las bases y los lados
  const perimetro = baseMayor + baseMenor + lado1 + lado2;
  // Muestra el resultado
  resultadoDiv.innerHTML = `<strong>Área:</strong> ${area.toFixed(
    2
  )} cm²<br><strong>Perímetro:</strong> ${perimetro.toFixed(2)} cm`;
}
