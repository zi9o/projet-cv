app.controller('listeCVController', ['$scope', '$http', 'root_URL', function ($scope, $http, root_URL)
    {
        $scope.idFiliere = '0';
        $scope.etudiants = [];
        $scope.currentPage = 1;
        $scope.pageSize = 5;


        $scope.loading = false;

        $scope.init = function () {

            $scope.loading = true;
            $http.get(root_URL + 'api' + '/allEtudiants').
                    success(function (data, status, headers, config) {
                        $scope.etudiants = data;
                        $scope.loading = false;
                    });
        };

    }]);