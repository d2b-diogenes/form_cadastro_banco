// Aula 5.5 Salvar foto no Local Storage

const botaoIniciarCamera = document.querySelector("[data-video-botao]");

const campoCamera = document.querySelector("[data-camera]");

const video = document.querySelector("[data-video]");

const botaoTirarFoto = document.querySelector("[data-tirar-foto]");

const canvas = document.querySelector("[data-video-canvas]");

const mensagem = document.querySelector("[data-mensagem]");

const botaoEnviarFoto = document.querySelector("[data-enviar]");
    // A constanta irá receber o botão que envia a foto para o Local Storage

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function(){

    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video:true, audio:false});

    botaoIniciarCamera.style.display = "none";

    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo; 

})

botaoTirarFoto.addEventListener("click", function() {

    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("image/jpeg", 1.0);
    
    console.log(imagemURL);

    campoCamera.style.display = "none";

    mensagem.style.display = "block";

})

botaoEnviarFoto.addEventListener("click", () => {

    const recebeDadosExistentes = localStorage.getItem("cadastro");
        // A constante irá receber um String que dentro dela contêm os dados que estão salvos no local storage que tem como chave o termo "cadastro"

    const converteRetorno = JSON.parse(recebeDadosExistentes);
        // A constante irá receber o dados convertidos para JSON da constante "recebeDadosExistentes" 
        // É convertido para JSON para que seja possível manipular o objeto

    converteRetorno.imagem = imagemURL;
        // É criado dentro do objeto um novo atributo chamado "imagem" e será atribuido a esse atributo a constante "imagemURL" que contém a URL da imagem capturada 

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));
        // Depois de inserido o atributo imagem ao objeto, o objeto será salvo novamente no local Storage com a chave "cadastro"
        // O objeto é convertido em String "JSON.stringify(converteRetorno)"
        // Para que seja salvo no local Storage com a chave "cadastro"
        // ".setItem('nomeDaChave', elementoQueSeraSalvo)"

    window.location.href = "./abrir-conta-form-3.html";
        // Depois da foto salva no local Storage, será aberta a 3ª página do form para a criação da conta

})




/* // Aula 5.3 Captura
const botaoIniciarCamera = document.querySelector("[data-video-botao]");

const campoCamera = document.querySelector("[data-camera]");

const video = document.querySelector("[data-video]");

const botaoTirarFoto = document.querySelector("[data-tirar-foto]");
// A constante irá receber o botão que ao ser clicado irá capturar a imagem e mostrar a confirmação da captura

const canvas = document.querySelector("[data-video-canvas]");
// A constante irá receber a área que será apresentada a foto capturada

const mensagem = document.querySelector("[data-mensagem]");
// A constante que irá receber o campo que contem a imagem e o texto informando que a imagem foi capturada com sucesso

let imagemURL = "";
    //Criada a variável para receber a imagem capturada.

botaoIniciarCamera.addEventListener("click", async function(){

    const iniciarVideo = await navigator.mediaDevices
    .getUserMedia({video:true, audio:false});

    botaoIniciarCamera.style.display = "none";

    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo; 

})

botaoTirarFoto.addEventListener("click", function() {

    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        // A constante "canvas" é área que será exibida a foto capturada
        // Ao criar esse código o canvas irá criar um ambiente 2d para exibir a imagem capturada do momento do clique
        // ".getContext()" é um médoto que pega o canvas e cria o contexto 2D do canvas ou null se o identificador de contexto não suportar
        // ".getContext('2d')" pegou o contexto da Constante "canvas" 
        // ".drawImage(image, dx, dy, dWidth, dHeight)" é um método do Canvas 2D que provê diferentes meios para desenhar uma imagem dentro do canvas
        // ".drawImage(video, 0, 0, canvas.width, canvas.height)" irá capturar a imagem da Constante "video" do momento do clique para fazer o desenho

    imagemURL = canvas.toDataURL("image/jpeg", 1.0);
        // A constante "imagemURL" irá receber a imagem em um formato URL para ser usada futuramente
        // toDataURL() é um método para canvas imagem que irá conter a representação da imagem no formato específico definido o tipo no parâmetro 

    campoCamera.style.display = "none";
        // Quando for mostradada a foto, nesse momento o que estiver no campo "campoCamera" será escondido
    mensagem.style.display = "block";
        // Quando for mostradada a foto, nesse momento o que estiver no campo "mensagem" será exibido. No caso, a imagem capturada, o texto da confirmação de captura e o botão para abrir a conta

})
*/



/* // Aula 5.2 iniciar a câmera
const botaoIniciarCamera = document.querySelector("[data-video-botao]");
    // Constante que irá receber a imagem que tem a função de botão que ao ser clicada irá habilitar a câmera

const campoCamera = document.querySelector("[data-camera]");
    // Constante que irá receber o campo onde o vídeo da câmera irá aparecer

const video = document.querySelector("[data-video]");
    // Constante que irá receber o elemento vídeo.

botaoIniciarCamera.addEventListener("click", async function(){
    // Foi criado um escutador de eventos para que escute o evento do clique na imagem
    // Ao clicar vai ser executada a função Async. Foi necessário criar a função Async, pois é necessário esperar o usuário aceitar o uso da câmera

    const iniciarVideo = await navigator.mediaDevices
        // A constante "iniciarVideo" irá receber o método que inica as mídias do navegador
        // Foi usado o await para espere a resposta do usuário
    .getUserMedia({video:true, audio:false})
        // Ele chama o display e o habilita, mas, nesse caso, habilita o vídeo e não habilita o aúdio.

    botaoIniciarCamera.style.display = "none";
        //Quando ocorrer o click, o stilo do display será "none" para esconder o "botaoIniciarCamera"

    campoCamera.style.display = "block";
        //Quando ocorrer o click, o stilo do display será "block" para mostrar o "campoCamera"

    video.srcObject = iniciarVideo;
        // Será atribuido ao "video" o objeto da constante "iniciarVideo" que é o vídeo inicializado 

})

*/
