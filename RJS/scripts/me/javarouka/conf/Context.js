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
				"#rss-list": "RSSListController",
				"#add-rss": "AddRSSController",
				"#delete-rss": "DeleteRSSController"
			},
			routeTerm: 50,
			defaultRoute: "#main"
		},
		controller: {
			root: "me/javarouka/controller"
		},
		model: {
			root: "me/javarouka/model"
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