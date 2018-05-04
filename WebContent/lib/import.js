/**
 * 
 */

(function (context) {
	
	context['include'] = function (deps) {
        return new Import(deps);
    };
    
	var scriptElements = document.getElementsByTagName("script");
	if (scriptElements) {
		let n = scriptElements.length;
		for (var i = 0; i < n; i++) {
			init(scriptElements[i]);
		}
	}
	
	function init(scriptElement) {
		var mainScript = scriptElement.getAttribute("main-script");
		if (mainScript) {
			include(mainScript);
		}
	}

    function Import (deps) {
    	
    	var dependencies = [];

        if (typeof deps == "string") {
        	dependencies.push(deps);
        } else if (deps.constructor == [].constructor) {
        	dependencies = deps;
        }
        
        dependencies.forEach(loadScript);
        
        function loadScript(scriptFile) {
        	var head = document.getElementsByTagName('head')[0];
        	var elem = document.createElement('script');
            elem.async = false;
            elem.type = "text/javascript";
            elem.src = scriptFile;
            head.appendChild(elem);
        }       
    };
    
})(this);