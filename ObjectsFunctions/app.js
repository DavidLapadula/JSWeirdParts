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

        console.log(this); // will point to the object
        var setName = function (newname) {
            this.name = newname; // 'this' points to global object
            self.name = newname; // 'this' points to object
        }

        setName("New Name");
    }
}