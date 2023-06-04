const getData = time => {
    if(time && !(time instanceof Date)) {
        throw new TypeError('O parâmetro passado não é uma instância de Date.');
    }

    if(!time) {
        time = new Date();
    }

    return time.toLocaleTimeString('pt-br');
};

/* Estrutura de Tratamento de Erro */
try {
    const data = 'ola';
    const hora = getData(data);
    
    console.log(hora);
} catch(err) {
    console.log(err);
} finally {
    console.log('Tenha um bom dia!');
}