require([ "/ext-3.4.0/adapter/ext/ext-base"], function() {

	require([
		"scripts/ext-3.4.0/ext-all",
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
	
})