import Express from 'express'

import routes from './routes'

import './database'

const app = new Express()

app.use(Express.json())
app.use(routes)

export default app
