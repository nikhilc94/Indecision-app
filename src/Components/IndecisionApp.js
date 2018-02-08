import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
	}
	handleDeleteOptions = () => {
		// this.setState(() => {
		// 	return {					//equivalent short statement is below.
		// 		options: []			//to return object instead of function body, we enclose with ()
		// 	};
		// });
		this.setState(() => ({ options: [] }));
	} 
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option) 
	}))
	}
	handlePick = () => {
		// this.setState(() => {
		// 	return {

		// 	};
		// });
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({ selectedOption: option }));
	}
	handleModal = () => {
		this.setState(() => ({ selectedOption: undefined }));
	}
	handleAddOption = (option) => {
		if(!option)
			return "Enter valid value to add";

		else if(this.state.options.indexOf(option) > -1)
			return "This option already exists";

		this.setState((prevState) => ({ options: prevState.options.concat(option) }));
	};  //we don't use push bcoz we don't want to modify the old one
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
	render() {
		const subtitle = "Put your life in the hands of a computer.";
		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
					<div className="widget">  	
						<Options options={this.state.options} 
								 handleDeleteOptions={this.handleDeleteOptions} 
								 handleDeleteOption={this.handleDeleteOption} />
						<AddOption handleAddOption={this.handleAddOption} />  
					</div>
				</div>
				<OptionModal selectedOption={this.state.selectedOption} handleModal={this.handleModal}/>
			</div>
		);
	}
}

Header.defaultProps = {
	title: "Indecision"
}

export default IndecisionApp;