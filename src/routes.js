import { Router } from 'express'

import messageController from '../src/app/controllers/messageController'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Mensagem' })
})

routes.post('/ask', messageController.askTutor)

routes.post('/user', UserController.create)
routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.delete)

export default routes
