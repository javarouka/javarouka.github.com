define(["me/javarouka/Storage"], function(Storage) {
	
	function GenericModel() {};
	GenericModel.fn = GenericModel.prototype;

	GenericModel.className = function() {
		return this.name || "ClassObject";
	};
	GenericModel.fn.className = function() {
		return this.constructor.className() || "InstanceObject";
	};
	GenericModel.fn.toString = function() {
		return "[object " + (this.constructor.className() || "InstanceObject") + "]";
	};

	var getList = function() {
		return Storage.get(key);
	};

	GenericModel.inherits = function(Constructor) {		

		var k;
		var parent = this;

		Constructor.parent = parent;
		Constructor.list = {};

		for(k in GenericModel) {
			Constructor[k] = GenericModel[k];
		};

		for(k in Constructor.fn) {
			Constructor.fn[k] = GenericModel.fn[k];
		};

		Constructor.prototype = Constructor.fn = new GenericModel();
		Constructor.fn.constructor = Constructor;

		return Constructor;
	};

	return GenericModel;

});