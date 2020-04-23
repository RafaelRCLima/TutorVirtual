import Sequelize from 'sequelize'

import User from '../app/models/User'

import { development, test } from '../config/database'

const models = [User]

class Database {
  constructor () {
    this.init()
  }

  init () {
    this.connection = new Sequelize(process.env.NODE_ENV === 'test' ? test : development)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
