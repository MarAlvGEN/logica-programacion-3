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
  let number = calcularFactorial(entrada.value);

  resultado.innerHTML = /* html */ `
<p class="text-danger">${number}</p>
    `;
}

function calcularFactorial(num) {
  let init = 1;

  for (let i = 1; i <= num; i++) {
    init *= i;
  }

  return BigInt(init);
}
