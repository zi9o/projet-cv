app.controller('experienceController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID = 2;
        $ID_CV = 4;
        

        $scope.addExperience = function () {
        $scope.Experiences = [];
        $scope.loadingExperience = false;
        $scope.experience = null;
        $scope.isEditing=false;
        $scope.editedExperience=-1;
        $scope.deletedExperience=-1;

        $scope.initExperience = function () {
           
            $http.get(API_URL + '/cv/' + $ID_CV + '/experience').
                    success(function (data, status, headers, config) {
                        $scope.Experiences = data;
                    });
        };


        $scope.addExperience = function () {

            $http.post(API_URL + '/cv/experience', {
                intitule: $scope.experience.intitule,
                organisation: $scope.experience.organisation,
                ville: $scope.experience.ville,
                date_dedut: new Date($scope.experience.date_dedut),
                date_fin: new Date($scope.experience.date_fin),
                description: $scope.experience.description,
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                $scope.Experiences.push(data);
                $scope.experience = null;
            });
        };

        $scope.prepareUpdateExperience = function (temp,index)
        {
            $scope.EditExperience =angular.copy(temp);
            $scope.EditExperience.date_dedut=new Date(temp.date_dedut);
            $scope.EditExperience.date_fin=new Date(temp.date_fin);
            $scope.editedExperience=index;
        };
        $scope.updateExperience = function (exp) {

            $http.put(API_URL + '/cv/experience' + '/' + exp.id, {
                intitule: exp.intitule,
                organisation: exp.organisation,
                ville: exp.ville,
                date_dedut: exp.date_dedut,
                date_fin: exp.date_fin,
                description: exp.description,
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                $scope.Experiences[$scope.editedExperience]=data;

            });
            ;
        };
        $scope.prepareDeleteExperience=function (index)
        {
            $scope.deletedExperience =angular.copy(index);
        };
        $scope.deleteExperience = function () {
//            $scope.loadingExperience = true;

            var exp = $scope.Experiences[$scope.deletedExperience];

            $http.delete(API_URL + '/cv/experience' + '/' + exp.id)
                    .success(function () {
                        $scope.Experiences.splice($scope.deletedExperience, 1);
//                        $scope.loadingExperience = false;

                    });
            ;
        };
    }]);
