var db = require("../config/db");

exports.isPassword = function (login, password, cb) {
    var users = db.get('Usuarios');
    users.findOne({ 'login': login }).then(function (dbuser) {
        
    });
};

exports.createUser = function (user, cb) {
    var users = db.get('Usuarios');
    if (users) {
        
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