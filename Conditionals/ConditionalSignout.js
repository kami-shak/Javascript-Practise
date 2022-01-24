// Allow user a signout button if he is authenticated
// other wise show him/her option to Login/Signup

var authenticated = true;

// if (authenticated) {
//     console.log("Show signout button");
// } else {
//     console.log("Show login option/button");
// }

authenticated ? console.log("Show Signout Button") : console.log("Show SignIn Button");