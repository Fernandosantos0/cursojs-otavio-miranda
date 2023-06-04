const inserirZero = (num) => num >= 10 ? num : `0${num}`;

const formatacaoData = (data) => {
    
    /* Estrutura condicional para verificar se o objeto é um Date */
    if(!(data instanceof Date)) {
        data = new Date(Date.now());
    }

    const getDia = inserirZero(data.getDate());
    const getMes = inserirZero(data.getMonth() + 1);
    const getAno = inserirZero(data.getFullYear());
    const getHora = inserirZero(data.getHours());
    const getMin = inserirZero(data.getMinutes());
    const getSeg = inserirZero(data.getSeconds());

    return `${getDia}/${getMes}/${getAno} ${getHora}:${getMin}:${getSeg}`;
};

const data = new Date(Date.now());
const formatoBrasileiro = formatacaoData(data);

console.log(formatoBrasileiro);