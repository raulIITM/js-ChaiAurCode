let score = "Hitesh";

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // NaN

// "33" => 33
// "33acd" => NaN
// null => 0
// undefined => NaN
// true, false => 1, 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false;
// "" => false;
// "Rahul" => true;

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof (stringNumber));