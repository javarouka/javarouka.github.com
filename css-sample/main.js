require.config({ 
	baseUrl: '/css-sample/',	
 	paths : {
 		order: "lib/order",
 		syntaxh: "lib/syntaxHighlighter",
		jquery: 'lib/jquery',
		javarouka: "me/javarouka"
	}
});

require([ "javarouka/App" ], function(App) {

	App.init();

});
