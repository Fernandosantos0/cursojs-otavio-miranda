const pessoa = new Object({
    nome: 'Fernando',
    sobrenome: 'Santos',
    idade: 23,
    endereco: {
        rua: 'Antônio Caetano Alves',
        bairro: 'Cruzeiro do Sul',
        numero: 204
    }
});

const {nome, sobrenome: lastName = 'Desconhecido', endereco: { rua, bairro }} = pessoa;

console.log(nome, lastName)