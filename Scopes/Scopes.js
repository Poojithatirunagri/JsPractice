var a = 10;
let b = 20;
const c = 30;
console.log(a,b,c);
function test(){
    // console.log(a);//undefined
    // console.log(b);//can't access before inialization
    // console.log(c);//can't access before inialization
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


// Functional Scope

function student(){
    const studentName = "Poojitha"; 
    console.log("Student Name: " + studentName); // Accessing local variable
    var age = 21;   
    console.log("Student Age: " + age);
    let course = "Math";
    console.log("Student Course: " + course);
}

student();

// Block Scope

{
    let city = "New York"; 
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
}outerFunction();


var title = "Java";
function displayTitle() {
    let title = "JavaScript";
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
        var manager = "Pooja";
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






