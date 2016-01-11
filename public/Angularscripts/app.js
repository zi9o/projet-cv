var app = angular.module('app', ['ngResource','ngRoute'], function($interpolateProvider) {
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
});

app.config(['$routeProvider', function ($routeProvider) {        

        $routeProvider
        
                .when('/welcome', {
            templateUrl: 'app/welcome.html',
            controller: 'welcome',
            controllerAs: 'vm',
            caseInsensitiveMatch: true
        });
    }]);