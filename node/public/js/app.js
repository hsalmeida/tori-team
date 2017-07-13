angular.module("tori-team", ["ngMessages", "ui.router", "angular.filter", "angularMoment", "ngMaterial", "ngResource"])
    .run(function (amMoment) {
        amMoment.changeLocale('pt-br');
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('red')
            .dark();
    })
    .run(function ($rootScope, $state, $window) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var requireLogin = toState.data.requireLogin;
            var currentUser = angular.fromJson($window.sessionStorage.getItem('toriTeamUsuarioLogado'));
            if (requireLogin && (currentUser === null || typeof currentUser === 'undefined')) {
                event.preventDefault();
                $state.go('login');
            } else {
                $rootScope.usuarioLogado = currentUser;
            }
        });
        $rootScope.$on("logout", function () {
            logout();
        });

        function logout() {
            $window.sessionStorage.removeItem('toriTeamUsuarioLogado');
            $rootScope.usuarioLogado = null;
            $state.go('login');
        }
    })
    .controller('LoginController', ['$scope', '$rootScope', '$state', '$window','Login', 'User',
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
                        if (data.data.success) {
                            User.getByLogin($scope.user.login)
                                .then(function (data) {
                                    var user = data.data;
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

        }])
    .controller('HomeController', ['$scope', '$rootScope', '$state', 'Home',
        function ($scope, $rootScope, $state, Home) {
            var vm = this;
            $scope.initHome = function () {
                $scope.loadingHome = true;
                Home.get("user").then(function (data) {
                    angular.forEach(data.data.events, function (event) {
                        switch (event.modality) {
                            case "taekwondo":
                                event.photo = "img/tkd-itf-champion-black.jpg";
                                break;
                            case "capoeira":
                                event.photo = "img/capoeira-champion.jpg";
                                break;
                            default:
                                break;
                        }
                    });
                    vm.events = data.data.events;
                    vm.birthdays = data.data.birthdays;
                    $scope.loadingHome = false;
                }, function (err) {
                    console.log(err);
                });
            };
            $scope.goBirthdays = function () {
                $state.go("workspace.birthdays");
            }
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
    .controller('UsersController', ['$scope', '$rootScope', '$state', '$mdDialog', 'User',
        function ($scope, $rootScope, $state, $mdDialog, User) {

            var vm = this;
            vm.users = [];

            $scope.initUsers = function () {

                User.getAll().then(function (data) {
                    vm.users = data.data;
                });
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
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('js/service-worker.js')
        .then(function () { });
}