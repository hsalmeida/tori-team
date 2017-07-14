angular.module("tori-team")
    .controller('NewsController', ['$scope', '$rootScope', '$state', '$mdDialog', 'News',
        function ($scope, $rootScope, $state, $mdDialog, News) {
            var vm = this;
            $scope.initNovidades = function () {
                $scope.loadingNews = true;
                News.get('hilton', 'dd-mm-yyyy')
                    .then(function (news) {
                        angular.forEach(news, function (event) {
                            switch (event.modality) {
                                case "taekwondo":
                                    event.photo = "http://via.placeholder.com/400x200";
                                    break;
                                case "capoeira":
                                    event.photo = "http://via.placeholder.com/400x200";
                                    break;
                                default:
                                    break;
                            }
                        });
                        vm.news = news;
                        $scope.loadingNews = false;
                    });
            };
            $scope.handlerNews = function (evt, action, event) {
                if (evt) {
                    $mdDialog.show({
                        controller: 'EventDialogController',
                        templateUrl: 'partials/eventDialog.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: evt,
                        clickOutsideToClose: true,
                        locals: {
                            action: action,
                            eventObj: event,
                            parentScope: $scope
                        },
                        fullscreen: true
                    }).then(function (closeObject) { }, function () { });
                }
            };
            $scope.permissaoEditar = function (event) {
                return $rootScope.usuarioLogado.admin || (event.author.user === $rootScope.usuarioLogado.user);
            };
        }])
    .controller('EventDialogController', function ($scope, action, eventObj, parentScope, $mdDialog) {
        $scope.action = action;
        $scope.initEventDialog = function () {
            $scope.event = angular.copy(eventObj);
        }

        $scope.hide = function () {
            $mdDialog.cancel();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    });