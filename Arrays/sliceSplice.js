var arr = [1,2,3,4,5];
console.log(arr.slice(1,4));
console.log(arr);
//console.log(arr.slice(1,4));

arr.splice(1,3,"K","A","M","R");
console.log(arr);
console.log(arr.splice(1,3,"K","A","M"));