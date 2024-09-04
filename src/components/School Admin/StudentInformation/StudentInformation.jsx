import React from "react";
import AllBranchesStudentsChart from "./AllBranchesStudentsChart";
import NumberOfStudents from "./NumberOfStudents";
import StudentsByBranchChart from "./StudentsByBranchChart";
import AttendanceTable from "./AttendanceTable";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
const StudentInformation = () => {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50">
        <Navbar />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white-800 ">
          <AllBranchesStudentsChart />
          <NumberOfStudents />
          <StudentsByBranchChart />
        </div>
        <AttendanceTable />
      </main>
    </div>
    </>
  );
};

export default StudentInformation;
