const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Locations = function(){

}

Locations.prototype.getData = function () {
  const request = new Request('http://localhost:3000/api/locations');
  request.get()
  .then((data) => {
    this.sendData(data)
  })
  .catch(console.error)
};

Locations.prototype.sendData = function (data) {
  PubSub.publish('Locations:locations-ready', data)
};



module.exports = Locations;
