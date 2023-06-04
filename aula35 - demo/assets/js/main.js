const elementos = [
    {tag: 'p', texto: 'Tag p criada via JavaScript'},
    {tag: 'span', texto: 'Tag span criada via JavaScript'},
    {tag: 'div', texto: 'Tag div criada via JavaScript'},
    {tag: 'header', texto: 'Tag header criada via JavaScript'},
    {tag: 'section', texto: 'Tag section criada via JavaScript'},
    {tag: 'footer', texto: 'Tag footer criada via JavaScript'},
    {tag: 'aside', texto: 'Tag aside criada via JavaScript'},
    {tag: 'a', texto: 'Tag a criada via JavaScript'},
];

const criarElemento = tag => window.document.createElement(tag);

function getLink() {
    const vl = Math.floor(Math.random() * 3);

    switch(vl) {
        case 0:
            return 'https://www.google.com';

        case 1:
            return 'https://www.youtube.com/';

        case 2:
            return 'https://www.nasa.gov/';
    }
}

const container = window.document.querySelector('.container');
const data = new Date(Date.now());

for(let index = 0; index < elementos.length; index++) {
    const {tag, texto} = elementos[index]; // Estrutura de atribuição via desestruturação

    const tagHTML = criarElemento(tag);
    tagHTML.textContent = texto;

    if(tagHTML.nodeName === 'A') {
        tagHTML.href = getLink();
    }

    container.appendChild(tagHTML);
}

console.log(data.toLocaleTimeString('pt-br', {
   timeStyle: "medium"
}))