var howManyNum = prompt("How many numbers do you want to provide?");


while (isNaN(howManyNum) || howManyNum.trim() === "") {
  howManyNum = prompt("How many numbers do you want to provide?");
}


var userNumbers = [];
for (i = 0; i < howManyNum; i++) {
  var uNumber = prompt("Please provide a number ." + i);
  while (isNaN(uNumber) || uNumber.trim() === "") {
    uNumber = prompt("Please provide next number?");
  }
  userNumbers.push(uNumber);
}
console.log(userNumbers);

function selectEvenNumArray (numbers) {
  var evenNumbers = []
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 === 0) {
      evenNumbers.push(numbers[i])
    }
  }
  return(evenNumbers)
}

console.log(selectEvenNumArray(userNumbers))

// sprawdzić że jesli się nic nie wprowadzi, to aby nie zwróciło pustych zbiorów
// sprawdzić czy wprowadzone liczby są liczbami
