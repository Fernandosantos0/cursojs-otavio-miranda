const getDiaSemana = (data) => {
    let semana = null;

    switch(data) {
        case 0:
            semana = 'Domingo';
            return semana;
            break;

        case 1:
            semana = 'Segunda';
            return semana;
            break;

        case 2:
            semana = 'Terça';
            return semana;
            break;

        case 3:
            semana = 'Quarta';
            return semana;
            break;

        case 4:
            semana = 'Quinta';
            return semana;
            break;

        case 5:
            semana = 'Sexta';
            return semana;
            break;

        case 6:
            semana = 'Sábado';
            return semana;
            break;
    }

}


const data = new Date('2022-08-14 23:15:55');
const getSemana = data.getDay();
const semanaText = getDiaSemana(getSemana);

console.log(getSemana, semanaText);