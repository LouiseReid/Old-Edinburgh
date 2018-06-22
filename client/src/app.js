const MapWrapper = require('./models/mapwrapper.js');

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('map')
  console.log(container);
  const map = new MapWrapper(container, 55.953252, -3.188267, 5)
})
