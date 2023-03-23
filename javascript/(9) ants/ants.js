(function () {
    'use strict';

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth;
        theCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const dropDown = $('#dropDown');
    const color = $('#color');
    for (let i = 10; i <= 200; i += 10) {
        $(`<option>${i}</option>`).appendTo(dropDown);
    }

    class Ant {
        static ANT_SIZE = 4;

        constructor(color) {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
            this.color = color;
            this.time = 0;
        }

        draw() {
            context.fillRect(this.x, this.y, Ant.ANT_SIZE, Ant.ANT_SIZE * 2);
            context.fillStyle = this.color;
        }

        move() {
            if (!this.time) {
                this.time = Ant.getRandomNumber(1, 10);
                this.xDir = Ant.getRandomNumber(-1, 1);
                this.yDir = Ant.getRandomNumber(-1, 1);
            }
            if (!(this.x < 0 || this.x > theCanvas.width - Ant.ANT_SIZE)) {
                this.x += this.xDir;
            }
            if (!(this.y < 0 || this.y > theCanvas.height - Ant.ANT_SIZE * 2)) {
                this.y += this.yDir;
            }
            this.time--;
            this.draw();
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * ((max - min) + 1)) + min;
        }
    }

    const ants = [];

    $('form').submit(e => {
        e.preventDefault();
        for (let i = 0; i < dropDown.val(); i++) {
            ants.push(new Ant(color.val()));
        }
    }
    );

    function addAnts() {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ants.forEach(ant => ant.move());
    }

    setInterval(addAnts, 100);

})();