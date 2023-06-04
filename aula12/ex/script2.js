let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

/* Atribuição via desestruturação */
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);