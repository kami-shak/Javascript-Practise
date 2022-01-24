// User is only allowed to make a purchased when he/she is:
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if(isLoggedIn){
//     console.log("Logged In Success");
//     if(isEmailVerified){
//         console.log("Email Verified");
//     }
//       if(cardInfo){
//           console.log("You can make a purshase");
//       }
// }

if (isLoggedIn && isEmailVerified && cardInfo) {
  console.log("Allow user to make a purchase");
} else {
    console.log("You are not allowed to purchase");
}