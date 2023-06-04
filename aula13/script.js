// Uma string é um valor indetiçavel, isto é, tem index
const nome = 'Fernando Santos';
const umString = "Esse é um \"texto\""

console.log(umString.concat(' ', 'em um', ' lindo dia!'));

console.log(nome.charAt(3));

console.log(nome.charCodeAt(3));

console.log(nome.indexOf('S', 4));

console.log(nome.lastIndexOf('S'));

console.log(nome.match(/[a-z]/g));

console.log(nome.search(/t/));

console.log(nome.replace('Fernando', 'Carlos'));

console.log(nome.replace(/n/g, '#'));

console.log(nome.length);

console.log(nome.slice(0, 13));

console.log(nome.substring(0, 13));

console.log(nome.split(' '));

console.log(umString.split('e', 3));

console.log(nome.toUpperCase());

console.log(nome.toLowerCase());