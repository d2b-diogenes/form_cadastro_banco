// Aula 4.7 localStorage

import ehUmCPF from "./valida-cpf.js";

import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

const formulario = document.querySelector("[data-formulario]");
    // Pego o elemento "form" por meio do data atributes "data-formulario"

formulario.addEventListener("submit", (e) => {

    e.preventDefault();
        // Para inibir a ação padrão de carregar a página

    // console.log(e);
        // Para ver a Array que o evento "e" retorna, que, no caso, é tudo que vem do formulário

    const listaRepostas = {
        // A constante irá receber um objeto contendo os dados informados no formulário

        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,

            // a variável, por exemplo, "nome" irá receber o valor inserido no input "nome"
            // O evento retornou Array do formulário com os elementos que tem dentro dele.
            // É possível acessar os elementos Inputs do fomulário
            // Dentro do "e", que é o array do formulário há o "target", que dentro dele trar os "elementos"
            // Dentro de "elements" tem todos os elementos que o formulário possui dentro dele.

    }

    localStorage.setItem("cadastro", JSON.stringify(listaRepostas));
        // É colocado o retorno das resposta dentro do localStorage para que possa ser recuperado no final do cadastro
        // Para mandar algo para o localStorage é necessário usar o método ".setItem" e nele precisa ser informado 2 parâmetros, o nome da chave, "cadastro", e o o que será salvo. 
        // O local Storage apenas recebe String e por isso foi convertido com o Json string com o JSON.stringify()

    window.location.href = './abrir-conta-form-2.html';

})

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo));

    campo.addEventListener("invalid", evento => evento.preventDefault());

});

const tiposDeErro = [

    'valueMissing',
    'patternMismatch',
    'tooShort',
    'typeMismatch',
    'customError'

];

const mensagens = {

    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, o padrão do CPF digitado não é válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo){

    let mensagem = "";

    campo.setCustomValidity('');

    if (campo.name == "cpf" && campo.value.length >= 11) {

        ehUmCPF(campo);

    };

    if (campo.name == "aniversario" && campo.value != "") {

        ehMaiorDeIdade(campo);

    }

    tiposDeErro.forEach(erro => {   
    
        if(campo.validity[erro]) {

            mensagem = mensagens[campo.name][erro];

        }

    })

    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");

    const validadorDeInput = campo.checkValidity();


    if (!validadorDeInput) { 

        mensagemErro.textContent = mensagem;

    } else {
        
        mensagemErro.textContent = "";

    }
        
};


/* // Aula 4.5 Imprimindo as mensagens

import ehUmCPF from "./valida-cpf.js";

import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo));

    campo.addEventListener("invalid", evento => evento.preventDefault());

});

const tiposDeErro = [

    'valueMissing',
    'patternMismatch',
    'tooShort',
    'typeMismatch',
    'customError'

];


const mensagens = {

    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, o padrão do CPF digitado não é válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}


function verificaCampo(campo){

    let mensagem = "";
        // Quando sai o foco do campo, a variável mensagem é zerada para que não seja impresso nada

    campo.setCustomValidity('');
        // O ".setCustomValidity('')" inicia desabilitado
        // Foi desabilitado o ".setCustomValidity('')" colocando dentro das aspas um vazio, isso determina que não há erro.
        // Em outra parte do código ele será habilitado quando em erro customizado acontecer
        // Colocar o "setCustomValidity('')" nessa posição do código possibilita que quando o foco do campo sair seja feita uma nova verificação se o campo está válido,
        // o ".setCustomValidity('')" inicia desabilitado e se o dado do campo estiver correto a mensagem de erro será apagada

    if (campo.name == "cpf" && campo.value.length >= 11) {

        ehUmCPF(campo);

    };

    if (campo.name == "aniversario" && campo.value != "") {

        ehMaiorDeIdade(campo);

    }

    tiposDeErro.forEach(erro => {
        // Para cada tipo de erro dentro da lista "tiposDeErro" será criado um validador de erro
        // A cada Loop o "if" irá verificar se é o tipo erro da lista de "tiposDeErro"    
    
        if(campo.validity[erro]) {
            // O "campo.validity" retorna "true" caso o um erro tenha acontecido dentro do campo
            // A condição "if" irá verificar se o erro que ocorreu é um dos erros que está dentro da lista "tiposDeErro"

            mensagem = mensagens[campo.name][erro];
                // Se a condição foi verdadeira, então a condição será executada
                // O objeto "mensagem" tem dentro dele objetos, que são os nomes dos campos, que também são objetos
                // "mensagens[campo.name][erro]" irá acessar o objeto "mensagens" 
                // "[campo.name]" Irá acessar objeto tipo do campo dentro do objeto "mensagens"
                // "mensagens[campo.name][erro]" Depois de acessado o objeto tipo do campo, irá acessar a variável com a mensagem para o tipo de erro dentro do objeto "tipo de campo"
            
            // console.log(mensagem);
        }

    })

    const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
        // A constante irá receber o elemento que é parante do campo com erro e que tem a classe "mensagem-erro"

    const validadorDeInput = campo.checkValidity();
        // A constante irá receber o retorno "true" ou "false". "true" para o caso do campo está válido e "false" para o caso do campo está inválido


    if (!validadorDeInput) {
        // O retorno vem "false", pois é falso que o campo está válido.
        // É negado o "false" para que a condição se torne "true"
        // Com isso, se o campo estiver inválido, retornará "false", nega, vira "true" e é executado 

        mensagemErro.textContent = mensagem;
            // A mensagem será inserida no "textContent" do elemento "mensagemErro"

    } else {
        // Se o campo estiver válido
        
        mensagemErro.textContent = "";
            // Será inserido um espaço vazio no "textContent" do elemento "mensagemErro"

    }
        
};
*/



