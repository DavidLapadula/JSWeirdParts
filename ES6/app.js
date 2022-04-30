const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

// executor does the work, like req data
function CustomPromise(executor) {
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catches = [];

    // work is done and have result, so called by executor and gives value
    function resolve(result) {
        // one and done, value doesnt change
        if (state !== PENDING) return;

        state = FULFILLED;
        value = result;

        handlers.forEach(h => h(value));
    }

    function reject(err) {
        // one and done, value doesnt change
        if (state !== PENDING) return;

        state = REJECTED;
        value = err;

        catches.forEach(c => c(err));
    }

    // executor called first to kick off process, .then adds handlers for when work is complete
    this.then = function (callback) {
        state === FULFILLED ? callback(value) : handlers.push(callback);
    }

    // passed to executor so can be used when value is returned
    executor(resolve, reject);
};

// executor
const doWork = (res, rej) => {
    // setTimeout called first, but .then executes before its over, so handlers populated when resolve runs
    setTimeout(() => { res('Hello') }, 1000);
}

const doMoreWork = (res, rej) => {
    setTimeout(() => { res('How are you?') }, 3000);
}

let someText = new CustomPromise(doWork);

// someText.then(val => { console.log('1: ' + val) });
// someText.then(val => { console.log('2: ' + val) });

// setTimeout(() => {
//     someText.then(val => { console.log('3: ' + val) });
// }, 3000);


let someOtherText = new Promise(doWork);

// someOtherText
//     .then((val) => {
//         console.log('1st: ' + val);
//         return new Promise(doMoreWork);
//     }).then((val) => {
//         console.log("? " + val);
//     }); 


async function doAllTheWork() {
    const someText = new Promise(doWork);
    const text1 = await someText;
    console.log(text1);

    const someTextTwo = new Promise(doMoreWork);
    const textTwo = await someTextTwo;
    console.log(textTwo);

    return textTwo;
}

doAllTheWork();
console.log('Done');