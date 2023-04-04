// Aula 4.5 Imprimindo mensagens

export default function ehMaiorDeIdade(campo) {

    const dataNascimento = new Date(campo.value);

    if (!validaIdade(dataNascimento)){
        // É preciso que o retorno seja transformado em "true" para que seja atendida a condição do "if"
        // Se a função retornar "false", a pessoa é menor de idade, o ponto de exclamação "!" nega o "false" tornando para "true" para que a mensagem customizada seja impressa
        
        campo.setCustomValidity('O usuário não é maior de idade');
            // O método "setCustomValidity()" habilita o a mensagem de erro customizado
            // Artigo: setCustomValidity():  https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/setCustomValidity

    };

}

function validaIdade(data) {
    
    const dataAtual = new Date();
    
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    
    return dataAtual >= dataMais18;
        // Retorna "true" se a pessoa for maior de idade, pois a data atual é maior do que a data que a pessoa completou 18 anos
        // Retorna "false" se a pessoa for menor de idade, pois a data atual é menor do que a data que a pessoa completou 18 anos

}



/* // Aula 4.5 Imprimindo mensagens

export default function ehMaiorDeIdade(campo) {

   const dataNascimento = new Date(campo.value);

   validaIdade(dataNascimento);

   console.log(validaIdade(dataNascimento));

}

function validaIdade(data) {
    
    const dataAtual = new Date();
    
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    
    return dataAtual >= dataMais18;
        // Retorna "true" se a pessoa for maior de idade, pois a data atual é maior do que a data que a pessoa completou 18 anos
        // Retorna "false" se a pessoa for menor de idade, pois a data atual é menor do que a data que a pessoa completou 18 anos

}
*/


/* // Aula 3.7 Validando a idade

export default function ehMaiorDeIdade(campo) {

    const dataNascimento = new Date(campo.value);
        // Será colocado na constante "dataNascimento" o valor do campo no formato de data por meio do método "new Date()"

    // console.log(dataNascimento);
        // console.log feito para verificar qual o retorno da constante "dataNascimento"

    console.log(validaIdade(dataNascimento));
        // Fazendo o console log para veriricar se a função está retornando o valor Boolean

}

function validaIdade(data) {
    
    const dataAtual = new Date();
        // A constante irá receber a data atual do momento que estiver sendo chamada
        // O médoto "new Date()" sem nenhum parâmetro irá atribuir a constante "dataAtual" a data atual 
    
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
        // A constante irá receber uma nova data que será composta pela data de nascimento somado ao ano 18 anos
        // "data.getUTCFullYear()" pega o ano da data que está recendo do parâmetro
        // "data.getUTCFullYear() + 18" pega o ano da data que vem do parâmetro e soma a ele 18
        // "data.getUTCMonth()" pega o mês da data que vem do parâmetro
        // "data.getDate()" pega o dia da data que vem do parâmetro
        // Essa nova data será atribuida à constante "dataMais18"
        // Com essa nova data será possível comprar com a data atual e verificar se a pessoa é maior de idade
    
    return dataAtual >= dataMais18;
    // Se a "dataAtual" for maior ou igual a "dataMais18", significa que a pessoa já é maior de idade.

}

*/


