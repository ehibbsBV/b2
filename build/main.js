"use strict";

var EntityList = React.createClass({
    displayName: "EntityList",

    propTypes: {
        entities: React.PropTypes.arrayOf(React.PropTypes.object),
        listTitle: React.PropTypes.string
    },

    render: function render() {
        console.log(this.props.entities);
        return React.createElement(
            "div",
            { className: "panel panel-default" },
            React.createElement(
                "div",
                { className: "panel-heading" },
                React.createElement(
                    "h3",
                    { className: "panel-title" },
                    this.props.listTitle
                )
            ),
            React.createElement(
                "ul",
                { className: "list-group" },
                this.props.entities.map(function (entity) {
                    return React.createElement(EntityListItem, { entity: entity });
                })
            )
        );
    }
});

var EntityListItem = React.createClass({
    displayName: "EntityListItem",

    propTypes: {
        entity: React.PropTypes.object
    },
    render: function render() {
        return React.createElement(
            "li",
            { className: "list-group-item" },
            React.createElement(
                "div",
                { className: "listItem" },
                React.createElement(
                    "h4",
                    null,
                    " ",
                    this.props.entity.name
                ),
                React.createElement(
                    "span",
                    { className: "listItemProp" },
                    "Quantity: ",
                    this.props.entity.quantity
                ),
                React.createElement(
                    "span",
                    { className: "fw-listItemProp" },
                    "description: ",
                    this.props.entity.description
                )
            )
        );
    }
});

var button = ReactBootstrap.Button({
    bsStyle: "success",
    bsSize: "large",
    children: "Register"
});

var entities = [{
    name: "first item",
    manufacturingId: "665-foo-1",
    quantity: 100,
    description: "thing I want"
}, {
    name: "second item",
    quantity: 227,
    manufacturingId: "664-foo-1",
    description: "other thing"
}];

var Hello = React.createClass({
    displayName: "Hello",

    render: function render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
});

// ReactDOM.render - switch
React.render(React.createElement(EntityList, { entities: entities, listTitle: "Product List" }), document.getElementById('entity-list'));