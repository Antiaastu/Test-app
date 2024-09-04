import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const NumberOfStudents = () => {
  const data = {
    labels: ["KG", "1 - 4", "5 - 8", "9 - 10", "11 - 12",],
    datasets: [
      {
        label: "Number Of Students",
        data: [200, 400, 500 , 500, 400],
        backgroundColor: [
          "#34d399", 
          "#3b82f6", 
          "#ec4899", 
          "#8b5cf6", 
          "#f59e0b", 
        ],
        hoverOffset: 4,
      },
    ],
  };

  const totalStudents = 2000; 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
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
    },
  };

  return (
    <div className=" bg-black p-6 rounded-lg shadow-lg relative flex flex-col align-middle justify-center">
      <h2 className="text-white text-xl mb-2">Number Of Students</h2>
      <Doughnut data={data} options={options} />
      <div className="absolute top-[53%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
        {totalStudents} <p className="text-xs text-center">Students</p>
      </div>
    </div>
  );
};

export default NumberOfStudents;
