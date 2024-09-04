import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import NumberOfTeachers from './NumberOfTeachers';
import TeacherAttendance from './TeacherAttendance';
import AbsenceOfTeachers from './AbsenceOfTeachers';
const TeacherInformation = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-white">
        <Navbar />
        <div className="grid grid-cols-3 gap-4">
           <NumberOfTeachers />
           <AbsenceOfTeachers />
        </div>
        <TeacherAttendance />
      </main>
    </div>
  );
};
export default TeacherInformation;