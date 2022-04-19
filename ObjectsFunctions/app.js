var person = new Object();

person["firstname"] = "David"; // will create spot in memory, and person object will have reference to it
person.lastname = "Smith";

var firstNameProperty = "firstname";


var person2 = {
    name: "David",
    address: {
        number: "234 Ave"
    }
};

// function statement
function greet() {
    console.log("Hi");
}

//function expression
var anonymousGreet = function () {
    console.log("Anonymous Hi");
}

// By value, so variables are made equal with 2 memory locations
a = 3;
b = a;

// By reference, variables made equal by pointing to the same memory location
c = { name: "David" };
d = c;

// Using non preexisting value, so new memory space made
c = { name: "John" };

// this
function a() {
    console.log(this); // will point to global object
}

var b = function() {
    console.log(this); // will point to global object
}

var c = {
    name : "The c object",
    log: function() {
        var self = this; 

        self.name = "Updated object";
        console.log(this); // will point to the object
       
        var setName = function (newname) {
            this.name = newname; // 'this' points to global object
            self.name = newname; // 'this' points to object
        }

        setName("New Name");
    }
}

function argumentsGreet(fname, lname, language) {
    console.log(fname);
    console.log(lname);
    console.log(language);
    console.log(arguments);
    console.log('----------------------');
}

function getPerson() {
    return // parser will put semi-colon here, and will not return object
    {
        name: "David"
    }
}

// IIFE
var iifeGreeting = function(name) {
    return name;
}('David');

console.log(iifeGreeting); // will evaluate to name after it is invoked

// parenthenticals will trick parsers into thinking function is an expression, not a statement
// without parentheses, would be statement, function keyword must be followed by function name
(function (name){
    console.log('Hello ' + name);
}('Jane')); // fn created an ran at the same time

(function (global) {
    global.name = "John"; // its own execution ctx, but can pass reference to global to change value at window level
}(window));