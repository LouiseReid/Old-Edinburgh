const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json())

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('oldedin');

  const locations = db.collection('locations');
  const locationsRouter = createRouter(locations);
  app.use('/api/locations', locationsRouter);

  const itinerary = db.collection('itinerary');
  const itineraryRouter = createRouter(itinerary);
  app.use('/api/itinerary', itineraryRouter);
});



app.listen(3000, function(){
  console.log('listening on port 3000');
})
