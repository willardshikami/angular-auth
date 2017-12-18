var app = angular.module('healthixSite', []);

app.controller('healthixController', ['$scope', '$http', '$location', '$routeParams', 
function($scope, $http, $location, $routeParams){

  //GET REQUEST
    var vm = this;
    $http.get('json/service-info.json').then(function(res){
        vm.service_info = res.data;
        console.log(vm.service_info);
    });

    var receivedData = null;
    vm.serviceSelect = function(data) {
        console.log(data);
        // alert("Would you like to book this service?");
         var receivedData = data;
         
     $state.go('base.booking', {'bookingData': receivedData, 'bookingHos': true});
    }

}]);
