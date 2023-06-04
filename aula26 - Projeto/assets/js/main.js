"use strict"

/* Função para criar elementos HTML5 */
const criarElementoHTML = tag => this.document.createElement(tag);

/* Seção de declaração de variáveis e constantes */
const formulario = document.querySelector('#form');
const btnCalcular = formulario.querySelector('#form button');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.querySelector('#resultado');
const span = criarElementoHTML('span');

/* Função para calcular o IMC do usuário */
const calcIMC = (peso, altura) => {
    peso = Number(peso);
    altura = Number(altura);

    // Calculando o IMC do usuário
    const calc = peso / (altura ^ 2);
    return calc.toFixed(2);
};

const resultadoIMC = (indice) => {
    if(indice < 18.5) {
        return 'Abaixo do peso';
    }

    if(indice < 24.9 && indice > 18.5) {
        return 'Peso normal';
    }

    if(indice < 29.9 && indice > 25) {
        return 'Sobrepeso';
    }

    if(indice < 34.9 && indice > 30) {
        return 'Obesidade grau 1';
    }

    if(indice < 39.9 && indice > 35) {
        return 'Obesidade grau 2';
    }

    if(indice > 40) {
        return 'Obesidade grau 3';
    }
};

const mostrarResultado = (indice, result) => {
    span.textContent = `O seu IMC é de ${indice} (${result})`;
    resultado.setAttribute('class', 'valido');
    resultado.appendChild(span);
};

/* Escutando o evento click do botão */
btnCalcular.addEventListener('click', (event) => {
    event.preventDefault();

    const inputPeso = Number(peso.value);
    const inputAltura = Number(altura.value);

    // Estrutura condicional para realizar uma pequena validação
    if(!inputPeso) {
        span.textContent = 'Peso inválido!';
        resultado.setAttribute('class', 'invalida');
        resultado.appendChild(span);
        return;
    }
    
    if(!inputAltura) {
        span.textContent = 'Altura invalida!';
        resultado.setAttribute('class', 'invalida');
        resultado.insertAdjacentElement("afterbegin", span)
        return;
    } 

    // Calculando o IMC do usuário
    const IMC = calcIMC(peso.value, altura.value);
    const resultTXT = resultadoIMC(IMC);

    // Mostrando o resultado 
    mostrarResultado(IMC, resultTXT);
});