define([
	"me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function(Context, ObjectUtils, Logger) {
	
	var r = Context.route;
	var global = Context.global;
	var router = this;
	var loc = loc;
	
	var currentHash = "";

	var loadController = function(controllerName) {
		try {
			var route = r.routingPrefix + '/' + controllerName;
			require([route], function(controller) {
				Logger.info(route + " execute...");
		        controller.execute({
		        	controllerName: controllerName,
		        	currentHash: currentHash,
		        	router: router
		        });
		    });
		}
		catch(e) {
			loc.hash = r.defaultRoute;
		};
	    
	};

	var hashCheck = function() {
	    if (loc.hash != currentHash) {
	    	var h = loc.hash;
	    	loadController(r.map[h]);
	        currentHash = h;
	    }
	};

	var start = function() {
		loc.hash = loc.hash || r.defaultRoute;
        setInterval(hashCheck, r.routeTerm);
    };
    
	var doErrorRouting = function(code, msg) {
		loc.hash = "#error";
	};
	
	return {
		doErrorRouting: doErrorRouting,
		start: start
	};
	
});