angular.module("tori-team")
    .controller('HomeController', ['$scope', '$rootScope', '$state', 'Home',
        function ($scope, $rootScope, $state, Home) {
            var vm = this;
            $scope.initHome = function () {
                $scope.loadingHome = true;
                Home.get("user").then(function (data) {
                    angular.forEach(data.events, function (event) {
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
                    vm.eventsToApprove = data.eventsToApprove;
                    vm.events = data.events;
                    vm.birthdays = data.birthdays;
                    $scope.loadingHome = false;
                }, function (err) {
                    console.log(err);
                });
            };
            $scope.goNews = function () {
                $state.go("workspace.news");
            }
        }]);