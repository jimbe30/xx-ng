/**
 * 
 */
	var resources = {
			general : 'ng-app/resources/cv/cv-general.json' + vers,
			experiences : 'ng-app/resources/cv/cv-experiences.json' + vers,
			competences : 'ng-app/resources/cv/cv-competences.json' + vers,
			formations : 'ng-app/resources/cv/cv-formations.json' + vers
	};
	
	var cvApp = angular.module('cvApp', ['shared-module']);
	
	cvApp.controller('cvCtrl', ['$scope', 'objectLoader', function ($scope, loader) {		
		for (var item in resources) {
			loader.load(resources[item], item);
		}			
	}]);
	
