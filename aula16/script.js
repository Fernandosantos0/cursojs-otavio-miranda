// const alunos = ['Rafael', 'Luis', 'Henrique', 'Pedro', 1, true, false, null, () => 'Oi', 'Carol', 'Davi'];

// console.log(alunos[8]());

// console.log(alunos[alunos.length - 1]);

const alunos = ['Otávio', 'Luisa', 'Pedro'];

// alunos[alunos.length] = 'Marcelo';
// alunos[alunos.length] = 'Bianca';
// alunos[alunos.length] = 'Juliana';
// alunos[alunos.length] = 'Caio';

alunos.push('Marcelo');
alunos.push('Bianca');
alunos.push('Juliana');
alunos.push('Caio');

alunos.unshift('Fernando');
alunos.unshift('Felipe');

const deletarI = alunos.shift();

const deletarF = alunos.pop();

const remove = delete alunos[2];

console.log(alunos);
console.log(deletarI);
console.log(deletarF);
console.log(remove);

alunos[2] = 'Joana';

console.log(alunos.splice(0, 4))