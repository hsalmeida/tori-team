angular.module("tori-team")
    .controller('LoginController', ['$scope', '$rootScope', '$state', '$window', 'Login', 'User',
        function ($scope, $rootScope, $state, $window, Login, User) {
            $scope.user = {
                login: "",
                password: ""
            };
            $scope.loginerr = false;
            $scope.btnName = "Entrar";
            $scope.btnDisabled = false;
            $scope.loginerr = "";
            $scope.loginProgress = true;

            $scope.callResetPass = function () {

            };

            $scope.logar = function () {
                $scope.loginProgress = true;
                $scope.btnDisabled = true;
                $scope.loginerr = false;
                Login.authenticate($scope.user.login, $scope.user.password)
                    .then(function (data) {
                        if (data.success) {
                            User.getByLogin($scope.user.login)
                                .then(function (user) {
                                    user.admin = user.roles.indexOf("Admin") > -1;
                                    $window.sessionStorage.setItem('toriTeamUsuarioLogado', angular.toJson(user));
                                    $rootScope.usuarioLogado = user;
                                    $state.go("workspace.home");
                                    $scope.btnDisabled = false;
                                    $scope.loginProgress = false;
                                }, function (err) { });
                        }
                    }, function (err) {
                        console.log("err", err);
                        $scope.btnDisabled = false;
                        $scope.loginProgress = false;
                        $scope.loginerr = true;
                    });
            };

            $scope.initLogin = function () {
                $scope.loginProgress = false;
            };
        }]);