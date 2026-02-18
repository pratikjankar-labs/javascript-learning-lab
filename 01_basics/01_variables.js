const accoundId = 12322
let accoundEmail = "abc123@gmail.com"
var accoundPassword = "12344"
let accoundCity

//accoundId = 2  //not allowed due to const keyword

console.log(accoundId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accoundId, accoundEmail, accoundPassword, accoundCity]);
