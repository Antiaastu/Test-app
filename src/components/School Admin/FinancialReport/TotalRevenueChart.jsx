// TotalRevenueChart.js
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

function TotalRevenue() {
  const data = {
    labels: ["Kg", "1-4 Grades", "5-8 Grades", "9-10 Grades", "11-12 Grades"],
    datasets: [
      {
        data: [300, 50, 100, 150, 200],
        backgroundColor: [
          "#4ade80", // Kg
          "#ec4899", // 1-4 Grades
          "#4f46e5", // 5-8 Grades
          "#fbbf24", // 9-10 Grades
          "#3b82f6", // 11-12 Grades
        ],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "right",
        align: "right",
      },
      labels: {
        boxWidth: 50,
      },
    },
  };

  const totalRevenue = 203456; // Total Revenue

  return (
    <div className="flex flex-col justify-center bg-black p-6 rounded-lg shadow-lg">
      <h2 className="text-white text-2xl">Total Revenue</h2>
      <Doughnut data={data} options={options} />
      <div className="text-white text-xl ">Revenue: {totalRevenue}</div>
    </div>
  );
};

export default TotalRevenue;
