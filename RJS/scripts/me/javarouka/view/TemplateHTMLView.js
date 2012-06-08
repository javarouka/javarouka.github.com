define([
    "jquery",
    "me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function($, Context, ObjectUtils, Logger) {

	var v = Context.view;
	var baseArea = v.contentArea;
	
	var render = function(model) {
		
		if(!ObjectUtils.isFunction(model.callback)){
			model.callback = function(model){};
		}
		
		var path = v.prefix + model.path + v.postfix;
		var c = '#' + ((model.loadArea) ? model.loadArea : baseArea);
		Logger.info(path + " loading...appened on " + c);
		$(c).load(path, model.callback);
	};
	
	return {
		render: render
	};
});