// Arrow Funcion
const getHour = () => new Date().getHours();

// Sintaxe de função normal
// function saudacao(nome) {
//     const horario = getHour();

//     if(horario < 6) {
//         console.log(`Boa madrugada, ${nome}!`);
//     } else if(horario < 12) {
//         console.log(`Bom dia, ${nome}!`);
//     } else if(horario < 18) {
//         console.log(`Boa tarde, ${nome}!`);
//     } else {
//         console.log(`Boa noite, ${nome}!`);
//     }
// }

function saudacao(nome) {
    const horario = getHour();

    // Estrutura Condicional
    if(horario < 6) {
        console.log(`Boa madrugada, ${nome}!`);
    } else if(horario < 12) {
        console.log(`Bom dia, ${nome}!`);
    } else if(horario < 18) {
        console.log(`Boa tarde, ${nome}!`);
    } else {
        console.log(`Boa noite, ${nome}!`);
    }
}

const msg = saudacao('Fernando');