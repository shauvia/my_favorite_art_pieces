//Functions have three parts:
//inputs aka parameteres -turkey, cheese, wheat (placeholderscar)
//work - making a sandwich
//output - sandwich

//and then: we need to be able to run them, give them their inputs, and receive their outputs.

//Functions give us "abstraction" - the ability to get stuff done without worrying abount how it's happening "under the hood".
// We can write the logic once, and then use it over and over again with different inputs to get customized results.

// give it name, so we can reference it later
// a place to hold inputs

function makeSandwich(meat, cheese, bread) {
  //pleace to define the work
  var sandwich = 'Here is a ' + meat + " and " + cheese + " sandwich on" + bread + " bread. It is delicious! Enjoy!"
  // a pleace to say what the input should be
  return sandwich;
}

// and then: wee need to be able to runthem, gibe inputs and receive their outputs
var mySandwich = makeSandwich("turkey","pepperjack","wheat");

console.log(mySandwich);
