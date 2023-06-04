const relogio = (data) => {

    if(data && !(data instanceof Date)) throw new TypeError('Este parâmetro não é uma instância de Date!');

    if(!data) data = new Date();

    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

};

/* Estrutura de Tratamento de Erro */
try {
    const data = new Date();
    const hora = relogio(data);
    console.log(hora);
} catch(e) {
    console.log(e);
} finally {
    console.log('Tenha um bom dia!');
}