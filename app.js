const entrada = document.getElementById('entrada');
const resultado = document.getElementById('resultado');
const form = document.getElementById('formulario');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const number = calcularFactorial(entrada.value);

	resultado.textContent = number;
});

function calcularFactorial(num) {
	let resultado = 1;

	for (let i = 1; i <= num; i++) {
		resultado *= i;
	}

	return resultado;
}
