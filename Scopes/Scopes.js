var a = 10;
let b = 20;
const c = 30;
console.log(a,b,c);
function test(){
   
    console.log(a);
    console.log(b);
    console.log(c);
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a,b,c);
}
test();

const name = "John"; // Global scope

function greet() {
    console.log("Hello, " + name); // Accessing global variable
}
greet(); // Output: Hello, John
{
    console.log(name);
}
console.log(name);


function student(){
    const studentName = "Alice"; // Local scope
    console.log("Student Name: " + studentName); // Accessing local variable
    var age = 20;   
    console.log("Student Age: " + age);
    let course = "Math";
    console.log("Student Course: " + course);
}

student();


{
    let city = "New York"; // Block scope
    console.log("City: " + city); // Accessing block-scoped variable
    const country = "USA";
    console.log("Country: " + country);
    var pin = 110001;
    console.log("Pin: " + pin);
}
console.log(pin);






function outerFunction() {
    let x = 15;
    {
        let x = 20;
        console.log(x);
    }
    console.log(x);
    // let x = 5;
    // console.log(x);
}outerFunction();
// console.log(x); // Error: x is not defined



var title = "JavaScript";
function displayTitle() {
    let title = "Learn JavaScript";
    console.log(title);
    {
        let title = "JavaScript Basics";
        console.log(title);
    }
    function innerFunction() {
        console.log(title);
    }
    innerFunction();
}
displayTitle();
console.log(title);
    

var company = "AIT";
let department = "Development";
console.log(company,department);

function mainOffice(){
    
    var company = "Google";
    let department = "HR";
    console.log(company,department);
    {
        var manager = "John";
        let floor = "5th floor";
        const team = "A-Team";
        console.log(company,department,manager,floor,team);
        {
            let department = "Finance";
            console.log(company,department,manager,floor,team);//googlr,finance,john,5th floor,a-team
        }
    }
    console.log(company,department,manager);
    function subOfiice(){
        console.log(company,department,manager);
        var company = "Microsoft";
        let department = "Sales";
        console.log(company,department,manager);
    }subOfiice();
    }
mainOffice();






