# C.R.U.D-con-mySQL
CRUD realizado con node JS, express y docker

**Requisitos**
- tener instalado docker
- tener instalado node js

**Dependencias**
- bcrypt
- typescript
- express
- jsonwebtoken
- dotenv
- @prisma/client

**Dev Dependencias**
- @types/bcrypt
- @types/express
- @types/jsonwebtoken
- @types/node
- prisma
- rimraf
- ts-node-dev

**Pasos para crear la base de datos y conexion**
primero tener en consideracion tener docker instalado y funcionando y los modelos creados

1. Ejecutar el comando docker-compose up -d en la terminal
2. Luego ejecutar el comando npx prisma init

Luego de tener un modelo en el esquema de prisma ejecutar:

3. Ejecutar el comando npx prisma generate
4. por ultimo ejecutar npx prisma migrate dev para migrar el script sql a la base de datos
