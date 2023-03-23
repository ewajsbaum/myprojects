/*global google, $*/
(function () {
    'use strict';

    const markers = [];
    const circles = [];
    const rectangles = [];
    const polylines = [];
    const polygons = [];


    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: 30, lng: -95 },
        mapTypeId: google.maps.MapTypeId.HYBRID
    });

    const drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE,
            ],
        },
        markerOptions: {
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        },
        circleOptions: {
            fillColor: "#ffff00",
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
        },
    });

    drawingManager.setMap(map);


    google.maps.event.addListener(drawingManager, 'markercomplete', marker => {
        markers.push(marker.getPosition());
        localStorage.setItem('markers', JSON.stringify(markers));
    });

    google.maps.event.addListener(drawingManager, 'circlecomplete', circle => {
        circles.push({ center: circle.getCenter(), radius: circle.getRadius() });
        localStorage.setItem('circles', JSON.stringify(circles));
    });

    google.maps.event.addListener(drawingManager, 'rectanglecomplete', rectangle => {
        rectangles.push(rectangle.getBounds());
        localStorage.setItem('rectangles', JSON.stringify(rectangles));
    });

    google.maps.event.addListener(drawingManager, 'polylinecomplete', polyline => {
        polylines.push(polyline.getPath().getArray());
        localStorage.setItem('polylines', JSON.stringify(polylines));
    });

    google.maps.event.addListener(drawingManager, 'polygoncomplete', polygon => {
        polygons.push(polygon.getPath().getArray());
        localStorage.setItem('polygons', JSON.stringify(polygons));
    });

})();