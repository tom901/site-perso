/**
 * Created by Thomas on 22/09/2014.
 */
angular.module('app.blogDetail', [])
    .controller('BlogDetailCtrl', ['$scope', 'TutorialService', '$stateParams', function($scope, TutorialService, $stateParams){
    	$scope.blogId = $stateParams.blogId;
    	$scope.tutorials = TutorialService.getTutorials();
    }]);
        
