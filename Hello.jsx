var React = require('react');

module.exports = React.createClass({
	//mixins: [require('./SyncMixin')],

	getInitialState: function() {
		return { message: 'Hello, React!' };
	},

	render: function() {
		return <p>{this.state.message}</p>;
	}
});