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
            }).success(function (data, status, headers, config) {
                jQuery('#RegisterForm').show();
                toastr['success']("Votre CNE est valide. <br><br>Inscrivez vous maintenant!", "Vérification de CNE");

                $scope.CNEForm = false;
                $scope.id_etud = data;
            });
        };

    }]);

