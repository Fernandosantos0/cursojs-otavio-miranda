const data = new Date(2019, 0, 13, 23, 6, 5, 1000);

const d = new Date(Date.now());

const date = new Date('2023-03-15 21:09:54');

const calendario = new Date('2023-02-25T00:05:59');

const opcao = new Object({
    dateStyle: 'full',
    timeZone: 'UTC'
});

console.log(data.toString());

console.log(d.toISOString());

console.log(String(date))

console.log(calendario.toLocaleDateString('pt-br', opcao));