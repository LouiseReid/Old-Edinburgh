const PubSub = require('../helpers/pub_sub.js')

const MarkerRender = function(){

}

MarkerRender.prototype.addMarkers = function () {
  PubSub.subscribe('Locations:locations-ready', (event) => {
    event.detail.forEach(function(location, index) {
      map.addMarker(location.latlng[0], location.latlng[1])
      console.log(index);
    })
  })
};

module.exports = MarkerRender;
