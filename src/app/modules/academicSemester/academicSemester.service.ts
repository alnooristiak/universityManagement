import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemesterModel';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const reasult = await AcademicSemester.create(payload);
  return reasult;
};

export const AcademicSemesterService = {
  createSemester,
};
