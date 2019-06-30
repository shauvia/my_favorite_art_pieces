// {/* <ul>
//   <li>jajka</li>
//   <li>chleb</li>
//   </ul> */}

  var branchShoppingList = ["jajka", "avocado", "chleb"];

  console.log(branchShoppingList.lenght);

  //push and pop are called "array methods"
  // dodaje na konciec listy
   branchShoppingList.push('czekolada');

   // bierze rzecz z listy i usuwa ją i zwraca mi
   var lastItem = branchShoppingList.pop();

  console.log(branchShoppingList[0]);
  console.log(branchShoppingList[1]);
  console.log(branchShoppingList[2]);

  for (var index = 0; index <3; index++) {
    console.log(branchShoppingList[index]);
  }

  // Jeśli nie wiemy jak długa jest lista:

  for (var index = 0; index <branchShoppingList.length; index++) {
    console.log(branchShoppingList[index]);
  }




  