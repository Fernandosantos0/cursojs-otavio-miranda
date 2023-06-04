const relogio = time => {

    if(time && !(time instanceof Date)) {
        throw new TypeError('Parâmetro que foi passada não é um objeto Date!');
    }

    if(!time) {
        time = new Date('2023-09-12T23:02:56');
    }

    return time.toLocaleTimeString('pt-br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })
};


try {
    const data = new Date('2023-09-12T23:02:56');
    const hora = relogio();
    
    console.log(hora);
} catch(e) {
    console.log(e);
} finally {
    console.log('Tenha um bom dia!');
}