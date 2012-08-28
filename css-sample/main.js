require.config({ 
	baseUrl: '/css-sample/',	
 	paths : {
 		syntaxCore: "http://agorbatchev.typepad.com/pub/sh/3_0_83/scripts/shCore",
 		syntaxLoader: "http://agorbatchev.typepad.com/pub/sh/3_0_83/scripts/shAutoloader",
		jquery: 'lib/jquery',
		javarouka: "me/javarouka"
	}
});

require([ 
	"javarouka/App"
], function(App) {
	
	App.init();
	
});