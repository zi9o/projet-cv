app.controller('experienceController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID = 2;
        $ID_CV=4;

        
        $scope.addExperience = function () {
            $http.post(API_URL + '/cv/experience', {
                intitule: $scope.experience.intitule,
                organisation: $scope.experience.organisation,
                ville: $scope.experience.ville,
                date_dedut: new Date($scope.experience.date_dedut),
                date_fin: new Date($scope.experience.date_fin),
                description: $scope.experience.description,
                cv_id:$ID_CV
            }).success(function (data, status, headers, config) {
                
            });
        };

        $scope.deleteExperience = function (index) {
            $scope.loading = true;

            var todo = $scope.todos[index];

            $http.delete(API_URL + '/todos/' + todo.id)
                    .success(function () {
                        $scope.todos.splice(index, 1);
                        $scope.loading = false;

                    });
            ;
        };
    }]);
