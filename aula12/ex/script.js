let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

const varAuxiliar = varA;
varA = varB;
varB = varC;
varC = varAuxiliar

console.log(varA, varB, varC);