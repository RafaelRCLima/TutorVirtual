import User from '../models/User'

class UserController {
  async create (req, res) {
    try {
      const { id, name, email, password_hash: password } = await User.create(req.body)
      return res.json({
        id,
        name,
        email,
        password
      })
    } catch (err) {
      return err
    }
  }
}

export default new UserController()
