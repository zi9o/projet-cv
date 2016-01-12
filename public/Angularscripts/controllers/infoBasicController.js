app.controller('infoBasicController', function ($scope, $http, API_URL)
{
    $scope.situation = {
        availableOptions: [
            {id: '1', name: 'Célibataire'},
            {id: '2', name: 'Marié(e)'},
            {id: '3', name: "Divorcé(e)"}
        ]
    };
    $scope.init = function () {
        $scope.loading = true;
        $http.get(API_URL + '/' + 1).
                success(function (data, status, headers, config) {
                    $scope.etudiant = data;
                    $scope.situation.selectedOption= {id: '-1', name: $scope.etudiant.situation};
                    $scope.loading = false;

                });
    };

    $scope.updateInfoBasic = function (etudiant) {
        $scope.loading = true;

        $http.put(API_URL + '/' + 1, {
            nom: etudiant.nom,
            prenom: etudiant.prenom
        }).success(function (data, status, headers, config) {
            $scope.etudiant = data;
            $scope.loading = false;

        });
        ;
    };


    $scope.init();
});