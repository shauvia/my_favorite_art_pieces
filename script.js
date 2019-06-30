// var username = "Corey";
// console.log(username);

// username = "Ewa";
// console.log(username);


// username = "Stephanie";
// console.log(username);

// var username = prompt("What is your name");

// document.write('<p class="one">Hello ' + username + '! Welcome to my page.</p>');

// var wantsToKnowMore = prompt("Do you want to find your favorite masterpiece");

// if (wantsToKnowMore ==='yes' || wantsToKnowMore ==='okay') {
//   document.write("<p> <a href='#two'> Hooray! Check this one.</a> </p>" );
// } else {
//   document.write("<p>Then get lost.</p>");
// }

function createArtEntry(name, artist, year, location, description) {
  var html = "<section>" +"<h3>" + name + '</h3>' +
  '<img src="milkmaid.jpg">' + '<h5>'+ artist +', '+ year +', '+ location + "</h5>" + "<p>" + description + "</p>" + 
"</section>";
  return html;
}

var wantsToAdd = prompt("Do you want to add another masterpiece? Type yes or no");


// is wantsToAdd not equal to yes and is it not equeal to no)

while( wantsToAdd !== "yes" && wantsToAdd !== "no"){
wantsToAdd = prompt("Do you want to add another masterpiece? Type yes or no");
}


if (wantsToAdd === "yes") {

  var numberOfPieces = prompt("How many piece you want to add?")

  for(numberOfPieces; numberOfPieces > 0; numberOfPieces--) {
    var piecesList = []

    var newPiece = {}
    newPiece.name = prompt("What is the title?");
    newPiece.artist = prompt("What is the artist");
    newPiece.year = prompt("What is the year");
    newPiece.location = prompt("Whare is it located?");
    newPiece.description = prompt("Please write a short description.");

  // prompt the user for the  title, artist, location
  // var uName = 
  // var uArtist = 
  // var uYear = 
  // var uLocation = p
  // var uDescription = 

  //hand the info to the function that builds the html and run the function
   newPiece.html = createArtEntry(newPiece.name, newPiece.artist, newPiece.year, newPiece.location, newPiece.description);

  piecesList.push(newPiece)

  console.log(newPiece)
  

  for (var index = 0; index < piecesList.length; index++) {
    // console.log(piecesList[index].html);
    document.write(piecesList[index].html);
  }
  // take the html and give it to document.write
  
  }

} else {
  document.write("Thanks for not adding anything");
}

//pseudocode
//inputs: title, artist, location
//works: create html for a marterpiece entry on the site
//output: the html

 
