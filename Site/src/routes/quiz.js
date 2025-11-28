var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.get("/getDadosDashboard", function (req, res) {
    quizController.getDadosDashboard(req, res);
})

router.get("/getHistoricoDashboard", function (req, res) {
    quizController.getHistoricoDashboard(req, res);
});


module.exports = router;