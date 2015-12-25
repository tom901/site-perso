angular.module('app.tutorialService', [])
.factory('TutorialService', function($http) {
  return {
    getTutorials : function() {
      return $http.get('api/tutorials').then(function(data) {
      	return data.data;
    	});
    }

  }
});
