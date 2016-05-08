angular.module('app.controllers', [])
  
.controller('carTabDefaultPageCtrl', function($scope, socket) {
    
    $scope.doit = function () {
        console.log(("foobar"));

        socket.emit('my other event', 'hi server');
    }

})
   
.controller('locationTabDefaultPageCtrl', function($scope) {

})
   
.controller('batteryTabDefaultPageCtrl', function($scope) {

})
    