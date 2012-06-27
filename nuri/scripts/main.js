require([
    "utils/Logger"
], function(Logger) {

	var CONTEXT = window.GLOBAL_CONTEXT;
	
	var ControllerMap = {
		List: "ListController",
		Detail: "DetailController"
	}
	
	var controller = ControllerMap[CONTEXT.GADGET];
	
	require([ 'controller/' + controller ], function(Controller) {
		Controller.execute(CONTEXT);
	});
	
});