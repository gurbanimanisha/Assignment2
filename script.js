let count = 0;

document.getElementById('increment').addEventListener('click', () => {
    count++;
    updateDisplay();
});

document.getElementById('decrement').addEventListener('click', () => {
    count--;
    updateDisplay();
});

document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    document.getElementById('count').textContent = count;
}