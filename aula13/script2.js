const nome = 'Fernando Santos Pereira';

/* 
 * /[a-b]/g
*/

console.log(nome.length);
console.log(nome.charAt(4)); // Retorna o caracte armazenado no índice
console.log(nome.charCodeAt(6)); // Retorna o valor ASCII
console.log(nome.replace('Fernando', 'Carlos Eduardo')); // Retorna um valor com o seu caractere alterado
console.log(nome.replace(/n/g, '#'))
console.log(nome.concat(' de Souza Cruz')); // Inseri um valor concatenado 
console.log(nome.split(' ')); // Retorna uma valor em uma estrutura de arrey (ou vetor)
console.log(nome.split(' ', 2)); // Retorna uma valor em uma estrutura de arrey (ou vetor)