const LocationDetailView = function(container){
  this.container = container
}

LocationDetailView.prototype.bindEvents= function () {
  PubSub.subscribe('Marker:marker-clicked', (event) => {
    this.renderLocationDetail(event.detail)
  })

};

LocationDetailView.prototype.renderLocationDetail = function (location) {
  this.clearContent(this.container)
  
  const title = document.createElement('h1')
  title.innerText = location.name
  this.container.appendChild(title)

  const infoDiv = document.createElement('div')
  infoDiv.classList.add('location-info-inner')
  this.container.appendChild(infoDiv)

  const image = document.createElement('img')
  image.src = location.image
  image.alt = location.name
  infoDiv.appendChild(image)

  const fact = document.createElement('section')
  fact.innerText = location.fact
  infoDiv.appendChild(fact)
};

LocationDetailView.prototype.clearContent = function (node) {
  while (node.hasChildNodes()) {
  node.removeChild(node.lastChild);
}
};

module.exports = LocationDetailView;
