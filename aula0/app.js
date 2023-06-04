const nome = 'Fernando Santos Pereira';
const name = ['Carlos', 'Luis', 'Félix', 'Gallan'];

console.log(nome.split(' ')); // Inserindo as string na coleção de array

console.log(name.join(' '));

console.log(nome.charAt(5));

console.log(nome.charCodeAt(5));

console.log(nome.substring(5, 9));

console.log(nome.search('Fernando'));

console.log(nome.indexOf('a'));

console.log(nome.lastIndexOf('a'));

console.log(nome.replace('Fernando', 'Luis'));

console.log(nome.toLocaleLowerCase());

name.map((nome) => {
    if(nome === 'Gallan') console.log('oi')
});

for(let index in name) {
    /* Estrutura condicional */
    if(name[index] === 'Gallan') name[index] = 'Otávio Luis';
}

console.log(name);