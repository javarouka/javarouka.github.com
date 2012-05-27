define([
	"me/javarouka/conf/Context",
	"me/javarouka/utils/Logger"
], 
function(Context, Logger) {
	
	var v = Context.view;
	
	var resolve = function(viewName, model) {
		var resolved = v.viewPath + '/' + viewName + 'View';
		require([resolved], function(View) {
			Logger.info(resolved + " view resolved...");
	    	View.render(model);
	    });
	};
	
	return {
		resolve: resolve
	};
	
});