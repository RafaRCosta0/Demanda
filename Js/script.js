console.log("Js carregou");

let imagem = document.getElementById("imagem-carrossel");

let btnProximo = document.getElementById("btn-proximo");
let btnAnterior = document.getElementById("btn-anterior");

let imagens = [
    "../assets/img60.jpeg",
    "../assets/img65.jpeg",
    "../assets/img70.jpeg"
];

let index = 0;

function proximoSlide() {
    index++;

    if (index >= imagens.length) {
        index = 0;
    }

    imagem.src = imagens[index];
}

function anteriorSlide() {
    index--;

    if (index < 0) {
        index = imagens.length - 1;
    }

    imagem.src = imagens[index];
}

btnProximo.addEventListener("click", proximoSlide);
btnAnterior.addEventListener("click", anteriorSlide);

// Trocar automaticamente a cada 5 segundos de slide
setInterval(proximoSlide, 5000);