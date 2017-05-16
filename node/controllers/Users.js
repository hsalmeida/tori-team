var express = require("express");
var router = express.Router();
var User = require("../models/User");
var jwt = require('jwt-simple');

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
    var exists = User.isPassword(req.body.login, req.body.password);
    if (exists) {
        var token = jwt.encode(user, 't0r1#t3@m#s3cr3t');
        res.json({ success: true, token: 'JWT ' + token });
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;