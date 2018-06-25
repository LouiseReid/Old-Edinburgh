const PubSub = require('../helpers/pub_sub.js');

ItineraryLocationView = function(container){
  this.container = container
}

ItineraryLocationView.prototype.render = function (location) {
  const locationContainer = document.createElement('div')
  locationContainer.classList.add('itinerary-card',`visited-${location.visited}`)

  const name = document.createElement('h4')
  name.innerText = location.name
  name.classList.add('itinerary-name')
  locationContainer.appendChild(name)

  const image = document.createElement('img')
  image.src = location.image
  image.alt = location.name
  image.classList.add('itinerary-image')
  locationContainer.appendChild(image)

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('itinerary-options-container')
  locationContainer.appendChild(buttonContainer)

  const deleteButton = this.createDeleteButton(location._id)
  buttonContainer.appendChild(deleteButton)

  const visitedButton = this.createVisitedButton(location._id)
  buttonContainer.appendChild(visitedButton)

  const reviewButton = this.createReviewButton(location._id)
  buttonContainer.appendChild(reviewButton)

  this.container.appendChild(locationContainer)
};

ItineraryLocationView.prototype.createDeleteButton = function (locationId) {
  const button = document.createElement('button')
  button.classList.add('btn-remove')
  button.value = locationId

  button.addEventListener('click', (evt) => {
    PubSub.publish('Itinerary:delete-btn-clicked', evt.target.value)
  })
  return button
};

ItineraryLocationView.prototype.createVisitedButton = function (locationId) {
  const form = document.createElement('form')
  form.classList.add('btn-visited')
  form.innerText = 'visited'
  form.value = {
    id: location,
    payload: {
      visited: true
    }
  }

  form.addEventListener('click', (evt) => {
    PubSub.publish('Itinerary:visited-btn-clicked', evt.target.value)
  });
  return form
};

ItineraryLocationView.prototype.createReviewButton = function (locationId) {
  const button = document.createElement('button')
  button.classList.add('btn-review')
  button.value = locationId

  const modal = document.getElementById('modal')

  button.addEventListener('click', (evt) => {
    PubSub.publish('Itinerary:review-btn-clicked', evt.target.value)
    modal.style.display = 'block'
  })
  return button
};




module.exports = ItineraryLocationView;
