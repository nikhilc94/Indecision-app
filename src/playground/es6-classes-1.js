class Person {
	constructor(name = "Anonymous", age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi, I am ${this.name}`;
	}
	getDescription() {
		return `${this.name} is ${this.age} years old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		if(this.hasMajor()) {
			description += ` His/Her major is ${this.major}`
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	hasLocation() {
		return !!this.hasLocation;
	}
	getGreeting() {
		let greet = super.getGreeting();
		if(this.hasLocation()) {
			greet += ` I'm visiting from ${this.homeLocation}`;
		}
		return greet;
	}
}

const me = new Traveler("Nikhil Chelani", 23, "Dubai");
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Traveler();
console.log(other.getGreeting());
console.log(other.getDescription());