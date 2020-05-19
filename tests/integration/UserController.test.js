import request from 'supertest'
import app from '../../src/server'
import Database from '../../src/database'

import User from '../../src/app/models/User'

describe('Test for user endpoints', () => {
  let token

  beforeAll(async () => {
    await User.create({ name: 'Auth', email: 'auth@email.com', password: 'authpass' })

    const response = await request(app)
      .post('/session')
      .send({ email: 'auth@email.com', password: 'authpass' })

    token = response.body.token
  })

  test('Should save an user', async () => {
    const response = await request(app)
      .post('/user')
      .send({ name: 'Testing', email: 'testing@email.com', password_hash: '12345' })
    expect(response.statusCode).toBe(201)
  })

  test('Should update an user', async () => {
    const { id } = await User.create({
      name: 'Test',
      email: 'test@email.com',
      password_hash: '12345'
    })
    const response = await request(app)
      .put('/user/' + id)
      .set('Authorization', 'bearer ' + token)
      .send({ name: 'Test2' })
    expect(response.statusCode).toBe(200)
  })

  test('Should update an user', async () => {
    const { id } = await User.create({
      name: 'Delete',
      email: 'delete@email.com',
      password_hash: '12345'
    })
    const response = await request(app)
      .delete('/user/' + id)
      .set('Authorization', 'bearer ' + token)
    expect(response.statusCode).toBe(200)
  })
})

afterAll(async done => {
  await Database.connection.models.User.truncate({ cascade: true })
  await Database.connection.close()
  app.close()
  done()
})
