angular.module("tori-team")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'partials/login.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: false
                },
                controller: 'LoginController'
            })
            .state('workspace', {
                templateUrl: 'partials/workspace.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: true
                },
                controller: function ($rootScope, $scope, $mdSidenav, $state, $mdMedia, $window) {
                    $scope.toggleMenu = function () {
                        $mdSidenav("left").toggle();
                    }
                    $scope.go = function (page) {
                        if (!$mdMedia('gt-sm')) {
                            $mdSidenav("left").toggle();
                        }
                        $state.go(page);
                    }
                    $scope.logout = function () {
                        $window.sessionStorage.removeItem('toriTeamUsuarioLogado');
                        $rootScope.usuarioLogado = null;
                        $state.go('login');
                    }
                }
            })
            .state('workspace.home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: true
                },
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('workspace.news', {
                url: '/news',
                templateUrl: 'partials/news.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: true
                },
                controller: 'NewsController',
                controllerAs: 'vm'
            })
            .state('workspace.modalities', {
                url: '/modalities',
                templateUrl: 'partials/modalities.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: true
                },
                controller: 'ModalitiesController',
                controllerAs: 'vm'
            })
            .state('workspace.birthdays', {
                url: '/birthdays',
                templateUrl: 'partials/birthdays.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: true
                },
                controller: 'BirthdaysController',
                controllerAs: 'vm'
            })
            .state('workspace.professors', {
                url: '/professors',
                templateUrl: 'partials/professors.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: true
                },
                controller: 'ProfessorsController',
                controllerAs: 'vm'
            })
            .state('workspace.users', {
                url: '/users',
                templateUrl: 'partials/users.html',
                reloadOnSearch: false,
                data: {
                    requireLogin: true
                },
                controller: 'UsersController',
                controllerAs: 'vm'
            });
    });