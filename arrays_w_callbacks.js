// Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => {
    return num1 + num2
  }
  //add(5, 2)
  // Make a function subtract that takes two arguments (numbers) and subtracts them
  const minus = (num1, num2) => {
    return num1 - num2
  }
  //minus(8, 3)
  // Make a function multiply that takes two arguments and multiplies them
  const multiply = (num1, num2) => {
    return num1 * num2
  }
  //multiply(6, 3)
  // Make a function divide that takes two arguments and divides them
  const div = (num1, num2) => {
    return num1 / num2
  }
  //div(9, 3)
  // Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
  const calculate = (num1, num2, operates) => {
    return operates(num1, num2)
  }
  // Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
  // Call calculate 4 times, each time using one of the operation functions you wrote
  calculate(4, 3, add)
  calculate(6, 5, minus)
  calculate(8, 2, multiply)
  calculate(10, 2, div)
// Clean up this code, so that it works and has function definitions in the correct place

// bar();
// const bar = () => {
//     console.log('bar here');
// }
// foo();

// const foo = () => {
//     console.log('foo here');
// }
const bar = () => {
    console.log('bar here');
  }
  bar();
  
  const foo = () => {
    console.log('foo here');
  }
  foo();
  //What is meant by the error(s) this produces?
  
  // foo();
  
  // const foo = ()=>{
  //     console.log('hi');
  // }
  //The function foo is called before the function appears and it is also missing an equal sign within the function
  
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
  
  const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
  
  // The first question is for the numbers array. The second question is for the words array.
  
  // You don't have to write an answer to the thought questions.
  
  // Every
  // Determine if every number is greater than or equal to 0
  const findNums = (number) => {
    return (number >= 0)
  }
  nums.every(findNums)
  // determine if every word shorter than 8 characters
  const findWords = (word) => {
    return (word.length < 8)
  }
  panagram.every(findWords)
  // Filter
  // filter the array for numbers less than 4
  const findNum = (number) => {
    return (number < 4)
  }
  nums.filter(findNum)
  // filter words that have an even length
  const result = (word) => {
    return (word.length%2 === 0)
  }
  panagram.filter(result)
  // Find
  // Find the first value divisible by 5
  const divFive = (number) => {
    return (number%5 === 0)
  }
  nums.find(divFive)
  // find the first word that is longer than 5 characters
  const fiveChar = (word) => {
    return (word.length > 5)
  }
  panagram.find(fiveChar)
  // Find Index
  // find the index of the first number that is divisible by 3
  const divThree = (number) => {
    return (number%3 === 0)
  }
  nums.findIndex(divThree)
  // find the index of the first word that is less than 2 characters long
  const twoChar = (word) => {
    return (word.length < 2)
  }
  panagram.findIndex(twoChar)
  // For Each
  // console.log each value of the nums array multiplied by 3
  nums.forEach((number)=>{
    console.log(number * 3)
  })
  // console.log each word with an exclamation point at the end of it
  panagram.forEach((word)=>{
    console.log(word+"!")
  })
  // Map
  // make a new array of each number multiplied by 100
  const newArr = nums.map(number => number * 100)
  console.log(newArr)
  // make a new array of all the words in all uppercase
  const upperCase = (word) => {
    return word.toUpperCase()
  }
  panagram.map(upperCase)
  // Some
  // Find out if some numbers are divisible by 7
  const divSeven = (number) => {
    return (number%7 === 0)
  }
  nums.some(divSeven)
  //Find out if some words have the letter a in them
  panagram.some(word => word.includes('a'))