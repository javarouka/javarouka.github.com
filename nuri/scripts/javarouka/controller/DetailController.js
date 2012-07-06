define([
    "jquery",    
    "javarouka/model/Article",
    "javarouka/view/ListView",
    "javarouka/utils/Logger"
], function($, Article, View, Logger) {

	Logger.info("DetailController loaded.");

	var CONTEXT;
	
	var execute = function(Context) {
		Logger.info("DetailController execute...");
		CONTEXT = Context;

		throw new Error({
			code: 500,
			msg: "not implements",
			file: CONTEXT.CONTEXT + "javarouka/controller/DetailController.js"
		});
	}
	
	return {
		execute: execute
	}
});