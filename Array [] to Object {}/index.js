let arr = ["Harshii","Archit", "Ashima","Priya","Priyal"];

// method1
  let converted = Object.assign({} , arr);
// method2
var converted = {...arr};
console.log(converted);