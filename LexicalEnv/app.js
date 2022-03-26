// global execution context and 'this' created automatically. Window object IS global object in browsers. Always a global object
// global means NOT inside a function

// creating var/func they get added to global object if they ARE NOT in another func (other lexical env)
var a = 'Hello World';

function b() {

}