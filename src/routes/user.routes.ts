import express from 'express'
import { generateUser } from '../controllers/user.controllers'

const router = express.Router()

router.post('/crear_usuario', generateUser)
router.get('/all_users', () => { console.log('Traer todos los usuarios!') })
//get por correo:
router.get('/usuario:email', () => { console.log('Obtener usuario por correo') })
//editar correo
router.put('/editar_email:email', () => { console.log('Editar correo electronico!') })
//editar contraseña
router.put('/editar_password:password', () => { console.log('Editar contraseña!') })
router.delete('/borrar_usuario', () => { console.log('Borrar usuario!') })

export default router