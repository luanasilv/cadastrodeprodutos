var lista_de_produtos = [];

while (true) {
    var opcao = prompt(`
    Seja bem-vindo ao nosso Cadastro de Produtos!
    Como podemos lhe ajudar?

    1. Cadastrar um novo produto
    2. Editar produto
    3. Remover produto
    4. Visualizar todos os produtos
    `);

    if (opcao == 1) {
        adicionar();
    } else if (opcao == 2) {
        editar();
    } else if (opcao == 3) {
        remover();
    } else if (opcao == 4) {
        ver();
    } else {
        alert("Nenhuma opção foi selecionada!");
    }
}

function adicionar() {
    var objeto = {
        produto: '',
        marca: '',
        preco: '',
        quantidade_estoque: '',
    };

    objeto.produto = prompt("Nome do produto:");
    objeto.marca = prompt("Marca do produto:");
    objeto.preco = prompt("Valor do produto:");
    objeto.quantidade_estoque = prompt("Quantidade no estoque:");

    lista_de_produtos.push(objeto);
    alert("Produto registrado!");
}

function ver() {
    var texto = "";

    for (let i = 0; i < lista_de_produtos.length; i++) {
        texto += `Produto: ${lista_de_produtos[i].produto}
Marca: ${lista_de_produtos[i].marca} 
Preço: R$ ${lista_de_produtos[i].preco}
Quantidade em estoque: ${lista_de_produtos[i].quantidade_estoque} \n`;
    }

    alert(texto);
}

function editar() {
    var edit = prompt("Selecione o produto a ser editado:\n\n" + listarProdutosParaEdicao());

    for (let i = 0; i < lista_de_produtos.length; i++) {
        if (lista_de_produtos[i].produto === edit) {
            lista_de_produtos[i].produto = prompt("Renomear produto:");
            lista_de_produtos[i].marca = prompt("Nova marca do produto:");
            lista_de_produtos[i].preco = prompt("Valor novo do produto:");
            lista_de_produtos[i].quantidade_estoque = prompt("Quantia nova no estoque:");
            alert("Produto reformulado!");
            return;
        }
    }

    alert("Não encontramos seu produto.");
}

function listarProdutosParaEdicao() {
    var lista = "Produtos que podem ser editados:\n\n";
    for (let i = 0; i < lista_de_produtos.length; i++) {
        lista += lista_de_produtos[i].produto + "\n";
    }
    return lista;
}

function remover() {
    var produto_a_remover = prompt("Qual o produto será removido?\n\n" + listarProdutosParaRemocao());

    for (let i = 0; i < lista_de_produtos.length; i++) {
        if (lista_de_produtos[i].produto === produto_a_remover) {
            lista_de_produtos.splice(i, 1);
            alert("Produto removido!");
            return;
        }
    }

    alert("Produto não encontrado.");
}

function listarProdutosParaRemocao() {
    var lista = "Produtos para a remoção:\n\n";
    for (let i = 0; i < lista_de_produtos.length; i++) {
        lista += lista_de_produtos[i].produto + "\n";
    }
    return lista;
}