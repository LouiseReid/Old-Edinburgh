const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const ReviewView = function(form){
  this.form = form;
}

ReviewView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  })
};

ReviewView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const review = this.createReview(evt.target)
  console.log(review);
  PubSub.publish('Review:review-submitted', review)
  evt.target.reset();

  const modal = document.getElementById('modal');
  modal.style.display = "none";
};

ReviewView.prototype.createReview = function (form) {
  const review = {
    review: form.review.value
  }
  return review
};

module.exports = ReviewView;
