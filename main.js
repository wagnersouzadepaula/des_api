const cadastroProdutos = require('./cadastro_produtos.js')

//Main

cadastroProdutos.inserir({nome: "pastel", preco: 5}, 
    function (err, produtoInserido){
        console.log("Função INSERIR:");
        if (err){
            console.log(err);
        } else {
            console.log("Produto inserido:"); console.log(produtoInserido);
        }
        console.log("---------------------------------------------------------------");
    }
);


cadastroProdutos.listar(
    function (err, produtos) {
        console.log("Função LISTAR:");
        if (err) {
            console.log(err)
        }
        else {
            console.log(produtos);
        }
        console.log("---------------------------------------------------------------");
    }
);

cadastroProdutos.buscarPorId(4, 
    function (err, produtos) {
        console.log("Função BUSCAR POR ID:");
        if (err) {
            console.log(err)
        } else {
            console.log(produtos)
        }
        console.log("---------------------------------------------------------------");

});


// console.log("Atualizar: ");

cadastroProdutos.atualizar(5, "mouse", 10, 
    function(err, produto){
        console.log("Função ATUALIZAR PRODUTOS");
        if (err) {
            console.log(err)
        } else {
            console.log(produto)
        }
        console.log("---------------------------------------------------------------");
    });


cadastroProdutos.deletar(4, 
    function(err,produto){
        console.log("Função DELETAR PRODUTOS");
        if (err){
            console.log(err);
        } else{
            console.log(produto);
        }
        console.log("---------------------------------------------------------------");
    });
