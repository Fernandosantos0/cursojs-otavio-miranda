const nome = 'Fernando Santos Pereira';

/* For Clássico - Geralmente com iteráveis (array ou strings) */
/* For in - Retorna o índice ou chave (string, array ou objetos) */
/* For of - Retorna o valor em si (iteráveis, array ou strings) */

console.log('Estrutura de repetição for clássico');
for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('Estrutura de repetição for in');
for(let i in nome) {
    console.log(nome[i]);
}

console.log('Estrutura de repetição for of');
for(let i of nome) {
    console.log(i);
}