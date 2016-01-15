var app = angular.module('Cv', ['ngFileUpload'], function($interpolateProvider) {
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
}).constant('API_URL', 'http://localhost/projet-cv/public/api/etudiant');

//app.config(['$routeProvider', function ($routeProvider) {        
//
//        $routeProvider
//        
//                .when('/welcome', {
//            templateUrl: 'app/welcome.html',
//            controller: 'welcome',
//            controllerAs: 'vm',
//            caseInsensitiveMatch: true
//        });
//    }]);

app.directive('cvSectionBasic', function () {
    return {
        restrict: 'EA',
        replace: 'true',
        templateUrl: 'cv-section-basic'
    };
});