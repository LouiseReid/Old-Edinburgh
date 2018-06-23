const MapWrapper = require('./models/mapwrapper.js');
const Locations = require('./models/locations.js');
const Itinerary = require('./models/itinerary.js');
const MarkerRender = require('./views/marker_render.js');
const LocationDetail = require('./views/location_detail_view.js')

document.addEventListener('DOMContentLoaded', () => {
  map = new MapWrapper('map', 55.948595, -3.199913, 15);
  const locations = new Locations()
  locations.getData()
  const itinerary = new Itinerary()
  itinerary.bindEvents()


  const markerRender = new MarkerRender()
  markerRender.addMarkers()

  const locationContainer = document.getElementById('location-info')
  const locationDetail = new LocationDetail(locationContainer)
  locationDetail.bindEvents()

})
