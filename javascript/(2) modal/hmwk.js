window.app = window.app || {};
window.app.messageBox = (function () {
    'use strict';

    const width = 274;
    const height = 162;
    let leftOffset = -137;
    let topOffset = -81;
    let nextZIndex = 1;

    const modalDiv = document.createElement('div');
    modalDiv.style.position = 'absolute';
    modalDiv.style.left = '0';
    modalDiv.style.top = '0';
    modalDiv.style.width = '100%';
    modalDiv.style.height = '100%';
    modalDiv.style.backgroundColor = 'lightblue';
    modalDiv.style.opacity = '.5';
    modalDiv.style.display = 'none';
    document.body.appendChild(modalDiv);

    const messageBoxDiv = document.createElement('div');
    const buttons = document.createElement('div');

    function showMessageBox(msg, modal, myButtons, callback) {

        messageBoxDiv.className = 'messageBox';
        messageBoxDiv.style.backgroundColor = 'lightblue';
        messageBoxDiv.style.boxSizing = 'border-box';
        messageBoxDiv.style.padding = '1em';
        messageBoxDiv.style.height = `${height}px`;
        messageBoxDiv.style.width = `${width}px`;
        messageBoxDiv.style.position = 'absolute';
        messageBoxDiv.style.top = '50%';
        messageBoxDiv.style.left = '50%';
        messageBoxDiv.style.marginLeft = `${leftOffset}px`;
        messageBoxDiv.style.marginTop = `${topOffset}px`;
        messageBoxDiv.style.textAlign = 'center';
        messageBoxDiv.style.border = '1px solid black';

        const span = document.createElement('span');
        span.style.overflow = 'auto';
        span.style.height = '80%';
        span.style.display = 'inline-block';
        span.innerText = msg;
        messageBoxDiv.appendChild(span);


        buttons.style.position = 'absolute';
        buttons.style.width = '100%';
        buttons.style.left = 0;
        buttons.style.bottom = '1em';

        if (myButtons) {
            myButtons.forEach(element => createButton(element, callback));
        }
        else {
            createButton('ok');
        }

        document.body.appendChild(messageBoxDiv);

        topOffset += 20;
        leftOffset += 20;

        if (parseFloat(getComputedStyle(messageBoxDiv).top) + topOffset + height > window.innerHeight) {
            topOffset -= (window.innerHeight - height);
        }

        if (parseFloat(getComputedStyle(messageBoxDiv).left) + leftOffset + width > window.innerWidth) {
            leftOffset -= (window.innerWidth - width);
        }

        messageBoxDiv.addEventListener('click', () => {
            messageBoxDiv.style.zIndex = nextZIndex++;
        });

        if (modal) {
            modalDiv.style.display = 'block';
            modalDiv.style.zIndex = nextZIndex++;
            messageBoxDiv.style.zIndex = nextZIndex++;
        }
    }

    function createButton(newButton, callback) {
        const button = document.createElement('button');
        button.innerText = newButton;

        button.addEventListener('click', () => {
            if (callback) {
                callback(button);
            }
            messageBoxDiv.remove();
            modalDiv.style.display = 'none';
        });

        buttons.appendChild(button);
        messageBoxDiv.appendChild(buttons);
    }

    return {
        show: showMessageBox
    };
}());