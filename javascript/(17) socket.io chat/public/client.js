(function () {
    'use strict';

    const form = $('form');
    const messageBox = $('#displayMessages');
    const socketIo = io();
    let iAmSending = false;

    socketIo.on('msg', msg => {
        console.log(msg);
    });

    form.submit(e => {
        e.preventDefault();
        iAmSending = true;
        socketIo.emit('sentText', $('#writeMessage').val());
    });

    socketIo.on('broadcastText', text => {
        iAmSending ? messageBox.append(`<div id="myTxt">${text}</div>`) : messageBox.append(`<div id="txt">${text}</div>`);
        iAmSending = false;
    });

})();