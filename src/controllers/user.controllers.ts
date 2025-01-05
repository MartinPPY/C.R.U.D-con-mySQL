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