app.controller('statisticController', ['$scope', '$http', 'API_URL',  function ($scope, $http, API_URL )
    {


        $scope.ActiveFiliere = function () {
            $scope.All = false;
            $scope.isGINFActive = false;
            $scope.isGINDActive = false;
            $scope.isGSEAActive = false;
            $scope.isGSTRActive = false;
            $scope.isG3EIActive = false;
            if ($scope.idFiliere == 1)
                $scope.isGINFActive = true;
            if ($scope.idFiliere == 2)
                $scope.isGINDActive = true;
            if ($scope.idFiliere == 3)
                $scope.isGSEAActive = true;
            if ($scope.idFiliere == 4)
                $scope.isGSTRActive = true;
            if ($scope.idFiliere == 5)
                $scope.isG3EIActive = true;
            if ($scope.idFiliere == 0)
                $scope.All = true;

        };
        

        $scope.loadingStatisticFiliere = false;

        $scope.initStatisticFiliere = function () {

            $scope.loadingStatisticFiliere = true;
            $http.get(API_Statistic_URL + 'statFiliere').
                    success(function (data, status, headers, config) {
                        initChartFiliere(data);
                        $scope.loadingStatisticFiliere = false;
                    });
        };

        $scope.loadingStatisticCompetence = false;

        $scope.initStatisticCompetence = function () {
            $scope.idFiliere=0;
            $scope.idNiveau=0;
            $scope.ActiveFiliere();
            $scope.ActiveNiveau();

            $scope.loadingStatisticCompetence = true;
            $http.get(API_Statistic_URL + 'statCompetence').
                    success(function (data, status, headers, config) {
                        initChartCompetence(data);
                        $scope.loadingStatisticCompetence = false;
                    });
        };
        $scope.getStatisticCompetence = function () {
            $scope.ActiveFiliere();
            $scope.ActiveNiveau();

            $scope.loadingStatisticCompetence = true;
            $http.get(API_Statistic_URL + 'statCompetence' + '/' + $scope.idFiliere, {
                        idNiveau:$scope.idNiveau,
                    }).success(function (data, status, headers, config) {
                initChartCompetence(data);
                $scope.loadingStatisticCompetence = false;
            });
        };
    }]);