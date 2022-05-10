const cadastroProdutos = require('./cadastro_produtos.js')

Main

cadastroProdutos.inserir("impressora epson 3110", 1300.99, 
    function (err, produto){
        console.log("Função INSERIR:");
        if (err){
            console.log(err);
        } else {
            console.log(produto);
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


cadastroProdutos.deletar(20, 
    function(err,produto){
        console.log("Função DELETAR PRODUTOS");
        if (err){
            console.log(err);
        } else{
            console.log(produto);
        }
        console.log("---------------------------------------------------------------");
    });
