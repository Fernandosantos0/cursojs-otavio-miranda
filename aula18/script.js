const criarPessoa = (name, lastname, age) => {
    return {
        nome: name,
        sobrenome: lastname,
        idade: age,
    }
}

const pessoa01 = criarPessoa('Fernando', 'Santos', 23);

// for(let chave in pessoa01) {
//     console.log(pessoa01[chave]);
// }