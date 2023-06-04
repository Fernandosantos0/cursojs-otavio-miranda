const pessoa01 = new Object({
    nome: 'Fernando',
    sobrenome: 'Santos',
    idade: 22,

    // Criando um método
    fala() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e a minha idade atual é ${this.idade} anos de idade!`)
    },

    increentaIdade: function() {
        this.idade++;
    }
});

pessoa01.fala();
pessoa01.increentaIdade();

pessoa01.fala();
pessoa01.increentaIdade();

pessoa01.fala();
pessoa01.increentaIdade();