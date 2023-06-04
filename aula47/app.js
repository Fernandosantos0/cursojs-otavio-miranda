/* A estrutura de tratamento de erro também pode se aninhada */

try {
    // console.log(a);
    console.log('Abrindo o arquivo');
    console.log('Manipulado o arquivo');

    try {
        console.log('Outra esrutura de erro!');
        console.log(f);
    } catch (e) {
        console.log(f);
    } finally {
        console.log('Eu sou uma outra finally');
    }

} catch(e) {
    console.log('Tratadodo erro do arquivo');
} finally {
    console.log('Fechando o arquivo!');
}