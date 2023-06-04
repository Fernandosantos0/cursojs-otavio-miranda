function soma(x, y) {

    if(typeof(x) !== 'number' || typeof(y) !== 'number') {
        throw new ReferenceError('Não é um número!');
    }

    return x + y;
}

try {
    console.log(soma(15, 8));
    console.log(soma('4',9));
} catch(e) {
    console.log(e);
}