class MessageController {
  async askTutor (req, res) {
    const question = req.body
    const answer = { content: 'Olá, seja bem vindo ao seu Tutor de algoritmos' }
    return res.json({
      question,
      answer
    })
  }
}

export default new MessageController()
