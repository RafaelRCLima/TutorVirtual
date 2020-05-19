class TestController {
  async test (req, res) {
    res.json({ ok: 'it works' })
  }
}

export default new TestController()
