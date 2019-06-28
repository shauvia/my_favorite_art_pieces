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

  // prompt the user for the  title, artist, location
  var uName = prompt("What is the title?");
  var uArtist = prompt("What is the artist");
  var uYear = prompt("What is the year");
  var uLocation = prompt("Whare is it located?");
  var uDescription = prompt("Please write a short description.")

  //hand the info to the function that builds the html and run the function
  var html = createArtEntry(uName, uArtist, uYear, uLocation, uDescription);

  // take the html and give it to document.write
  document.write(html);
  }

} else {
  document.write("Thanks for not adding anything");
}

//pseudocode
//inputs: title, artist, location
//works: create html for a marterpiece entry on the site
//output: the html

 
