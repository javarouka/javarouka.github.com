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
			routeTerm: 50,
			defaultRoute: "#main"
		},
		controller: {
			root: "me/javarouka/controller"
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