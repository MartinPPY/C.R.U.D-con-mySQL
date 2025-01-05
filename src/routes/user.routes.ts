import express from 'express'
import { allUsers, deleteUser, generateUser, updateEmail, updatePassword, userByEmail } from '../controllers/user.controllers'

const router = express.Router()

router.post('/crear_usuario', generateUser)
router.get('/all_users', allUsers)
//get por correo:
router.get('/usuario/:email', userByEmail)
//editar correo
router.put('/editar_email/:email', updateEmail)
//editar contraseña
router.put('/editar_password/:email', updatePassword)
router.delete('/borrar_usuario/:email', deleteUser)

export default router