angular.module('app.instagramService', [])

.factory('InstagramService', function($http) {
  return {
    getdataInsta : function() {
      return $http.get('api/instagram').then(function(objinsta) {
       // console.log('images service = ');
       // console.log(objinsta.data);
      	return objinsta.data;
    	});
    }
  }
});
