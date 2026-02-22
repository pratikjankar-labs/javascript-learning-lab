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

//console.log(loginUserMessage()); uses default name
//console.log(loginUserMessage("ABC")); uses given name

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));