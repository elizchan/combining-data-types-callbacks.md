// DRY
//Avoid repitition
// KISS
//Keep code simple
// Avoid creating a YAGNI
//add things when you absolutely need it
// Do the simplest thing that could possibly work
//Keep code simple
// Don't make me think
//Make code easy to read and understand
// Write code for the maintainer
//write psudocode for others to understand your work and to build on it
// Single responsibility principle
//a portion of code should complete a single task
// Avoid premature optimization
//do not add make code run faster if it does not work
// Separation of concerns
//put concerns into well-separated codes
//Separation of concerns surprised me because I did not know code can work separately but together.
//I am struggling with making sure I write psudocode so others can understand what I wrote and intended for the code to do.

//created function with parameter as l
const f = l => {
    //defined es, p, c and n variables
    let es = 0, p = 0, c = 1, n = 0
    //created a while loop with c less than or equal to 1
    while (c <= l) {
      //let n equal to the sum of c and p
      n = c + p;
      //let c equals to n and p equals to c
      [c, p] = [n, c]
      //if c is divisible by 2 then es = c
      es += (c % 2 === 0) ? c : 0
    }
    return es
  }
  
  console.log(f(55))
  
  // In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
  //Replace c with i
  //rewrite es += (c%2 === 0) ? c : 0 to if (es += (c%2 === 0)) {
      //es += c
    //}
  
  // If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
  //I would start with f2
  
  // Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
  //Yes
  
  