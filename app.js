// // Data types and variable declaration

// const name = "Osinachi";
// console.log(name);
// console.log(typeof(name));

// let age = 20;
// console.log(age);
// console.log(typeof(age));

// const isMarried = true;
// console.log(isMarried);
// console.log(typeof(isMarried));

// let accountNumber;
// console.log(accountNumber);
// console.log(typeof(accountNumber));

// const accountBalance = null;
// console.log(accountBalance);
// console.log(typeof(accountBalance));

// const students = ["John", "Doe", "Smith"];
// console.log(students);
// console.log(typeof(students));

// const car = {
//     name:"volvo",
//     color:"grey",
//     mileage:2000,
//     isNew: false,
//     owner: undefined
// }
// console.log(car);
// console.log(typeof(car));


// // Operators

// const previousBalance = 2;
// const deposit = 3;
// console.log(previousBalance + deposit);

// const currentBalance = 5;
// const withdrawal = 2;

// console.log(currentBalance - withdrawal);

// console.log(10 / 2);
// console.log(4 * 3);
// console.log(5 % 2);
// const value = 45;
// console.log(5 == 4);
// console.log(5 === "5");


// String methods

let firstName = "John";
let lastName = 'Doe';
let middleName = `Smith`;
let space = " ";

console.log(firstName);
console.log(lastName);
console.log(middleName);

conncartenation

console.log(firstName + " " + lastName + " " + middleName);
console.log(`${firstName} ${lastName} ${middleName}`);

console.log(firstName.length);
console.log(firstName[1]);
console.log(firstName.charAt(2));

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

console.log(firstName.startsWith("j"));
console.log(firstName.endsWith("n"));

console.log(firstName.includes("o"));

console.log(firstName.indexOf("h"));

let sentence = "I Love Yams";
console.log(sentence.replace("Yams", "Plantains"));

let sentenceWhiteSpace = " I Love Yams ";

console.log(sentenceWhiteSpace);
console.log(sentenceWhiteSpace.trim());

