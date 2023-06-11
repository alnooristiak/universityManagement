import express, { Application } from 'express';
import cors from 'cors';
// import { UserRoutes } from './app/modules/users/user.routs';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import router from './app/routes';
// import usersServices from './app/modules/users/users.services'
const app: Application = express();

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
// app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/', router);

// academic semester routes
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);

app.use(globalErrorHandler);

export default app;
