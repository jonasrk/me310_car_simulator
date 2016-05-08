angular.module('app.controllers', [])
  
.controller('carTabDefaultPageCtrl', function($scope, socket) {
    

})
   
.controller('locationTabDefaultPageCtrl', function($scope, socket) {

})
   
.controller('batteryTabDefaultPageCtrl', function($scope, socket) {
    
    $scope.tval = 5;
    
    $scope.updateBattery = function (tval) {
        console.log(("New Battery level: " + tval));

        socket.emit('updateBattery', tval);
    }

})
    