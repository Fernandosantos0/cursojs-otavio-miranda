const getTextoSemana = (date) => {
    const semanas = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return semanas[date];
};

const inserirZero = time => time >= 10 ? time : `0${time}`;

const getTextoMes = (time) => {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[time];
};

const tagH1 = window.document.querySelector('.container > h1');

const data = new Date(Date.now());
const getSemana = data.getDay();
const getDia = inserirZero(data.getDate());
const getMes = data.getMonth();
const getAno = data.getFullYear();
const getHora = data.getHours();
const getMinuto = data.getMinutes();

const txtSemana = getTextoSemana(getSemana);
const txtMes = getTextoMes(getMes);

tagH1.innerHTML = `${txtSemana}, ${getDia} de ${txtMes} de ${getAno} <br> ${getHora}:${getMinuto}`;

