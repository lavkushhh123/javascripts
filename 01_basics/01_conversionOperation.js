let score = 33

console.log(typeof score)              // type will be a number type
// or
console.log(typeof score) ;                  //both are same

let sscore = "33abc"
let valueInNumber = Number(sscore)                // to convert score into number
console.log(typeof valueInNUmber) ;              //it will return number type data type
console.log(valueInNumber);                        // but it wil return NaN, as it is not a number 


// put all 4 in place of 33abc , operate the avove two operation and see the result

let ssscore = null                         // return 0
let sssscore = undefined                      // return NaN
let scoree = true                            // it will return 1 ,if false return 0
let sccore = "priya"                      // kit will return Nan


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn) ;

// 1 => true , 0 =>false
// " " => false
//"lavkush" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber) ;           // 33 jo string me hai ab
console.log(typeof stringNumber) ;      // type will be string





//**************************OPERATIONS******************//



let value = 3 
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2%3);



//*************Adding  two string*******************//


let str1 = "hello"
let str2 =  "lavkush"
let str3 =  str1 + str2 ;
console.log(str3);



//****************some properties************** *//



console.log("3" + 6 + 8)       // iska output 368 aayega
console.log(1 +2 +"3")          // iska output (1+2) = 3 and then 3 so op 33 hoga
console.log(1+2+3+"4"+2+4)   // iska op 6424 hoga  mtlb , jhan se string start hota hai usko bad sab string ki tarah treat hota hai


console.log(true)       // op true
console.log(+true)       // op 1
console.log(+"")          // op 0


// let num1 , num2, num3 

// num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
++gameCounter;                      
console.log(++gameCounter)         // op 103  but for (gameCounter++) op 102