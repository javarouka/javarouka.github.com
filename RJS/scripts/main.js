require([
    "me/javarouka/conf/Context",
    "me/javarouka/Router",
    "me/javarouka/utils/ObjectUtils",
    "me/javarouka/utils/Logger"
], function(Context, Router, ObjectUtils, Logger) {

	var showObject = function(obj, prefix) {
		prefix = (prefix === undefined) ? '' : prefix + '.';
		var k, v;
		for(k in obj) {
			dk = prefix + k;
			v = (k === "global") ? obj[k].toString() : obj[k]; 
			if(ObjectUtils.isObject(v)) {
				showObject(v, dk);
			}
			else {
				Logger.info(dk + " : " + v);
			}
		}
	};
	
	var showContextInfo = function() {
		Logger.info("\n\n[Context info]");
		showObject(Context);
		Logger.info("\n\n");
	};
	
	try {
		showContextInfo();
		Router.start();
	}
	catch(globalExeption) {
		Logger.info(globalExeption);
	}
});