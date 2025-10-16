// Arithmetic Operators:+ ,- ,* ,/ ,%

//Addition operator
let a = 5;
let b = 6;

let add = a + b;
console.log("Addition: ", add);

//subtraction operator
let sub = b - a;
console.log("Subtraction: ", sub);

//multiplication operator
let mul = a * b;
console.log("Multiplication: ", mul);

//division operator
let div = b / a;
console.log("Division: ", div);

//modulus operator
let mod = b % a;
console.log("Modulus: ", mod);

// Assignment Operators:(+=,-=,/=,%=)

// +=
let c = 3;
c= c+3;
console.log(c);
c += 90;

// -=
c -= 80;
console.log(c);

// *=
c *= 2;
console.log(c);

// /=
c /= 4;
console.log(c);

// %=
c %= 7;
console.log(c);

//  Comparison Operators:==, ===, !=, !==, >, <, >=, <= , returns booleans values i.e true or false

let x = 5;//number
let y = '5';//string

console.log(x == y); //== equality operator (value)
console.log(x === y);//=== strict equality operator (value and type)
console.log(x != y);//!= not equal operator (value)
console.log(x !== y);//!== strict not equal operator (value and type)

console.log(x > 7);
console.log(x < 3);
console.log(x>=5);
console.log(x<=6);

// 4. logical operators: used to combine multiple condition
//&& : it will returns true if both conditions gets true, if any condition gets false it will returns the false
// || : it will returns the true if any one condition gets true, if both conditions gets fals ethen it will returnds the false
// ! : it will returns true as false and false as a true

console.log(10>15 && 30<=12);//(false && false)---> flase
console.log(10>5 && 10<5);//(true && false)--->flase
console.log(10>5 && 20<30);//true


console.log(10>15 || 30<=12);//false
console.log(10>5 || 10<5);//true
console.log(10>5 || 20<30);//true

console.log(!(10>15 || 30<=12));//true
console.log(!(10>5 || 10<5));//false
console.log(!(10>5 || 20<30));//false


console.log(true && false || true && !false);//(false || true && !false)---->(true && !flase)--->(true && true)--->true


//5. ternary operator:
// it is a short hand form of a if-else

//condition ? expressionIfTrue : expressionIfFalse

let marks = 75;

let result = (marks >=35) ? "Pass" : "Fail";
console.log(result);//pass


let a1 = 20;
let b1 = 5;
let result1 = a1>b1 ? a1<15 ? "Between 5-15" : "Above 15" : "Below 15";
console.log(result1);//between 5-15

//unary Operator:
//+,-,++,--,typeof
//+--->converts to number
//- --->nagtes the number
//++ (incremnet)--->two types
    //post Increament(value++)--->it will prints the value then late it increases the value
    //pre increment(++value)--->first it will increment the value late it will prints the value
//--(decreament)--->two types 
    //post decrement---->it will prints the value then late it decreases the value
    //pre decrement--->first it will decrreases  the value late it will prints the value\

console.log("5");
console.log(+"5");
console.log(true);
console.log(-true)

console.log(a1++);//20----a1-->21
console.log(a1);//21
console.log(++a1);//22
console.log(a1++);//22---->23
console.log(++a1);//24

a1=24

console.log(--a1);//23
console.log(a1);//23
console.log(a1--);//23
console.log(a1);//22
console.log(a1++);//22--->23
console.log(--a1);//22