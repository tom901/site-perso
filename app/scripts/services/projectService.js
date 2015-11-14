angular.module('app.projectService', [])

.factory('ProjectService', function($http) {

  return {
    getProjects: function() {
      return $http.get('api/projects').then(function(data) {
      	return data.data;
    	});
    }

  }
});
