// let name = "ABC"
// let branch = "CSE"

//console.log(name + branch) //old way

//console.log(`My name is ${name} and my branch is ${branch}`); //modern way

let userName = new String("abc@123");

console.log(userName);
console.log(`Lower Case: ${userName.toLowerCase()}`);
console.log(`Upper Case: ${userName.toUpperCase()}`);
console.log(`The length of this string is: ${userName.length}`);
console.log(`Character at index 2 is: ${userName.charAt(2)}`);
console.log(`The index of character 'c' is: ${userName.indexOf('c')}`);

const gameName = new String('hitesh-hc-com')

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));


