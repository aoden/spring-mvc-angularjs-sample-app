angular.module('weatherApp', [])
    .controller('weatherCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.city = ""
        $scope.api_key = "07fd5d785889e91f3dd29c51d539a9ff"
        $http.get("http://api.openweathermap.org/data/2.5/weather?APPID=07fd5d785889e91f3dd29c51d539a9ff&q=" + $scope.city).success(function (data) {
            $scope.data = data
        });

        $scope.refresh = function () {

            $http.get("http://api.openweathermap.org/data/2.5/weather?APPID=07fd5d785889e91f3dd29c51d539a9ff&q=" + $scope.city).success(function (data) {
                $scope.data = data
            });
        }
    }]);
