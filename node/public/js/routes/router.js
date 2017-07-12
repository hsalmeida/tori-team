angular.module("tori-team")
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'partials/login.html',
                reloadOnSearch: false,
                controller: 'LoginController'
            })
            .state('workspace', {
                templateUrl: 'partials/workspace.html',
                reloadOnSearch: false,
                controller: function ($rootScope, $scope, $mdSidenav, $state, $mdMedia) {
                    $scope.toggleMenu = function () {
                        $mdSidenav("left").toggle();
                    }
                    $scope.go = function (page) {
                        if(!$mdMedia('gt-sm')){
                            $mdSidenav("left").toggle();
                        }
                        $state.go(page);
                    }
                }
            })
            .state('workspace.home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                reloadOnSearch: false,
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('workspace.news', {
                url: '/news',
                templateUrl: 'partials/news.html',
                reloadOnSearch: false,
                controller: 'NewsController',
                controllerAs: 'vm'
            })
            .state('workspace.modalities', {
                url: '/modalities',
                templateUrl: 'partials/modalities.html',
                reloadOnSearch: false,
                controller: 'ModalitiesController',
                controllerAs: 'vm'
            })
            .state('workspace.birthdays', {
                url: '/birthdays',
                templateUrl: 'partials/birthdays.html',
                reloadOnSearch: false,
                controller: 'BirthdaysController',
                controllerAs: 'vm'
            })
            .state('workspace.professors', {
                url: '/professors',
                templateUrl: 'partials/professors.html',
                reloadOnSearch: false,
                controller: 'ProfessorsController',
                controllerAs: 'vm'
            })
            .state('workspace.users', {
                url: '/users',
                templateUrl: 'partials/users.html',
                reloadOnSearch: false,
                controller: 'UsersController',
                controllerAs: 'vm'
            })
            .state('workspace.events', {
                url: '/events',
                templateUrl: 'partials/events.html',
                reloadOnSearch: false,
                controller: 'EventsController',
                controllerAs: 'vm'
            });
    });