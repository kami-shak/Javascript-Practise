// Allow the user to access course if he/she is:
// logged In from email 
// logged In from Google
// logged In from Facebook

var isLoggedInFromEmail = true;
var isLoggedInFormGoogle = true;
var isLoggedInFromFacebook = true;

// if (isLoggedInFromEmail) {
//     console.log("Login Success");
// }
// else if (isLoggedInFormGoogle) {
//     console.log("Login Success");
// }
// else if (isLoggedInFromFacebook) {
//     console.log("Login Success");
// } else {
//     console.log("Login Unsuccessful");
// }

 if (isLoggedInFromEmail || isLoggedInFormGoogle || isLoggedInFromFacebook) {
     console.log("Login Success");
 } else {
     console.log("Login Unsuccessful");
 }
