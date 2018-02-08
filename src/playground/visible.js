const appRoot = document.getElementById("app");

const toggle = () => {
	if(toggleText === "Show details") {
		toggleText = "Hide details";
		here = <p>Hello there!</p>;
	}	else {
		toggleText = "Show details";
		here = "";
	}						  
	render();
};

let toggleText = "Show details";
let here = "";

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggle}>{toggleText}</button>
			{here}
		</div>
	);
	ReactDOM.render(template, appRoot);
};

render();