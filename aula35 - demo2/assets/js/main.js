const elementos = [
    {tag: 'h3', texto: 'Texto randômico'},
    {tag: 'p', texto: 'Tag parágrafo'},
    {tag: 'h4', texto: 'Tag h4'},
    {tag: 'span'},
    {tag: 'div', texto: 'Tag div'},
    {tag: 'a', texto: 'Clique aqui!'}
];

const result = window.document.querySelector('div#result');

/* Capturando um link randômico */
const getLink = function() {
    const num = Math.floor(Math.random() * 10);

    switch(num) {
        case 1:
            return 'https://www.google.com';

        case 2:
            return 'https://www.youtube.com';
        
        case 3:
            return 'https://www.canva.com';

        case 4:
            return 'https://www.instagram.com'

        case 5:
            return 'https://twitter.com';

        case 6:
            return 'https://www.facebook.com/';

        case 7:
            return 'https://www.instagram.com/';
        
        case 8:
            return 'http://www.bosontreinamentos.com.br/';

        case 9:
            return 'https://www.cursoemvideo.com/';

        case 10:
            return 'https://g1.globo.com/';

        default:
            return 'https://developer.mozilla.org/pt-BR/';
    }
};

/* Função para criar um elemento HTML5 via JavaScript */
const criarElemento = tag => window.document.createElement(tag);

for(let i = 0; i < elementos.length; i++) {
    const {tag, texto: txt = 'Não foi inserido nada!'} = elementos[i];

    const tagHTML = criarElemento(tag);

    /* Estrutura condicional para verificar se esse elemento é um âncora (a) */
    if(tagHTML.nodeName === 'A') {
        tagHTML.setAttribute('href', getLink());
        tagHTML.rel = 'external';
        tagHTML.target = '_self';
    }

    tagHTML.textContent = txt;

    result.insertAdjacentElement('beforebegin', tagHTML);
}