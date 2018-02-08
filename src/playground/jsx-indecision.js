
const app = {
	title: "Indecision app",
	subtitle: "Let the computer decide your fate",
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();       //to stop full page refresh when we press submit button

	const option = e.target.elements.option.value;

	if(option) {
		app.options.push(option);
		e.target.elements.option.value = '';	
		render();
	}
};

const wipeArray = () => {
	app.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const appRoot = document.getElementById("app");

const render= () => {
	const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
		<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
		<button onClick={wipeArray}>Remove All</button>
		<ol>
		{
			app.options.map((option) => {
				return <li key={option}>{option}</li>;   //key is used so that react can work efficiently. It
			})											 //can differentiate between different elements, what
														 //it wants to render
		}												 
		</ol>
		<form onSubmit={onFormSubmit}>
			<input type="text" name="option"></input>
			<button>Add Option</button>
		</form>
	</div>
	);	
	ReactDOM.render(template, appRoot);
};

render();
