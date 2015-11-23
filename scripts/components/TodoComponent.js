var React = require('react');

module.exports = React.createClass({
	render: function() {
        var displayDescription = '';
        var completed = this.props.todo.get('completed');

        if(completed === false) {
            displayDescription = (
                    <td style={{textDecoration: 'line-through'}}>{this.props.todo.get('description')}</td>
            );
        }
        else {
            displayDescription = (
                    <td>{this.props.todo.get('description')}</td>
            );
        };

        return (
            <tr>
                {displayDescription}
            </tr>
        );
	}
})
