define([
    "me/javarouka/utils/ObjectUtils"
], function(ObjectUtils) {
	
	var render = function(model) {
		model.dom.innerHTML = model.html;
		if(ObjectUtils.isFunction(model.callback)){
			model.callback(model);
		}
	};
	
	return {
		render: render
	};
});