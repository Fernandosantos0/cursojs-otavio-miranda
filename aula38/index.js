const nome = 'Fernando Santos Pereira';

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('--------------');

for(let index of nome) {
    console.log(index);
}

console.log('--------------');

const name = [...nome];

name.forEach((letra) => {
    console.log(letra);
});