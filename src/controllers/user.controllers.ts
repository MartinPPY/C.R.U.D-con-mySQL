import { Request, Response } from 'express';
import prismaUser from '../models/users'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

//CREAR USUARIO
export const generateUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body

    if (!email) {
        res.status(400).json({ message: 'Email es requerido!' })
        return
    }

    if (!password) {
        res.status(400).json({ message: 'Contraseña es requerida!' })
        return
    }


    try {
        await prismaUser.create({
            data: {
                email: email,
                password: password
            }
        })
        res.status(201).json({ message: 'Usuario creado!' })

    } catch (error: any) {
        if (error.code == 'P2002' && error.meta.target == 'User_email_key') {
            res.status(400).json({ message: 'Email no valido!' })
            return
        }
        res.status(500).json({ error })
        console.error(error)
    }

}

//TRAER TODOS LOS USUARIOS
export const allUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const usuarios = await prismaUser.findMany()
        res.status(200).json({ usuarios })
    } catch (error: any) {
        res.status(500).json({ error })
        console.error(error)
    }

}

//TRAER USUARIOS POR CORREO
export const userByEmail = async (req: Request, res: Response): Promise<void> => {

    const userEmail = req.params.email

    if (!userEmail) {
        res.status(400).json({ message: 'Correo es necesario!' })
        return
    }

    try {
        const usuario = await prismaUser.findUnique({ where: { email: userEmail } })

        if (!usuario) {
            res.status(404).json({ message: 'Usuario no existe' })
            return
        }

        res.status(200).json({ usuario })

    } catch (error: any) {
        res.status(500).json({ error })
        console.error(error)
    }

}

// EDITAR CORREO
export const updateEmail = async (req: Request, res: Response): Promise<void> => {

    const userEmail = req.params.email
    const { email } = req.body

    if (!userEmail) {
        res.status(400).json({ message: 'Correo es necesario!' })
        return
    }

    if (!email) {
        res.status(400).json({ message: 'Correo es necesario!' })
        return
    }

    try {
        await prismaUser.update({ where: { email: userEmail }, data: { email: email } })
        res.status(200).json({ message: 'Registro actualizado!' })
    } catch (error: any) {
        res.status(500).json({ error })
        console.error(error)
    }

}

// EDITAR CORREO
export const updatePassword = async (req: Request, res: Response): Promise<void> => {

    const userEmail = req.params.email
    const { password } = req.body

    if (!userEmail) {
        res.status(400).json({ message: 'Correo es necesario!' })
        return
    }

    if (!password) {
        res.status(400).json({ message: 'Contraseña  es necesaria!' })
        return
    }

    try {
        await prismaUser.update({ where: { email: userEmail }, data: { password: password } })
        res.status(200).json({ message: 'Registro actualizado!' })
    } catch (error: any) {
        res.status(500).json({ error })
        console.error(error)
    }

}

// BORRAR USUARIO
export const deleteUser = async (req: Request, res: Response): Promise<void> => {

    const userEmail = req.params.email

    if (!userEmail) {
        res.status(400).json({ message: 'Correo es necesario!' })
        return
    }
    
    try {
        await prismaUser.delete({ where: { email: userEmail } })
        res.status(200).json({ message: 'Registro Borrado!' })
    } catch (error: any) {
        res.status(500).json({ error })
        console.error(error)
    }

}
