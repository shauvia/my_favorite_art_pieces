// var username = "Corey";
// console.log(username);

// username = "Ewa";
// console.log(username);


// username = "Stephanie";
// console.log(username);

var username = prompt("What is your name");

document.write('<p class="one">Hello ' + username + '! Welcome to my page.</p>');

var wantsToKnowMore = prompt("Do you want to find your favorite masterpiece");

if (wantsToKnowMore ==='yes' || wantsToKnowMore ==='okay') {
  document.write("<p> <a href='#two'> Hooray! Check this one.</a> </p>" );
} else {
  document.write("<p>Then get lost.</p>");
}

