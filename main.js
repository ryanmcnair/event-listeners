// console.log("event-listeners")

function helloToUser (user) {
    return `Hello ${user}`;
}

function goodByeToUser (user) {
    return `Good Bye ${user}`;
}

function callBackTest (user, cb) {
    return cb(user);
}

// console.log(callBackTest(`Ryan`, helloToUser))
// console.log(callBackTest(`Ryan`, goodByeToUser                             ))

const div = document.getElementById('main-btn')

// console.log(div)

const newDiv = document.querySelector('#main-btn')

// console.log(newDiv)

const button = document.getElementById('#main-btn')

const whatIsTheId = ()=> {
    console.log("you clicked me");
}

button.addEventListener(click, whatIsTheId)
