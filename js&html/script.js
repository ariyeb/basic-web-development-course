// getElementById

const headline = document.getElementById('headline')
setTimeout(() => {
    headline.innerHTML = 'Hello World'
}, 500)

// DOM createElement appendChild romve child

const paragraphesDiv = document.getElementById('paragraphes')
const paragraph = document.createElement('p')
paragraph.innerHTML = 'New paragraph'
paragraphesDiv.appendChild(paragraph)

setTimeout(() => {
    paragraphesDiv.removeChild(paragraph)
}, 1500)

// click event

const stamButton = document.getElementById('stamButton')
stamButton.addEventListener('click', () => {
    alert('I was clicked')
})

const inputHeadline = document.getElementById('headlineInput')
const buttonHedaline = document.getElementById('headlineButton')
buttonHedaline.addEventListener('click', () => {
    headline.innerHTML = inputHeadline.value
})

// תרגיל הוסיפו אינפוט וכפתרו להוספת פסקאות
const inputParagraph = document.getElementById('p-input')
const buttonAddP = document.getElementById('buttonAddP')
buttonAddP.addEventListener('click', () => {
    const p = document.createElement('p')
    p.innerHTML = inputParagraph.value
    paragraphesDiv.appendChild(p)
    // p.addEventListener('click', () => {
    //     paragraphesDiv.removeChild(p)
    // })
    inputParagraph.value = ""
})


// style
const redBox = document.getElementById('redBox')
redBox.style.height = '100px';
redBox.style.width = '100px';
// redBox.style.background = 'red';
// redBox.className = 'yellow'
redBox.classList.add('yellow')

setTimeout(() => {
    redBox.classList.remove('yellow')
}, 1000)

// תרגיל, צרו לוח דמקה כאשר כל המשבצות עם 
// appendChiled
const board = document.getElementById('board')
for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
        const square = document.createElement('div')

        if (y % 2 === 0) {
            square.className = x % 2 === 0 ? 'white' : 'black'
        } else {
            square.className = x % 2 === 0 ? 'black' : 'white'
        }

        board.appendChild(square)
    }
}


// selectors

const squares = document.getElementsByClassName('square')
for (let square of squares) {
    square.style.background = 'blue'
}

const paragraphes = document.getElementsByTagName('p')
for (let p of paragraphes) {
    p.style.color = 'grey'
}

const hollowSquares = document.querySelectorAll('.hollow')
for (let square of hollowSquares) {
    square.style.width = '70px'
    square.style.height = '70px'
    square.style.border = '5px solid black'
    square.style.margin = '10px'
}

// querySelector
// רק הראשון
const firstHollow = document.querySelector('.hollow')
firstHollow.style.background = 'orange'

// תרגיל צרו 2 דיו בצורה של ריבוע ירוק. כאשר לוחצים על אחד מהם הצבע שלו הופך לצהוב
const greenBoxes = document.getElementsByClassName('box green')
for (let box of greenBoxes) {
    box.addEventListener('click', () => {
        box.classList.remove('green')
        box.classList.add('yellow')
    })
}

// children
const childrenExDiv = document.getElementById('childrenEx')

childrenExDiv.children[0].style.background = "red"
// hh.removeChild(hh.children[1])
// const children = childrenExDiv.children
// for (let child of children) {
//     child.addEventListener('click', () => {
//         childrenExDiv.removeChild(child)
//     })
// }

// תרגיל יצירת דיו שבתוכו 3 עיגולים ירוקים בשורה, 
// כאשר לוחצים על אחד מהם הוא נעלם


// more on events
/*
    input
    key
    mouse

 */

// input
const h4InputEvent = document.querySelector('#input-event h4')
const inputInputEvent = document.querySelector('#input-event input')
inputInputEvent.addEventListener('input', (event) => {
    // console.log(event)
    h4InputEvent.innerHTML = event.target.value
})

