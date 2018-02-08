class Visibility extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
		this.state = {
			visibility: false
		};
	}
	handleToggleVisibility() {
		this.setState((prevState) => {
			return {
				visibility : !(prevState.visibility)
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
				{this.state.visibility && <p>Hey There!</p>}
			</div>
		);
	}
}

ReactDOM.render(<Visibility />, document.getElementById("app"));

// let visibility = false;

// const toggle = () => {
// 	visibility = !visibility;
// 	render();
// };

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick = {toggle}>{visibility ? "Hide Details" : "Show Details"}</button>
// 			{visibility && <p>Hey there!</p>}
// 		</div>
// 	);
// 	ReactDOM.render(template, document.getElementById("app"));
// };

// render();