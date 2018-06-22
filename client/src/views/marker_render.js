const PubSub = require('../helpers/pub_sub.js')

const MarkerRender = function(){

}

MarkerRender.prototype.addMarkers = function () {
  PubSub.subscribe('Locations:locations-ready', (event) => {
    event.detail.forEach(function(location) {
      map.addMarker(location.latlng[0], location.latlng[1])
      PubSub.publish('Marker:selected-location', location)
    })
  })
};

module.exports = MarkerRender;
