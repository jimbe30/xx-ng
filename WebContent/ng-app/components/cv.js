/**
 * 
 */

(function() {
	
	var resources = {
			general : 'ng-app/resources/cv/cv-general.json',
			experiences : 'ng-app/resources/cv/cv-experiences.json',
			competences : 'ng-app/resources/cv/cv-competences.json',
			formations : 'ng-app/resources/cv/cv-formations.json'
	};
	
	var cvApp = angular.module('cvApp', ['shared-module']);
	
	cvApp.controller('cvCtrl', ['$scope', 'objectLoader', function ($scope, loader) {		
		for (var item in resources) {
			loader.load(resources[item], item);
		}			
	}]);
	
})();