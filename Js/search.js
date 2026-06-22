fetch("../html/dados.json")
.then(response => response.json())
.then(produtos => {

    const imagens = document.querySelectorAll(".produto-img");

    produtos.forEach((produto, index) => {
        if(imagens[index]){
            imagens[index].src = produto.imagem;
            imagens[index].alt = "Imagem do produto";
        }
    });

})
.catch(error => console.log(error));