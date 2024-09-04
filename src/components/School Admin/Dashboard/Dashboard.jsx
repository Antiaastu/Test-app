// Dashboard.jsx
import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import NumberOfStudents from '../StudentInformation/NumberOfStudents';
import NumberOfTeachers from '../Teacher Information/NumberOfTeachers';
import { Pie, Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const Dashboard = () => {

  // Data for Bar Chart (Expenses)
  const barDataExpenses = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Expenses',
        data: [500, 700, 300, 900, 600, 800],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  // Data for Line Chart (Absence of Students)
  const lineDataAbsence = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Absence of Students',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: '#FF6384',
        tension: 0.1,
      },
    ],
  };

  // Data for Horizontal Bar Chart (Total Revenue)
  const barDataRevenue = {
    labels: ['Branch 1', 'Branch 2', 'Branch 3', 'Branch 4', 'Branch 5'],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 15000, 12000, 8000, 5000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "black", // Legend text color
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50">
      {/* Header */}
      {/* <h2 className="text-2xl font-bold mb-8">Dashboard</h2> */}
      <Navbar />
      
      <div className="grid grid-cols-3 gap-4">
         <NumberOfStudents />
        

        {/* Month Total Widget */}
        <div className="p-4 space-y-4 ">
          {/* First Row */}
          <div className="bg-white rounded-lg shadow-md mb-10 p-4 h-32 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold">Approved Documents</h3>
            <div className="text-4xl font-bold text-center my-4">12</div>
            <p className="text-center text-green-500 text-sm">↑ 8.2% Since Last Month</p>
          </div>
          
          {/* Second Row */}
          <div className="bg-white rounded-lg shadow-md p-4 h-32 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold">Month Total</h3>
            <div className="text-4xl font-bold my-2">25,410 Birr</div>
            <p className="text-green-500 text-sm">↑ 8.2% Since Last Month</p>
          </div>
        </div>
        <NumberOfTeachers />
        

        {/* Expenses Widget */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Expenses</h3>
          <Bar data={barDataExpenses} />
          <p className="text-sm text-gray-600 mt-4">Trending up by 5.2% this month</p>
        </div>


        {/* Absence of Students Widget */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Absence Of Students</h3>
          <Line data={lineDataAbsence} />
          <p className="text-sm text-gray-600 mt-4">Trending up by 5.2% this month</p>
        </div>

        {/* Total Revenue Widget */}
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6 h-64 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
          <Bar data={barDataRevenue} options={{ indexAxis: 'y' }} />
        </div>
      </div>
    </main>
    </div>
  );
};

export default Dashboard;
