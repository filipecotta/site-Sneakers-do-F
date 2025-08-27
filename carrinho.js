function adicionarCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    carrinho.push({nome, preco});
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    mostrarCarrinho();
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    mostrarCarrinho();
}

function mostrarCarrinho() {
    let carrinhoDiv = document.getElementById("carrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho"));
    if (carrinho.length === 0) {
    carrinhoDiv.innerHTML = "<p>Carrinho vazio</p>";
    return;
    }

    let html = "<ul>";
    let total = 0;
    carrinho.forEach((item, index) => {
    html += `<li>${item.nome} - R$ ${item.preco} 
                <button onclick="removerItem(${index})">Remover</button></li>`;
    total += item.preco;
    });
    html += "</ul>";
    html += `<p><strong>Total: R$ ${total}</strong></p>`;

    carrinhoDiv.innerHTML = html;
}

function adicionarCarrinhoRedicionando(nome, preco) {
    const item = { nome, preco };
    let itemCarrinho = localStorage.getItem("carrinho");
    let carrinho = [];
    if(isJSONValido(itemCarrinho)){
        carrinho = JSON.parse(itemCarrinho)
    }

    carrinho.push(item);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    window.location.href='carrinho.html';
    alert(`${nome} adicionado ao carrinho!`);
}

function isJSONValido(str) {
  try {
    const parsed = JSON.parse(str);
    return typeof parsed === "object" && parsed !== null;
  } catch (e) {
    return false;
  }
}