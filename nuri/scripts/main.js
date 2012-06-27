require([
    "javarouka/utils/Logger"
], function(Logger) {

	var CONTEXT = window.GLOBAL_CONTEXT;
	
	var ControllerMap = {
		List: "ListController",
		Detail: "DetailController"
	}
	
	var controller = ControllerMap[GLOBAL_CONTEXT.GADGET];
	
	require([ 'javarouka/controller/' + controller ], function(Controller) {
		Controller.execute(CONTEXT);
	});
	
});