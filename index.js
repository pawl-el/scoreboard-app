let homeScore = 0
let guestScore = 0

let homeDisplay = document.getElementById("home-display")
let guestDisplay = document.getElementById("guest-display")

// increment feature
function add1() {
    homeScore += 1
    homeDisplay.textContent = homeScore
    // console.log(homeScore)
}

function add2() {
    homeScore += 2
    homeDisplay.textContent = homeScore
    // console.log(homeScore)
}

function add3() {
    homeScore += 3
    homeDisplay.textContent = homeScore
    // console.log(homeScore)
}

function gadd1() {
    guestScore += 1
    guestDisplay.textContent = guestScore
}

function gadd2() {
    guestScore += 2
    guestDisplay.textContent = guestScore
}

function gadd3() {
    guestScore += 3
    guestDisplay.textContent = guestScore
}

// reset feature
function resetButton() {
    homeScore = 0
    guestScore = 0
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
}







