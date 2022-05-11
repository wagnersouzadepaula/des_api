//const Client = require('pg').Client;
const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '151103',
    database: 'crud_produtos'
};


function inserir(produto, callback){
    const cliente = new Client(conexao);
    cliente.connect();

    let produtoInserido = [produto.nome, produto.preco];
    const sql = "INSERT INTO produtos (nome, preco) VALUES ($1, $2) RETURNING *";
    let product;
    cliente.query(sql, produtoInserido, 
        function (err, res){
            if (err) {
                callback(err.message, undefined);
            } else {
                product = res.rows[0];
                callback(undefined, product);
            }
        cliente.end();
        }
    );
    return product;
}; 


function listar(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    const sql = "SELECT * FROM produtos";
    let produtos;
    cliente.query(sql, 
        function (err, res) {
            if (err) {
                callback(err.message, undefined);
            } else {
                let produtos = res.rows;
                callback(undefined, produtos)
            }
            cliente.end();
        }
    )
    return(produtos)
};


function buscarPorId(id, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const idProduto = [id];
    const sql = "SELECT * FROM produtos WHERE id = $1";
    let produto;
    cliente.query(sql, idProduto, 
        function (err, res) {
            if (err) {
                callback (err.message, undefined);
            } else if (res.rows && res.rows.length > 0){
                let produto = res.rows[0];
                callback(undefined, produto);
            } else{
                const error = "Produto não encontrado.";
                callback(error,undefined)
            }
        cliente.end();
        }
    )
    return(produto);
};

function buscarIndicePorId() {
}

function atualizar(id, nome, preco, callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    const produtoAlterado = [id, nome, preco];
    const sql = "UPDATE produtos SET id = $1, nome = $2, preco = $3 WHERE id = $1";
    let produto;
    cliente.query(sql, produtoAlterado, 
        function (err, res) {
            if (err){
                callback(err.message, undefined);
            } else {
                let produto = "Produto: ID("+ id +  "), NOME(" + nome + "), PRECO ("+ preco + ") alterado com sucesso.";
                callback(undefined, produto);
            }
        cliente.end();
        }
    )
    return(produto);
};

function deletar(id, callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    const produtoDeletado = [id];
    const sql = "DELETE FROM produtos WHERE id = $1";
    let produto;
    cliente.query(sql, produtoDeletado, 
        function (err, res){
            if (err) {
                callback(err.message,undefined);
            } else {
                let produto = "Produto: ID("+ id +  ") deletado com sucesso.";
                callback(undefined,produto);
            }
        cliente.end();
        }
    )
    return(produto);
};

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar, buscarIndicePorId
}