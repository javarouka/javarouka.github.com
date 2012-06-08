define([
	"me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function(Context, ObjectUtils, Logger) {
	
	var r = Context.route;
	var c = Context.controller;
	var global = Context.global;
	var router = this;
	var loc = global.location;
	
	var currentHash = "";

	var loadController = function(controllerName) {
		try {
			var route = c.root + '/' + controllerName;
			Logger.info(route + " execute...");
			require([route], function(controller) {
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
		global.loc.hash = "#error";
	};
	
	return {
		doErrorRouting: doErrorRouting,
		start: start
	};
	
});