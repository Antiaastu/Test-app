import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BoughtMaterialsChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Materials Bought",
        data: [50, 70, 30, 90, 60, 80],
        backgroundColor: "#ec4899",
      },
    ],
  };

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-2">Bought Materials</h2>
      <Bar data={data} />
      <p className="text-green-400 mt-2">Trending up by 5.2% this month</p>
    </div>
  );
};

export default BoughtMaterialsChart;
