import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTittle,
} from './academicSemester.constant';

// req validation
const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    tittle: z.enum([...academicSemesterTittle] as [string, ...string[]], {
      required_error: 'title is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]]),
  }),
  startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
    required_error: 'start Month is required',
  }),
  endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
    required_error: 'end Month is required',
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};

// await createUserZodSchema.parseAsync(req)
