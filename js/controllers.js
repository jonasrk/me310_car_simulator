angular.module('app.controllers', [])

    .controller('carTabDefaultPageCtrl', function($scope, socket) {


    })

    .controller('locationTabDefaultPageCtrl', function($scope, socket) {
        
        $scope.choice = null;
        
        $scope.updateWeather = function (choice) {
            console.log(("New Weather: " + choice));

            socket.emit('updateWeather', choice);
        };

        $scope.time_val = 6;

        $scope.updateTime = function (time_val) {
            console.log(("New Time: " + time_val));

            socket.emit('updateTime', time_val);
        };

        $scope.temp_val = 72;

        $scope.updateTemperature = function (temp_val) {
            console.log(("New Temperature: " + temp_val));

            socket.emit('updateTemperature', temp_val);
        };

    })

    .controller('batteryTabDefaultPageCtrl', function($scope, socket) {

        $scope.tval = 5;

        $scope.updateBattery = function (tval) {
            console.log(("New Battery level: " + tval));

            socket.emit('updateBattery', tval);
        };

        $scope.oval = 5;

        $scope.updateOil = function (oval) {
            console.log(("New Oil level: " + oval));

            socket.emit('updateOil', oval);
        };

    })
    