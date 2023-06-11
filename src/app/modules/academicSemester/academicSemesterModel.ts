import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTittle,
} from './academicSemester.constant';
import status from 'http-status';
import ApiError from '../../../errors/ApiError';

// creating a model
const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    tittle: {
      type: String,
      required: true,
      enum: academicSemesterTittle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

// hendeling same year and same semester issues
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    tittle: this.tittle,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Academic Semester is Already Exist');
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
);
