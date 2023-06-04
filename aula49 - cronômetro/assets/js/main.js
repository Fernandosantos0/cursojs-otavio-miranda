const container = document.querySelector('#container');
const visorCronometro = container.querySelector('#visor-cronometro');
let segundo = 0;
let tmp = null;

/* Função para cronometra o tempo */
const getCronometro = (s) => {
	const data = new Date(1000 * s);
	
	return data.toLocaleTimeString('pt-br', {
		timeZone: 'UTC',
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});
};

container.addEventListener('click', (e) => {
	const el = e.target;
	
	if(el.classList.contains('btn-iniviar')) {
		tmp = setInterval(() => {
			segundo++;
			visorCronometro.textContent = getCronometro(segundo);
			visorCronometro.classList.add('iniciar');
			visorCronometro.classList.remove('pausar');
			visorCronometro.classList.remove('zerar');
		}, 100);
	}
	
	if(el.classList.contains('btn-pausar')) {
		clearInterval(tmp);
		visorCronometro.classList.add('pausar');
		visorCronometro.classList.remove('iniciar');
		visorCronometro.classList.remove('zerar');
	}
	
	if(el.classList.contains('btn-zerar')) {
		clearInterval(tmp);
		visorCronometro.textContent = '00:00:00';
		visorCronometro.classList.add('zerar');
		visorCronometro.classList.remove('pausar');
		visorCronometro.classList.remove('pausar');
		segundo = 0;
	}
	
});