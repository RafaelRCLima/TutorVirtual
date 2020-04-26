import request from 'supertest'
import app from '../../src/server'
import Database from '../../src/database'
import mongoose from 'mongoose'

import User from '../../src/app/models/User'
import FAQ from '../../src/app/schema/Faq'

describe('Test for messageController', () => {
  let token

  beforeAll(async () => {
    await User.create({ name: 'Message', email: 'message@email.com', password: 'authpass' })

    const response = await request(app)
      .post('/session')
      .send({ email: 'message@email.com', password: 'authpass' })

    token = response.body.token

    const databaseName = 'test'
    const url = `mongodb://localhost:27017/${databaseName}`
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    })
  })

  test('Should contain id attribute', async () => {
    const response = await request(app)
      .post('/faq')
      .set('Authorization', 'bearer ' + token)
      .send({ subject: 'Name', question: 'Question', answer: 'Answer' })
    expect(response.body).toHaveProperty('id')
  })

  test('Should response OK with status code 200', async () => {
    const response = await request(app)
      .get('/faq')
      .set('Authorization', 'bearer ' + token)
    expect(response.statusCode).toBe(200)
  })
})

afterAll(async () => {
  await Database.connection.models.User.truncate({ cascade: true })
  await Database.connection.close()
  await FAQ.deleteMany()
  await mongoose.connection.close()
  await app.close()
})
