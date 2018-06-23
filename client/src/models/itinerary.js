const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Itinerary = function() {
  this.url = 'http://localhost:3000/api/itinerary'
}

Itinerary.prototype.bindEvents = function () {
  PubSub.subscribe('Location:add-btn-clicked', (evt) => {
    this.postLocation(evt.detail)
  })
};

Itinerary.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((data) => {
    this.storeData(data)
  })
  .catch(console.error)
};

Itinerary.prototype.storeData = function (data) {z
  PubSub.publish('Itinerary:locations-ready', data)
};

Itinerary.prototype.postLocation = function (location) {
  const request = new Request(this.url);
  request.post(location)
  .then((locations) => {
    PubSub.publish('Itinerary:locations-ready', locations);
  })
  .catch(console.error);
};

module.exports = Itinerary
