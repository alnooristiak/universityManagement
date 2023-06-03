import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.routs'
import usersServices from './app/modules/users/users.services'
const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', userRouter)

// Testing
app.get('/', async (req: Request, res: Response) => {
  await usersServices.createUser({
    id: '999',
    password: '1234',
    role: 'student',
  })
  res.send('Working Successfully')
})

export default app
