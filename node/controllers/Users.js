var express = require("express");
var router = express.Router();
var User = require("../models/User");

router.post('/create', function (req, res) {
    User.createUser(req.body, function (response) {
        if (response._id) {
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

router.post('/authenticate', function (req, res) {
    User.isPassword(req.body.login, req.body.password, function (exists) {
        if (exists) {
            res.json({ success: true });
        } else {
            res.sendStatus(403);
        }
    });
});

router.get('/login/:login', function (req, res) {
    User.getByLogin(req.params.login, function (user) {
        res.json(user);
    });
});

module.exports = router;