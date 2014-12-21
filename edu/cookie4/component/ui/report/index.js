define([
    "jquery",
    "handlebars",
    "text!./template.hbs",
    "text!./preReport.json",
    "css!./style.css",
], function($, H, $tpl, ReportData) {

//    function bindEvent(el, handler) {
//        var events = ['click'];
//        el.find("*").each(function(i, el) {
//            events.forEach(function(type) {
//                var value = $(el).data("event" + type.charAt(0).toUpperCase() + type.substr(1));
//                if(value) {
//                    $(el).on(type, function(e) {
//                        with(handler) {
//                            eval(value);
//                        }
//                    });
//                }
//            })
//        });
//    }

    function render(area) {
        var html = $(H.compile($tpl)(JSON.parse(ReportData)));
//        bindEvent(html, {
//            viewReport: function(e) {
//                e.preventDefault();
//                var frm = $("<iframe scrolling='no'></iframe>").attr("src", e.target.href).css({
//                    width: "100%",
//                    height: "450px",
//                    "overflow": "hidden",
//                    border: "solid 1px #ccc"
//                });
//                html.filter(".report-playground").empty().append(frm);
//            }
//        });
        area.append(html);
        area.on("click", ".box-item", function(e) {
            var $t = $(e.currentTarget);
            area.find(".expanded").not($t).removeClass("col-md-12").removeClass("expanded").addClass("col-md-1");
            ($t.hasClass("expanded")) ?
                $t.removeClass("col-md-12").addClass("col-md-1").removeClass("expanded") :
                $t.removeClass("col-md-1").addClass("col-md-12").addClass("expanded");
            $t.find(".etc-area").html($t.data("etc"));
        });
    }

    return {
        render: render
    };

});