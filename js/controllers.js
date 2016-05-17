angular.module('app.controllers', [])

    .controller('carTabDefaultPageCtrl', function($scope, socket) {


    })

    .controller('locationTabDefaultPageCtrl', function($scope, socket) {
        
        $scope.choice = null;
        
        $scope.updateWeather = function (data) {
            console.log(("New Weather: " + data));

            socket.emit('simulatorUpdate', {
                eventName: 'updateWeather',
                payLoad: data
            });
        };

        $scope.time_val = 6;

        $scope.updateTime = function (data) {
            console.log(("New Time: " + data));
;
            socket.emit('simulatorUpdate', {
                eventName: 'updateTime',
                payLoad: data
            });
        };

        $scope.temp_val = 72;

        $scope.updateTemperature = function (data) {
            console.log(("New Temperature: " + data));

            socket.emit('simulatorUpdate', {
                eventName: 'updateTemperature',
                payLoad: data
            });
        };

    })

    .controller('batteryTabDefaultPageCtrl', function($scope, socket) {

        $scope.tval = 5;

        $scope.updateBattery = function (data) {
            console.log(("New Battery level: " + data));

            socket.emit('simulatorUpdate', {
                eventName: 'updateBattery',
                payLoad: data
            });
        };

        $scope.oval = 5;

        $scope.updateOil = function (data) {
            console.log(("New Oil level: " + data));

            socket.emit('simulatorUpdate', {
                eventName: 'updateOil',
                payLoad: data
            });
        };

    })
    