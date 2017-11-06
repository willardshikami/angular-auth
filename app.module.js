var healthixSite = angular.module('healthixSite', ['ngRoute']);

healthixSite.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'healthixController',
        templateUrl: 'templates/home.template.html'
    }).
    $routeProvider.when('/eclaim-management', {
        controller: 'healthixController',
        templateUrl: 'templates/e-claim.template.html'
    }).
    $routeProvider.when('/insurecheck', {
        controller: 'healthixController',
        templateUrl: 'templates/insurecheck.template.html'
    }).
    $routeProvider.when('/e-enrollment', {
        controller: 'healthixController',
        templateUrl: 'templates/e-enrollment.template.html'
    }).
    $routeProvider.when('/e-prescription', {
        controller: 'healthixController',
        templateUrl: 'templates/e-prescription.template.html'
    }).
    $routeProvider.when('/e-authletter', {
        controller: 'healthixController',
        templateUrl: 'templates/e-authletter.template.html'
    }). 
    $routeProvider.when('/biometric', {
        controller: 'healthixController',
        templateUrl: 'templates/biometric.template.html'
    }). 
    $routeProvider.when('/terminology', {
        controller: 'healthixController',
        templateUrl: 'templates/terminology.template.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});