var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
			<tr>
				<td>{this.props.cat.get('name')}</td>
				<td>{this.props.cat.get('type')}</td>
				<td><a href="{this.props.cat.get('picture')}">Picture Link</a></td>
			</tr>
    	);
	}
})
