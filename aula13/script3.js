const nome = "Fernando Santos";
const cidade = ' Nova Iguaçu';

console.log(cidade.trim());

[...nome].forEach( v => console.log( v.toUpperCase() ) );

console.log(nome.charAt(5));

console.log(nome.charCodeAt(5)); // Retorna o código ASCII

console.log(nome.indexOf('a'));

console.log(nome.toLowerCase());

console.log(nome.substring(0, 6));

console.log(...nome);

const completo = nome.concat(' é da cidade de Nova Iguaçu!');

console.log(completo);

console.log(nome.split(' ', 1));

console.log(cidade.trim());

console.log(cidade.length);

console.log(typeof cidade === 'string' ? 'Verdade': 'Falso'); // Operador Ternário

console.log(cidade.replace('Nova Iguaçu', 'São Paulo, SP'));