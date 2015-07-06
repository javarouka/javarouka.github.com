define([
    'jquery',
    'react',
    'JSXTransformer',
    'text!./navigation.template'
], function($, React, JSXTransformer, template) {

    var navigationSource = JSXTransformer.transform(template);

    var linkList = [
        {
            title: "쿠팡", href :"http://www.coupang.com/"
        },
        {
            title: "아마존", href :"http://www.amazon.com/"
        }
    ];

    var Navigation = function() {
        this.component = eval(navigationSource.code);
    };

    Navigation.prototype.render = function(renderArea) {
        React.render(
            React.createElement(this.component, {
                linkList: linkList
            }),
            renderArea
        );
    };

    return Navigation;

});