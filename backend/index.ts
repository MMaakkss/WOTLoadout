import express from 'express'
import 'dotenv/config'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import routes from './src/routes'
import { errorHandler } from './src/middlewares/errorHandler'
import { connectToDB } from './src/config/mongoose'

connectToDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

app.use((req, res) => {
  res
    .status(404)
    .json({ message: 'Gerara of here man shit. This route not found' })
})

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
