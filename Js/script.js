console.log("Js carregou");

let imagem = document.getElementById("imagem-carrossel");

let btnProximo = document.getElementById("btn-proximo");
let btnAnterior = document.getElementById("btn-anterior");

let imagens = [
"../assets/banner1.png",
"../assets/banner3.png",
"../assets/banner2 (2).png"
];

let index = 0;

btnProximo.addEventListener("click", function() {
    index = index + 1;

    if (index >= imagens.length) {
        index = 0;
    }
    imagem.src = imagens[index];
});

btnAnterior.addEventListener("click", function() {
    index = index - 1;

    if (index < 0) {
        index = imagens.length - 1;
    }
    imagem.src = imagens[index];
});
