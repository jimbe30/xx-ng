/**
 * 
 */

(function() {
	
	var shared = angular.module('shared-module', []);
	
	shared.provider('importService', ImportService);
	
	shared.run(['$http', 'importService', function($http, importService) {
		importService.setHttp($http);
	}]);
	
	function ImportService() {
		
		var executed = false;
		var http;
		var paths = [];
		var index = 0;
		var promise;
		
		function loadFile(path) {
			var call = http.get(path);
			promise = call.then(function (callResult) {
				eval(callResult.data);
			});
			return promise;
		}
		
		this.importJS = function importJS(path) {			
			if (path && paths.indexOf(path) < 0) {
				paths.push(path);
				promise = loadFile(path);
			} else if (!executed && index < paths.length) {
				promise = loadFile(paths[index]);
				promise.then(function () {
					index++;
					importJS();
				});
			} else {
				executed = true;
			}
			return promise;
		}
		
		this.addFile = function(path) {
			if (path && paths.indexOf(path) < 0) {
				paths.push(path);				
			}
		}
		
		this.setPaths = function(_paths) {
			paths = _paths;
		}
		
		this.setHttp = function($http) {
			http = $http;
		}
		
		this.$get = ['$http', function ($http) {
			http = $http;
			return new ImportService();
		}]		
	}
	
}) ();