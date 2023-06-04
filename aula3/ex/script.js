"use strict";

const getHour = () => { // Arrow Function
    return new Date().getHours();
};

const getMsgHour = function msgHour(hour) { // Função Anônima
    
    if(!(hour instanceof Date)) {
        hour = new Date().getHours();
    }

    if(hour < 6) {
        return 'madrugada';
    }

    if(hour < 12) {
        return 'manhã';
    }

    if(hour < 18) {
        return 'tarde';
    }

    if(hour < 24) {
        return 'noite';
    }
};

console.log(`Meu nome é "Fernando Santos". Estou aprendendo JavaSrcipt ás ${getHour()} da ${getMsgHour('Olá mundo')}.`);