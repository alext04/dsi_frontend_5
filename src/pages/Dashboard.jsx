import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Welcome Section */}
      <div className="bg-purple-100 p-6 rounded-lg shadow mb-8">
        <h1 className="text-2xl font-bold text-purple-800 mb-4">
          Welcome to <span className="text-pink-600">tafea!</span>
        </h1>
        <Link to="/analytics">
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            View your Analytics Dashboard
          </button>
        </Link>
      </div>

      {/* Upcoming Activities Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-800 mb-4">Upcoming Activities</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-purple-600">Lesson 4: Collaboration</h3>
          <p className="text-gray-600">Appreciating others to inspire positivity</p>
          <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
            Start Now
          </button>
        </div>
      </div>

      <div>
      <h2 className="text-xl font-bold text-purple-800 mb-4">Progress Tracker</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        <div className="bg-pink-200 text-pink-800 px-6 py-4 rounded-lg shadow flex-shrink-0">
          <p>Lesson 2 Feedback</p>
        </div>
        <div className="bg-pink-200 text-pink-800 px-6 py-4 rounded-lg shadow flex-shrink-0">
          <p>Lesson 3 Feedback</p>
        </div>
        <div className="bg-pink-200 text-pink-800 px-6 py-4 rounded-lg shadow flex-shrink-0">
          <p>Lesson 4 Feedback</p>
        </div>
        <div className="bg-pink-200 text-pink-800 px-6 py-4 rounded-lg shadow flex-shrink-0">
          <p>Lesson 5 Feedback</p>
        </div>
        <div className="bg-pink-200 text-pink-800 px-6 py-4 rounded-lg shadow flex-shrink-0">
          <p>Lesson 6 Feedback</p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Dashboard;
