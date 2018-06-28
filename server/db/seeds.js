use oldedin;
db.dropDatabase();


db.locations.insertMany([
  {
    name: "Edinburgh Castle",
    latlng: [55.948595, -3.199913],
    fact: "The castle sits on top of the remains of an extinct volcano, which acquired its shape from ages of erosion by glaciers.\n\nThe castle is home to St Margaret\u2019s Chapel, the 12th-century Holy Place and oldest standing building in Edinburgh.",
    image: '/images/castle.jpg'
  },
  {
    name: "Greyfriars Bobby Statue",
    latlng: [55.947169, -3.191578],
    fact: 'The Greyfriars Bobby memorial is one of the most loved statues in the city.\n\nThe story of Bobby is a timeless tale documenting the bond between a man and his dug, Bobby famously guarded his master\u2019s grave for 14 years until he himself passed on.\n\nCreated by William Brodie and funded by a wealthy local, the life-size statue, which dates back to 1873, was originally designed as a drinking fountain for dogs and humans.',
    image: '/images/greyfriars_bobby.jpg'
  },
  {
    name: "Gladstones Land",
    latlng: [55.949448, -3.193669],
    fact: "Gladstone’s Land is a unique 17th century six-storey high-rise tenement house on the Royal Mile.\n\nBecause the Old Town of Edinburgh was surrounded by a large defensive wall, the inhabitants had run out of space and began building upwards with buildings said to be up to 14 stories tall!\n\nThe building is still used and lived in today making it one of the oldest continually inhabited buildings in Edinburgh.",
    image: '/images/gladstones_land.jpg'
  },
  {
    name: "St Giles' Cathedral",
    latlng: [55.949484, -3.190892],
    fact: "Also known as the High Kirk of Edinburgh, St Giles's Cathedral is the principle place of worship of the Church of Scotland in Edinburgh.\n\nThe church has been one of Edinburgh's religious focal points for approximately 900 years.\n\nThe cathedral is dedicated to Saint Giles, who is the patron saint of Edinburgh who and was a very popular saint in the Middle Ages.",
    image: '/images/st_giles.jpg'
  },
  {
    name: "Mary Kings Close",
    latlng: [55.949830, -3.190456],
    fact: "Visit Edinburghs 'Underground City' a series of lanes and valuts which branch off the Royal Mile.  Mary Kings Close is the most famous as it is the only underground Close in Edinburgh.\n\nMary King's Close has had a reputation for hauntings since at least the 17th century, with several paranormal investigations taking place.",
    image: '/images/mary_kings_close.jpg'
  },
  {
    name: "The Palace of Holyroodhouse",
    latlng: [55.952714, -3.172272],
    fact: "Commonly referred to as Holyrood Palace, this is the official residence of the British monarch in Scotland.\n\nLocated at the bottom of the Royal Mile in Edinburgh, at the opposite end to Edinburgh Castle, Holyrood Palace has served as the principal residence of the Kings and Queens of Scots since the 16th century.",
    image: '/images/holyrood_palace.jpg'
  },
  {
    name: "The Heart of Midlothian",
    latlng: [55.949579, -3.191607],
    fact: "The Heart of Midlothian is a heart-shaped mosaic camouflaged within the grey cobbled pavement outside St Giles Cathedral.\n\n.The heart marks the location of the Old Tollbooth from the 15th century. The Tolbooth was Edinburgh's main jail where, in addition to incarceration, physical punishment and torture were routinely conducted. From 1785 public executions were carried out.\n\nLocals spit on it for good luck.",
    image: '/images/heart_of_midlothian.jpg'
  }
])
