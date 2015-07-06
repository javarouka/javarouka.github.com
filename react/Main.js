/* global Handlebars: false */
'use strict';

require.config({

    baseUrl: '.',

    waitSeconds: 1000,

    urlArgs: '_v_=1',

    deps: [
        'jquery',
        'react',
        'App'
    ],

    paths: {

        'text': 'bower_components/requirejs-text/text',

        'react': 'bower_components/react/react.min',
        'JSXTransformer': 'bower_components/react/JSXTransformer',
        'jsx': 'bower_components/requirejs-react-jsx/jsx',

        // Ext Library
        'jquery': 'bower_components/jquery/dist/jquery.min'
    },
    shim: {
        'JSXTransformer': {
            'exports': 'JSXTransformer'
        }
    }
});