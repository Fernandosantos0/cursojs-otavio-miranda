const pessoas = new Array('Carlos', 'Miguel','Felipe','Eduardo','Fernanda','Henrique','Martheus','Mauro','Ricardo');

const numeros = [
    [0,8,9], [10,4,5],
    [11,7,3], [12,4,6],
    [12,4,1], [13,12,7]
]

const [nome1, nome2, nome3, nome4, ...resto] = pessoas;

const [numero1, ,numero3, numero4] = numeros;

console.log(numero1[2], numero3[0], numero4);

console.log(nome1, nome2, nome3, resto)