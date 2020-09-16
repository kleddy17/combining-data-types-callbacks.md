// A few array methods use callbacks. 
//For example .map - .map takes each element of an 
//array and does something to it and returns a new arrays.

// But what should it do? 
//Multiply everything by 5? Capitalize everything? 
//If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

// By allowing a callback to determine what happens 
//to each array element we get a lot of 
//flexibility and we can do some really powerful things.


// Two arrays to work with
// The first question is for the numbers array. 
// The second question is for the words array.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every

// 1. Determine if every number is greater than or equal to 0

    // Here I made a function called numbers 
    //that passed in a num arguement
    // it returns that if the num we pass in is greater
    //than or equal to zero
const numbers = (num) => {
    return num >= 0;
    }
    nums.every(numbers)
    // Here I used the every() method
    //for the array of nums
    // and passed in the numbers function 

// 2. Determine if every word shorter than 8 characters

// Filter

// 1. Filter the array for numbers less than 4
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
// I made a function to return any numbers less than 4
const functionToFilterNumbers = function(number){
	return number < 4;
}
const filtered = nums.filter(functionToFilterNumbers)
console.log(filtered)
// used the filter method on the nums array while passing
// in the functionToFilterNumbers function to make
// sure the numbers were less than 4


// 2. Filter words that have an even length

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const result = panagram.filter(word => word.length > 6);

console.log(result);

// Find

// 1. Find the first value divisible by 5


// 2. Find the first word that is longer than 5 characters


// Find Index

// 1. Find the index of the first number that is divisible by 3


// 2. Find the index of the first word that is less than 2 characters long


// For Each
// console.log each value of the nums array multiplied by 3



// console.log each word with an exclamation point at the end of it


// Map

// 1. Make a new array of each number multiplied by 100
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
square = x => (x*100); 
squares = nums.map(square); 
console.log(squares);

//2. Make a new array of all the words in all uppercase
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps',
 'over', 'the', 'lazy', 'dog'].map(function(v) 
{
  return v.toUpperCase();
});
console.log(panagram);


// Some
// Find out if some numbers are divisible by 7


// Find out if some words have the letter a in them



// Thought Questions
// What happened to the original array?
// Can you store the values from a forEach method in a new array?
// Thought Questions
// What happened to the original array?
// Can you store the values from a map method in a new array?
