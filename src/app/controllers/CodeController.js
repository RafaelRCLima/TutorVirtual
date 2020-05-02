class CodeController {
  async tableTest (req, res) {
    res.status(200).json({ page: 'Página de exemplos de teste de mesa' })
  }

  async codeExample (req, res) {
    res.status(200).json({ page: 'Página de exemplos de código' })
  }
}

export default new CodeController()
