'use strict';
var React = require('react');
var Backbone = require('backbone');

var CatList = require('./components/CatListComponent');
var ProductList = require('./components/ProductListComponent');
var QuarterbackList = require('./components/QuarterbackListComponent');
var TodoList = require('./components/TodoListComponent');

var catData = require('./data/cats');
var productData = require('./data/products');
var quarterbackData = require('./data/quarterbacks');
var todoData = require('./data/todos');

var appEl = document.getElementById('app');

var Router = Backbone.Router.extend({
	routes: {
		'cats': 'cats',
		'products': 'products',
		'quarterbacks': 'quarterbacks',
		'todos': 'todos',
	},
	cats: function() {
		React.render(
			<CatList cats={catData} />,
			appEl
		);
	},
	products: function() {
		React.render(
			<ProductList products={productData} />,
			appEl
		);
	},
	quarterbacks: function() {
		React.render(
			<QuarterbackList quarterbacks={quarterbackData} />,
			appEl
		);
	},
	todos: function() {
		React.render(
			<TodoList todos={todoData} />,
			appEl
		);
	}
});

var r = new Router();
Backbone.history.start();
