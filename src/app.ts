import dotenv from 'dotenv'
import express from 'express'
import userRoutes from './routes/user.routes'

dotenv.config()

const app = express()

app.use(express.json())

//rutas
app.use('/users', userRoutes)

console.log('iniciando aplicacion!')

export default app
