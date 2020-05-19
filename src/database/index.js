import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import User from '../app/models/User'

import { development, test } from '../config/database'

const models = [User]

class Database {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.connection = new Sequelize(process.env.NODE_ENV === 'test' ? test : development)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }

  mongo () {
    this.mongoConnection = mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }
    )
  }
}

// process.env.NODE_ENV === 'test' ? process.env.MONGO_TEST :

export default new Database()
