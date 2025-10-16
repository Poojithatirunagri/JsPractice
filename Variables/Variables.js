var a = 1;//declaration and assign
console.log(a);
a = 5;//re-assign
console.log(a);
var a = 3;//re-declare and re-assign
console.log(a);


{
    var b = 8;//re-declare and re-assign
    console.log(b);
}
console.log(b);


// console.log(c);// c is not defined
// var c = 100;
// console.log(c);

var c;
console.log(c);
c= 10;
console.log(c);


let greet = "Hello";
console.log(greet);
greet = "Hi";
console.log(greet);

//let greet = "Hey";

{
    let greet2 = "Hey";
    console.log(greet2);
    //let greet2 = "Hola";
    greet2 = "Hola";
    console.log(greet2);
    
}

// console.log(greet3);//cannot access before inialization
let greet3="Bonjour";
console.log(greet3);


const pi = 3.14;
console.log(pi);

