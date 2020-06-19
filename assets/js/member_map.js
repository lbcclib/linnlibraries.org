---
layout: none
---

var libraryStyle = new ol.style.Style({
  text: new ol.style.Text({
    text: 'local_library',
    font: 'normal 22px Material Icons',
    fill: new ol.style.Fill({color: '#FF0000'})
  })
});


// Add markers for each member library
var members = {{ site.data.members | jsonify }};
var features = [];
for (i = 0; i < members.length; i++) {
  features[i] = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([
      members[i]['long'],
      members[i]['lat']
    ])),
    name: members[i]['name'],
    url: members[i]['url'],
  });
  features[i].setStyle(libraryStyle);
}

// Basic map
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    new ol.layer.Vector({
      source: new ol.source.Vector({
        features: features
      })
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-122.95198, 44.4817168]),
    zoom: 10
  })
});



var popup_overlay = new ol.Overlay({
    element: document.getElementById('popup'),
    stopEvent: false,
    offset: [21, -126]
});

map.addOverlay(popup_overlay);


map.on('click', function(evt) {

    $('#popup').popover('dispose');
    var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature) {
            return feature;
        });
    if (feature) {
        popup_overlay.setPosition(feature.getGeometry().getCoordinates());
        $('#popup').popover({
            'html': true,
            'content': '<a href="' + feature.get('url') + '">' + feature.get('name') + '</a>'
        });
        $('#popup').popover('show');
    }
});
