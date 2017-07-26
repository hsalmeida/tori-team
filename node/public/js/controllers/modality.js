angular.module("tori-team")
    .controller('ModalitiesController', ['$scope', '$rootScope', '$state', '$mdDialog', 'Modality',
        function ($scope, $rootScope, $state, $mdDialog, Modality) {
            var vm = this;
            $scope.initModality = function () {
                Modality.getAll("user").then(function (modalities) {
                    vm.modalities = modalities;
                })
            }
            $scope.permissaoCriar = function () {
                return $rootScope.usuarioLogado.admin;
            }
            $scope.permissaoEditar = function (modality) {
                return $rootScope.usuarioLogado.admin || modality.professors.findIndex(findProfessor, $rootScope.usuarioLogado.user) !== -1;
            }
            function findProfessor(element, index, array) {
                return element.name === this
            }

            $scope.handlerModality = function (evt, action, modality) {
                if (evt) {
                    $mdDialog.show({
                        controller: 'ModalityDialogController',
                        templateUrl: 'partials/modalityDialog.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: evt,
                        clickOutsideToClose: true,
                        locals: {
                            action: action,
                            modality: modality,
                            parentScope: $scope
                        },
                        fullscreen: true
                    }).then(function (closeObject) { }, function () { });
                }
            };
        }])
    .controller('ModalityDialogController', function ($scope, action, modality, parentScope, $mdDialog) {
        $scope.action = action;
        $scope.initModalityDialog = function () {
            $scope.modality = angular.copy(modality);
        }

        $scope.hide = function () {
            $mdDialog.cancel();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
    });