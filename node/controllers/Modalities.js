var express = require("express");
var router = express.Router();
var Modality = require("../models/Modality");

router.get('/:user', function (req, res) {
    Modality.getAll(req.param.user, function (response) {
        res.json(response);
    });
});

module.exports = router;