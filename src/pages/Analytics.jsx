import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

function Analytics() {
  // Hardcoded data for ridgeline plot-like visualization (converted into line chart)
  const skills = ["Communication", "Confidence", "Leadership", "Self-Discipline", "Empathy", "Time Management"];
  const skillScores = {
    Communication: [3.5, 4.0, 3.2, 3.8, 4.1],
    Confidence: [3.8, 3.7, 4.2, 3.9, 4.0],
    Leadership: [3.9, 4.3, 4.0, 3.8, 3.7],
    "Self-Discipline": [4.2, 3.9, 4.0, 4.1, 4.3],
    Empathy: [3.5, 3.6, 3.8, 3.9, 4.1],
    "Time Management": [3.7, 3.8, 3.9, 3.5, 4.0],
  };

  // Hardcoded data for bar chart (Class performance over time)
  const classDates = ["10 Sep", "20 Sep", "30 Sep", "10 Oct"];
  const classPerformance = [3.2, 3.8, 4.0, 3.6];

  // Data for Line Chart (Ridgeline-like plot)
  const ridgelineData = {
    labels: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5"],
    datasets: Object.keys(skillScores).map((skill, index) => ({
      label: skill,
      data: skillScores[skill],
      borderColor: `hsl(${index * 60}, 70%, 60%)`,
      backgroundColor: `hsl(${index * 60}, 70%, 80%)`,
      fill: false,
      tension: 0.4,
    })),
  };

  const ridgelineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Skill Distribution Overview",
        font: { size: 16 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: "Scores",
        },
      },
      x: {
        title: {
          display: true,
          text: "Tests",
        },
      },
    },
  };

  // Data for Bar Chart (Class Performance)
  const barData = {
    labels: classDates,
    datasets: [
      {
        label: "Class Average Score",
        data: classPerformance,
        backgroundColor: ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Class Performance Over Time",
        font: { size: 16 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
        title: {
          display: true,
          text: "Scores",
        },
      },
      x: {
        title: {
          display: true,
          text: "Dates",
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-purple-800 mb-6 text-center">Analytics Dashboard</h1>

      {/* Ridgeline Plot (Skill Distribution Overview) */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Previous Activities Overview</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <Line data={ridgelineData} options={ridgelineOptions} />
        </div>
      </section>

      {/* Class Performance Bar Chart */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Student Progress</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <Bar data={barData} options={barOptions} />
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
            Add Class Feedback
          </button>
        </div>
      </section>
    </div>
  );
}

export default Analytics;
