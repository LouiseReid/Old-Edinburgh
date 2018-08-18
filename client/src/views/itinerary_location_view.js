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

  const imageContainer = document.createElement('div')
  imageContainer.classList.add('itinerary-img')
  locationContainer.appendChild(imageContainer)

  const image = document.createElement('img')
  image.src = location.image
  image.alt = location.name
  imageContainer.appendChild(image)

  const icon = document.createElement('i')
  icon.classList.add('fa', 'fa-check-circle')
  locationContainer.append(icon)

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('itinerary-options-container')
  locationContainer.appendChild(buttonContainer)

  const deleteButton = this.createDeleteButton(location._id)
  buttonContainer.appendChild(deleteButton)

  const visitedButton = this.createVisitedButton(location._id)
  buttonContainer.appendChild(visitedButton)

  const reviewButton = this.createReviewButton(location._id)
  buttonContainer.appendChild(reviewButton)

  const ratingContainer = document.createElement('div')
  ratingContainer.classList.add('rating-container')
  locationContainer.appendChild(ratingContainer)

  const ratings = this.renderRatings(location.review)
  ratingContainer.appendChild(ratings)

  this.container.appendChild(locationContainer)
};

ItineraryLocationView.prototype.createDeleteButton = function (locationId) {
  const button = document.createElement('button')
  button.classList.add('btn','btn-remove')
  button.value = locationId
  button.innerText = 'Remove'

  button.addEventListener('click', (evt) => {
    PubSub.publish('Itinerary:delete-btn-clicked', evt.target.value)
  })
  return button
};

ItineraryLocationView.prototype.createVisitedButton = function (locationId) {
  const form = document.createElement('form')
  form.classList.add('btn', 'btn-visited')
  form.innerText = 'Visited'
  form.value = {
    id: locationId,
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
  button.classList.add('btn','btn-review')
  button.value = locationId
  button.innerText = 'Review'

  const modal = document.getElementById('modal')

  button.addEventListener('click', (evt) => {
    PubSub.publish('Itinerary:review-btn-clicked', evt.target.value)
    modal.style.display = 'block'
  })
  return button
};

ItineraryLocationView.prototype.renderRatings = function (locationRating) {
  const p = document.createElement('p')
  p.classList.add('rating')

  p.innerText = 'Rating: ' + this.rating(locationRating)

  return p
};

ItineraryLocationView.prototype.rating = function (locationRating) {
  review = '⭐'.repeat(locationRating)
  return !locationRating ? 'No Review' : review
};




module.exports = ItineraryLocationView;
