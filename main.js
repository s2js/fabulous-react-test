var fabulous = require('fabulous');
var React = require('react');
var Hello = require('./Hello.jsx');
var Document = require('fabulous/Document');

exports.main = fabulous.runAt(document.getElementById('hello'), helloApp);

function helloApp(node, context) {
	context.data = { message: 'Hello, Fabulous React' };

	setInterval(function() {
		context.data.message = Date();
	}, 1000);

	var hello = React.renderComponent(new Hello({}), node);

	Document.sync([
		Document.fromProperty('data', context),
		hello
	]);
}