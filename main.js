let add = document.getElementById('increment')
let decrease = document.getElementById('decrement')
let int = document.getElementById('number');

let integer = 0;

add.addEventListener('click', function () {
    integer++;
    int.innerHTML = integer;
    if (int === 50) {
        integer = 0;
    }
    // else {
    //     int = 0;
    // }
})

decrease.addEventListener('click', function () {
    integer--;
    int.innerHTML = integer;
    if (integer === 0) {
        int = 0;
    }

})