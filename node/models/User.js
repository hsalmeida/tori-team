var db = require("../config/db");

exports.isPassword = function (login, password, cb) {
    console.log(login, password);
    switch (login) {
        case "hilton":
            cb(true);
            break;
        case "thais":
            cb(true);
            break;
        default:
            cb(false);
            break;
    }

    /*
    var users = db.get('Usuarios');
    users.findOne({ 'login': login }).then(function (dbuser) {
        
    });
    */
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
    cb([
        {
            name: "Hilton Almeida",
            roles: ["Aluno", "Admin"],
            birthday: "11/08/1981",
            modalities: ["Tae Kwon-Do"],
            phone: "999 888 444",
            email: "toriteam@toriteam.com.br",
            parent: "",
            parentPhone: "",
            parentMail: ""
        },
        {
            name: "Thais Policarpo", 
            roles: ["Professor", "Admin"], 
            birthday: "15/10/1999", 
            modalities: ["Judô", "Jiujitsu"],
            phone: "999 888 444",
            email: "toriteam@toriteam.com.br",
            parent: "",
            parentPhone: "",
            parentMail: ""
        },
        {
            name: "Lucas Brasil", 
            roles: ["Professor", "Aluno"], 
            birthday: "15/10/1999", 
            modalities: ["Tae Kwon-Do"],
            phone: "999 888 444",
            email: "toriteam@toriteam.com.br",
            parent: "",
            parentPhone: "",
            parentMail: ""
        },
        {
            name: "Arthur Silva", 
            roles: ["Aluno"], 
            birthday: "15/10/2000", 
            modalities: ["Tae Kwon-Do", "Jiujitsu"],
            phone: "999 888 444",
            email: "toriteam@toriteam.com.br",
            parent: "Luiza Albuquerque dos Santos",
            parentPhone: "875 444 568",
            parentMail: "luiz.albuquerque@supermail.com"
        }
    ]);
    /*
    var users = db.get('Usuarios');
    if (users) {
        users.find({}, '-password').then(cb);
    }
    */
};

exports.getByLogin = function (login, cb) {
    switch (login) {
        case "hilton":
            cb({user: "hilton", name: "Hilton Almeida", roles: ["Aluno", "Admin"], birthday: "11/08/1981", modalities: ["Tae Kwon-Do"] });
            break;
        case "thais":
            cb({user: "thais",  name: "Thais Policarpo", roles: ["Professor", "Admin"], birthday: "15/10/1999", modalities: ["Judô", "Jiujitsu"] });
            break;
        default:
            cb({});
            break;
    }
};