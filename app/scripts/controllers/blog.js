/**
 * Created by Thomas on 22/09/2014.
 */
angular.module('app.blog', [])
    .controller('BlogCtrl', ['$scope','TutorialService', function($scope, TutorialService){
        $scope.tutorials = TutorialService.getTutorials();
    }]);
        
