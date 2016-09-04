/**
 * Created by Coupang on 2014-06-20.
 */
var DomSelector = {

    byId: function(id, node) {
        if(!node) {
            node = document;
        }
        return node.getElementById(id) || [];
    },

    byClass: function(clz, node, tag) {

        var classElements = [];

        if (node == null) node = document;
        if (tag == null) tag = '*';

        var els = node.getElementsByTagName(tag),
            len = els.length,
            pattern = new RegExp("(^|\\s)"+clz+"(\\s|$)");

        for (var i = 0; i < len; i++) {
            if (pattern.test(els[i].className)) {
                classElements.push(els[i]);
            }
        }
        return classElements;
    }
};