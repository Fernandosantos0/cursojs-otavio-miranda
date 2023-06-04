/* Estrutura de Tratamento de Erro */

// try -> Esse bloco significa tentar

try {
    console.log(soma(4,4,5))
} catch(erro) {
    console.error('Erro do programa!');
    console.error(erro);
}