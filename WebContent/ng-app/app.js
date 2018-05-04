/**
 * 
 */
(function() {

	angular.module('app', [
		'ngRoute', 
		'cvApp'
	]);
	
	angular.module('app').config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({
	        templateUrl: 'ng-app/components/cv.html'
	    });
	}]);
	
	angular.bootstrap(document, ['app']);
	
}) ();

