app.controller('loisirController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID;
        $ID_CV;
        $scope.initUser = function (id, id_cv)
        {
            $ID = id;
            $ID_CV = id_cv;
        };

        $scope.loisir = null;
        $scope.loadingLoisir = false;

        $scope.initLoisir = function () {
            $scope.loadingLoisir = true;
            $http.get(API_URL + '/cv/' + $ID_CV + '/loisir').
                    success(function (data, status, headers, config) {
                        $scope.loisir = data[0];
                        $scope.loadingLoisir = false;
                    });
        };

        $scope.updateLoisir = function (lsr) {
            $scope.loadingLoisir = true;
            $http.put(API_URL + '/cv/loisir' + '/' + lsr.id, {
                description: lsr.description,
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                lsr = data[0];
                $scope.loadingLoisir = false;
            });
            ;
        };
    }]);


