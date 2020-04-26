import Faq from '../schema/Faq'

class FaqController {
  async store (req, res) {
    try {
      const { id, subject, question, answer } = await Faq.create(req.body)
      return res.status(201).json({ id, subject, question, answer })
    } catch (err) {
      return res.status(400).json({ error: 'Não foi possível inserir o conteúdo' })
    }
  }

  async list (req, res) {
    try {
      const faqList = await Faq.find()
      return res.status(200).json(faqList)
    } catch (err) {
      return res.status(500).json({ error: 'Não foi possível listar os itens' })
    }
  }
}

export default new FaqController()
