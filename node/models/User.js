var db = require("../config/db");
var bcrypt = require("bcrypt");

exports.isPassword = function (user, password) {
    var users = db.get('Usuarios');
    if(users) {
        users.find({'user': user}).then(function (dbuser) {
            return bcrypt.compareSync(password, dbuser.password);
        })
    }
};

exports.createUser = function (user, cb) {
    var users = db.get('Usuarios');
    if(users) {
        var salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
        users.insert(user).then(cb);
    }
};

exports.getUsers = function (cb) {
    var users = db.get('Usuarios');
    if(users) {
        users.find().then(cb);
    }
};