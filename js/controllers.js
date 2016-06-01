angular.module('app.controllers', [])

    .controller('carTabDefaultPageCtrl', function($scope, socket) {


    })

    .controller('locationTabDefaultPageCtrl', function($scope, socket) {

        var dt = new Date();
        $scope.qty_time = new Quantity(60 * dt.getMinutes() + 60 * 60 * dt.getHours(), socket, 'time');

        $scope.getHour = function () {
            
            return Math.floor($scope.qty_time.qty / 3600);
            
        };

        $scope.getMinute = function () {

            return Math.floor($scope.qty_time.qty / 60 % 60);

        };

        $scope.location_choice = null;

        $scope.updateLocation = function (data) {
            console.log(("New Location: " + data));

            socket.emit('simulatorUpdate', {
                key: 'location',
                payLoad: data
            });
        };

        $scope.choice = null;

        $scope.updateWeather = function (data) {
            console.log(("New Weather: " + data));

            socket.emit('simulatorUpdate', {
                key: 'weather',
                payLoad: data
            });
        };

        $scope.usecase = null;

        $scope.updateUseCase = function (data) {
            console.log(("New Use Case - time: " + data));

            socket.emit('simulatorUpdate', {
                key: 'time',
                payLoad: data
            });
        };

         $scope.LED_mode = null;

        $scope.updateLED_mode= function (data) {
            console.log(("New LED Mode: " + data));

            socket.emit('simulatorUpdate', {
                key: 'LED_Mode_Update',
                payLoad: data
            });
        };

        $scope.temp_val = 72;

        $scope.updateTemperature = function (data) {
            console.log(("New Temperature: " + data));

            socket.emit('simulatorUpdate', {
                key: 'temperature',
                payLoad: data
            });
        };

    })

    .controller('batteryTabDefaultPageCtrl', function($scope, socket) {
        
        $scope.qty_battery = new Quantity(12, socket, 'battery');
        $scope.qty_oil = new Quantity(12, socket, 'oil');

    });

function Quantity(num, socket, key) {
    var qty = num;

    this.__defineGetter__("qty", function () {
        return qty;
    });

    this.__defineSetter__("qty", function (val) {
        val = parseInt(val);
        qty = val;

        console.log(('New ' + key + ' : ' + qty));

        socket.emit('simulatorUpdate', {
            key: key,
            payLoad: qty
        });
    });
}