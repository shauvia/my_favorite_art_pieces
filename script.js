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

function createArtEntry(name, artist, year, location) {
  var html = "<section>" +"<h3>" + name + '</h3>' +
  '<img src="milkmaid.jpg">' + '<h5>'+ artist +', '+ year +', '+ location + "</h5>" + "<p>The Milkmaid (Dutch: De Melkmeid or Het Melkmeisje), sometimes called The Kitchen Maid.</p>" + 
"</section>";
  return html;
}

var wantsToAdd = prompt("Do you want to add another masterpiece?");

if (wantsToAdd === "yes") {
  // prompt the user for the  title, artist, location
  var uName = prompt("What is the title?");
  var uArtist = prompt("What is the artist");
  var uYear = prompt("What is the year");
  var uLocation = prompt("Whare is it located?");

  //hand the info to the function that builds the html and run the function
  var html = createArtEntry(uName, uArtist, uYear, uLocation);

  // take the html and give it to document.write
  document.write(html);
} else {
  document.write("Thanks for not adding anything");
}

//pseudocode
//inputs: title, artist, location
//works: create html for a marterpiece entry on the site
//output: the html

 
