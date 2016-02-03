app.controller('competenceController', ['$scope', '$http', 'API_URL', 'Upload', function ($scope, $http, API_URL, Upload)
    {
        $ID;
        $ID_CV;
        $scope.initUser = function (id, id_cv)
        {
            $ID = id;
            $ID_CV = id_cv;
        };
        
        $scope.niveau = {
            availableOptions: [
                {id: '1', name: '10%'},
                {id: '2', name: '30%'},
                {id: '3', name: '50%'},
                {id: '4', name: '70%'},
                {id: '5', name: "90%"}
            ]
        };
        
        $scope.competence=null;

        $scope.initCompetence = function () {
            $http.get(API_URL + '/cv/' + $ID_CV + '/competence').
                    success(function (data, status, headers, config) {
                        $scope.niveau.selectedOption = {id: '-1', name: ""};
                        var elt = $('#object_tagsinput');
                        elt.tagsinput({
                            itemValue: 'id',
                            itemText: 'intitule',
                        });
                        var c = data;
                        for (i = 0; i < c.length; i++)
                        {
                            elt.tagsinput('add',
                                    {
                                        "id": c[i].id,
                                        "intitule": c[i].intitule,
                                        "niveau": c[i].niveau,
                                    });
                        }
                        ;
                    });
        };

        $scope.addCompetence = function () {

            $http.post(API_URL + '/cv/competence', {
                intitule: $scope.competence.intitule,
                niveau: $scope.competence.niveau,
                cv_id: $ID_CV
            }).success(function (data, status, headers, config) {
                $scope.niveau.selectedOption = {id: '-1', name: ""};
                $scope.competence=null;
                var elt = $('#object_tagsinput');
                elt.tagsinput({
                    itemValue: 'id',
                    itemText: 'intitule',
                });
                var c = data;
                elt.tagsinput('add',
                        {
                            "id": c.id,
                            "intitule": c.intitule,
                            "niveau": c.niveau,
                        });
            });
        };
        RemoveCompetence = function (comp) {

            $http.delete(API_URL + '/cv/competence' + '/' + comp.id)
                    .success(function () {
                        console.info("competence deleted");

                    });
            ;
        };
    }]);
