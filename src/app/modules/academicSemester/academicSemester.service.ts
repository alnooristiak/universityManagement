import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTittleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemesterModel';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTittleCodeMapper[payload.tittle] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Internal Semester Code');
  }

  const reasult = await AcademicSemester.create(payload);
  return reasult;
};

export const AcademicSemesterService = {
  createSemester,
};
