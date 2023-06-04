function retornaHora(data) {

    /* Estrutura condicional para verificar se foi passado o parâmetro data e se esse parâmetro tem a instância de Date */
    if(data && !(data instanceof Date)) {
        throw new TypeError('Não foi passado um parâmetro com a instância de Date');
    }

    /* Estrutura condicional para criar uma variável data com a instância de Date caso o parâmetro não tenha sido passado*/
    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}


/* Estrutura de Tratamento de Erro */
try {
    const dt = new Date()
    const hora = retornaHora();
    
    console.log(hora);
} catch(e) {
    console.error(e);
} finally {
    console.info('Tenha um bom dia!');
}