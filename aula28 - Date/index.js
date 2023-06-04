/* Objeto construtor Date */
// 01/01/1970 Timestamp Unix ou Época Unix

// const data = new Date(2001, 8, 15, 15, 18, 1, 580); 

const data = new Date('2019-05-20T21:14:53 455');

console.log(data.toUTCString());

console.log(data.toDateString());

console.log(data.toString());

console.log( Date.now() ); // Mostrar o milessimo de segundo de segundo da data