/* // Aula 4.4 Mensagens customizadas

import ehUmCPF from "./valida-cpf.js";

import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo));

    campo.addEventListener("invalid", evento => evento.preventDefault());

});

const tiposDeErro = [
    // A constante irá receber uma lista com os tipos de Erros que serão tratados

    'valueMissing',
        // Erro para quando o campo não é preenchido
    'patternMismatch',
        // Ocorre o erro quando o pattern não é seguido, um padrão colocado para que o campo siga
    'tooShort',
        // Irá verificar se há o atributo "minlength" e irá verificar se o que foi inserido no campo respeita esse tamanho mínimo. 
    'typeMismatch',
        // Quando o que é preenchido no campo não está combinando com o tipo do campo
    'customError'
        // customErros são os erros customizados, como as validações para o CPF e para a idade
];


const mensagens = {
    // Constante que irá receber um objeto com outros objetos dentro
    // O objetos dentro do Objeto "mensagens" são os campos
    // Dentro objeto campo têm as menssagens para os possíveis erros 

    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}


function verificaCampo(campo){

    if (campo.name == "cpf" && campo.value.length >= 11) {

        ehUmCPF(campo);

    };

    if (campo.name == "aniversario" && campo.value != "") {

        ehMaiorDeIdade(campo);

    }

    console.log(campo.validity);

};
*/



/* // Aula 4.2 Trabalhando com Validity State

import ehUmCPF from "./valida-cpf.js";

import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo));

    campo.addEventListener("invalid", evento => evento.preventDefault());
        // A cada Loop será criado para cada campo um escutador para o evento 'invalid'
        // Quando ocorrer o evento 'invalid' será interrompida a ação padrão.
        // O método "preventDefault()" interrompe a ação padrão, que, no caso, é mostrar um pop-up em caso de erro no campo
});

function verificaCampo(campo){

    if (campo.name == "cpf" && campo.value.length >= 11) {

        ehUmCPF(campo);

    };

    if (campo.name == "aniversario" && campo.value != "") {

        ehMaiorDeIdade(campo);

    }

    console.log(campo.validity);
        // O Validity State é uma lista de possíveis erros de validações que acontecem automaticamente quando interege com o formulário
        // Cada item da lista validada um possível erro e todos estão como 'false', pois não tem nenhum erro acontecendo
        // O único que seque a lógica diferente é o valid, se tem algum erro com os demais da lista, ele irá aparece como "true" se nenhum tiver erro
        // Exemplos de possíveis erros são: customError, patternMismatch, tyoeMismatch, valueMissing e outros

};
*/



/* // Aula 3.7 Validando a idade

import ehUmCPF from "./valida-cpf.js";

import ehMaiorDeIdade from "./valida-idade.js";

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo));

});

function verificaCampo(campo){

    if (campo.name == "cpf" && campo.value.length >= 11) {

        ehUmCPF(campo);

    };

    if (campo.name == "aniversario" && campo.value != "") {
        // A condiçã "if" irá verificar se o campo é o que trata do aniversário e se o campo está vindo preenchido
        // Se vier preenchido, ele irá executar a função "ehMaiorDeIdade()"
        
        ehMaiorDeIdade(campo);
            // É a função exportada do arquivo "valida-idade.js" 

    }

};
*/



/* // Aula 2.5 Validando o CPF

import ehUmCPF from "./valida-cpf.js";
    // Será importada a função "ehUmCPF" para que possa ser chamada/usada
    // As função, diferente das variáveis, não vem entre chaves
    // 'from ".valida-cpf.js"' é o caminho em que a função importada está

const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {

    campo.addEventListener("blur", () => verificaCampo(campo));

});

function verificaCampo(campo){

    if (campo.name == "cpf" && campo.value.length >= 11) {
        // Se o nome do campo foi igual a "cpf" E o tamanho for maior ou igual que 11
        // Será executado a função que verifica se é um CPF

        ehUmCPF(campo);
            // A função pode ser usada, pois ela foi exportada e importada no documento que será usada
            // Se a condicional for verdadeira, chamada a função importada que irá verificar o CPF

    };

};
*/



/* // Aula 2.3 Adiconando um evento para veririfar o campo quando o usuário sair dele

const camposDoFormulario = document.querySelectorAll("[required]");
    // Faz uma Array com os elementos que tem o atributo "required" na documento HTML

camposDoFormulario.forEach((campo) => {
    // Será feito uma Arrow Function para cada campo e cada um será levado como parâmetro
    // o campo será envidado como parâmentro dentro da Arrow Function para que possa ser chamado quando o evento ocorrer

    campo.addEventListener('blur', () => verificaCampo(campo));
        // A cada Loop será criado para cada campo um escutador  para o evento 'blur'
        // Quando ocorrer o evento 'blur', quando é retirado o foco do INPUT, será chamada a função verificaCampo()
        // A função verificaCampo() irá levar como parâmetro o campo para que possa verificar se o campo foi preenchido corretamente

});

function verificaCampo(campo){
    // A função será chamada para verificar o campo para o qual está sendo chamada
    // O parâmetro trás qual campo ocorreu o evento 'blur'

};
*/
