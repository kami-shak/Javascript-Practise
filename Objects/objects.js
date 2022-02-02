var user = {
       firstName : "Kamran",
       lastName : "Shakil",
       role : "Admin",
       loginCount : 32,
       facebookSignedIn : true
};
console.log(user.firstName);
user.loginCount = 59;
console.log(user.loginCount);
console.log(user);
console.table(user);