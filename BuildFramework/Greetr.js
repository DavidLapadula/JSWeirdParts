// trick, ensure any code before without semi-colon, we will still have it
;(function (global, $) {
    var Greetr = function(firstname, lastname, language) {
        // new will make new object because is constructor so using Greetr will not require 'new'
        return new Greetr.init(firstname, lastname, language);
    }; 

    // closure allows these things to be available on Greetr object, but not exposed from object
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    }; 

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    }; 

    var logMessagses = {
        en: 'Logged In',
        es: 'Inicio sesion'
    };

    // 'this' will point to object that created it here
    Greetr.prototype = {
        fullName: function () {
            return this.firstname + ' ' + this.lastname
        }, 
        
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language"
            }
        }, 

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullName(); 
        }, 

        greet: function (formal) {
            if (formal) {
                console.log(this.formalGreeting());
            } else {
                console.log(this.greeting());
            }

            //'this' refers to callable object, so method is chainable
            return this; 
        }, 

        log: function() {
            console.log(logMessagses[this.language] + ': ' + this.fullName());

            return this;
        }, 
        setLanguage: function (newLanguage) {
            this.language = newLanguage; 
            this.validate();
            return this; 
        }
    };

    Greetr.init = function(firstname, lastname, language) {
        var self = this;

        self.firstname = firstname || 'John';
        self.lastname = lastname || 'Doe';
        self.language = language || 'en'
    }

    // if created with Greetr.init object's prototype will point to prototype property of Greetr.init by default
    // but point it to Greetr.prototype in chain to prevent needing to type init everytime
    // so can add methods to Greetr prototype and available on every instance made with constructor
    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr; 
    
})(window, {});