import { Model } from 'mongoose';
export type IAcademicSemesterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemesterTittles = 'Autuam' | 'Summer' | 'Fall';
export type IAcademicSemesterCodes = '01' | '02' | '03';

export type IAcademicSemester = {
  tittle: IAcademicSemesterTittles;
  year: number;
  code: IAcademicSemesterCodes;
  startMonth: IAcademicSemesterMonths;
  endMonth: IAcademicSemesterMonths;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
