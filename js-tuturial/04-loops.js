// while
/////////////

let i = 0;
while (i < 4) {
    console.log('while', i)
    i++;
}

// לולאה עם כמה תנאים
i = 0;
let i2 = 10;

while (i < 4 && i2 > 7) {
    console.log('while2', i, i2);
    i++;
    i2--;
}

i = 0;
i2 = 10;
while (i < 4 || i2 > 7) {
    console.log('while3', i, i2);
    i++;
    i2--;
}

// do while
// ////////////
i = 0
do {
    console.log('do while', i);
    i++;
} while (i < 4)

// for
////////////////
for (let i = 0; i < 4; i++) {
    console.log('for', i)
}

// תרגיל לוח הכפל
for (let i1 = 1; i1 <= 10; i1++) {
    let line = "";
    for (let i2 = 1; i2 <= 10; i2++) {
        let mul = i1 * i2;
        line += mul < 10 ? mul + "  " : mul + " ";
    }
    console.log(line)
}
console.log()

// break continue
let linePrint = ""
for (let i = 0; i < 10; i++) {
    linePrint += i + " "
    if (i === 6) break
}
console.log('loop with break', linePrint)

console.log()
linePrint = ""
for (let i = 0; i < 10; i++) {
    if (i === 6) continue
    linePrint += i + " "
}
console.log('loop with continue', linePrint)


/* 
תרגיל הדפיסו את לוח הכפל בצורה מעומדת 
בלי המספר 40
ועד המספר 90 לא כולל
*/

for (let i1 = 1; i1 <= 10; i1++) {
    let mul
    let line = "";
    for (let i2 = 1; i2 <= 10; i2++) {
        mul = i1 * i2;

        if (mul === 40 || mul === 90) {
            line += "   "
            continue
        }

        line += mul < 10 ? mul + "  " : mul + " ";
    }

    console.log(line)
    if (mul === 90) break
}
console.log()