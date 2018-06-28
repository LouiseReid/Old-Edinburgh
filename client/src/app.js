const MapWrapper = require('./models/mapwrapper.js');
const Locations = require('./models/locations.js');
const Itinerary = require('./models/itinerary.js');
const MarkerRender = require('./views/marker_render.js');
const LocationDetail = require('./views/location_detail_view.js');
const ItinerayView = require('./views/itinerary_view.js');
const ReviewView = require('./views/review_view.js');


document.addEventListener('DOMContentLoaded', () => {
  map = new MapWrapper('map', 55.951998, -3.189970, 14);
  const locations = new Locations()
  locations.getData()

  const itinerary = new Itinerary()
  itinerary.getData()
  itinerary.bindEvents()

  const markerRender = new MarkerRender()
  markerRender.addMarkers()

  const locationContainer = document.getElementById('location-info')
  const locationDetail = new LocationDetail(locationContainer)
  locationDetail.bindEvents()

  const itineraryContainer = document.getElementById('itinerary-container')
  const itineraryView = new ItinerayView(itineraryContainer)
  itineraryView.bindEvents()

  const form = document.getElementById('review-form')
  const reviewView = new ReviewView(form)
  reviewView.bindEvents()

})
