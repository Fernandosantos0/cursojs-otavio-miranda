const tagH1 = document.querySelector('.container h1');
const data = new Date();

const opcao = {
    dateStyle: 'full',
    timeStyle: 'short'
};

tagH1.textContent = data.toLocaleDateString('pt-br', opcao);