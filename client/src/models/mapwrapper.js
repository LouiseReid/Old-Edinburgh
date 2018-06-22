PubSub = require('../helpers/pub_sub.js')

const MapWrapper = function(element, lat, lng, zoom){
  const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const osm = new L.TileLayer(osmUrl);

  this.map = L.map(element)
  .addLayer(osm)
  .setView([lat, lng], zoom)
};

MapWrapper.prototype.addMarker = function(location){
  let lat = location.latlng[0]
  let lng = location.latlng[1]
  let marker = L.marker([lat, lng])
  .addTo(this.map)
  .on('click', this.markerClick);
  marker.detail = location
}

MapWrapper.prototype.markerClick = function (e) {
  PubSub.publish('Marker:marker-clicked', e.target.detail)
};

module.exports = MapWrapper;
