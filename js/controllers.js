angular.module('app.controllers', [])

    .controller('carTabDefaultPageCtrl', function($scope, socket) {


    })

    .controller('locationTabDefaultPageCtrl', function($scope, socket) {

        $scope.choice = null;

        $scope.updateWeather = function (data) {
            console.log(("New Weather: " + data));

            socket.emit('simulatorUpdate', {
                key: 'weather',
                payLoad: data
            });
        };

        $scope.time_val = 6;

        $scope.updateTime = function (data) {
            console.log(("New Time: " + data));
            ;
            socket.emit('simulatorUpdate', {
                key: 'time',
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