var React = require('react');
var SyncMixin = require('./SyncMixin');

module.exports = React.createClass({
	mixins: [SyncMixin],

	getInitialState: function() {
		return { message: 'Hello, React!' };
	},

	render: function() {
		return <p>{this.state.message}</p>;
	}
});