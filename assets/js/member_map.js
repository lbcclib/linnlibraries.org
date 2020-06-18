---
layout: none
---

// Basic map
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-122.95198, 44.4817168]),
    zoom: 8
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
    ]))
  });
}

var layer = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: features
  })
});
map.addLayer(layer);


// Add popup for each marker

for (i = 0; i < members.length; i++) {
  var container = document.getElementById(members[i]['name']);
  var content = document.getElementById('popup-content');
  var closer = document.getElementById('popup-closer');
  var htmlContent = '<a href="' + members[i]['url'] + '">' + members[i]['name'] + '</a>';

  var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
      duration: 250
    }
  });
  map.addOverlay(overlay);

  closer.onclick = function() {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
  };


  map.on('singleclick', function (event) {
    if (map.hasFeatureAtPixel(event.pixel) === true) {
      var coordinate = event.coordinate;

      content.innerHTML = htmlContent;
      overlay.setPosition(coordinate);
    } else {
      overlay.setPosition(undefined);
      closer.blur();
    }
  });
}


