var app = angular.module('healthixSite', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
            controller: 'healthixController',
            templateUrl: 'templates/home.template.html'
        })
        .when('/eclaim-management', {
            controller: 'healthixController',
            templateUrl: 'templates/e-claim.template.html'
        })
        .when('/insurecheck', {
            controller: 'healthixController',
            templateUrl: 'templates/insurecheck.template.html'
        })
        .when('/e-enrollment', {
            controller: 'healthixController',
            templateUrl: 'templates/e-enrollment.template.html'
        })
        .when('/e-prescription', {
            controller: 'healthixController',
            templateUrl: 'templates/e-prescription.template.html'
        })
        .when('/e-authletter', {
            controller: 'healthixController',
            templateUrl: 'templates/e-authletter.template.html'
        })
        .when('/biometric', {
            controller: 'healthixController',
            templateUrl: 'templates/biometric.template.html'
        })
        .when('/terminology', {
            controller: 'healthixController',
            templateUrl: 'templates/terminology.template.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);