// Aula 4.5 Imprimindo as mensagens

export default function ehUmCPF(campo) {

    const cpf = campo.value.replace(/\.|-/g, "");

    console.log(cpf);

    if (verificaNumerosRepetidosCPF(cpf) || validaPrimeiroDigitoVerificador(cpf) || validaSegundoDigitoVerificador(cpf) ) {

        campo.setCustomValidity
        ("Esse CPF é inválido.");
            // Foi habilitado o "setCustomValididy()" para habilitar o erro customizado
            // Esse erro customizado pega se os números são repetidos e verifica os Dígitos Verificadores
            // Se algum dessas verificações retornar como "true", o erro customizado será habilitado e a mensagem será impressa

    }

}

function verificaNumerosRepetidosCPF(cpf){

    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
        ];

    return numerosRepetidos.includes(cpf);

};


function validaPrimeiroDigitoVerificador(cpf) {

    let soma = 0;

    let multiplicador = 10;

    for( let tamanho = 0; tamanho <9; tamanho++){

        soma += cpf[tamanho] * multiplicador;

        multiplicador--;

    }

    let resultado = (soma * 10) % 11;

    if (resultado == 10 || resultado == 11) {

        resultado = 0;

    }

    return resultado != cpf[9];

}

function validaSegundoDigitoVerificador(cpf) {

    let soma = 0;

    let multiplicador = 11;

    for( let tamanho = 0; tamanho <10; tamanho++){

        soma += cpf[tamanho] * multiplicador;

        multiplicador--;

    }

    let resultado = (soma * 10) % 11;

    if (resultado == 10 || resultado == 11) {

        resultado = 0;

    }

    return resultado != cpf[10];

}




/* // Aula 3.3 VValidando o CPF - parte 3

export default function ehUmCPF(campo) {

    const cpf = campo.value.replace(/\.|-/g, "");

    console.log(cpf);

    //console.log(verificaNumerosRepetidosCPF(cpf));

    //console.log(validaPrimeiroDigito(cpf));

    //console.log(validaSegundoDigito(cpf));

    if (verificaNumerosRepetidosCPF(cpf) || validaPrimeiroDigitoVerificador(cpf) || validaSegundoDigitoVerificador(cpf) ) {

        console.log("Esse CPF é inválido.");

    } else {

        console.log("Esse CPF é válido.");

    }
        // Foi criado uma condição para que informe que o CPF é inválido.
        // As funções foram criadas para retorar "true" para o caso do CPF seja inválido.
        // Foi criada a condição "if" para verificar se alguma das funções irá retornar "true".
        // Foi utilizada na condição a operação lógica "ou" para se caso alguma das funções retornar "true",
        // informar que o CPF é inválido

}

function verificaNumerosRepetidosCPF(cpf){

    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
        ];

    return numerosRepetidos.includes(cpf);

};


function validaPrimeiroDigitoVerificador(cpf) {

    let soma = 0;

    let multiplicador = 10;

    for( let tamanho = 0; tamanho <9; tamanho++){

        soma += cpf[tamanho] * multiplicador;

        multiplicador--;

    }

    let resultado = (soma * 10) % 11;

    if (resultado == 10 || resultado == 11) {

        resultado = 0;

    }

    return resultado != cpf[9];

}

function validaSegundoDigitoVerificador(cpf) {
    // A estrutura da verificação do Segundo Dígito Verificador é igual ao primeiro,
    // A faixa de elementos necesários para fazer a validação do segundo dígito verificador é maior e
    // por isso é necessário fazer algumas alterações nos valores de algumas variáveis

    let soma = 0;

    let multiplicador = 11;
        // O valor do multiplicador será alterada para 11

    for( let tamanho = 0; tamanho <10; tamanho++){
        // Alterado o tamanho para 10
        // Para fazer a validação do 1ª dígito verificador era necessário que o tamanho fosse até o 9 para pegar a faixa de números até 9ª elemento
        // Para fazer a validação do 2ª dígito verificador é necessário alterar o tamanho para 10 para pegar a faixa de números até 10ª elemento

        soma += cpf[tamanho] * multiplicador;

        multiplicador--;

    }

    let resultado = (soma * 10) % 11;

    if (resultado == 10 || resultado == 11) {

        resultado = 0;

    }

    return resultado != cpf[10];
        // Alterado o index para 10 para que possa ser feita a comparação com o 11ª elemento do CPF

}

*/