// תרגיל צרו אינפוט שהרקע משתנה לפי אורך הטקסט
// לפי השארית של חלוקה לשלוש
// שארית 0 רקע אדום
// שארית 1 רקע כחול
// שארית 2 אין רקע

document.getElementById('changing-color-input')
    .addEventListener('input', (event) => {
        switch (event.target.value.length % 3) {
            case 0:
                event.target.className = 'red'
                break;
            case 1:
                event.target.className = 'blue'
                break;
            case 2:
                event.target.className = ''
                break;
        }
    });

// keyup
const h4KeyupEvent = document.querySelector('#keyup-event h4')
const inputKeyupEvent = document.querySelector('#keyup-event input')
inputKeyupEvent.addEventListener('keyup', (event) => {
    // console.log(event)
    // תרגיל - כאשר לוחצים על אנטר משתנה הכותרת ולאחר מכן שדה האינפוט נהיה ריק
    if (event.code === 'Enter') {
        h4KeyupEvent.innerHTML = event.target.value
        event.target.value = ""
    }
})

// blur focus
const inputBlurFocus = document.getElementById('input-blur-focus')
inputBlurFocus.addEventListener('focus', () => {
    inputBlurFocus.classList.add('input-focus')
})
inputBlurFocus.addEventListener('blur', () => {
    inputBlurFocus.classList.remove('input-focus')
})


// mouse-events
const mouseEventsDiv = document.querySelector('.mouse-events')
// mouseEventsDiv.addEventListener('mouseenter', () => {
//     mouseEventsDiv.classList.remove('yellow')
//     mouseEventsDiv.classList.add('green')
// })

// mouseEventsDiv.addEventListener('mouseleave', () => {
//     mouseEventsDiv.classList.remove('green')
//     mouseEventsDiv.classList.add('yellow')
// })

mouseEventsDiv.addEventListener('mousemove', (event) => {
    // console.log(event)
    mouseEventsDiv.innerHTML = `x: ${event.offsetX}; y: ${event.offsetY}`
    const x = parseInt(event.offsetX)
    const y = parseInt(event.offsetY)

    if (x < 151) {
        mouseEventsDiv.className = y < 151 ? 'mouse-events green' : 'mouse-events blue'
    } else {
        mouseEventsDiv.className = y < 151 ? 'mouse-events red' : 'mouse-events yellow'
    }
})

// bubbling
const bubblingDiv = document.getElementById('bubbling-ex')
const bubblingButton = document.querySelector('.bubbling-ex button')

bubblingDiv.addEventListener('click', () => {
    setTimeout(() => {
        bubblingDiv.className = 'bubbling-ex yellow'
    }, 500)
})

bubblingButton.addEventListener('click', (event) => {
    // event.stopPropagation()  
    bubblingDiv.className = 'bubbling-ex red'
})

// תרגיל: בנו מודל
const modal = document.getElementById('modal')
const modalBox = document.getElementById('modalBox')
const buttonOpenModal = document.getElementById('buttonOpenModal')
const buttonCloseModal = document.getElementById('buttonCloseModal')


buttonOpenModal.addEventListener('click', () => {
    modal.className = 'modal'
})
modal.addEventListener('click', () => {
    modal.className = 'none'
})
buttonCloseModal.addEventListener('click', () => {
    modal.className = 'none'
})
modalBox.addEventListener('click', (event) => {
    event.stopPropagation()
})

// form submit

const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('form submitted')
})

// תרגיל: צרו פורם רישום שמכיל
//  שדה של יוזרניים, שדה של גיל, שדה של סיסמה ושדה של חזרה על הסיסמה וכפתור סאבמיט
// לכל שדה יש הודעת אזהרה שמופיעה מתחתיו ברגע שיוצאים מהשדה אם השדה לא תקין
// באזהרה כתוב שחייבים למלא את השדה ואזהרה אחת לכל שדה
// ליוזרניים אסור להיות
// moshe
// אי אפשר להרשם מתחת לגיל 12
// הסיסמה חייבת להכיל 6 תוים לפחות
// והסיסמה החוזרת חייבת להיות זהה לסיסמה שלפניה
// אם יוצאים מהשדה והוא תקין האזהרה נעלמת
// כל עוד אחד מהשדות אינם תקינים לא ניתן לעשות סאבמיט
// כאשר עושים סאבמיט מופי בדיו מתחת לפורם השדות עם הערכים שלהם שורה מתחת שורה

