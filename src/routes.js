import { Router } from 'express'

import messageController from '../src/app/controllers/messageController'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Mensagem' })
})

routes.post('/ask', messageController.askTutor)

routes.post('/user', UserController.create)

export default routes
