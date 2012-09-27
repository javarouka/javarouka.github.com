var require = { 
	baseUrl: '/requirejs-html5js/',	
 	paths : {
		jquery: [
    	'//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js',
      'lib/jquery'
    ],
    jqueryui: [
    	'//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min',
    	'lib/jqueryui'
    ],
		javarouka: "me/javarouka"
	},
	shim: {
  	'jqueryui': {
    	deps: ['jquery'],
      exports: function($) { return $; }
    }
    /*
    'jqueryui': [ 'jquery' ]
    */
  }
};