/* // Aula 3.2 VValidando o CPF - parte 2

export default function ehUmCPF(campo) {

    const cpf = campo.value.replace(/\.|-/g, "");

    console.log(cpf);

    console.log(verificaNumerosRepetidosCPF(cpf));

    validaPrimeiroDigito(cpf);
        // Chama a função que fará a validação do Primeiro Digito

}

function verificaNumerosRepetidosCPF(cpf){

    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
        ];

    return numerosRepetidos.includes(cpf);

};


function validaPrimeiroDigito(cpf) {
    // Função que irá validar o Primeiro Digito

    let soma = 0;
        // Variável criada para acumular os resultados de cada loop da operação feita dentro "for"
    
    let multiplicador = 10;
        // Variável criada para decrementar a cada loop dentro do "for"

    for( let tamanho = 0; tamanho <9; tamanho++){
        // Será feito um loop para pegar cada elemento antes do Primeiro Digito verificador
        // É dado o tamanho da lista que inicia no primeiro elemento, posição 0, e termina antes do 10º elemento, que é o digito verificiador, posição 9.

        soma += cpf[tamanho] * multiplicador;
            // É feito um cálculo para validar o CPF por meio dos digitos verificadores. A validação é feita com cada digito verificador.
            // Esse parte do código irá pegar elemento e irá multiplicar pelo valor do multitlicador, que inicia com a posição do elemento e será decrescido 1 a cada loop.

        multiplicador--;
            // Esse parta do código irá decrescer 1 do valor do multiplicador

        // Dentro do for será feito:
        // 1) Pega o 1º elemento e multiplica pelo multitlicador, que será 10.
        // 2) Esse valor será guardado na variável, será decrescido para 9 o valor do multiplicador e será feito o próximo loop
        // 3) Pega o 2º elemento e multiplica pelo multiplicador, que será 9
        // 4) Esse valor será guardado na variável, será decrescido para 9 o valor do multiplicador e será feito o próximo loop
        // ... Os 2 passos anteriores serão repetidos até chegar no elemento anterior ao 10ª digito verificador

    }

    let resultado = (soma * 10) % 11;
        // Depois do "for", do loop, a variável "soma" terá recebido e acumulado todos os valores de cada operação feita no loop
        // Será feita a multiplicação do valor de "soma" por 10 e depois
        // Será pegado o resto da divisão do resultado da operação anterior por 11
        // A variável "resultado" irá receber o resultado dessas operações

    if (resultado == 10 || resultado == 11) {
        // É feito um IF para varificar se o resultado é igual a 10 ou a 11

        resultado = 0;
            // Se o resultado for igual a 10 ou a 11, será atrivuido para "resultado" o valor de 0
    
    }

    return resultado != cpf[9];
        // Será retornado "true" ou "false" para a condição do valor do resultado for diferente do valor do 10ª digitio verificador
        // Se retornado "true", é porque o valor é difente e o CPF INVÁLIDO.
        // Se retornado "false", é porque o valor é igual e o CPF VÁLIDO.
        // Foi colocada a condição dessa maneira, pois já se está pensando na construção do IF para validar o CPF
        // Caso sejá "true" a condição IF irá tratar o CPF inválido.

}
*/



/* // Aula 2.5 Validando o CPF - parte 1

export default function ehUmCPF(campo) {
    // O termo "export default" significa a função será exportada como padrão
    // A função irá receber o campo como parâmetro da função

    const cpf = campo.value.replace(/\.|-/g, "");
        // Foi criado a constante CPF, que irá receber apenas os números/
        // A método .replace irá substituir os pontos e o traço que possam vir por um vazio
        // O método .replace precisa de 2 parâmetros, o primeiro é o que ele irá substituir e o segundo é pelo que ele irá substituir

    console.log(cpf);
        // Console.log feito para verificar se a função está retornando o CPF quando o INPUT do CPF perde o foco

    console.log(verificaNumerosRepetidosCPF(cpf));
        // Console.log feito para verificar se o retorno é verdadeiro ou falso para um CPF com todos os números repetidos 

}

    // A primeira validação personalizada é a dos números repetidos do CPF:

function verificaNumerosRepetidosCPF(cpf){
    //Essa função será chamada para veriricar se o CPF tem todos os números repetidos

        // Lista com os números repetidos
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
        ];

    return numerosRepetidos.includes(cpf);
        // É usado o método ".includes" para pecorrer a lista e verificar se o número informado do CPF é igual a um dos números da lista
        // O médoto irá comparar com cada item da lista e irá retornar verdadeiro ou falso
        // Para passar para a função o valor de verdadeiro ou falso, é preciso colocar o "return"

};
*/
