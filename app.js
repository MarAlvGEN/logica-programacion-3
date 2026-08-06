const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');
form = document.getElementById('formulario');

form.addEventListener('input', () => {
  let number = calcularFactorial(entrada.value);

  resultado.innerHTML = /* html */ `
<p class="text-danger">${number}></p>
`;
});

function calcularFactorial(num) {
  let resultado = 1;

  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }

  return BigInt(resultado);
}
