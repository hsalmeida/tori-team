var db = require("../config/db");
var bcrypt = require("bcrypt");

exports.isPassword = function (login, password) {
    var users = db.get('Usuarios');
    if (users) {
        users.find({ 'login': login }).then(function (dbuser) {
            if (dbuser) {
                return bcrypt.compareSync(password, dbuser.password);
            } else {
                return false;
            }
        })
    }
};

exports.createUser = function (user, cb) {
    var users = db.get('Usuarios');
    if (users) {
        var salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
        users.insert(user).then(cb);
    }
};

exports.isUser = function (login, cb) {
    var users = db.get('Usuarios');
    if (users) {
        users.find({ 'login': login }, 'login').then(cb);
    }
};

exports.getUsers = function (cb) {
    var users = db.get('Usuarios');
    if (users) {
        users.find({}, '-password').then(cb);
    }
};