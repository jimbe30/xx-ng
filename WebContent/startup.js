/**
 * 
 */
var vers = "?v1";

(function() {
	
	var extLib = [
		"lib/angular/angular.js",
		"lib/angular-route/angular-route.js",
	];	
	var sharedJS = [
		"ng-app/shared/shared.module.js" + vers,
		"ng-app/shared/services/loadObject.service.js" + vers
	];	
	var appModules = [
		"ng-app/components/cv.js" + vers,
		"ng-app/app.js" + vers
	];
	
	include(extLib);	
	include(sharedJS);	
	include(appModules);	
	
})();

	
	

	
