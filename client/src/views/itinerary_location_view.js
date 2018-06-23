const PubSub = require('../helpers/pub_sub.js');

ItineraryLocationView = function(container){
  this.container = container
}
ItineraryLocationView.prototype.render = function (location) {
  const locationContainer = document.createElement('div')
  locationContainer.classList.add('itinerary-card')

  const name = document.createElement('h4')
  name.innerText = location.name
  locationContainer.appendChild(name)

  this.container.appendChild(locationContainer)
};


module.exports = ItineraryLocationView;
