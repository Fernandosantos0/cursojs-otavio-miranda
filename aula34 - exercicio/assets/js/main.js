const btnCalcular = document.querySelector('#btn-calcular');
const divResultado = document.querySelector('#result');

const criarElemento = tag => document.createElement(tag);

const calculadorMult = (mult, num) => mult * num;

btnCalcular.addEventListener('click', () => {
    const inputValor = Number(document.querySelector('#campo-num').value);
    divResultado.innerHTML = '';

    if(!inputValor) {
        const tagSpan = criarElemento('span');
        tagSpan.textContent = 'Esse valor digitado não é um número!';
        divResultado.appendChild(tagSpan);
    } else {

        for(let i = 1; i <= 10; i++) {
            const mult = calculadorMult(inputValor, i);

            const tagSpan = criarElemento('span');
            tagSpan.style.display = 'block';
            tagSpan.textContent = `${inputValor} x ${i} = ${mult}`;
            divResultado.appendChild(tagSpan);
        }

    }
});