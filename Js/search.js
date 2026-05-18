function toggleLista(id) {
    const lista = document.getElementById(id);
    
    if (!lista) {
        console.error("Produto não encontrado!!: " + id);
        return;
    }

    if (lista.style.display === "none" || lista.style.display === "") {
        lista.style.display = "block";
        lista.style.transition = "all 0.5s ease";
    } else {
        lista.style.display = "none";
    }
}

function mudar(botao, delta) {
    const display = botao.parentElement.querySelector('.val');
    if (display) {
        let valor = parseInt(display.innerText);
        valor += delta;
        if (valor < 0) valor = 0;
        display.innerText = valor;
    }
}
fetch("./dados.json")

.then(response => response.json())
.then(data => {

    const produtos = document.querySelectorAll(".produto-linha")
    produtos.forEach(item => {
        const titulo = item.querySelector("h3")
        const nome = titulo.textContent.trim()
        data.forEach(produto => {
            if(nome === produto.nome){
                const img = document.createElement("img")
                img.src = produto.imagem
                img.classList.add("img-produto")
                titulo.parentElement.prepend(img)
            }   

        })

    })

})