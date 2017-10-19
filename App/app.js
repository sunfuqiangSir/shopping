var app = angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("shopping",{
            url:"/shopping",
            templateUrl:"App/view/shopping.html",
            controller:"shopController"
        })
});