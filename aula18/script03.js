const pessoa = {
    nome: 'Fernando',
    sobrenome: 'Santos',
    idade: 23,

    get nascimento() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.idade;
    }
};

console.log(pessoa);
console.log(pessoa.nascimento)