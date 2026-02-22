const user = {
    userName : "ABC",
    price : "1039",

    welcomeMessage: function(){
        console.log(`${this.userName} Welcome to website`);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "hitesh"
    //console.log(this.username);
    console.log(this);
}

//chai()

// const addTwoNums = (num1, num2) => {
//     return num1 + num2;
// }

//const addTwoNums = (num1, num2) => ( num1 + num2 );

const addTwoNums = (num1, num2) => ({userName: "ABC"});

//console.log(addTwoNums(3,54));

(function (){
    //named iife
    console.log("Database conected");
    
})();

( (name) => {
    //simple iife
    console.log(`Database conected to ${name}`);
    
})("ABC");
