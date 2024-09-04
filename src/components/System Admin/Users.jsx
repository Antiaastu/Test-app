import React from "react";

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

const Users = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h4>Users</h4>
        <button>add users</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-md mb-10 p-4 h-32 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">total Users</h3>
          <div className="text-4xl font-bold text-center my-4">50</div>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-10 p-4 h-32 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold">Schools</h3>
          <div className="text-4xl font-bold text-center my-4">12</div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="flex items-center border border-gray-300 rounded-full p-2 bg-gray-100">
          <span className="text-gray-500">
            <i className="bi bi-search mr-3 text-xl"></i>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-2"
          />
        </div>

        <select name="roleFilter" id="">
          <option value="" disabled selected>
            role
          </option>
        </select>
        <select name="branchFilter" id="">
          <option value="" disabled selected>
            branch
          </option>
        </select>
      </div>

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
    </div>
  );
};

export default Users;
