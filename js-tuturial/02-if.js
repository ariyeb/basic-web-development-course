let myVar = 5;

if (myVar === 5) {
	console.log("myVar = 5");
} else {
	console.log("myVar != 5");
}

myVar = "5";

if (myVar === 5) {
	console.log("myVar = 5");
} else {
	console.log("myVar != 5");
}

// else if
if (myVar === 5) {
	console.log("myVar = 5");
} else if (myVar === "5") {
	console.log("myVar is a string with the value: '5'");
} else {
	console.log("myVar != 5");
}

// !==
if (myVar !== "5") {
	console.log("myVar != 5");
} else {
	console.log("myVar = 5");
}

myVar = 5;
let myVar2 = 10;

if (myVar2 > myVar) {
	console.log("myVar2 is bigger from myVar");
}

let myVar3 = myVar2 < myVar;
console.log(myVar3);

// אופרטוריים לוגיים

myVar3 = 20;

if (myVar2 > myVar || myVar2 > myVar3) {
	console.log("myVar2 is bigger from nyVar OR is bigger from myVar3");
}

if (myVar2 > myVar && myVar2 < myVar3) {
	console.log("myVar2 is bigger from nyVar AND is smaller from myVar3");
}

// טרנארי

myVar3 = myVar2 > myVar ? "myVar2 > myVar" : "myVar2 < myVar";
console.log(myVar3);

// השוואת ערכים
myVar = 1; // number
myVar2 = "1"; // string
console.log(myVar == myVar2);

myVar = 0;
myVar = "";
console.log(myVar == myVar2);

// null and undefined - boolean

console.log(null == undefined); // שווה
console.log(null === undefined);

if (null) {
	console.log(true);
} else {
	console.log(false);
}

if (undefined) {
	console.log(true);
} else {
	console.log(false);
}

// תרגיל - יש שני משתנים אחד נאל ואחד אנדפיינד - הפכו את שניהם לערך הבוליאני שהם מייצגים

console.log(!null);
console.log(!undefined);

console.log(!!null);
console.log(!!undefined);

myVar = null;
myVar2 = undefined;

// תרגיל - כתבו בדיקה שבודקת האם משתנה הוא או נאל או אנדפיינד

console.log(myVar === undefined);
console.log(myVar2 === null);

console.log(myVar == null);
console.log(myVar2 == null);

/// let vs var

if (true) {
	var num = 8;
}
num = 6;
console.log(num);
