import Database from '../../src/database'
import User from '../../src/app/models/User'

describe('Test for User model', () => {
  test('Saving and Deleting User', async () => {
    const user = await User.create({
      name: 'User', email: 'user@email.com', password_hash: '123456'
    })
    expect(user.id).not.toBeNull()
    await user.destroy()
  })

  test('Updating and Deleting User', async () => {
    const user = await User.create({
      name: 'User', email: 'user@email.com', password_hash: '123456'
    })
    const newName = 'Novo nome'
    user.name = newName
    await user.save()
    await user.reload()
    expect(user.name).toBe(newName)
    await user.destroy()
  })

  afterAll(async done => {
    Database.connection.close()
    done()
  })
})
