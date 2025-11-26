var quizModel = require("../models/quizModel");

function cadastrar(req, res) {

    var fkUsuario = req.body.fkUsuario;
    var total_acertos = req.body.total_acertos;
    var total_erros = req.body.total_erros;
    var porcentagem_acertos = req.body.porcentagem_acertos;

    //validacoes
    if (fkUsuario == undefined) {
        res.status(400).send("Seu fkUsuario está undefined!");
    } else if (total_acertos == undefined) {
        res.status(400).send("Seu total_acertos está undefined!");
    } else if (total_erros == undefined) {
        res.status(400).send("Seu total_erros está undefined!");
    } else if (porcentagem_acertos == undefined) {
        res.status(400).send("Sua porcentagem_acertos está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrar(fkUsuario, total_acertos, total_erros, porcentagem_acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro do quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}