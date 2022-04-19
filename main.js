const increaseButton = document.querySelector('.increase')
const decreaseButton = document.querySelector('.decrease')
const result = document.querySelector('.result')
const resetButton = document.querySelector('.reset')


increaseButton.addEventListener("click", function () {
    result.textContent++
    resultColor()

})
decreaseButton.addEventListener('click', function () {
    result.textContent--
    resultColor()
})
resetButton.addEventListener('click', function () {
    result.textContent = 0
    resultColor()
})

function resultColor() {
    if (result.textContent < 0) {
        result.style.color = "red"

    } else if (result.textContent > 0) {
        result.style.color = "green"
    } else {
        result.style.color = "faf9f9"
    }
}
