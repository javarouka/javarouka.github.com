/**
 * Created by Coupang on 2014-12-17.
 */
define([
    "jquery",
    "component/ui/header/index",
    "component/ui/report/index"
], function($, header, report) {

    "use strict";

    var view = $("[data-view]").first();

    header.render(view);
    report.render(view);

    view.wrap("<div class='container'/>");

});
