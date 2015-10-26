var EntityList = React.createClass({
    propTypes: {
        entities: React.PropTypes.arrayOf(React.PropTypes.object),
        listTitle: React.PropTypes.string
    },

    render: function() {
        console.log(this.props.entities);
        return <div  className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.listTitle}</h3>
            </div>
            <ul className="list-group">
                {this.props.entities.map(function(entity) {
                    return <EntityListItem entity={entity} />;
                })}
            </ul>
        </div>;
    }
});

var EntityListItem = React.createClass({
    propTypes: {
        entity: React.PropTypes.object
    },
    render: function() {
        return <li className="list-group-item">
            <div className="listItem">
                <h4> {this.props.entity.name}</h4>
                <span className="listItemProp">
                    Quantity: {this.props.entity.quantity}
                </span>
                <span className="fw-listItemProp">
                    description: {this.props.entity.description}
                </span>
            </div>
        </li>
    }
});

var button = ReactBootstrap.Button({
    bsStyle: "success",
    bsSize: "large",
    children: "Register"
});

var entities = [
    {
        name: "first item",
        manufacturingId: "665-foo-1",
        quantity: 100,
        description: "thing I want"
    },
    {
        name: "second item",
        quantity: 227,
        manufacturingId: "664-foo-1",
        description: "other thing"
    }
];

var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

// ReactDOM.render - switch
React.render(
    <EntityList entities={entities} listTitle="Product List" />,
        document.getElementById('entity-list')
);