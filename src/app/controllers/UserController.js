import User from '../models/User'

class UserController {
  async create (req, res) {
    try {
      const { id, name, email, password_hash: password } = await User.create(req.body)
      return res.status(201).json({
        id,
        name,
        email,
        password
      })
    } catch (err) {
      return res.status(400).json({ error: 'It was not possible to create an user' })
    }
  }

  async update (req, res) {
    const user = await User.findByPk(req.params.id)

    const { id, name, email } = await user.update(req.body)
    res.status(200).json({
      id,
      name,
      email
    })
  }

  async delete (req, res) {
    const user = await User.findByPk(req.params.id)

    await user.destroy()
    const { id, name, email } = user

    res.status(200).json({
      message: 'Usuário excluído',
      id,
      name,
      email
    })
  }
}

export default new UserController()
