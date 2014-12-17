define([
    "jquery",
    "handlebars",
    "text!./template.hbs"
], function($, H, $tpl) {

    "use strict";

    function render(area) {
        area.append(H.compile($tpl));
    }

    return {
        render: render
    };

});