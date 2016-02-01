app.controller('formationController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID = 2;
        $ID_CV = 4;
        
        $scope.Formations = [];
        $scope.formation = null;
        $scope.editedFormation=-1;
        $scope.deletedFormation=-1;

        $scope.initFormation = function () {
           
            $http.get(API_URL + '/cv/' + $ID_CV + '/formation').
                    success(function (data, status, headers, config) {
                        $scope.Formations = data;
                    });
        };


        $scope.addFormation = function () {

            $http.post(API_URL + '/cv/formation', {
                intitule: $scope.formation.intitule,
                organisation: $scope.formation.organisation,
                ville: $scope.formation.ville,
                date_dedut: new Date($scope.formation.date_dedut),
                date_fin: new Date($scope.formation.date_fin),
                description: $scope.formation.description,
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
        $scope.updateFormation = function (exp) {

            $http.put(API_URL + '/cv/formation' + '/' + exp.id, {
                intitule: exp.intitule,
                organisation: exp.organisation,
                ville: exp.ville,
                date_dedut: exp.date_dedut,
                date_fin: exp.date_fin,
                description: exp.description,
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

            var exp = $scope.Formations[$scope.deletedFormation];

            $http.delete(API_URL + '/cv/formation' + '/' + exp.id)
                    .success(function () {
                        $scope.Formations.splice($scope.deletedFormation, 1);

                    });
            ;
        };
    }]);
