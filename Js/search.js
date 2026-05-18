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
