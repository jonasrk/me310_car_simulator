angular.module('app.controllers', [])
  
.controller('carTabDefaultPageCtrl', function($scope, socket) {
    
    $scope.doit = function () {
        console.log(("foobar"));
    }

})
   
.controller('locationTabDefaultPageCtrl', function($scope) {

})
   
.controller('batteryTabDefaultPageCtrl', function($scope) {

})
    