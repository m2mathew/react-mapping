var React = require('react');
var ProductComponent = require('./ProductComponent');

module.exports = React.createClass({
	render: function() {
		var productsRows = this.props.products.map(function(product) {
			return (
				<ProductComponent product={product} />
			);
		});

		return (
			<div className="row">
				<h1>Products</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{productsRows}
					</tbody>
				</table>
			</div>
		);
	}
});
