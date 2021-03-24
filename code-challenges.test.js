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

// describe("when function is called", () => {
// 	it("returns coded message", () => {
// 		let secretCodeWord1 = "lackadaisical";
// 		let newWord = codeIt(secretCodeWord1);
// 		expect(newWord).toEqual("l4ck4d41s1c4l");
// 	});
// 	it("returns coded message", () => {
// 		let secretCodeWord2 = "gobbledygook";
// 		let newWord2 = codedIt(secretCodeWord2);
// 		expect(newWord2).toEqual("g0bbl3dyg00k");
// 	});
// });

// b) Create the function that makes the test pass.

const codeWord = (string) => {
	return string
		.split("")
		.map((value) => {
			if (value === "a") {
				return [4];
			} else if (value === "e") {
				return [3];
			} else if (value === "i") {
				return [1];
			} else if (value === "o") {
				return [0];
			}
		})
		.join("");
};
//trying to get the code to get me the letters changed into the numbers using conditionals but returns only numbers not the word with the letters replaced
console.log(codeWord(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
// Expected output: "Apple" "Banana" "Peach"
// describe("when contains is called, you should get an array as a return containg all the words that contain the letter a", () => {
// 	let arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
// 	let newArray = contains(arrayOfWords);
// 	expect(newArray).toEqual(["Apple", "Banana", "Peach"]);
// });
// b) Create the function that makes the test pass.
const contains = (array) =>
	// filter through the array and turn the uppercase to lowercase and spit the words that contain the letter a back.
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

// describe("When function is called", () => {
// 	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
// 		var hand1 = [5, 5, 5, 3, 3];
// 		// Expected output: true

// 		expect(fullHouse(hand1)).toEqual(true);
// 	});
// 	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
// 		var hand2 = [5, 5, 3, 3, 4];
// 		// Expected output: false

// 		expect(fullHouse(hand2)).toEqual(false);
// 	});
// 	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
// 		var hand3 = [5, 5, 5, 5, 4];
// 		// Expected output: false

// 		expect(fullHouse(hand3)).toEqual(false);
// 	});
// });

// b) Create the function that makes the test pass.

const array = array;

//ive found some examples online but i dont wanna copy them I would like to build it from the ground up
