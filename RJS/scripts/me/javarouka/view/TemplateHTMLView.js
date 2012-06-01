define([
    "jquery",
    "me/javarouka/conf/Context",
    "me/javarouka/utils/ObjectUtils",
	"me/javarouka/utils/Logger"
], function($, Context, ObjectUtils, Logger) {

	var v = Context.view;
	
	var includeCss = function (files, isDeleteCss) {
		for(var i=0,len=files.length; i < len ; i++) {
			var CSS   = document.createElement('link');
            CSS.rel   = 'stylesheet';
            CSS.type  = 'text/css';
            CSS.href  = '/stylesheets/' + files[i] + '.css';
            CSS.media = 'screen';
            document.getElementsByTagName('head')[0].appendChild(CSS);
		}
    }
	
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