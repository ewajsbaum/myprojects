/*global $*/
(function () {
    'use strict';

    let playlist = $('#playlist');
    const video = $("#video").hide();

    async function populatePlaylist() {
        const response = await fetch("videoList.json");
        const list = await response.json();

        list.forEach(e => {
            const icon = e.icon ? e.icon : "images/generic.png";
            const row = $(`<tr><td><image class="pic" src=${icon}></td><td>${e.name}</td></tr>`).appendTo(playlist);
            row.click(() => playVideo(e.url));
        });
    }

    async function playVideo(url) {
        $(`<source src=${url} type=video/mp4>`).appendTo(video);
        video.show();
        video[0].play();
    }

    populatePlaylist();

}());