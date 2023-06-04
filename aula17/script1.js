const soma = (...numeros) => {
    let s = 0;

    numeros.map((numero) => {
        numero = Number(numero);
        s += numero;
    });
    return s;
};

console.log(soma(2,4,5,'2'));
console.log(soma(2,3));