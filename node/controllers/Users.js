var express = require("express");
var router = express.Router();
var User = require("../models/User");

router.post('/create', function (req, res) {
    User.createUser(req.body, function (response) {
        if(response._id) {
            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    });
});

router.get('/', function (req, res) {
    User.getUsers(function (response) {
        res.json(response);
    });
});

module.exports = router;