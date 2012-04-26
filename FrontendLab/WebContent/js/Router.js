define(function(){
	
	var routes = [];
	routes.push(
		{ hash: "#list", controller: "ListController" },
		{ hash: "#add", controller: "AddController" }
	);
	
	var defaultRoute = "#list";
	var currentHash = "";
	
	function loadController(controllerName){
	    require(['Controllers/' + controllerName], function(controller){
	        controller.start();
	    });
	}
	
	function hashCheck(){
		var i = 0,
			currentRoute;
	    if (window.location.hash != currentHash){
	        for ( ; currentRoute = routes[i++] ; ){
	            if (window.location.hash == currentRoute.hash)
	                loadController(currentRoute.controller);
	        }
	        currentHash = window.location.hash;
	    }
	}
	
	function startRouting(){
        window.location.hash = window.location.hash || defaultRoute;
        setInterval(hashCheck, 100);
    }
	
	return {
		startRouting: startRouting
	};
	
});