window.onload = () => {
    // Seção de declaração de variáveis e constantes
    const formulario = document.getElementById('form');
    const pessoa = new Array();

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputNome = formulario.getElementsByClassName('nome')[0].value;
        const inputSobrenome = formulario.getElementsByClassName('sobrenome')[0].value;
        const inputPeso = formulario.getElementsByClassName('peso')[0].value;
        const inputAltura = formulario.getElementsByClassName('altura')[0].value;

        /* Inserindo um objeto no array */
        pessoa.push({
            nome: inputNome,
            sobrenome: inputSobrenome,
            peso: inputPeso,
            altura: inputAltura
        });

        document.querySelector('#resultado').innerHTML += `<p>${inputNome} ${inputSobrenome} ${inputPeso} ${inputAltura}</p>`;

        console.log(pessoa)
    });

};