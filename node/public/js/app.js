angular.module("tori-team", ["ngMessages", "ui.router", "angular.filter", "angularMoment", "ngMaterial"])
    .run(function (amMoment) {
        amMoment.changeLocale('pt-br');
    })
    .controller('LoginController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            $scope.username = "";
            $scope.password = "";
            $scope.btnName = "Entrar";
            $scope.btnDisabled = false;
            $scope.loginerr = "";
            $scope.loginProgress = true;
            

            $scope.callResetPass = function () {

            };

            $scope.logar = function () {
                if ($scope.formulario.$valid) {
                    
                    $scope.loginerr = "Usuário e/ou senha invalida";
                }
            };

            $scope.initLogin = function () {
                
            };

        }])
    .controller('HomeController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = this;
            
        }]);