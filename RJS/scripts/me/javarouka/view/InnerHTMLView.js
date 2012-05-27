define([
    "me/javarouka/utils/ObjectUtils"
], function(ObjectUtils) {
	
	var render = function(model) {
		document.title = model.name;
		model.dom.innerHTML = model.html;
	};
	
	return {
		render: render
	};
});