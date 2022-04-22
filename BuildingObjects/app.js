// parameters used to tell object how to construct object 
function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
}

var john = new Person('John', 'Doe');
console.log(john);