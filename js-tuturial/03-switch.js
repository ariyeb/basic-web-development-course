let myVar = 4

switch (myVar) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3)
        break;
    case 4:
        console.log(4)
        break;
}

// default

switch (myVar) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3)
        break;
    default:
        console.log('not 1-3')
        break;
}


// בלי ברייק באחד הקייסים
switch (myVar) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3)
        break;
    case 4:
        console.log(4)
    case 0:
        console.log(0)
}

switch (myVar) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3)
        break;
    case 4:
    case 88:
    case 5:
        console.log('4 or 5 or 88')
}

// יותר מפעולה אחת

let myVar2
switch (myVar) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3)
        break;
    case 4:
        console.log(4)
        myVar2 = myVar
        break;
}