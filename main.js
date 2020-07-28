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

const button = document.querySelector('#main-btn')

button.addEventListener('click', () => {
    console.log("You clicked me!");
})

// const whatIsTheId = (e) => {

// }


