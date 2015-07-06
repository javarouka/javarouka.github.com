define([
    'jquery',
//    'nav/Navigation',
    'jsx!nav/nav'
], function($, Navigation) {

    'use strict';

    var view = $('[data-view]');

    (function initialize() {

        var nav = new Navigation();
        nav.render(view[0]);

    })();


});