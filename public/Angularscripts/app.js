var app = angular.module('Cv', ['ngFileUpload', 'ngRoute', 'ngResource', 'ngAnimate', 'ngSanitize', 'summernote','angularUtils.directives.dirPagination'], function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<%=');
    $interpolateProvider.endSymbol('%>');
}).constant('API_URL', 'http://localhost/projet-cv/public/api/etudiant')
        .constant('API_Statistic_URL', 'http://localhost/projet-cv/public/api/')
        .constant('root_URL', 'http://localhost/projet-cv/public/');

app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider

                .when('/welcome', {
                    templateUrl: 'app/welcome.html',
                    controller: 'welcome',
                    controllerAs: 'vm',
                    caseInsensitiveMatch: true
                });
    }]);
//app.config(function(paginationTemplateProvider) {
//    paginationTemplateProvider.setPath('http://localhost/projet-cv/public/AngularScripts/views/dirPagination.tpl.html');
//});
app.directive('cvSectionBasic', function () {
    return {
        restrict: 'EA',
        replace: 'true',
        templateUrl: 'cv-section-basic'
    };
});
//app.directive('modal', function () {
//    return {
//      template: '<div class="modal fade">' + 
//          '<div class="modal-dialog">' + 
//            '<div class="modal-content">' + 
//              '<div class="modal-header">' + 
//                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
//                '<h4 class="modal-title">{{ title }}</h4>' + 
//              '</div>' + 
//              '<div class="modal-body" ng-transclude></div>' + 
//            '</div>' + 
//          '</div>' + 
//        '</div>',
//      restrict: 'E',
//      transclude: true,
//      replace:true,
//      scope:true,
//      link: function postLink(scope, element, attrs) {
//        scope.title = attrs.title;
//
//        scope.$watch(attrs.visible, function(value){
//          if(value === true)
//            $(element).modal('show');
//          else
//            $(element).modal('hide');
//        });
//
//        $(element).on('shown.bs.modal', function(){
//          scope.$apply(function(){
//            scope.$parent[attrs.visible] = true;
//          });
//        });
//
//        $(element).on('hidden.bs.modal', function(){
//          scope.$apply(function(){
//            scope.$parent[attrs.visible] = false;
//          });
//        });
//      }
//    };
//  });

