// סדר היישום של פונקציות ומה הן מחזירות

// sayHello()

function sayHello() {
    console.log('Hello World')
}

sayHello()

function give1() {
    return 1
}

console.log(give1())


// scope
////////////////
let myVar = 6
function add5ToMyVar() {
    return 5 + myVar
}
console.log(add5ToMyVar())

function return5() {
    let myVar100 = 5
    return myVar100
}

// console.log(myVar + myVar100) // ReferenceError: myVar100 is not defined

// return undefined

function stam() {
    return
}

console.log(stam())

function stam2() { }
console.log(stam2())

// return return
myVar = true
function isMyVarTrue() {
    if (myVar) {
        return true
    }
    return false
}

console.log(isMyVarTrue())


// ארגומנטים

function add2ToVar(funcVar) {
    return funcVar + 2
}

console.log(add2ToVar(2))

console.log(add2ToVar('2'))

// return diffrent types
function get5IfArgIsTrue(arg) {
    if (arg) {           // arg === true
        return 5
    }
    return false
}
console.log(get5IfArgIsTrue(true))
console.log(get5IfArgIsTrue(5))
console.log(get5IfArgIsTrue())  // מה הפונקציה תחזיר ??????

// ארגומנטים דיפולטיביים

function printName(name = 'moshe') {
    console.log(name)
}

console.log()
printName('danny')
printName()

function multiply(arg1 = 0, arg2 = 0, arg3 = 0) {
    return arg1 * arg2 * arg3
}

console.log()
console.log(multiply(1))
console.log(multiply(4, 5))
console.log(multiply(null, 4, 6))
console.log(multiply(undefined, 4, 6))

// פונקציות כאוביקט
myVar = multiply
console.log()
console.log(myVar(2, 6, 7))
console.log(myVar)


// שימוש בפונקציית אובייקט לפני הגדרתה.
// stam3()
const stam3 = function () {
    console.log('stam3 func')
}
stam3();

// פונקצייה אנונימית ופונקציית חץ
(function () {
    console.log('annonimous func')
})();


(() => {
    console.log('annonimous func2')
})();

let stam4 = (callback) => {
    callback()
}

stam4(() => {
    console.log('callback')
});

/*
כתבו שתי פונקציות האחת מחזירה סכום של שני מספרים
והשנייה מקבלת שני מספרים וקולבק ומחזיר את התוצאה של הקולבק
הדגימו שימוש של הפונקציה באמצעות הפונקציה add
*/

const add = (num1, num2) => {
    return num1 + num2
}

const doSomthingWithTwoNumbers = (num1, num2, callback) => {
    return callback(num1, num2)
}
console.log(doSomthingWithTwoNumbers(1, 3, add));











