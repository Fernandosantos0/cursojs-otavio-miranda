"use strict"

/*
    Luiz Otávio Miranda tem 30 anos, pesa 84kg
    tem 1.8 de altura e seu IMC é de 25.9864212
    Luiz Otávio nasceu em 1980
*/

const nome = 'Fernando';
const sobrenome = 'Santos';
const idade = 23;
const peso = 84;
const altura = 1.79;
let indiceMassaCorporal = peso / (altura ** 2);
let anoNascimento = new Date().getFullYear() - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);