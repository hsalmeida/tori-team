angular.module("tori-team", ["ngMessages", "ui.router", "angular.filter", "angularMoment", "ngMaterial"])
    .run(function (amMoment) {
        amMoment.changeLocale('pt-br');
    })
    .controller('LoginController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            $scope.user = {
                username: "",
                password: ""
            };
            $scope.btnName = "Entrar";
            $scope.btnDisabled = false;
            $scope.loginerr = "";
            $scope.loginProgress = true;

            $scope.callResetPass = function () {

            };

            $scope.logar = function () {
                $scope.loginProgress = true;

                //$scope.loginerr = "Usuário e/ou senha invalida";

                $state.go("workspace.home");
                $scope.loginProgress = false;
            };

            $scope.initLogin = function () {
                $scope.loginProgress = false;
            };

        }])
    .controller('HomeController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = this;

        }]);