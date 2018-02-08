class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state= {
			options: []
		};
	}
	componentDidMount() {
		try {
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);		
			if(options)
				this.setState(() => ({ options }));
		} catch(e) {
			//do nothing at all
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}
	componentWillUnmount() {
		console.log("componentWillUnmount");
	}
	//handle delete options
	handleDeleteOptions() {
		// this.setState(() => {
		// 	return {					//equivalent short statement is below.
		// 		options: []			//to return object instead of function body, we enclose with ()
		// 	};
		// });
		this.setState(() => ({ options: [] }));
	} 
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) 
	}))
	}
	handlePick() {
		// this.setState(() => {
		// 	return {

		// 	};
		// });
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}
	handleAddOption(option) {
		if(!option)
			return "Enter valid value to add";

		else if(this.state.options.indexOf(option) > -1)
			return "This option already exists";

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	};  //we don't use push bcoz we don't want to modify the old one
	render() {
		const subtitle = "Put your life in the hands of a computer.";
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>  	
				<Options options={this.state.options} 
						 handleDeleteOptions={this.handleDeleteOptions} 
						 handleDeleteOption={this.handleDeleteOption} />
				<AddOption handleAddOption={this.handleAddOption} /> 
			</div>
		);
	}
}

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subtitle}</h2>
// 			</div>
// 		);
// 	}
// }

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);	
}

Header.defaultProps = {
	title: "Indecision"
}

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

const Action = (props) => {
	return (
		<div>
			<button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
		</div>				// We are not calling the function, only referencing it.
							// It will get called automatically when the button is pressed.
	);
}

// class Options extends React.Component {

// 	render() {
// 		return (
// 			<div>
// 				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
// 				{
// 					this.props.options.map((option) => <Option key={option} optionText={option}/>)
// 				}
// 			</div>
// 		);
// 	}
// }
//key is used so that react can work efficiently. It can differentiate between different elements, what
//it wants to render

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length ===0 && <p>Please add an option to get started</p>}
			{
				props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
			}
		</div>
	);
}

// class Option extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				{this.props.optionText}
// 			</div>
// 		);
// 	}
// }

const Option = (props) => {
	return (
		<div>
			{props.optionText}
		<button onClick={() => {
			props.handleDeleteOption(props.optionText)
		}}>
		Remove</button>
		</div>
	);
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) {    		 			//1) this handleAppOption function works only when we submit form
		e.preventDefault();          			//to prevent default form submission(whole page reloading after we submit form)
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option); //2) this handleAppOption function is the one which maniplates state
		this.setState(() => ({ error }));    //equivalent statement is error: error

		if (!error) {
			e.target.elements.option.value = '';
		}
	};	
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"></input>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp options={["One", "Two"]}/>, document.getElementById("app"));