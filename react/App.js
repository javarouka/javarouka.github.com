define([
    'jsx!Navigation'
], function(Navigation) {

    'use strict';

    var view = document.querySelector('[data-view]');

    (function initialize() {

        var nav = new Navigation();
        nav.render(view);

    })();


});