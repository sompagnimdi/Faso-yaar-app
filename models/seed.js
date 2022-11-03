require('dotenv').config()

const db = require('./db')
const Fruit = require('./fruit')

const starterFruits = [
  {
    name: 'Apple', color: 'red', readyToEat: true
  },
  {

    name: 'Orange', color: 'orange', readyToEat: true
  },
  {

    name: 'Coconut', color: 'brown', isOnSalle: true
  },
  {

    name: 'Bag packs', color: 'red', isOnSalle: true
  },
  {

    name: 'Long Sleev', color: 'green', isOnSalle: false
  }
]


Item.deleteMany({})
    .then(() => {
      Item.create(starterItems)
        .then((createdItems) => {
            console.log('created Items:', createdItems)
            db.close()
        })
        .catch(err => {
            console.log(err)
            db.close()
        })  
    }).catch(err => {
        console.log(err)
        db.close()
    })
    