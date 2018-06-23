const ItineraryLocationView = require('./itinerary_location_view.js')

const ItinerayView = function(container){
  this.container = container
}

ItinerayView.prototype.bindEvents = function () {
  PubSub.subscribe('Itinerary:locations-ready', (evt) => {
    this.render(evt.detail)
  })
};

ItinerayView.prototype.render = function (locations) {
  this.clearContent(this.container)
    const itineraryLocation = new ItineraryLocationView(this.container)
    locations.forEach((location) => itineraryLocation.render(location))
};

ItinerayView.prototype.clearContent = function (node) {
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
};


module.exports = ItinerayView;
