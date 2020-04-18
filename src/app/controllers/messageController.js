import Message from '../models/Message'

const messageController = {
  askTutor: async (req, res) => {
    const message = new Message(req.body.content)
    res.json({ message })
  }
}

export default messageController
