
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const AllBranchesStudentsChart = () => {
  const data = {
    labels: ["1-6 Grades", "7-12 Grades"],
    datasets: [
      {
        label: "Students",
        data: [800, 1200], 
        backgroundColor: ["#34d399", "#3b82f6"], 
        hoverOffset: 4,
      },
    ],
  };

  const totalStudents = 2000; 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "white",
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
      rotation: Math.PI, 
      circumference: Math.PI, 
      cutout: "30%", 
    },
  };


  return (
    <div className=" bg-black p-6 rounded-lg shadow-lg relative">
      <h2 className="text-white text-xl mb-2">All Branches Students</h2>
      <p className="text-gray-400 mb-4">January - June 2024</p>
      <Doughnut data={data} options={options} />
      <div className="absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-xl">
        {totalStudents} <p className="text-lg">Students</p>
      </div>
    </div>
  );
};
export default AllBranchesStudentsChart;
