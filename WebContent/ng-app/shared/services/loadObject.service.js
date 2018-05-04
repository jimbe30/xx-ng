/**
 * 
 */

	var shared = angular.module('shared-module');
	
	shared.factory('objectLoader', ['$http', '$rootScope', function ($http, $rootScope) {
		
		function Loader() {
			this.load = function (target, objName) {
				var promise = null;
				if (target) {			
					var call = $http.get(target);
					promise = call.then(function (callResult) {
						$rootScope[objName] = callResult.data;
					});
				}
				return promise;
			};		
		}
		
		return new Loader();
		
	}]);
