// parameters used to tell object how to construct object 
function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

// sets prototype of john to prototype property of Person
var john = new Person('John', 'Doe');

// built in constructors

// 'new' will create object with prototype property, which will be prototype of objects made with it
// prototype of Number has methods which a then has access to
var a = new Number('2');

// just USE base object as prototype for others
var person = {
    fname: 'Default',
    lname: 'Default',
    greet: function () {
        return 'Hi ' + this.fname;
    }
};

var john = Object.create(person);
john.fname = 'John';
john.greet = function() {return 'Hello John'};

if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1) {
            throw new Error('Can only have 1 parameter');
        }

        // set prototype of constructor to mimic pure prototype inheritance
        function F() {};
        F.prototype = o;
        return new F();
    }
}

// ES6
class Person {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    greet() {
        return 'Hi ' + this.fname;
    }
}

// Extends will set prototype of ItalianPerson to Person
class ItalianPerson extends Person {
    constructor(fname, lname){
        super(fname, lname);
    }

    greet() {
        return 'Ciao ' + this.fname;
    }
}
