var fabulous = require('fabulous');
var React = require('react');
var Hello = require('./Hello.jsx');
var Document = require('fabulous/Document');

var SyncMixin = require('./SyncMixin');

exports.main = fabulous.runAt(document.getElementById('hello'), helloApp);

function helloApp(node, context) {
	context.data = { message: 'Hello, Fabulous React' };

	setInterval(function() {
		context.data.message = Date();
	}, 1000);

	// Using standard React mixins within the component itself
	// Component has knowledge of sychronization
	//var hello = React.renderComponent(new Hello({}), node);

	// Using external mixin - better
	// Component has no knowledge of synchronization
	var hello = mixin(SyncMixin, React.renderComponent(new Hello({}), node));

	Document.sync([
		Document.fromProperty('data', context),
		hello
	]);
}

function mixin(m, component) {
	return Object.keys(m).reduce(function(c, k) {
		c[k] = m[k];
		return c;
	}, component);
}