app.controller('langueController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID = 2;
        $ID_CV = 4;


        $scope.niveaux = {
            availableOptions: [
                {id: '1', name: 'Bilingue (ou trilingue...)'},
                {id: '2', name: 'Courant'},
                {id: '3', name: 'Moyen'},
                {id: '4', name: 'Bonnes notions'},
                {id: '5', name: 'Notions'},
                {id: '6', name: "Scolaire"}
            ]
        };

        $scope.Langues = [];
        $scope.langue = null;

        $scope.initLangue = function () {
            $http.get(API_URL + '/cv/' + $ID_CV + '/langue').
                    success(function (data, status, headers, config) {
                        $scope.niveaux.selectedOption = {id: '-1', name: ""};
                        $scope.Langues = data;
                        $('[data-toggle="tooltip"]').tooltip(); 
                    });
        };

        $scope.addLangue = function () {

            $http.post(API_URL + '/cv/langue', {
                intitule: $scope.langue.intitule,
                niveau: $scope.langue.niveau,
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                $scope.Langues.push(data);
                $scope.niveaux.selectedOption = {id: '-1', name: ""};
                $scope.langue = null;

            });
        };

        $scope.updateLangue = function (lang) {

            $http.put(API_URL + '/cv/langue' + '/' + lang.id, {
                intitule: lang.intitule,
                niveau: lang.niveau,
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                lang = data;
                console.info('changed'+lang.niveau);
            });
            ;
        };


        $scope.deleteLangue = function (index) {

            var lang = $scope.Langues[index];

            $http.delete(API_URL + '/cv/langue' + '/' + lang.id)
                    .success(function () {
                        $scope.Langues.splice(index, 1);
                        console.info("langue deleted");
                    });
            ;
        };
    }]);


