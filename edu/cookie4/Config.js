require.config({

    baseUrl: ".",

    waitSeconds: 500,

    urlArgs: "_n_=1",

    deps: [
        "jqueryui",
        "bootstrap",
        "jquery-smooth-scroll",
        "jquery-cookie",
        "lodash",
        "handlebars",
        "component/App"
    ],

    paths: {

        // RequireJS 플러그인 설정
        "text" : "component/lib/requirejs-text/text",
        "domReady" : "component/lib/requirejs-domready/domReady",
        "order" : "requirejs-order",
        "css" : "component/lib/require-css/css.min",

        'ui': 'component/ui',
        'jquery': 'component/jqueryNonConflict',
        'origJQuery': 'component/lib/jquery/jquery.min',
        'jquery.validate': 'component/lib/jquery-validation/dist/jquery.validate',
        'jquery.validate.additional': 'component/lib/jquery-validation/dist/additional-methods',

        'handlebars': 'component/lib/handlebars/handlebars.min',
        'jqueryui': 'component/lib/jqueryui/ui/minified/jquery-ui.min',
        'bootstrap': 'component/lib/bootstrap/dist/js/bootstrap.min',
        'jquery-smooth-scroll': 'component/lib/jquery-smooth-scroll/jquery.smooth-scroll.min',
        'jquery-placeholder': 'component/lib/jquery-placeholder/jquery.placeholder.min',
        'jquery-cookie': 'component/lib/jquery-cookie/jquery.cookie',
        'moment': 'component/lib/moment/min/moment.min',
        'moment-ko': 'component/lib/moment/lang/ko',
        'lodash': 'component/lib/lodash/dist/lodash.min',
        'es5': 'component/lib/es5-shim/es5-shim.min'
    },
    shim: {
        'origJQuery': {
            exports: 'jQuery'
        },
        'lodash': {
            exports: '_'
        },
        'handlebars': {
//            deps: [
//                "ui/handlebars/helper/JoinHelper",
//                "ui/handlebars/helper/JsonHelper",
//                "ui/handlebars/helper/WhenHelper",
//                "ui/handlebars/helper/NumberFormatHelper",
//                "ui/handlebars/helper/SizeHelper",
//                "ui/handlebars/helper/DefaultHelper",
//                "ui/handlebars/helper/ReplaceStringHelper",
//                "ui/handlebars/helper/DateFormatHelper"
//            ],
            exports: "Handlebars"
//            init: function() {
//                for(var i = 0, len = arguments.length; i < len; i++) {
//                    Handlebars.registerHelper(arguments[i].HELPER_NAME || arguments[i].name, arguments[i]);
//                }
//            }
        },
        'jquery-smooth-scroll': {
            deps : ["jquery"],
            exports : 'jQuery'
        },
        'jqueryui' : {
            deps : [
                "jquery",
                "css!component/lib/jqueryui/themes/smoothness/jquery-ui.min",
                "css!component/lib/jqueryui/themes/smoothness/jquery.ui.theme"
            ],
            exports : 'jQuery'
        },
        'moment-ko': {
            deps: ['moment'],
            exports: 'moment'
        },
        'bootstrap': {
            deps : [
                "jquery",
                "css!component/lib/bootstrap/dist/css/bootstrap.min"
            ]
        }
    },
    map: {
        '*': {
            'css': 'component/lib/require-css/css.min'
        }
    }
});