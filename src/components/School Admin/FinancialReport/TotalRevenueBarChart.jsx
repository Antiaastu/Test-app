import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const TotalRevenueBarChart = () => {
  const data = {
    labels: ["Branch 1", "Branch 2", "Branch 3", "Branch 4", "Branch 5"],
    datasets: [
      {
        label: "Total Revenue",
        data: [300, 250, 200, 150, 100],
        backgroundColor: [
          "#3b82f6", // Branch 1
          "#ec4899", // Branch 2
          "#f59e0b", // Branch 3
          "#8b5cf6", // Branch 4
          "#34d399", // Branch 5
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y", // This makes the bar chart horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend if not needed
      },
    },
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-2">Total Revenue</h2>
      <p className="text-gray-400 mb-4">January - June 2024</p>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalRevenueBarChart;
