var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname; 
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// BAD
// This means accessing item on John, JS will look at person, because looking at the prototype chain)
john.__proto__ = person;

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

// lastname will point to person because property not on the Jane object 
// console.log(jane.getFullName());

for (var prop in john) {
    if (john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

var david = {
    address: '123 Street.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname; 
    }
}

var steve = {
    getFirstName: function() {
        return this.firstname; 
    }
}