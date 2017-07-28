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
            $scope.hours = ["06:00", "06:30", "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
                "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "14:30",
                "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
                "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"];
            $scope.modality = angular.copy(modality);
        }

        $scope.hide = function () {
            $mdDialog.cancel();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.classDay = function (classObj, weekDay) {
            if (classObj) {
                return classObj.days.findIndex(findWeekDay, weekDay) !== -1;
            } else {
                return false;
            }
        };

        function findWeekDay(element, index, array) {
            return element === String(this);
        }
    });