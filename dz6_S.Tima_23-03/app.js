const count = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let currentValue = 0;

incrementButton.addEventListener('click', () => {
    if (currentValue < 10) {
        currentValue++;
        count.value = currentValue;
    }
});

decrementButton.addEventListener('click', () => {
    if (currentValue > -10) {
        currentValue--;
        count.value = currentValue;
    }
});