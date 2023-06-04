const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Santos',
    idade: 23,
    nacionalidade: 'Brasileiro',
    naturalidade: 'Rio de Janeiro',
    endereco: {
        rua: 'Antônio Caetano Alves',
        bairro: 'Cruzeiro do Sul',
        numero: 204,
        cidade: 'Nova Iguaçu',
        estado: 'Rio de Janeiro',
        pais: 'Brasil'
    },
    documento: {
        cpf: '204.458.189-89',
        rg: '784664456566456'
    }
};

const {nome: name = 'Desconhecido', sobrenome: lastname = 'Desconhecido'} = pessoa;

for(let chave in pessoa) {
    console.log(`${chave}:`, pessoa[chave]);
}

