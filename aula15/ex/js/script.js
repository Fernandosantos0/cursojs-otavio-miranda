const numero = Number(prompt('Digite o número:'));
const numeroTitulo = this.window.document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.textContent = numero;

texto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;

texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;

texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;

texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;

texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;

texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;