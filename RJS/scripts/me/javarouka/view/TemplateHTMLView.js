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
		Logger.info(path + " loading...appened on " + c);
		$(c).empty().load(path, model.callback);
	};
	
	return {
		render: render
	};
});