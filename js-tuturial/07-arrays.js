let myArr = []
myArr[0] = 'moshe'
console.log(myArr)
myArr[7] = 'ron'
console.log(myArr)

myArr = [1, 2, 3]
console.log(myArr)
myArr = [1, 'two', false, { name: 'moshe', id: '666567' }]
console.log(myArr)
console.log(myArr[1])

// תרגיל צרו מערך של שני מערכי מספרים שכל אחד מהם מכיל 3 מספרים. הדפיסו את האיבר השני במערך השני.

myArr = [
    [1, 2, 3],
    [4, 5, 6]
]
console.log(myArr)
console.log(myArr[1][1])


// push pop unshift shift
myArr = [1, 2, 3]
myArr.push(4)
console.log(myArr)
myArr.pop()
console.log(myArr)

let lastElement = myArr.pop()
console.log(myArr, lastElement)

myArr.unshift(0) //הוספת איבר לתחילת המערך
console.log(myArr)
let firstElement = myArr.shift()
console.log(myArr, firstElement)

// length
console.log(myArr, myArr.length)

// delete
delete myArr[1]
console.log(myArr[1])

// לולאת forEach
myArr = [1, 2, 3, 4, 5, 6, 7]
delete myArr[3]

let myArrString = ""
for (let i = 0; i < myArr.length; i++) {
    myArrString += myArr[i] + " "
}
console.log("for", myArrString)
console.log(myArr.length)

myArrString = ""
myArr.forEach((el) => {
    myArrString += el + " "
})
console.log('forEache', myArrString)

myArrString = ""
myArr.forEach((el, i) => {
    myArrString += `el[${i}]: ` + el + " "
})
console.log('forEach with index', myArrString)

// myArrString = ""
// myArr.forEach((el, i) => {
//     myArrString += `  el[${i}]: ` + el
//     if (i === 3) {
//         break;                                    //SyntaxError: Illegal break statement
//     }
// })
// console.log('forEach with index', myArrString)

myArrString = ""
for (let el of myArr) {
    myArrString += el + " "
}
console.log('for of', myArrString)

myArrString = ""
for (let el of myArr) {
    myArrString += " " + el
    if (el === 2) {
        break
    }
}
console.log('for of with break', myArrString)

// צרו מערך של 3 אובייקטים של סטודנטים שמנסים להתקבל לבית הספר לרפואה
// לכל סטונדט יש שם, איידי וגיל, 
// לבית הספר לרפואה אפשר להתקבל רק עד גיל 35
// צרו מערך חדש שכולל רק את הסטודנטים שיכולם להתקבל