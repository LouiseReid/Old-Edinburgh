const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');
const _ = require('lodash')

const Itinerary = function() {
  this.url = 'http://localhost:3000/api/itinerary'
  this.locations = []
}

Itinerary.prototype.bindEvents = function () {
  PubSub.subscribe('Location:add-btn-clicked', (evt) => {
    this.postLocation(evt.detail)
  })
  PubSub.subscribe('Itinerary:delete-btn-clicked', (evt) => {
    this.removeLocation(evt.detail)
  })
  PubSub.subscribe('Itinerary:visited-btn-clicked', (evt) => {
    console.log(evt.detail);
    // this.markVisited(evt.detail)
  })
};

Itinerary.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((data) => {
    this.handleData(data)
  })
  .catch(console.error)
};

Itinerary.prototype.handleData = function (data) {
  this.locations = data
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

Itinerary.prototype.removeLocation = function (location) {
  const request = new Request(this.url);
  request.delete(location)
  .then((locations) => {
    PubSub.publish('Itinerary:locations-ready', locations)
  })
  .catch(console.error)
};

Itinerary.prototype.markVisited = function (location, update) {
  const request = new Request(this.url);
  request.patch(location, update)
  .then((locations) => {
    PubSub.publish('Itinerary:locations-ready', locations)
  })
  .catch(console.error)
};


module.exports = Itinerary
