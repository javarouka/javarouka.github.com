/*
  [[Configurer]]

  RequireJS 설정파일.

  @file    ${root}/js/extlib/require-config.js
  @author  이항희(javarouka@gmail.com | @nuritelecom.co.kr)

*/
var require = { 
  baseUrl: '/js/',	
  waitSeconds: 15,
  paths : {    
    jquery: [ 
      'extlib/jquery', 
      '//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min' 
    ],
    jqueryui: [ 
      'extlib/jqueryui', 
      '//ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min' 
    ],    
    underscore: [ 
      'extlib/underscore.min', 
      '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min' 
    ],
    base64: "extlib/base64.min",
    bootstrap: '/bootstrap/js/bootstrap',
    socketio: 'extlib/socket.io/socket.io.min',
    timepicker: "extlib/jquery.ui.timepicker",
    jswitch: 'extlib/jquery.switch',
    hashchange: 'extlib/jquery.ba-hashchange.min',
    chart: "extlib/fusionchart/Charts/FusionCharts",
    espresso: "espresso",
    libs: "espresso/libs",
    controller: "espresso/controller",
    model: "espresso/model",   
    view: "espresso/views"
  },
  shim: {
    'jqueryui': {
      deps: ['jquery'],
      exports: function($) { return $; }
    }, 
    'hashchange': {
      deps: ['jquery'],
      exports: function($) { return $; }
    },
    'bootstrap': {
      deps: ['jqueryui'],
      exports: function($) { return $; }
    },
    'underscore': {
      exports: function() { return _; }
    },
    'chart': {
      exports: function() { return FusionCharts; }
    }
  }
};
