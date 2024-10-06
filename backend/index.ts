import express from "express"
import routes from "./src/routes/index"
import { errorHandler } from "./src/middlewares/error-handler"

const app = express()

app.use(express.json())

app.use("/api", routes)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
