try {
    console.log('Olá, mundo!');
} catch(e) {
    throw new TypeError('Algum erro foi encontrado!');
} finally {
    console.log('Finalizado!');
}