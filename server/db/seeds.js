use oldedin;
db.dropDatabase();


db.locations.insertMany([
  {
    name: "Edinburgh Castle",
    latlng: [55.948595, -3.199913],
    fact: "The castle sits on top of the remains of an extinct volcano, which acquired its shape from ages of erosion by glaciers.\n\nThe castle is home to St Margaret\u2019s Chapel, the 12th-century Holy Place and oldest standing building in Edinburgh.",
    image: '../client/public/images/castle.jpg'
  },
  {
    name: "Greyfriars Bobby Statue",
    latlng: [55.947169, -3.191578],
    fact: 'The Greyfriars Bobby memorial is one of the most loved statues in the city.\n\nThe story of Bobby is a timeless tale documenting the bond between a man and his dug, Bobby famously guarded his master\u2019s grave for 14 years until he himself passed on.\n\nCreated by William Brodie and funded by a wealthy local, the life-size statue, which dates back to 1873, was originally designed as a drinking fountain for dogs and humans.',
    image: '../client/public/images/greyfriars_bobby.jpg'
  }
])
