function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    let pessoa = new Array();
    
    /* form.onsubmit = (evento) => {
        evento.preventDefault();
        console.log('O evento submit foi prevenido!');
    }; */

    /* Função para criar um objeto JS */
    const criaPessoa = (nome, sobrenome, peso, altura) => {
        return {
            nome,
            sobrenome,
            peso,
            altura
        };
    };

    const recebeEventoForm = (event) => {
        event.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura'); 

        const p = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoa.push(p);

        resultado.innerHTML += `<p>${p['nome']} ${p['sobrenome']} ${p['peso']} ${p['altura']}</p>`;

        console.log(pessoa);
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();