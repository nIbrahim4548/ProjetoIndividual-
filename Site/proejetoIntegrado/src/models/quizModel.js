var database = require("../database/config")

function cadastrar(fkUsuario, total_acertos, total_erros, porcentagem_acertos) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, total_acertos, total_erros, porcentagem_acertos);
    var instrucaoSql = `
        INSERT INTO Quiz (fkUsuario, total_acertos, total_erros, porcentagem_acertos) VALUES (${fkUsuario}, ${total_acertos}, ${total_erros}, ${porcentagem_acertos});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}