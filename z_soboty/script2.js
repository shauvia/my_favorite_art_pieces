// 3 parts of every function:
// Input: name, flight # and seat
// work
// output

// What do I wanto this fuction to do? 
// Imputs: name, flight # and seat
// Work -  a "comfirmation statement" with their name, flight number, seat and that 6 digits

// Output: a "comfirmation statement"

// Assumtiom: code external to the funtion prompt the user for their name, flightNumber, and SeatNumber


//Example:
//Inputs: name - Corey, flightNumber - 555 seatNumber - 27B
// Work:
// Randomly generate a string containing numbers and letters - 
// Take the inputs and remember them
//glue together the sentece with the name, flightNumber and SeatNumber we're given

// Outputs: "Corey, you have booked flight 555, seat 27B."

// When we run it: assign Corey to name, assign 555 to flightNumber, Confirmation code: XY67DF

function makeFlightConfirmation(name, flightNumber, seatNumber) {
 var ticket =  name +", you have booked" + flightNumber + "seat" seatNumber + '.'
 return ticket;
}

var CoreysConfirmation =  makeFlightConfirmation("Corey", "555", "27B");

var passengerName = prompt("What is yout name?")
var passengerFlight = prompt("What is your flight number")
var passengerSeat = prompt("What seat do you want?")

var userConfirmation = makeFlightConfirmation(passengerFlight, passengerName, passengerSeat);

condole.log(usersConfirmation);
document.write('<p> here is your ticket</p>');
document.write
alert