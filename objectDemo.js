var cat1 = {
  name: 'amelia', 
  age: 1, 
  hobbies: ['chasing her brother', "nap", "spać"],
  speak function() {}
    console.log('miau');
    console.log(this.name);
  }
};

console.log(cat1)
// konkretną rzecz podaje
console.log(cat1.name); 
// wywołanie funkcji
cat1.speak();
