define([
	"me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function(Context, ObjectUtils, Logger) {
	
	var r = Context.route;
	var global = Context.global;
	
	var currentHash = "";

	var loadController = function(controllerName) {
		try {
			var route = r.routingPrefix + '/' + controllerName;
			require([route], function(controller) {
				Logger.info(route + " execute...");
		        controller.execute({
		        	controllerName: controllerName,
		        	currentHash: currentHash,
		        	router: this
		        });
		    });
		}
		catch(e) {
			global.location.hash = r.defaultRoute;
		};
	    
	};

	var hashCheck = function() {
	    if (global.location.hash != currentHash) {
	    	var h = global.location.hash;
	    	loadController(r.map[h]);
	        currentHash = h;
	    }
	};

	var start = function() {
		global.location.hash = global.location.hash || r.defaultRoute;
        setInterval(hashCheck, r.routeTerm);
    };
    
	var doErrorRouting = function(code, msg) {
		global.location.hash = "#error";
	};
	
	return {
		doErrorRouting: doErrorRouting,
		start: start
	};
	
});