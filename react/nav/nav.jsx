define([
    'jquery',
    'react'
], function($, React) {
//
//    var linkList = [
//        {
//            title: "쿠팡", href :"http://www.coupang.com/"
//        },
//        {
//            title: "아마존", href :"http://www.amazon.com/"
//        },
//        {
//            title: "11번가", href :"http://www.11st.co.kr/"
//        },
//        {
//            title: "Yes24", href :"http://www.yes24.com/"
//        }
//    ];

    function sampling(arr, size) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }

    function Navigation() {
        this.Navigation = React.createClass({
            loadLink: function() {
                return $.ajax({
                    url: "data/linkList.json",
                    dataType: 'json',
                    cache: false
                }).then(function(data) {
                    this.setState({data: {
                        linkList: sampling(data, 3)
                    }});
                }.bind(this));
            },
            getInitialState: function() {
                return {
                    data: {
                        linkList: []
                    }
                };
            },
            onLinkClick: function(e) {
                e.preventDefault();
                console.log('link clicked', e.target);
            },
            componentDidMount: function() {
                this.loadLink();
                setInterval(this.loadLink, 3000);
            },
            links: function() {
                var self = this;
                return this.state.data.linkList.map(function(link) {
                    return (
                        <li><a href={link.href} target={link.target || '_self'} onClick={self.onLinkClick.bind(self)}>{link.title}</a></li>
                    );
                });
            },
            render: function() {
                return (
                    <ul className="nav">
                        {this.links()}
                    </ul>
                );
            }
        });
    }

    Navigation.prototype.render = function(renderArea) {
        React.render(<this.Navigation />, renderArea );
    };

    return Navigation;
});