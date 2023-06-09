import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.routs'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
// import usersServices from './app/modules/users/users.services'
const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', userRouter)

// Testing
// app.get('/', async (req: Request, res: Response) => {
//   await usersServices.createUser({
//     id: '999',
//     password: '1234',
//     role: 'student',
//   })
//   res.send('Working Successfully')
// })
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   next('hai hai error')
// })

// global error hendeler
app.use(globalErrorHandler)

export default app
