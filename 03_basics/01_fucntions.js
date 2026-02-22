function printMyName(){
    console.log("ABC");
}

// printMyName()
// printMyName()
// printMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
//addTwoNumbers(4,5);

function addTwoNumbers(num1, num2){
    return num1 + num2;
}

// let result = addTwoNumbers(4,5);
// console.log(result);
// console.log(addTwoNumbers(5,35));

function loginUserMessage(name = "sam"){
    if(!name){
        console.log("Please enter your name: ");
        return;
    }
    return `${name} just logged in`
}

console.log(loginUserMessage()); //uses default name
console.log(loginUserMessage("ABC")); //uses given name

