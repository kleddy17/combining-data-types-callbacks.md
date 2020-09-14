// Write a ~1 sentence summary for each one
// Which ones surprise you (if any)?
// Which one is currently giving you the most struggle?

// DRY
// *  Don't Repeat Yourself, no repititon, once that happens, start a 
// *  Not surprising, found myself in trouble with constantly repeating myself

// KISS
// * Keep is simple, stupid, meaning dont add unessarcy code if there is a simpler
//  less messy way to write it.
// * Not surprising

// Avoid creating a YAGNI
// * Avoid writing functions that you won't need by creating steps through
//your comments. 
// *Not surprising

// Do the simplest thing that could possibly work
// * I think this means to brainstorm in a way diffrent solutions without 
//going to in-depth. Finding a solution to a problem that could work and try it without 
//testing it. That being said if it does work, figure out if there is a simplier way of doing it. 

// Don't make me think
//Based on a book by Steve Krug
//The whole idea is to make your code easy to read and good for beginners 

// Write code for the maintainer
// Make easy to follow along comments and commits for any person 
//that will either be debugging your code or a junior developer
//to be able to learn what your are doing by well thought out and
//planned comments

// Single responsibility principle
// Means that each task should have responsibilty over a single part of
//the programs functionality

// Avoid premature optimization
// This is saying to make sure your code completely works first
//before you start looking for ways to make it work faster


// Separation of concerns
// A concern a set of information  that affects a certain part of the program
//Wants you to clearly define your section and what each one does and is referring
//to

// // // Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// here we are storing the function l in a const f
const f = l => {
  //here we are defining each key/value pair
  let es = 0, p = 0, c = 1, n = 0
  //while loop
  while (c <= l) {
      //this is confusing to me
    n = c + p;
    [c, p] = [n, c]
    es += (c % 2 === 0) ? c : 0
  }
  return es
}

console.log(f(55))

// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

// we are creating an ES6 function with one arguement
// (limit)
const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    // making a while loop saying as long as the current number is less than or equal to the limit (the arugement you pass in) that run the next block of code
    while (current <= limit) {
      //next block of code saying the next number
      //equals the current number +previous number
      //1+0
      let next = current + previous;  
      // and the previous number is equal to the current
      //0 =1
      previous = current; 
      // and the current number equals the next
      // 1 = 1
      current = next; 
      // if statement saying if the current number is 
      //divisble by two and is strictly equal to 0 then 
      // run next block of code
      if (current % 2 === 0) {
        //next block of code, saying the evenSum equals
        // evenSum + current
        evenSum += current;
      }
    }
    // and this is saying display the result
    return evenSum;
  }
  
  //here you are invoking the function with the parameter of 55
  console.log(f2(55))
  // Answer with comments:
  
  // In keeping with one of our programming principals (write code for the maintainer): 
  //What would have been a more semantic name for this function 
  //(hint: this is a problem we had for either lab or hw and is considered a classic) 
  //are there any other variable names or things that would make this code easier to read and understand?
  
  // It would have been easier to read if the variables 
  //were named x,y,z instead of current previous and
  //next
  
  
  
  
  // If you started a new job and your project was to expand the functionality of this function by allowing a 
  //second argument and then based on that second argument, returning the sum of even or odd numbers, 
  //which code would you rather start working with f or f2?
  // 
  
  
  // Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line.
  // Remove this semi-colon! Run the code, is this semi-colon necessary?
  // No, the semi-colon is not necessary