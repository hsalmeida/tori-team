angular.module("tori-team")
    .controller('UsersController', ['$scope', '$rootScope', '$state', '$mdDialog', 'User',
        function ($scope, $rootScope, $state, $mdDialog, User) {

            var vm = this;
            vm.users = [];

            $scope.initUsers = function () {

                User.getAll().then(function (users) {
                    vm.users = users;
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
            };
        }])
    .controller('UserDialogController', function ($scope, action, user, parentScope, $mdDialog, $filter) {
        $scope.action = action;
        $scope.selectedItem = "";
        $scope.searchText = "";
        $scope.initUserDialog = function () {
            $scope.modalities = ["Tae Kwon-Do", "Capoeira", "Judô", "Jiujitsu", "Muay Thay", "Boxe", "Sumô", "Kravmaga"];
            $scope.user = angular.copy(user);
        }

        $scope.querySearch = function (query) {
            var results = query ? $filter('filter')($scope.modalities, query) : [];
            return results;
        };

        $scope.hide = function () {
            $mdDialog.cancel();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    });