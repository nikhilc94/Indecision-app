import React from 'react';

export default class AddOption extends React.Component {
	state = {
		error: undefined
	}
	handleAddOption = (e) => {    		 			//1) this handleAppOption function works only when we submit form
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
				{this.state.error && <p className="add-option-error">{this.state.error}</p>}
				<form className="add-option" onSubmit={this.handleAddOption}>
					<input className="add-option__input" type="text" name="option"></input>
					<button className="button">Add Option</button>
				</form>
			</div>
		);
	}
}
