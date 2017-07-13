angular.module("tori-team")
    .factory('Login', function ($http) {
        var Login = {
            authenticate: function (login, password) {
                return $http.post("/User/authenticate", {
                    login: login,
                    password: password
                });
            }
        };
        return Login;
    })
    .factory('Home', function ($http) {
        var Home = {
            get: function (user) {
                return $http.get("/Home/" + user);
            }
        };
        return Home;
    })
    .factory('User', function ($http) {
        var User = {
            getByLogin: function (login) {
                return $http.get("/User/login/" + login);
            }
        };
        return User;
    });