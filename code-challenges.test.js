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
		let newWord = codeWord(secretCodeWord1);
		expect(newWord).toEqual("l4ck4d41s1c4l");
	});
	it("returns coded message", () => {
		let secretCodeWord2 = "gobbledygook";
		let newWord2 = codeWord(secretCodeWord2);
		expect(newWord2).toEqual("g0bbl3dyg00k");
	});
});

// b) Create the function that makes the test pass.

const codeWord = (string) => {
	return string
		.split("") // ["c","a","k","e"]
		.map((value) => {
			if (value === "a") {
				return 4;
			} else if (value === "e") {
				return 3;
			} else if (value === "i") {
				return 1;
			} else if (value === "o") {
				return 0;
			} else {
				return value;
			}
		}) //["c",4,"k",3]
		.join("");
};
//trying to get the code to get me the letters changed into the numbers using conditionals but returns only numbers not the word with the letters replaced
console.log(codeWord(secretCodeWord2));

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.
const containsA = (array) => {
	return array.filter((value) => value.toLowerCase().includes("a"));
};
// filter through the array and turn the uppercase to lowercase and spit the words that contain the letter a back.

// console.log(containsA(arrayOfWords));
// var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
// Expected output: "Apple" "Banana" "Peach"
describe("when contains is called, you should get an array as a return containg all the words that contain the letter a", () => {
	it("return array with letter A", () => {
		let arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
		let newArray = containsA(arrayOfWords);
		expect(newArray).toEqual(["Apple", "Banana", "Peach"]);
	});
});
// b) Create the function that makes the test pass.
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

		expect(cards(hand1)).toEqual(true);
	});
	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
		var hand2 = [5, 5, 3, 3, 4];
		// Expected output: false

		expect(cards(hand2)).toEqual(false);
	});
	it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
		var hand3 = [5, 5, 5, 5, 4];
		// Expected output: false

		expect(cards(hand3)).toEqual(false);
	});
});
// b) Create the function that makes the test pass.

// const array = array;

const cards = (array) => {
	//[5,5,5,3,3]
	//look at first one and store in an array
	// [5]
	// is the next element the same value as its in the array
	// yes so gets pushed in the same array as the other 5 [5,5]
	// if its not the same store it in a different array then check the next value until all values in the array have been checked
	// after it check for this specific value it should look like this [5,5,5]
	// store the diferrent value and it would look like [3,3]
	// {5:3,3:2}
	//{1:2,2:2,3:1} this wouldnt be a full house becuase we only need 2 key value pairs with one having a value of 3 and the other key has to have a value of 2
	let count = {};
	array.forEach((value) => {
		if (count[value] > 0) {
			count[value] = count[value] + 1;
		} else {
			count[value] = 1;
		}
	});
	var numberOfKeys = Object.keys(count).length;
	console.log(count);
	//its gonna return an array of the keys [5,3] and the length will tell us how many keys we have.
	if (numberOfKeys != 2) {
		return false;
	}
	if (
		(count[Object.keys(count)[0]] === 3 &&
			count[Object.keys(count)[1]] === 2) ||
		(count[Object.keys(count)[0]] === 2 && count[Object.keys(count)[1]] === 3)
	) {
		return true;
	} else {
		return false;
	}
};

console.log(cards(hand1));

//javascript how to determine the number of keys in an object.
