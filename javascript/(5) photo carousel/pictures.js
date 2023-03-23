/*global $*/
(function () {
    'use strict';

    const form = $('form');
    const searchBar = $('input');
    const display = $('#display');
    const next = $('.next');
    const prev = $('.prev');
    let slideIndex = 1;
    let slides = [];

    form.submit(async function (e) {
        e.preventDefault();
        let searchRequest = searchBar.val();

        try {
            let response = await fetch(`${searchRequest}.json`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            let images = await response.json();
            images.forEach(elem => {
                let slide = $(`<img class="slide" src="${elem.pic}" style="width:100%"></img>
                                <div class="text">${elem.name}</div>`).appendTo(display);
                slides.push(slide);
            });
        } catch (e) {
            console.error(e);
        }

        showSlides(slideIndex);
    });

    prev.click(() => plusSlides(-1));
    next.click(() => plusSlides(1));

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].hide();
        }
        slides[slideIndex - 1].show();
    }
}());