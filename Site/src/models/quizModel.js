var database = require("../database/config")

function cadastrar(fkUsuario, total_acertos, total_erros, porcentagem_acertos, data_quiz) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, total_acertos, total_erros, porcentagem_acertos);
    var instrucaoSql = `
        INSERT INTO Quiz (fkUsuario, total_acertos, total_erros, porcentagem_acertos, data_quiz) VALUES (${fkUsuario}, ${total_acertos}, ${total_erros}, ${porcentagem_acertos}, '${data_quiz}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function getDadosDashboard(fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getDadosDashboard():", fkUsuario);
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS total_quizzes,
            AVG(total_acertos) AS media_acertos,
            AVG(total_erros) AS media_erros
        FROM Quiz
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function getHistoricoDashboard(fkUsuario) {
    var instrucaoSql = `
        SELECT 
            total_acertos,
            total_erros,
            DATE_FORMAT(data_quiz, '%d/%m/%Y %H:%i') AS data_hora
        FROM Quiz
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY data_quiz;
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    getDadosDashboard,
    getHistoricoDashboard
}