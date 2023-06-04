this.alert('Olá, seja bem-vindo!');

const num1 = Number(this.window.prompt('Digite um número:'));
const num2 = Number(this.window.prompt('Digite o segundo número:'));

const calcSomar = function() {
    let s = 0;

    [...arguments].forEach(function(numero) {
        s += numero;
    });

    return s;
};

const soma = calcSomar(num1, num2);
this.alert(`A soma de ${num1} mais ${num2} é ${soma}.`);
this.console.log(`A soma de ${num1} mais ${num2} é ${soma}.`);
this.document.writeln(`<p style="color: green; font-weight: bold;">A soma de ${num1} mais ${num2} é ${soma}.</p>`);