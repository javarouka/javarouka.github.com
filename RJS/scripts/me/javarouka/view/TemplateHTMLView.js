define([
    "jquery",
    "me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function($, Context, ObjectUtils, Logger) {

	var v = Context.view;
	
	var dataBinding = function(res) {
		
		$('#' + c).html(res);
		
	}
	
	var render = function(model) {
		document.title = model.name;
		var path = model.path;
		Logger.info(path + " loading...");
		
		var c = '#' + v.contentArea;
		
		// $.get(path, dataBinding);
		$(c).load(path);
		
		console.log("appened on " + c);
	};
	
	return {
		render: render
	};
});