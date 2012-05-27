define([
    "jquery",
    "me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function($, Context, ObjectUtils, Logger) {

	var v = Context.view;
	
	var dataBinding = function(res) {
		var c = v.contentArea;
		$('#' + c).html(res);
	}
	
	var render = function(model) {
		document.title = model.name;
		var path = model.path;
		Logger.info(path + " loading...");
		
		$.get(path, dataBinding);
	};
	
	return {
		render: render
	};
});