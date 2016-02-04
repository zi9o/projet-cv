app.controller('registerController', ['$scope', '$http', 'root_URL', function ($scope, $http, root_URL)
    {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "positionClass": "toast-top-center",
            "onclick": null,
            "showDuration": "1000",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        $scope.cne = '';
        $scope.id_etud;
        $scope.RegisterForm = false;
        jQuery('#RegisterForm').hide();
        $scope.CNEForm = true;
        $scope.init = function (id)
        {
            console.info(id)
//            if (id === -1)
//            {
//                $scope.RegisterForm = true;
//                $scope.CNEForm = false;
//            }
        };

        $scope.getId = function () {

            $http.post(root_URL + 'confirm', {
                cne: $scope.cne,
            }).then(function (resp) {
                if (resp.data != -1)
                {
                    jQuery('#RegisterForm').show();
                    toastr['success']("Votre CNE est valide. <br><br>Inscrivez vous maintenant!", "Vérification de CNE");

                    $scope.CNEForm = false;
                    $scope.id_etud = resp.data;
                } else
                {
                    toastr['error']("<br>Votre CNE est invalide. <br><br>Réessayer !", "Vérification de CNE");
                }
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            });
        };

    }]);

