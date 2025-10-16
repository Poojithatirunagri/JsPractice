let number = 42; // Number
console.log(number);
number = 50;
console.log(number);
console.log(typeof number);

let name = "Alice"; // String
console.log(name);
console.log(typeof name);

let isStudent = true; // Boolean
console.log(isStudent);
console.log(typeof isStudent);

let emptyValue = null; // Null
console.log(emptyValue);
console.log(typeof emptyValue); // Note: typeof null returns "object" due to a historical bug in JavaScript

let notAssigned; // Undefined
console.log(notAssigned);
console.log(typeof notAssigned);

let bigNumber = 9007199254741991n; // BigInt\
console.log(bigNumber);
console.log(typeof bigNumber);  

let person = { // Object
    name: "Bob",
    age: 25,
    isEmployed: false
};

console.log(person);
console.log(typeof person);

// singlr value access from object
console.log(person.name);
console.log(person.age);
console.log(person['isEmployed']);

person.age = 26; // update the value
console.log(person.age);


let numbers = [1, 2, 3, 4, 5,true,"string",{name:"nagarjuna",age:24},[100,200,300]]; // Array
console.log(numbers);
console.log(typeof numbers); 
// Note: typeof array returns "object"
// we can access single value from array using index, the index starts from 0 and lenght start from 1
console.log(numbers[7].name);
console.log(numbers[8]);


num = 40;
console.log(typeof num);
console.log(typeof null);