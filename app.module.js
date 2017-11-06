var healthixSite = angular.module('healthixSite', ['ngRoute']);

healthixSite.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'healthixController',
        templateUrl: 'templates/home.template.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});