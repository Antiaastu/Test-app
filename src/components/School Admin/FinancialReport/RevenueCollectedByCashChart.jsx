import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const RevenueCollectedByCashChart = () => {
  const data = {
    labels: ["Branch 1", "Branch 2", "Branch 3", "Branch 4", "Branch 5"],
    datasets: [
      {
        label: "Revenue",
        data: [30000, 25000, 20000, 15000, 12000],
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

  const totalRevenue = 102124; // Total Revenue

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
    <div className="bg-black p-6 rounded-lg shadow-lg flex flex-col justify-center">
      <h2 className="text-white text-xl mb-2">Revenue Collected By Cash</h2>
      <Doughnut data={data} options={options} />
      <div className="text-white text-3xl">
        ${totalRevenue} <span className="text-lg"> Birr</span>
      </div>
    </div>
  );
};

export default RevenueCollectedByCashChart;
