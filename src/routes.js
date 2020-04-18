import { Router } from 'express'

import messageController from '../src/app/controllers/messageController'

const routes = new Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Mensagem' })
})

routes.post('/ask', messageController.askTutor)

export default routes
