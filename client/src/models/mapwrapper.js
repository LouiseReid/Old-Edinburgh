PubSub = require('../helpers/pub_sub.js')

const MapWrapper = function(element, lat, lng, zoom){
  const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osm = new L.TileLayer(osmUrl);

  this.map = L.map(element)
      .addLayer(osm)
      .setView([lat, lng], zoom)
};

MapWrapper.prototype.addMarker = function(lat, lng){
    let marker = L.marker([lat, lng])
    .addTo(this.map)
    .on('click', this.markerClick);
    PubSub.subscribe('Marker:selected-location', (event) => {
      marker.detail = event.detail
    })

}

MapWrapper.prototype.markerClick = function (e) {
  console.log(e.target.detail);
};

module.exports = MapWrapper;
