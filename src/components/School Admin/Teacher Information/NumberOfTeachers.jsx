import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const NumberOfTeachers = () => {
  const data = {
    labels: ["KG", "1 - 4", "5 - 8", "9 - 10", "11 - 12",],
    datasets: [
      {
        label: "Revenue",
        data: [25, 30, 55, 40, 50],
        backgroundColor: [
          "#34d399", // Branch 1
          "#3b82f6", // Branch 2
          "#ec4899", // Branch 3
          "#8b5cf6", // Branch 4
          "#f59e0b", // Branch 5
        ],
        hoverOffset: 4,
      },
    ],
  };

  const totalTeachers = 200; 

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "white", // Legend text color
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
      <h2 className="text-white text-xl mb-2">Number Of Teachers</h2>
      <Doughnut data={data} options={options} />
      <div className="absolute top-[53%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-lg">
        {totalTeachers} <p className="text-xs">Teachers</p>
      </div>
    </div>
  );
};

export default NumberOfTeachers;
