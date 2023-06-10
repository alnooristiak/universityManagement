import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';

// creating a model
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    tittle: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    startMonth: {
      type: String,
      required: true,
    },
    endMonth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
