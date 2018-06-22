const MapWrapper = require('./models/mapwrapper.js');
const Locations = require('./models/locations.js')
const MarkerRender = require('./views/marker_render.js')

document.addEventListener('DOMContentLoaded', () => {
  map = new MapWrapper('map', 55.948595, -3.199913, 15);
  const locations = new Locations()
  locations.getData()

  const markerRender = new MarkerRender()
  markerRender.addMarkers()
})
