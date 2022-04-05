var person = new Object(); 

person["firstname"] = "David"; // will create spot in memory, and person object will have reference to it
person.lastname = "Smith";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
