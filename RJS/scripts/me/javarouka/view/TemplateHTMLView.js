define([
    "jquery",
    "me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function($, Context, ObjectUtils, Logger) {

	var v = Context.view;
	
	var render = function(model) {
		
		if(!ObjectUtils.isFunction(model.callback)){
			model.callback = function(model){};
		}
		
		var path = v.prefix + model.path + v.postfix;
		var c = '#' + v.contentArea;
		
		Logger.info(path + " loading...");
		$(c).load(path, model.callback);
		Logger.info("appened on " + c);
	};
	
	return {
		render: render
	};
});