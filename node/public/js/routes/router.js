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
                controller: function ($rootScope) {

                }
            })
            .state('workspace.home', {
                url: '/home',
                templateUrl: 'partials/home.html',
                reloadOnSearch: false,
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    });