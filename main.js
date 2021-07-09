let add = document.getElementById('increment')
let decrease = document.getElementById('decrement')
let int = document.getElementById('number');

let count = 0;

add.addEventListener('click', function () {
    count++;
    int.innerHTML = count;
    // if count is equal to 50
    if (count === 50) {
        count = 0;
    } else { }
})
decrease.addEventListener('click', function () {
    count--;
    int.innerHTML = count;
    // if count is less than 1 or is equals to 0
    if (count < 1 || count === 0) {
        count = 50;
    } else { }

})


