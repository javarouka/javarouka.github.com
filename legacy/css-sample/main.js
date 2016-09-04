/*
	requirejs 전역 설정
 */
require.config({ 
	baseUrl: '/css-sample/',	
 	paths : {
 		syntaxh: "lib/syntaxHighlighter",
		jquery: [
      '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min',
      'lib/jquery'
    ],
    jqueryui: [
    	'//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min',
    	'lib/jqueryui'
    ],
		javarouka: "me/javarouka"
	}
});

require([ "javarouka/App" ], function(App) {
	App.init();
});
