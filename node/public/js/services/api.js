angular.module("tori-team")
    .factory('Login', function ($http) {
        var Login = {
            authenticate: function (login, password) {
                return $http.post("/User/authenticate", {
                    login: login,
                    password: password
                }).then(function (response) {
                    return response.data;
                });
            }
        };
        return Login;
    })
    .factory('Home', function ($http) {
        var Home = {
            get: function (user) {
                return $http.get("/Home/" + user).then(function (response) {
                    return response.data;
                });
            }
        };
        return Home;
    })
    .factory('User', function ($http) {
        var User = {
            getByLogin: function (login) {
                return $http.get("/User/login/" + login).then(function (response) {
                    return response.data;
                });
            },
            getAll: function () {
                return $http.get("/User").then(function (response) {
                    return response.data;
                });
            }
        };
        return User;
    })
    .factory('News', function ($http) {
        var News = {
            get: function (user, date) {
                return $http.get("/News/" + user + "/" + date).then(function (response) {
                    return response.data;
                });
            }
        };
        return News;
    });