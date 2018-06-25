const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const ReviewView = function(form){
  this.form = form;
  this.location = ''
}

ReviewView.prototype.bindEvents = function () {
  this.storeLocation();
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

ReviewView.prototype.storeLocation = function () {
  PubSub.subscribe('Itinerary:review-btn-clicked', (evt) => {
    this.location = evt.detail
  })
};

ReviewView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const review = this.createReview(evt.target, this.location)
  PubSub.publish('Review:review-submitted', review)
  evt.target.reset();
  const modal = document.getElementById('modal');
  modal.style.display = "none";
};

ReviewView.prototype.createReview = function (form, location) {
  const review = {
    id: location,
    payload: {
      review: form.review.value
    }
  }
  return review
};

module.exports = ReviewView;
