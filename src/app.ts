import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { router } from './routes'

const port = process.env.PORT || 8000
const versionApi = process.env.API_VERSION 
const apiUrl = process.env.API_URL

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(router)
app.listen(port, () => console.log(`Api corriendo en  ${apiUrl}:${port}/api/v=${versionApi}/`))