import request from 'supertest'
import app from '../../src/server'
import Database from '../../src/database'

import User from '../../src/app/models/User'

describe('Test for messageController', () => {
  let token

  beforeAll(async () => {
    await User.create({ name: 'Message', email: 'message@email.com', password: 'authpass' })

    const response = await request(app)
      .post('/session')
      .send({ email: 'message@email.com', password: 'authpass' })

    token = response.body.token
  })

  test('Should contain content attribute', async () => {
    const response = await request(app)
      .post('/ask')
      .set('Authorization', 'bearer ' + token)
      .send({ content: 'Teste' })
    expect(response.body).toHaveProperty('answer')
  })
})

afterAll(async done => {
  await Database.connection.models.User.truncate({ cascade: true })
  await Database.connection.close()
  app.close()
  done()
})
