import app from './app'

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Servidor iniciado en el puerto', PORT)
})