import { Router } from 'express'

import authMiddleware from './app/middlewares/auth'
import MessageController from './app/controllers/MessageController'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FaqController from './app/controllers/FaqController'
import CodeController from './app/controllers/CodeController'
import TestController from './app/controllers/TestController'

const routes = new Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Mensagem' })
})

routes.post('/teste', TestController.test)
routes.post('/user', UserController.create)
routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.post('/ask', MessageController.askTutor)
routes.post('/dialogTest', MessageController.dialogTest)

routes.put('/user/:id', UserController.update)
routes.delete('/user/:id', UserController.delete)

routes.post('/faq', FaqController.store)
routes.get('/faq', FaqController.list)

routes.get('/table_test', CodeController.tableTest)
routes.get('/examples', CodeController.codeExample)

export default routes
