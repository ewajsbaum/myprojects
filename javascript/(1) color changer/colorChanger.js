(function () {
    'use strict';
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const table = document.getElementById('tableBody');

    function generateRandomColor() {
        let maxVal = 0xFFFFFF;
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        document.body.style.backgroundColor = `#${randColor.toUpperCase()}`;
        logColors(`#${randColor.toUpperCase()}`);
    }

    function logColors(color) {
        const row = table.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const now = new Date();
        cell1.innerHTML = now.toLocaleString();
        cell2.innerHTML = color;
    }
    let repeater;

    start.addEventListener('click', function () {
        start.disabled = true;
        repeater = setInterval(generateRandomColor, 1000);
    });

    stop.addEventListener('click', () => {
        clearInterval(repeater);
        start.disabled = false;
    });

    table.addEventListener('click', function (evt) {
        document.body.style.backgroundColor = evt.target.innerHTML;
        clearInterval(repeater);
        start.disabled = false;
    });
})();