/*global google, $*/
(function () {
    'use strict';

    const myMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 30, lng: -95 },
        mapTypeId: google.maps.MapTypeId.HYBRID
    });

    const infoWindow = new google.maps.InfoWindow({});

    $('form').submit(e => {
        e.preventDefault();
        const request = $('input').val();
        loadPage(request);
    });

    $('li').click(function () { loadPage($(this).text()); });

    async function loadPage(request) {
        try {
            const response = await fetch(`http://api.geonames.org/wikipediaSearch?q=${request}}&maxRows=10&username=ewajsbaum&type=json`);
            if (!response.ok) {
                throw new Error(response.status, response.text);
            }
            const data = await response.json();
            console.log(data);
            data.geonames.forEach(e => {
                createMarker(e.lat, e.lng, e.title, e.summary, e.wikipediaUrl);
            });
            let centerLat = data.geonames[0].lat;
            let centerLng = data.geonames[0].lng;
            myMap.setCenter({ lat: centerLat, lng: centerLng });
        } catch (e) {
            console.error(e);
        }

        addToRecentList(request);
    }

    function createMarker(mLat, mLng, mTitle, mSummary, mUrl) {
        const marker = new google.maps.Marker({
            position: { lat: mLat, lng: mLng },
            map: myMap,
            title: mTitle,
            animation: google.maps.Animation.BOUNCE
        });

        marker.addListener('click', () => {
            infoWindow.setContent(mSummary + `<a href="https://${mUrl}" target="_blank"> read more</a>`);
            infoWindow.open(myMap, marker);
            zoomIn(marker.position);
        });
    }

    function addToRecentList(request) {
        $(`<li>${request}</li>`).prependTo('#recents ul').click(function () { loadPage($(this).text()); });
    }

    function zoomIn(position) {
        myMap.setZoom(13);
        myMap.setCenter(position);
    }

})();