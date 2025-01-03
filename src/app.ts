import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()

app.use(express.json())

console.log('iniciando aplicacion!')

export default app
