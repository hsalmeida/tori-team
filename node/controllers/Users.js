var express = require("express");
var router = express.Router();
var User = require("../models/User");

router.post('/create', function (req, res) {
    User.createUser(req.body, function (response) {
        res.json(response);
    });
});

router.get('/', function (req, res) {
    User.getUsers(function (response) {
        res.json(response);
    });
});

module.exports = router;