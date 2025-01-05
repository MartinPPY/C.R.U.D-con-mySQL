import { PrismaClient } from "@prisma/client";

//Modelo de prisma
const prisma = new PrismaClient()

export default prisma.user