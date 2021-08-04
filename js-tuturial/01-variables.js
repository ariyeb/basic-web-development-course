// string
////////////

let myVar;
let myVar2;

myVar = 'string';

myVar2 = myVar

console.log(myVar2)

myVar = "Hello"
myVar2 = myVar + " World"

console.log(myVar2);

console.log(myVar2.toUpperCase());

console.log(myVar2.toLowerCase());

console.log(`${myVar} world`);  // תבנית סטרינג


//numbers
//////////////
myVar = 6
myVar = 6.6

console.log(myVar ** 2)


myVar = 6
myVar2 = 4
console.log(myVar % myVar2)

myVar--
console.log(myVar)

myVar++
console.log(myVar)

myVar -= myVar2
console.log(myVar)


// string + number
//////////////////
myVar = 'hello'
let myVar3 = myVar + myVar2
console.log(myVar3)

myVar3 = myVar - myVar2
console.log(myVar3)                   // NaN
console.log(isNaN(myVar3))


//booliam
myVar = true
myVar2 = !myVar

console.log(myVar2)

// undefined
let myVar4
console.log(myVar4)

myVar = undefined
console.log(myVar)

// null
myVar = null
console.log(myVar)

// typeof
/////////
myVar4 = typeof myVar3
console.log(myVar4)
console.log(myVar4 === 'number')


// const
// ///////////

const const1 = myVar
console.log(const1)

// const1 = 6   Assignment to constant variable.
// console.log(const1)

//const const2 // SyntaxError: Missing initializer in const declaration

// string to number
///////////////////
myVar = '2'
console.log()
console.log(parseInt(myVar))

myVar = '2.666'
console.log()
console.log(parseInt(myVar))
console.log(parseFloat(myVar))
console.log(myVar + 0)    // string
console.log(myVar * 1)
console.log(+myVar)
console.log()

myVar = 'string'
console.log(parseInt(myVar))
console.log(parseFloat(myVar))
console.log(myVar + 0)   // string
console.log(myVar * 1)
console.log(+myVar)
console.log()

myVar = true
console.log(parseInt(myVar))     //NaN
console.log(parseFloat(myVar))   //NaN
console.log(myVar + 0)       // 1
console.log(myVar * 1)      // 1
console.log(myVar * 0)       // 0
console.log(+myVar)         // 1
console.log()






