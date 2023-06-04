// const data = new Date('2023-04-30T18:19:59');
const data = new Date(2022, 0, 1, 23, 59, 1000)

console.log(data.toLocaleString('pt-br', {
	dateStyle: 'short'
}));