const formSubscribe = document.getElementById('form-subscribe')
const inputUserName = document.getElementById('input-username')
const userNameError = document.getElementById('username-error-message')
const inputAge = document.getElementById('input-age')
const ageError = document.getElementById('age-error-message')
const inputPassword = document.getElementById('input-password')
const passwordError = document.getElementById('password-error-message')
const inputPasswordRepeated = document.getElementById('input-password-repeated')
const passwordRepeatedError = document.getElementById('password-reaeted-error-message')
const buttonSubscribe = document.getElementById('button-subscribe')
const formResult = document.getElementById('subscribe-form-result')

let isUsernameInvalid = true;
let isAgeInalid = true;
let isPasswordInvalid = true;
let isPasswordRepeatedInvalid = true;

const setButtonSubscribeDisabledMode = () => {
    buttonSubscribe.disabled = isUsernameInvalid || isAgeInalid || isPasswordInvalid || isPasswordRepeatedInvalid
}
setButtonSubscribeDisabledMode()

inputUserName.addEventListener('blur', () => {
    if (inputUserName.value !== "") {
        if (inputUserName.value === 'moshe') {
            userNameError.className = 'exist'
            userNameError.innerHTML = 'Username cannot be moshe'
            isUsernameInvalid = true
        } else {
            userNameError.className = "none"
            isUsernameInvalid = false
        }
    } else {
        userNameError.className = 'exist'
        userNameError.innerHTML = 'You must enter a username'
        isUsernameInvalid = true
    }
    setButtonSubscribeDisabledMode()
})

inputAge.addEventListener('blur', () => {
    if (inputAge.value !== "") {
        if (inputAge.value < 12) {
            ageError.className = 'exist'
            ageError.innerHTML = 'You must be at least 12 years old to subscribe'
            isAgeInalid = true
        } else {
            ageError.className = "none"
            isAgeInalid = false
        }
    } else {
        ageError.className = 'exist'
        ageError.innerHTML = 'You must enter your age'
        isAgeInalid = true
    }
    setButtonSubscribeDisabledMode()
})

inputPassword.addEventListener('blur', () => {
    if (inputPassword.value !== "") {
        if (inputPassword.value.length < 6) {
            passwordError.className = 'exist'
            passwordError.innerHTML = 'Your password must contain at least 6 characters'
            isPasswordInvalid = true
        } else {
            passwordError.className = "none"
            isPasswordInvalid = false
        }
    } else {
        passwordError.className = 'exist'
        passwordError.innerHTML = 'You must enter a password'
        isPasswordInvalid = true
    }
    setButtonSubscribeDisabledMode()
})

inputPasswordRepeated.addEventListener('blur', () => {
    if (inputPasswordRepeated.value !== "") {
        if (inputPasswordRepeated.value !== inputPassword.value) {
            passwordRepeatedError.className = 'exist'
            passwordRepeatedError.innerHTML = 'The two passwords aren\'t identical'
            isPasswordRepeatedInvalid = true
        } else {
            passwordRepeatedError.className = "none"
            isPasswordRepeatedInvalid = false
        }
    } else {
        passwordRepeatedError.className = 'exist'
        passwordRepeatedError.innerHTML = 'You must repeat on your password'
        isPasswordRepeatedInvalid = true
    }
    setButtonSubscribeDisabledMode()
})

formSubscribe.addEventListener('submit', (event) => {
    event.preventDefault()
    formResult.innerHTML =
        `Username: ${inputUserName.value}<br>
        Age: ${inputAge.value}<br>
        Password: ${inputPassword.value}`
})





