// document.writeln("From JS")

// let t = 90;

// if (t >= 100) {
//     console.log("BOILING!");
// } else if (t < 100 && t >= 60) {
//     console.log("It's hot");
// } else if (t < 60 && t >= 30) {
//     console.log("It's warm");
// } else {
//     console.log("It's cold");
// }

// // parsing

// let x = 70;
// var state;

// state = (x >= 100) ? "Boiling" : "Not Boiling";

// console.log(state)

// let day = 2;

// switch (day) {
//     case 1:
//         console.log ("Sunday")
//         break;
//     case 2:
//         console.log ("Monday")
//         break;
//     case 3:
//         console.log ("Tuesday")
//         break;
//     case 4:
//         console.log ("Wednesday")
//         break;
//     case 5:
//         console.log ("Thursday")
//         break;
//     default:
//         console.log ("NONE")
// }

// for (var i = 0; i < 10; i++) {
//     console.log (i)
// }

function hello () {
    console.log ("Welcome!")
}

hello()

function add (n1, n2) {
    var result = n1 + n2;
    console.log (result);
}

add(2, 3)

function add (n1=2, n2=5) {
    var result = n1 + n2;
    console.log (result);
}

add()

function add2 (n1=2, n2=5) {
    var result = n1 + n2;
    return result;
}

console.log (add2())

var y = function() {
    console.log ("This is anonymous function")
}

y()

console.log ("- - - - - - - - - - - - - - - - - - - - - - - - - -")

function callAnother (func) {
    console.log ("Calling another function")
    func()
}

callAnother(function() {
    console.log ("Inside Function")
})

console.log ("- - - - - - - - - - - - - - - - - - - - - - - - - -")

var arr = [100, 90, "x", 4.2, "String"];
console.log (arr)

// Printing a value
console.log (arr[3]);

// Swapping a value
arr[2] = "Letter";
console.log (arr)

// Checking array length
console.log (arr.length)

// Deleting the last element/value
arr.pop()
console.log (arr)

// Pushing Values
arr.push(10.5, 1)
console.log (arr)

// Splice
arr.splice(4)
console.log (arr)


//

let Person = {
    name: "Youssef",
    age: 20,
    welcome: function () {
        console.log("Welcome " + this.name);
    }
};

Person.welcome();

let Person2 = {};
Object.assign(Person2, Person, { department: "IT" });
console.log(Person2);

function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new PersonConstructor("Omar", 40);
console.log(p1.name);

let a = new Array(1, 2, 3)
console.log (Array.prototype)

function Animal (name) {
    this.name = name
}

Animal.prototype.sound = function () {
    console.log (this.name + " makes a sound")
}

function Dog (name) {
    Animal.call(this,name)
}

Dog.prototype = Object.create(Animal.prototype)
let dog1 = new Dog ("No")
dog1.sound()

// Class

class Animal_Class {
    constructor (name) {
        this.name = name;
    }

    sound () {
        console.log (this.name + " makes a sound")
    }
}

class Cat extends Animal_Class {
    constructor (name) {
        super(name)
    }

    sound () {
        console.log (this.name + " meows")
    }
}

let cat = new Cat ("Kitty")
cat.sound()

class Dog_Class extends Animal_Class {
    constructor (name, type) {
        super(name)
        this.type = type;
    }

    sound () {
        console.log (this.name + " barks")
    }

    getInfo () {
        console.log (this.name + " " + this.type)
    }
}

let Dog1 = new Dog_Class ("Dog1", "Type")
Dog1.sound()
Dog1.getInfo()

let str = JSON.stringify(p1)
console.log (str)

let obj = JSON.parse(str)
console.log (obj)