const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Locations = function(){
  this.locationsData = []
  this.locationsCoords = []
}

Locations.prototype.getData = function () {
  const request = new Request('http://localhost:3000/api/locations');
  request.get()
  .then((data) => {
    this.storeData(data)
  })
  .catch(console.error)
};

Locations.prototype.storeData = function (data) {
  this.locationsData = data
  this.locationsCoords = this.getCoords()
  PubSub.publish('Locations:locations-ready', data)
};

Locations.prototype.getCoords = function () {
  const coords = this.locationsData.map((location) => location.latlng)
  return coords
};

module.exports = Locations;
