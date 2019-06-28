//  var lightColor = prompt("What color is the light?"); //value we start with

// // //loopd need 3 piece of info:
// // // where value do we star with
// // // when do wee keep looping
// // // how do we update the value each time

//  while (lightColor === "red") { // when do we enter or stay in the loop
//   console.log("Stop");
//   lightColor = prompt("What color is the light?"); //give a chance to update the value
//  } 

// console.log("Gooo!")

var numberOFRooms = prompt("Hey there. How many rooms you need to clean?")

while(numberOFRooms > 0) {
  console.log("vacuum");
  console.log("dust");
  console.log("put things away");
  // numberOFRooms = numberOFRooms - 1
  numberOFRooms --;
}

console.log("I'm done cleaning!")