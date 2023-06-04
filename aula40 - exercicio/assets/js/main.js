const paragrafos = window.document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(window.document.getElementsByTagName('body')[0]);
const backgroundcolorBody = estiloBody.backgroundColor;

let num = 1;

for(let p of ps) {
    p.textContent = `Paragráfo ${num++}`;
    p.style.backgroundColor = backgroundcolorBody; // Aplicando uma cor de fundo
    p.style.color = 'white'; // Aplicando uma cor para o parágrafo
    p.style.padding = `2% 0`; // Aplicando um espaçamento no parágrafo 
    p.style.textAlign = 'center'; // Centralizando o texto
}