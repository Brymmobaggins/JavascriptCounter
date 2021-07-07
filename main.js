let add = document.getElementById('increment')
let decrease = document.getElementById('decrement')
let int = document.getElementById('number');

let count = 0;

add.addEventListener('click', function () {
    count++;
    int.innerHTML = count;
    if (count === 50) {
        count = 0;
    } else { }
})
decrease.addEventListener('click', function () {
    count--;
    int.innerHTML = count;
    if (count < 1 || 0) {
        count = 50;
    } else { }


})


