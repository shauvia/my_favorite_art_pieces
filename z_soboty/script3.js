uName = prompt("What is your name?");
uNameConf = confirm("Is your name " + uName + "?");

if (uNameConf === true) {
  document.write("<h2>Welcome to my page</h2>" + uName + "!")
} else {
  uName = prompt("Please provide your name!")
  document.write("<p>Hi</p>" + uName )
}
