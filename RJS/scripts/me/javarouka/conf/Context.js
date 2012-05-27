define(function() {
	
	var context = {
		id: new Date().valueOf(),
		global: window,
		storage: {
			type: "localStorage"
		},
		object: { },
		route: {
			map: {
				"#main": "MainController",
				"#start": "StartSlideController",
				"#error": "ErrorController"
			},
			routingPrefix: "me/javarouka/controller",
			routeTerm: 50,
			defaultRoute: "#main"
		},
		view: {
			contentArea: "content",
			prefix: "",
			postfix: "View",
			viewPath: "me/javarouka/view"
		}
	};
	
	return context;
});