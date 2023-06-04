const elementos = [
    {tag: 'p', texto: 'Texto 1'},
    {tag: 'span', texto: 'Texto 2'},
    {tag: 'div', texto: 'Texto 3'},
    {tag: 'header', texto: 'Texto 4'},
    {tag: 'section', texto: 'Texto 5'},
    {tag: 'footer', texto: 'Texto 6'},
    {tag: 'aside', texto: 'Texto 7'},
    {tag: 'a', texto: 'Texto 8'},
];

/* Função para criar elementos HTML via JavaScript */
const criarElemento = tag => document.createElement(tag);

/* Selecionando o elemento do DOM*/
const conteiner = document.querySelector('.container');

const corpoBody = getComputedStyle(window.document.body);
const estiloBody = corpoBody.backgroundColor;
const div = criarElemento('div');

conteiner.appendChild(div);

for(let elemento of elementos) {
    const {tag, texto} = elemento;

    const tagHTML = criarElemento(tag);
    tagHTML.textContent = texto;
    tagHTML.style.backgroundColor = estiloBody;

    div.insertAdjacentElement('beforeend', tagHTML);
}