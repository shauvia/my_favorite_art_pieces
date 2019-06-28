
// Powiedz mi skąd jesteś i jak masz na imię, a powiem Ci jaką sztukę lubisz. 

// input: imię, kraj pochodzenia
// works: sprawdza kraj skąd jest użytkownik
// autput: zwraca jaką sztukę lubi, stwierdzenie, że lubisz frytki

// prompt("What is your name?")
// confirm("Are you from America?")

// if yes:
//   document.write (imię + ",you like only fries and Big Mac")

// else:   
//   confirm("Are you from Europe?")
//   if yes:
//     document.write(imię + "you like Salvador Dali")
//   else:
//     document.write(imię + "you don't like art and art doesn't like you")


function whatArtYouLike() {
  var name = prompt("What is your name?");
  var fromAmerica = confirm("Are you from the US?");

  if (fromAmerica === true) {
    document.write(name +',' + "<p>you like only Andy Warhol.</p>");
  } else {
    var fromEurope = confirm("Are you from Europe?");
    if (fromEurope === true) {
      document.write(name + ',' + "<p> you like Salvador Dali.</p>");
    } else {
      document.write(name + ',' + "<p>you don't like art. You love all art!<p>");
    }
  }
}

  whatArtYouLike()