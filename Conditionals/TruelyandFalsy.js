// TODO: Truely and Falsy Value
// undefined var user;
// null = empty var user = null;
// 0  var user = 0;
// "" var user = "";
//  NaN 
//  they all are false Value by default
// Anything other than this values all are True values


var user;

if (user) {
    console.log("this is true value");
    // return nothing is user is falsy.
}

var a = "2";
if (a == 2) {
    console.log("condition is true");
} // return true;

if (a === 2) {
    console.log("condition is true");
} // return false as "2" and 2 is not same 
//  2 is integer whereas "2" is string 
// (==) compare only values but (===) compares but values and its data types 


//var user = null and var user = "null" both are different.
//   var user = null is null as a value; but "null" will take null as a string and return "True" as a value 

// Examples of Coersion

console.log(2 + 2); // return 4;
console.log(2 + "2"); //return 22 as it assume both as a string and concat.
console.log("2" + 2); // return 22; 
console.log(2 * "abc"); // return NaN(Not a Number);
console.log(2 * 'abc'); // return NaN;