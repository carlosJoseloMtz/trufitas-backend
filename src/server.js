const express = require('express')
const bodyParser = require('body-parser')
const cors =  require('cors')

// config
const { connectToDB } = require('./config/db')

connectToDB()
  .then(() =>
    console.log('Successfully connected to the DB'))
  .catch(err =>
    console.error('Error while connecting to the DB', err))

// app routers
const adminv1 = require('./routes/admin-v1')

const app = express()

app.use(cors())

const appPort = process.env.PORT || 3030

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// bind the routes to the corresponding version
app.use('/v1/admin', adminv1)

app.listen(appPort, (err) => {
  if (err) {
    console.error('Error while trying to start the app', err)
    return false
  }

  console.log(`App running on port ${appPort}`)
})
