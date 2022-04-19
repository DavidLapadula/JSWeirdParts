function greet(whattosay) {
    return function (name) {
        // console.log(whattosay + ' ' + name); // whattosay avaiable because of scope chain, in outer ctx
    }
}

var sayThere = greet('Hello');

// how is whattosay available here?
// execution ctx for greet() gone, but variable env still there
// sayHi made INSIDE greet, so has reference to variable env
sayThere('There');

function buildFunctions() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                // console.log(i); // not executed here, created object that is not invoked
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

// last value of i is 3, which is what the ctx was closed with
// all fn's have SAME outer environment, because made in same place
// fs[0]();
// fs[1]();
// fs[2]();


function buildFunctions2() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        // let j = i; creates new function scoped variable
        arr.push(
            // function() {
            //     console.log(i);
            // }

            //IIFE will create new execution ctx, so 1 per CURRENT value of i
            // j will stay in memoery even after function is invoked
            (function (j) {
                return function () {
                    // console.log(j);
                }
            }(i))
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

// language will be trapped in the closure for inner function
function makeGreet(language) {
    return function (fname, lname) {
        if (language === 'en') {
            // console.log('Hello ' + fname + ' ' + lname);
        }

        if (language === 'es') {
            // console.log('Hola ' + fname + ' ' + lname);
        }
    }
}

// Each call get own execution ctx and so diff spot in memory, and therefore its own closure
var greetEnglish = makeGreet('en');
var greetSpanish = makeGreet('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');


function sayHiLater() {
    var greeting = 'Hi!';

    // puts event on event loop, when timer is over, will find function to point to
    setTimeout(function(){
        // sayHiLater closes the value of greeting to ensure access
        // console.log(greeting);
    }, 3000);
}

sayHiLater();


function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000; 

    callback();
}; 

tellMeWhenDone(function(){
    // console.log('Done 1');
}); 


tellMeWhenDone(function(){
    // console.log('Done 2');
}); 

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname; 
    }
};

var logName = function(lang1, lang2) {
    // console.log('Logged: ' + this.getFullName());
    // console.log('Argument: ' + lang1 + ', ' + lang2);
    // console.log('-----------------------------');
}; 

var logPersonName = logName.bind(person);

logPersonName('en');
logName.call(person, 'fr');
logName.apply(person, ['en', 'fr']);

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname; 
    }
};

// 'this' will refer to person2 (Borrowing)
// console.log(person.getFullName.apply(person2));

function multiply(a, b){
    return a * b;
}

// this is lock in 2 as a the first parameter
var multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(4));

var arr1 = [1, 2, 3];
console.log(arr1);

function mapForEach(arr, fn){
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }

    return newArr;
}

// function programming
console.log(mapForEach(arr1, function(item) {
    return item * 3; 
}));
console.log(mapForEach(arr1, item =>  item * 2));
console.log(mapForEach(arr1, item =>  item > 2));

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var checkPastOne = function(limiter) {
    // just creating an object, limiter here is what is SET IN THE BIND
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var checkPastOne = function() {
    return checkPastLimit.bind(this, 1)
}

// lock in 1 as the first paramter to checkPastLimit, second argument happens in map() fn
// Need to invoke second argument because invocation itself returns an object with preset params
var arr4 = mapForEach(arr1, checkPastOne());
console.log(arr4);