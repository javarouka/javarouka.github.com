define(function(){
	
	var routes = [];
	
	routes.push(
		{ hash: "#list", controller: "ListController" },
		{ hash: "#add", controller: "AddController" },
		{ hash: "#remove", controller: "RemoveController" }
	);
	
	var index = {
		"ListController": routes[0],
		"AddController": routes[1],
		"RemoveController": routes[2]
	}
	
	var defaultRoute = "#list";
	var currentHash = "";
	
	function loadController(controllerName) {
	    require(['Controllers/' + controllerName], function(controller){
	        controller.start();
	    });
	    
	    // 페이지 뷰 해쉬 불일치 조정
	    if(window.location.hash !== index[controllerName].hash) {
	    	currentHash = window.location.hash = index[controllerName].hash;
	    }
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