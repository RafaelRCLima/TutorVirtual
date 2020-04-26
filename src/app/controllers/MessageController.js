class MessageController {
  async askTutor (req, res) {
    const question = req.body
    if (!question.content) {
      return res.status(400).json({ error: "There's no question " })
    }
    const answer = { content: 'Olá, seja bem vindo ao seu Tutor de algoritmos' }
    return res.status(200).json({
      question,
      answer
    })
  }
}

export default new MessageController()
