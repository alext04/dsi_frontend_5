import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

function Analytics() {
  // Hardcoded data for ridgeline plot-like visualization
  const skills = ["Communication", "Confidence", "Leadership", "Self-Discipline", "Empathy", "Time Management"];
  const skillScores = {
    Communication: [2, 3, 3, 4, 4, 4, 5, 5, 5, 5],
    Confidence: [1, 2, 3, 3, 4, 4, 4, 5, 5, 5],
    Leadership: [2, 2, 3, 3, 3, 4, 4, 4, 5, 5],
    "Self-Discipline": [1, 2, 2, 3, 3, 4, 4, 4, 5, 5],
    Empathy: [3, 3, 3, 4, 4, 4, 4, 5, 5, 5],
    "Time Management": [1, 2, 2, 3, 3, 3, 4, 4, 5, 5],
  };

  // Hardcoded data for bar chart (Class performance over time)
  const classDates = ["10 Sep", "20 Sep", "30 Sep", "10 Oct"];
  const classPerformance = [3.2, 3.8, 4.0, 3.6];

  // Data for Ridgeline-like plot
  const ridgelineData = {
    labels: [1, 2, 3, 4, 5],
    datasets: skills.map((skill, index) => ({
      label: skill,
      data: Array(5)
        .fill(0)
        .map((_, i) => skillScores[skill].filter((score) => score === i + 1).length),
      backgroundColor: `hsla(${index * 60}, 70%, 60%, 0.6)`,
      borderColor: `hsl(${index * 60}, 70%, 60%)`,
      borderWidth: 1,
      fill: true,
    })),
  };

  const ridgelineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Skill Distribution Overview",
        font: { size: 20 },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 10,
        title: {
          display: true,
          text: "Number of Students",
        },
      },
      y: {
        title: {
          display: true,
          text: "Skills",
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Class Performance Over Time",
        font: { size: 20 },
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
      <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">Analytics Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Skill Distribution Overview</h2>
        <div className="bg-white p-6 rounded-lg shadow" style={{ height: "400px" }}>
          <Chart type="bar" data={ridgelineData} options={ridgelineOptions} height={400} />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">Student Progress</h2>
        <div className="bg-white p-6 rounded-lg shadow" style={{ height: "400px" }}>
          <Bar data={barData} options={barOptions} height={400} />
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
