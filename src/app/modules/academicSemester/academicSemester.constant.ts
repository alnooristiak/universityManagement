import {
  IAcademicSemesterCodes,
  IAcademicSemesterTittles,
  IAcademicSemesterMonths,
} from './academicSemester.interface';

export const academicSemesterTittle: IAcademicSemesterTittles[] = [
  'Autuam',
  'Summer',
  'Fall',
];

export const academicSemesterCodes: IAcademicSemesterCodes[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterMonths: IAcademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTittleCodeMapper: {
  [key: string]: string;
} = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
