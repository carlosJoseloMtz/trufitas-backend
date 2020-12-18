const mongoose = require('mongoose')

const dbConnection = process.env.DATABASE_URL || 'mongodb://localhost:27017/trufitasdb'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

const connectToDB = () => mongoose.connect(dbConnection, options)

module.exports = { connectToDB }