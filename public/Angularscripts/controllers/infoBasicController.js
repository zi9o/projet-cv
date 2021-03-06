app.controller('infoBasicController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID=0;
        $ID_CV=0;
        $scope.initUser = function (id, id_cv)
        {
            $ID = id;
            $ID_CV = id_cv;
        };
        
        $scope.filename = '';
        $scope.situation = {
            availableOptions: [
                {id: '1', name: 'Célibataire'},
                {id: '2', name: 'Marié(e)'},
                {id: '3', name: "Divorcé(e)"}
            ]
        };
        $scope.init = function () {
            $scope.loading = true;
            $scope.loadingUploadPhoto = false;
            $http.get(API_URL + '/' + $ID).
                    success(function (data, status, headers, config) {
                        $scope.etudiant = data;
//                        $scope.filename = "{{ asset('../storage/uploads').'/'.'<%etudiant.photo%>' }}";
                        $scope.situation.selectedOption = {id: '-1', name: $scope.etudiant.situation};
                        $scope.loading = false;

                    });
        };

        $scope.updateInfoBasic = function (etudiant) {
            $scope.loading = true;

            $http.put(API_URL + '/' + $ID, {
                nom: etudiant.nom,
                prenom: etudiant.prenom,
                email: etudiant.email,
                telephone: etudiant.telephone,
                adresse: etudiant.adresse,
                situation: etudiant.situation

            }).success(function (data, status, headers, config) {
                $scope.etudiant = data;
                $scope.loading = false;

            });
            ;
        };

//        $scope.filename = "{{asset('assets/images/users').'/'.'<%etudiant.photo%>' }}";

        $scope.upload = function (file, id) {
            $scope.loadingUploadPhoto = true;
            Upload.upload({
                url: API_URL + '/upload',
                data: {file: file, 'id': $ID}

            }).then(function (resp) {
                $scope.loadingUploadPhoto = false;
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                $scope.etudiant=resp.data;
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                $scope.loadingUploadPhoto = true;
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
        
    }]);

