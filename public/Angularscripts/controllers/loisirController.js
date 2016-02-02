app.controller('loisirController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID = 2;
        $ID_CV = 4;

        $scope.loisir = null;
        $scope.loadingLoisir=false;
        $scope.text = "Hello World";

        $scope.initLoisir = function () {
            $scope.loadingLoisir=true;
            $http.get(API_URL + '/cv/' + $ID_CV + '/loisir').
                    success(function (data, status, headers, config) {
                        $scope.loisir = data[0];
                        $scope.loadingLoisir=false;
                    });
        };

        $scope.updateLoisir = function (lsr) {
            $scope.loadingLoisir=true;
            $http.put(API_URL + '/cv/loisir' + '/' + lsr.id, {
                description: lsr.description,
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                lsr = data[0];
                $scope.loadingLoisir=false;
            });
            ;
        };
        
        $scope.initLoisir();
    }]);


