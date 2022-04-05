var a = 2, b = 3, c = 4; 

a = b = c;

console.log(a);
console.log(b);
console.log(c);

// two less than, associativity is left to right, so running (false < 1)
// false then coerced to a number, and false/null coerces to 0, true coerces to 1
console.log(3 < 2 < 1);


var a; 

if (a) {
    console.log('Something');
}

function greet(name) {
    name = name || '<Your name>'
    console.log('Hello ' + name);
}

greet("David");
greet();


