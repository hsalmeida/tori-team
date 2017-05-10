angular.module("tori-team", ["ngMessages", "ui.router", "angular.filter", "angularMoment"])
    .run(function (amMoment) {
        amMoment.changeLocale('pt-br');
    });