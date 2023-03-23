(function () {
    'use strict';

    const clock = document.createElement('div');
    document.body.appendChild(clock);

    clock.style.backgroundColor = 'black';
    clock.style.boxSizing = 'border-box';
    clock.style.borderRadius = '20px';
    clock.style.padding = '1em';
    clock.style.height = `210px`;
    clock.style.width = `400px`;
    clock.style.position = 'absolute';
    clock.style.top = '50%';
    clock.style.left = '50%';
    clock.style.marginLeft = `-200px`;
    clock.style.marginTop = `-105px`;
    clock.style.color = 'red';
    clock.style.textAlign = 'center';
    clock.style.fontSize = '68px';
    clock.style.fontFamily = "'DS-Digital', 'Digital-7', arial, 'sans-serif'";

    setInterval(showTime, 1000);
    function showTime() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();

        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let currentTime = hour + ":" + min + ":" + sec;

        clock.innerHTML = currentTime;
    }
}());