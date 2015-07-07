define([
    'jquery',
    'react'
], function($, React) {

    function Navigation() {
        this.Navigation = React.createClass({
            loadLink: function() {
                return $.get("data/linkList.json")
                    .then(function(data) {
                        this.setState({
                            data: {
                            linkList: data
                            }
                        });
                }.bind(this));
            },
            getInitialState: function() {
                return {
                    data: {
                        linkList: []
                    }
                };
            },
            componentDidMount: function() {
                this.loadLink();
            },
            links: function() {
                return this.state.data.linkList.map(function(link) {
                    return (
                        <li><a href={link.href} target={link.target || '_self'}>{link.title}</a></li>
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