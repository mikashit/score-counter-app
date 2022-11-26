let homeCount = 0 
let guestCount = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


function add1() {
  homeCount += 1
  homeEl.textContent = homeCount   
}

function add2() {
  homeCount += 2
  homeEl.textContent = homeCount
}

function add3() {
  homeCount += 3
  homeEl.textContent = homeCount 
}

function returnHome() {
  homeCount = 0
  homeEl.textContent = homeCount 
}

function add1Guest() {
  guestCount += 1
  guestEl.textContent = guestCount   
}

function add2Guest() {
  guestCount += 2
  guestEl.textContent = guestCount
}

function add3Guest() {
  guestCount += 3
  guestEl.textContent = guestCount 
}

function returnGuest() {
  guestCount = 0
  guestEl.textContent = guestCount 
}

