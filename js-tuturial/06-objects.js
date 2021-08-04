let myObj = {};
console.log(typeof myObj);

// שדה כמפתח

myObj.name = 'moshe';
console.log(myObj.name)

myObj.name = 'dan'
console.log(myObj.name)

let myObj2 = {
    name: 'yaffa'
};

console.log(myObj2.name);

// אובייקט בתוך אובייקט

let id = 't87687687689'
myObj = {
    name: 'sharon',
    id: '5577577',
    brother: {
        name: 'matan',
        id: id
    }
}

console.log(myObj)

let name = "yehushua"
myObj = {
    name,
    id
}
console.log(myObj.name, myObj.id);

// גישה אל מפתחות באמצעות השם
console.log(myObj['name'], myObj['id'])
let nameKey = 'name'
let idKey = 'id'
console.log(myObj[nameKey], myObj[idKey])
console.log(myObj.nameKey, myObj.idKey) // undefined

//מחיקת מפתח
delete myObj.name
console.log(myObj)
delete myObj[idKey]
console.log(myObj)

// פונקציה כערך
//////////////////

myObj = {
    name: 'moshe',
    id: '57756778',
    sayHi: function () {
        console.log('Hi!!')
    }
}

myObj.sayHi()

// אובייקט כקבוע
const myObj3 = {
    name: 'avi',
    id: '9709908080'
}
// myObj3 = {
//     name: 'yakir',
//     id: '786876876'
// } // TypeError: Assignment to constant variable.

myObj3.name = 'yakir'
console.log(myObj3)

// צרו פונקציה שמקבלת מספר מ- 1 עד 7 . הפונקציה מחזירה אובייקט בפורמט הזה:
// {
// dayName: 'Sunday',
// dayNumber: 1,
// }
// ואם המספר לא מתאים הפונקציה מחזירה אובייקט ריק

// צרו פונקציה שמקבלת שלושה ארגומנטים: אובייקט, שם מפתח וערך. הפונקציה מכניסה
// את שם המפתח והערך לאובייקט ולאחר מכן מחזירה את האובייקט.
function addThisProperty(obj, property, value) {
    obj[property] = value;
    return obj;
}
let myObject = {};
myObject = addThisProperty(myObject, 'id', 1);
myObject = addThisProperty(myObject, 'name', 'moshe');
console.log(myObject); // Object {id: 1, name: "Moshe"}

// object Maker
//  חשוב לא פונקציית חץ
const PersonMaker = function (name, id) {
    this.name = name
    this.id = id
}

let moshe = new PersonMaker('moshe', '6666')
console.log(moshe)

const PersonMaker2 = function (name, id) {
    this.name = name
    this.id = id
    this.print = function () {
        console.log(`name: ${this.name}; id: ${this.id}`)
    }
}

moshe = new PersonMaker2('moshe', '6666')
console.log(moshe)
moshe.print()

// תרגיל - איך יוצרים שדה פרטי בתוך הפונקצייה - רמז קשור לסקופ!

const PersonMaker3 = function (name, personId) {
    this.name = name
    let id = personId
    this.print = function () {
        console.log(`name: ${this.name}; id: ${this.id}`)
    }
    this.getId = function () {
        return id
    }
    this.setId = function (personId) {
        id = personId
    }
}

moshe = new PersonMaker3('moshe', '6666')
console.log(moshe)
console.log(moshe.getId())
moshe.setId('77777')
console.log(moshe.getId())


// צרו פונקציה בנאית לאובייקט מכונית המקבלת שם, צבע ונפח מנוע. לכל מכונית יש
// מספר זיהוי ייחודי המורכב מחיבור של דגם, צבע ונפח מנוע.
// כתבו פונקציית set שתאפשר לשנות את ה- modelNumber
// כרצונכם.

// let carObjMaker = function (name, color, engine) {
//     this.name = name;
//     this.color = color;
//     this.engine = engine;
//     this.modelNumber = this.name + this.color + this.engine;
//     this.getModelNumber = function () {
//         return modelNumber;
//     }
//     this.setModelNumber = function (newModelNumber) {
//         modelNumber = newModelNumber;
//     }
// };
// let opelObject = new carObjMaker('opel', 'white', '1200');
opelObject.setModelNumber('test');
// let id = opelObject.getModelNumber();
// console.log(id);


//static
////////////

function PersonMaker4(name, id) {
    this.name = name;
    this.id = id;
    PersonMaker4.personsCount++
}
PersonMaker4.personsCount = 0
PersonMaker4.setPersonsCount = function (count) {
    this.personsCount = count;
}


let moshe2 = new PersonMaker4('moshe', 'bugbuibiu')
let moshe3 = new PersonMaker4('moshe2', '6666')

console.log(PersonMaker4.personsCount)
PersonMaker4.setPersonsCount(567)
console.log(PersonMaker4.personsCount)





