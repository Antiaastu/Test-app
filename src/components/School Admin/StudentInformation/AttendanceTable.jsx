import React from "react";

const AttendanceTable = () => {
  const attendanceData = [
    {
      id: "#065499",
      name: "Natnael Kebede",
      daysPresented: 200,
      daysAbsent: 20,
      daysPresentThisMonth: 20,
      daysPresentThisWeek: 4,
    },
    {
      id: "#065500",
      name: "Yonatan Alemu",
      daysPresented: 219,
      daysAbsent: 37,
      daysPresentThisMonth: 20,
      daysPresentThisWeek: 4,
    },
    {
      id: "#065501",
      name: "Marken Nigus",
      daysPresented: 240,
      daysAbsent: 40,
      daysPresentThisMonth: 20,
      daysPresentThisWeek: 4,
    },
    {
      id: "#065502",
      name: "Bezaweit Gossaye",
      daysPresented: 235,
      daysAbsent: 23,
      daysPresentThisMonth: 20,
      daysPresentThisWeek: 4,
    },
    {
      id: "#065503",
      name: "Simbo Belay",
      daysPresented: 203,
      daysAbsent: 28,
      daysPresentThisMonth: 20,
      daysPresentThisWeek: 4,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">
        Recent Students Attendance
      </h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-2 px-4 border-b">No</th>
            <th className="py-2 px-4 border-b">Id Students</th>
            <th className="py-2 px-4 border-b">Students Name</th>
            <th className="py-2 px-4 border-b">Days Presented</th>
            <th className="py-2 px-4 border-b">Days Absent</th>
            <th className="py-2 px-4 border-b">Days Present This Month</th>
            <th className="py-2 px-4 border-b">Days Present This Week</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{student.id}</td>
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.daysPresented}</td>
              <td className="py-2 px-4 border-b">{student.daysAbsent}</td>
              <td className="py-2 px-4 border-b">
                {student.daysPresentThisMonth}
              </td>
              <td className="py-2 px-4 border-b">
                {student.daysPresentThisWeek}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
