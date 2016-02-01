app.controller('formationController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID = 2;
        $ID_CV = 4;
        
        $scope.Formations = [];
        $scope.formation = null;
        $scope.editedFormation=-1;
        $scope.deletedFormation=-1;

        $scope.initFormation = function () {
           $scope.initEtablissemment();
            $http.get(API_URL + '/cv/' + $ID_CV + '/formation').
                    success(function (data, status, headers, config) {
                        $scope.Formations = data;
                    });
        };
        
        $scope.initEtablissemment=function ()
        {
            $http.get('http://localhost/projet-cv/public/api/etablissement').
                    success(function (data, status, headers, config) {
                        $scope.Etablissements = data;
                    });
        };

        $scope.addFormation = function () {

            $http.post(API_URL + '/cv/formation', {
                intitule: $scope.formation.intitule,
                diplome: $scope.formation.diplome,
                mention: $scope.formation.mention,
                etablissement_id: $scope.formation.etablissement.id,
                date_dedut: new Date($scope.formation.date_dedut),
                date_fin: new Date($scope.formation.date_fin),
                
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                $scope.Formations.push(data);
                $scope.formation = null;
            });
        };

        $scope.prepareUpdateFormation = function (temp,index)
        {
            $scope.EditFormation =angular.copy(temp);
            $scope.EditFormation.date_dedut=new Date(temp.date_dedut);
            $scope.EditFormation.date_fin=new Date(temp.date_fin);
            $scope.editedFormation=index;
        };
        $scope.updateFormation = function (FR) {

            $http.put(API_URL + '/cv/formation' + '/' + FR.id, {
                intitule: FR.intitule,
                diplome: FR.diplome,
                mention: FR.mention,
                etablissement_id : FR.etablissement.id,
                date_dedut: FR.date_dedut,
                date_fin: FR.date_fin,
                
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                $scope.Formations[$scope.editedFormation]=data;

            });
            ;
        };
        $scope.prepareDeleteFormation=function (index)
        {
            $scope.deletedFormation =angular.copy(index);
        };
        $scope.deleteFormation = function () {

            var FR = $scope.Formations[$scope.deletedFormation];

            $http.delete(API_URL + '/cv/formation' + '/' + FR.id)
                    .success(function () {
                        $scope.Formations.splice($scope.deletedFormation, 1);

                    });
            ;
        };
    }]);
