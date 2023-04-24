import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import catRouter from './routers/catRouter'

dotenv.config({ path: '.env' })
const app = express()

app.use(apiContentType)
app.use(cors())
app.use('/api/v1/cats', catRouter)
app.use(apiErrorHandler)

export default app
