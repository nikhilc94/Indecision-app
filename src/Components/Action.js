import React from 'react';

const Action = (props) => (
		<div>
			<button className="big-button" disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
		</div>				// We are not calling the function, only referencing it.
							// It will get called automatically when the button is pressed.
);

export default Action;

// class Action extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
// 			</div>
// 				// We are not calling the function, only referencing it.
// 				// It will get called automatically when the button is pressed.
// 		);
// 	}
// }