
var React = require('react');

var Timer = React.createClass({

	// somem es6 magic will be compiled
	getInitialState() {
		return { secondsElapsed: 0 };
	},

	// normal es5 stuff
	tick: function () {
		this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
	},

	componentDidMount: function () {
		this.interval = setInterval(this.tick, 1000);
	},

	componentWillUnmount: function () {
		clearInterval(this.interval);
	},

	render: function () {
		debugger;
		// JSX gets parsed with the babel loader
		return (
			<div>
				<h3>It's the final count down </h3>
				Seconds elapsed: {this.state.secondsElapsed}
			</div>
		);
	}
});
