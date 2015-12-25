/**
 * Created by Thomas on 22/09/2014.
 */
angular.module('app.instagram', [])
    .controller('InstagramCtrl', ['$scope','InstagramService', function($scope, InstagramService){
    	$scope.instaobj = InstagramService.getdataInsta();
    }]);

