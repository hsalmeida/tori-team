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
        }]);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('js/service-worker.js')
        .then(function () { });
}