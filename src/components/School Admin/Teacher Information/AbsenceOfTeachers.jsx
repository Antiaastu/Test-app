import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const AbsenceOfTeachers = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Absence Of Teachers",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-black p-4 rounded-lg shadow-lg">
      <h2 className="text-white text-xl mb-2">Absence Of Teachers</h2>
      <Line data={data} />
      <p className="text-green-400 mt-2">Trending up by 5.2% this month</p>
    </div>
  );
};

export default AbsenceOfTeachers;
