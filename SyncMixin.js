var jiff = require('jiff');

module.exports = {
	get: function() {
		return this.state;
	},

	set: function(data) {
		this.setState(data);
	},

	diff: function(data) {
		return jiff.diff(data, this.state);
	},

	patch: function(p) {
		this.setState(jiff.patch(p, this.state));
	}
};