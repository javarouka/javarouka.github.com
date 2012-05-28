define(function() {
	
	var context = {
		id: new Date().valueOf(),
		global: window,
		storage: {
			local: "localStorage",
			session: "sessionStorage"
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
			prefix: "content/",
			postfix: ".html",
			viewPath: "me/javarouka/view"
		}
	};
	
	return context;
});