var app = angular.module('Cv', [], function($interpolateProvider) {
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
}).constant('API_URL', 'http://localhost:8000/api/etudiant');

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