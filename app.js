const tituloTexto = 'Factorial';
const titleLetras = Array.from(tituloTexto);
const titulo = document.getElementById('title');

titleLetras.forEach((letra) => {
  const span = document.createElement('span');
  span.textContent = letra;
  span.classList.add('letra');
  titulo.appendChild(span);
});

const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');

document.addEventListener('DOMContentLoaded', () => {
  entrada.value = '5';
  refresh();
});

entrada.addEventListener('input', () => {
  refresh();
});

function refresh() {
  const valor = entrada.value;

  // SI QUITAS EL BLOQUE DE AQUI
  if (valor === '' || isNaN(valor)) {
    resultado.innerHTML = /* html */ `
<p class="resultado">¡SOLO PUEDES COLOCAR NÚMEROS POSITIVOS!</p>
`;
  } else if (Number(valor) > 10000) {
    resultado.innerHTML = /* html */ `
<p class="resultado">¡NÚMERO MUY GRANDE!</p>
`;
  } else {
    // HASTA AQUI: EL PC EXPLOTA XD

    let number = calcularFactorial(valor);

    resultado.innerHTML = /* html */ `
<p class="resultado">${number}</p>
    `;
  }
}

function calcularFactorial(num) {
  let init = 1n;

  for (let i = 1; i <= num; i++) {
    init *= BigInt(i);
  }

  return init;
}
