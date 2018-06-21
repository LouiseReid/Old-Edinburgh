const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Locations = function(url){
  this.url = url;
}

Locations.prototype.getData = function () {
  const request = new Request(this.url);
  request.get()
  .then((locations) => {
    PubSub.publish('Locations:locations-ready', locations)
  })
  .catch(console.error)
};

module.exports = Locations;
