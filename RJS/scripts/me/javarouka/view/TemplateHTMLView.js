define([
    "jquery",
    "me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function($, Context, ObjectUtils, Logger) {

	var v = Context.view;
	
	var render = function(model) {
		document.title = model.name;
		var path = model.path;
		var c = '#' + v.contentArea;
		
		Logger.info(path + " loading...");
		$(c).load(path, model.callback);
		console.log("appened on " + c);
	};
	
	return {
		render: render
	};
});