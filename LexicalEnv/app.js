// global execution context and 'this' created automatically. Window object IS global object in browsers. Always a global object
// global means NOT inside a function

// creating var/func they get added to global object if they ARE NOT in another func (other lexical env)
// var a = 'Hello World';

// function b() {
    
// }


// ////////////////////////

// // lexical env of b is right below global, so outer reference of ex ctx of b() will be global object
// function b() {
//     console.log(myVar);
// }

// function a() {
//     var myVar = 2;
//     b();
// }

// var myVar = 1;
// a();

function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date < ms) {}; 
    console.log("finished function");
}

function clickHandler() {
    console.log("click event");
}

// this will happen AFTER waitThreeSeconds because it got put on queue before this listener
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log("finished execution")