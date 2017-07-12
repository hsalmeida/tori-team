angular.module("tori-team", ["ngMessages", "ui.router", "angular.filter", "angularMoment", "ngMaterial"])
    .run(function (amMoment) {
        amMoment.changeLocale('pt-br');
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('red')
            .dark();
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

        }])
    .controller('NewsController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = this;

        }])
    .controller('ModalitiesController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = this;

        }])
    .controller('BirthdaysController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = this;

        }])
    .controller('ProfessorsController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = this;

        }])
    .controller('UsersController', ['$scope', '$rootScope', '$state', '$mdDialog',
        function ($scope, $rootScope, $state, $mdDialog) {

            var vm = this;
            vm.users = [];

            $scope.initUsers = function () {
                vm.users.push({ name: "Hilton Almeida", type: "Aluno", modalities: "Tae Kwon-Do", phone: "999888777", email: "emailsuper@superemail.com.br" });
                vm.users.push({ name: "Lucas Brasil", type: "Aluno", modalities: "Tae Kwon-Do", phone: "999888777", email: "emailsuper@superemail.com.br" });
                vm.users.push({ name: "Arthur", type: "Aluno", modalities: "Tae Kwon-Do", phone: "999888777", email: "emailsuper@superemail.com.br" });
            };

            $scope.handlerUser = function (evt, action, user) {
                if (evt) {
                    $mdDialog.show({
                        controller: 'UserDialogController',
                        templateUrl: 'partials/userDialog.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: evt,
                        clickOutsideToClose: true,
                        locals: {
                            action: action,
                            user: user,
                            parentScope: $scope
                        },
                        fullscreen: true
                    }).then(function (closeObject) { }, function () { });
                }
            }
        }])
    .controller('UserDialogController', function ($scope, action, user, parentScope, $mdDialog) {
        $scope.action = action;
        $scope.initUserDialog = function () {
            $scope.user = angular.copy(user);
        }

        $scope.hide = function () {
            $mdDialog.cancel();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    })
    .controller('EventsController', ['$scope', '$rootScope', '$state',
        function ($scope, $rootScope, $state) {
            var vm = this;

        }]);
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('js/service-worker.js')
        .then(function() { });
}