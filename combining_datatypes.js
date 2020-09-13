// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = {
    colors: ["pink","light blue","red","black","purple","green","yellow-green"]
  };
  console.log(crayonBox.colors[3])
  
  // Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.
  
  const bottle = {
    cap: {
      properties: ["metal", "plastic"],
      color: ["blue", "white"]
    }
  }
  console.log(bottle.cap.color[1])
  
  // Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.
  
  const receipt = [
    {name: "iced americano"},
    {price: 4.5}
  ]
  
  console.log(receipt[0].name)
  // Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.
  
  const apartmentBuilding = [
    ["Ben","Chris","Amanda","Janice"], [1,3,7,10]
  ]
  console.log(apartmentBuilding[0][2])

  // Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).
const knit = () => {
    return {
      item: "scarf",
      size: "6ft"
    }
  }
  
  knit().size
  // Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.
  
  const crayonSelector = () => {
    return {
      colors: ["pink","light blue","red","black","purple","green","yellow-green"]
    }
  }
  
  crayonSelector().colors[5]
  // Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function
  
  const powerButton = () => {
    return ()=>{
      console.log("select a song")
    }
  }
  
  powerButton()()