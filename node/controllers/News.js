var express = require("express");
var router = express.Router();
var Event = require("../models/Event");

router.get('/:user/:date', function (req, res) {
    Event.getByUserAndDate(req.param.user, req.params.date, function (response) {
        res.json(response);
    });
});

module.exports = router;