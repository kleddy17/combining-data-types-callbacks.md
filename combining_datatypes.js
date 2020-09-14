

// Combine objects, arrays, and functions
// touch combining_datatypes.js and do your work for this section in this new file


// Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. Log one of the elements of that array.
const crayonBox = {
    crayonNames: ["apricot", "bluetiful", "cerulean"]
}
    console.log(crayonBox.crayonNames[2])


 // Create an object bottle that has a property that is an object: cap. 
 // cap can have properties like material:'metal' or 'plastic', 
 // color: blue or white etc. 
 // Log one of the properties of that inner object.
const bottle = {
     cap : {
         material: "plastic",
         color: "blue"
    }
}
console.log(bottle.cap.color)
 
 
 // Create an array called receipt that has at least one object in it. 
 // The inner objects should be items that have a name and a price. 
 //Log one of the properties of that inner object.

const receipt = [ {name: "flour", price:"$1.00" },{ name: "sugar", price: "$2.50" }, ];
 console.log(receipt[1].name);

 //Create an array called apartmentBuilding 
 //that has an array as one of its elements, 
 //the inner array should be the names of the tenants. 
 //Log one of the elements of the inner array.

const apartmentBuilding = [{name: "John Smith"}, 
{name: "Lucy Eddy"}, {name: "Nate Eddy"}]
console.log(apartmentBuilding[2].name)
 // 🔴 Commit:
 // "Combine objects, arrays, and functions"



//Create a function knit that returns an object that 
//has the following kinds of properties item: scarf, size : 6ft etc. 
//Log a value of that object (hint: call the function and then 
//call a property on the return value).





// Create a function crayonSelector that 
//returns an object that has an array 
//(you can reuse your crayonBox object). 
//Log one of the elements of that array.




//Create a function powerButton that returns a 
//function called options - 
//options should console.log a simple message like select a song.
//Call that inner function






//  🔴 Commit:
//  "Combine objects, arrays, and functions more than one level deep"

// Model a Vending Machine Model a vending machine

// a vending machine is an object

// it has an array of snacks (make 3 snacks)

// snacks are objects that have a name and a price

//a vending machine has a function vend that allows 
//user to enter the array position (a number) 
//of the snack and then that snack will be returned


// Be able to call vendingMachine.vend() with a valid integer to return a snack




// Callbacks
// Make a function add that takes two arguments (numbers) and sums them together


// Make a function subtract that takes two arguments (numbers) and subtracts them



// Make a function multiply that takes two arguments and multiplies them


// Make a function divide that takes two arguments and divides them



// Make a function calculate that takes three arguments. 
//Assume the two arguments are a number ie num1, num2 and a function 
//called operates (a callback).



// Make it so that when calculate is invoked, the callback "operates" on the 
//numbers and returns the value.

// Call calculate 4 times, each time using one of the operation functions you wrote


// Function definition placement


// Clean up this code, so that it works and has function definitions 
//in the correct place

bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}
Error reading
What is meant by the error(s) this produces?

foo();

const foo ()=>{
    console.log('hi');
}
