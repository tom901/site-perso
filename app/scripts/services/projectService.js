angular.module('app.projectService', [])

.factory('ProjectService', function($http) {

  return {
    getProjects: function() {
      return $http.get('api/projects').then(function(data) {
      	// var projects = [];
      	// angular.forEach(data.data, function(project) {
       //      projects.push(project);
       //  });
      	return data.data;
    	});
    }

  }
});
