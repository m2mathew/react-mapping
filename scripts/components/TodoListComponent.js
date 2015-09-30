var React = require('react');
var TodoComponent = require('./TodoComponent');

module.exports = React.createClass({
	render: function() {
        var todoRow = this.props.todos.map(function(todo) {
            return (
                <TodoComponent todo={todo} />
            );
        });

		return (
			<div className="row">
				<h1>Todos</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoRow}
                    </tbody>
                </table>
			</div>
		);
	}
});
