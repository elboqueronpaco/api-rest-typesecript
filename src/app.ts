import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const port = process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.listen(port, () => console.log(`Listo por el puerto ${port}`))