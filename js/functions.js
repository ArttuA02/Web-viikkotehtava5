'use strict'

document.querySelector('#dice').addEventListener('click', () => {
    const number = randomNumberGenerator(1,6)
    document.getElementById('dice-image').src = "/img/" + number + ".png"
})

const randomNumberGenerator = (min,max) => {
    return Math.floor(Math.random() * max) + min
}