require.config({ 
	baseUrl: '/css-sample/',	
 	paths : {
 		order: "lib/order",
		jquery: 'lib/jquery',
		javarouka: "me/javarouka"
	}
});

require([ "javarouka/App" ], function(App) {

	App.init();

});
