const relogio = (data) => {
    if(data && !(data instanceof Date)) {
        console.log('Você não passou um parâmetro com a instância de Date');
    }

    if(!data) {
        let data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
};

let tmp = setInterval(() => {
    const data = new Date();
    console.log(relogio(data));
}, 1000);

setTimeout(function() {
    clearInterval(tmp);
}, 5000);