/** @format */

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

const data = {
  labels: ["Apr 1,2022", "February", "March", "April", "May", "Apr 30, 2022"],
  datasets: [
    {
      label: "My Dataset",
      data: [50, 59, 50, 81, 56, 45],
      borderColor: "#FF5403",
      backgroundColor: "transparent",
      pointRadius: 0, 
      lineTension: 0.4, 
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    x: {
      display: true,
      ticks: {
        minRotation: 0,
        maxRotation: 0,
        callback: function (value, index, values) {
          const labels = data.labels;
          if (index === 0 || index === values.length - 1) {
            console.log(values);
            return labels[index]; 
          } else {
            return ""; // Hide other labels
          }
        },
      },
      grid: {
        display: false, // Hide the grid lines
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

const Graph = () => (
  <div>
    <Line data={data} options={options} />
  </div>
);

export default Graph;
