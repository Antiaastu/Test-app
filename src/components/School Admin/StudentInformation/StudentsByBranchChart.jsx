import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const StudentsByBranchChart = () => {
  const data = {
    labels: ["Branch12", "Branch2", "Branch3", "Branch4", "Branch5"],
    datasets: [
      {
        label: "Expenses",
        data: [275, 150, 100, 200, 120],
        backgroundColor: [
          "#3b82f6", // Chrome
          "#ec4899", // Firefox
          "#4ade80", // Safari
          "#f59e0b", // Edge
          "#8b5cf6", // Opera
        ],
        hoverOffset: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label} ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-2">All Students By Branch</h2>
      <p className="text-gray-400 mb-4">January - June 2024</p>
      <Pie data={data} options={options} />
      {/* <p className="text-green-400 mt-2">Trending up by 5.2% this month</p>
      <p className="text-gray-400">
        Showing total visitors for the last 6 months
      </p> */}
    </div>
  );
};

export default StudentsByBranchChart;
