import { Request, Response } from 'express';

//CREAR USUARIO
export const generateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(201).json({ message: 'Usuario creado!' })
    } catch (error) {
        console.error(error)
    }

}