// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

var secretCodeWord1 = "lackadaisical";
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook";
// Expected output: "g0bbl3dyg00k"

describe("when function is called", () => {
	it("returns coded message", () => {
		let secretCodeWord1 = "lackadaisical";
		let newWord = codeIt(secretCodeWord1);
		expect(newWord).toEqual("l4ck4d41s1c4l");
	});
	it("returns coded message", () => {
		let secretCodeWord2 = "gobbledygook";
		let newWord2 = codedIt(secretCodeWord2);
		expect(newWord2).toEqual("g0bbl3dyg00k");
	});
});

// b) Create the function that makes the test pass.

const codedIt = (strr) => {
	let numbers = ["4", "3", "1", 0];
	return strr
		.split("")
		.map((value) => {
			return value === "a"
				? numbers[0]
				: value === "e"
				? numbers[1]
				: value === "i"
				? numbers[2]
				: value === "o"
				? numbers[3]
				: value;
		})
		.join("");
};

console.log(codedIt(secretCodeWord1));
console.log(codedIt(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
// Expected output: "Apple" "Banana" "Peach"
describe("when containsLet is called, you should get an array as a return containg all the words that contain the letter a", () => {
	let arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
	let newArray = contains(arrayOfWords);
	expect(newArray).toEqual(["Apple", "Banana", "Peach"]);
});
// b) Create the function that makes the test pass.
const contains = (array) =>
	array.filter((value) => value.toLowerCase().includes("a"));

console.log(contains(arrayOfWords));
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3];
// Expected output: true
var hand2 = [5, 5, 3, 3, 4];
// Expected output: false
var hand3 = [5, 5, 5, 5, 4];
// Expected output: false

describe("When function is called", () => {
	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
		var hand1 = [5, 5, 5, 3, 3];
		// Expected output: true

		expect(fullHouse(hand1)).toEqual(true);
	});
	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
		var hand2 = [5, 5, 3, 3, 4];
		// Expected output: false

		expect(fullHouse(hand2)).toEqual(false);
	});
	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
		var hand3 = [5, 5, 5, 5, 4];
		// Expected output: false

		expect(fullHouse(hand3)).toEqual(false);
	});
});

// b) Create the function that makes the test pass.

const fullHouse = (array) => {
	if (array.length != 5) {
		return false;
	} else {
		let boxArray = array.sort()[0];
		let boxArray1 = array.sort()[array.length - 1];
		let newArray = array.filter((value) => value === boxArray).length;
		let newArray1 = array.filter((value) => value === boxArray1).length;
		return newArray === newArray1
			? false
			: (newArray === 2 || newArray === 3) &&
					(newArray1 === 2 || newArray1 === 3);
	}
};

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));
