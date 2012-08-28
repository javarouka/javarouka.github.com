define(function() {

	var G;

	return {
		getVersion: function(){
			return version;			
		},
		toString: function(){
			return (G && G.toString) ? G.toString() : "[object ModuleObject]";		
		}
	}

});