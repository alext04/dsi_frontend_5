import React from "react";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="w-full px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-serif italic items-center justify-center">Welcome to tafea!</h1>
            <div className="flex items-center space-x-12">
              {/* <button className="text-gray-600 hover:text-gray-900">
                Home
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                Messages
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                Activities
              </button>
              <button className="text-gray-600 hover:text-gray-900">
                Favorites
              </button> */}
              {/* <div className="w-10 h-10 rounded-full bg-gray-200" /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="w-full px-8 py-8">
        {/* Analytics Dashboard */}
        <div className="mb-8">
          <Link to="/analytics">
            <div className="bg-purple-100 text-purple-900 p-8 rounded-xl flex items-center justify-between hover:bg-purple-200 transition-colors">
              <span className="text-2xl font-semibold">
                View your Analytics Dashboard
              </span>
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {/* Upcoming Activities - Now Full Height */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-2xl font-semibold mb-6">
                Upcoming Activities
              </h2>
              <div className="space-y-4">
                <div className="bg-pink-100 p-6 rounded-xl">
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="font-semibold text-xl mb-2">
                        3rd grade: 17 nov
                      </h3>
                      <p className="text-gray-600">3rd grade</p>
                      <p className="text-gray-600 mb-4">
                        Public speaking, confidence, leadership
                      </p>
                      <button className="text-pink-500 font-semibold flex items-center space-x-2 hover:text-pink-600 transition-colors">
                        <span>Start Now</span>
                        <span>→</span>
                      </button>
                    </div>
                    <div className="bg-pink-200 p-3 rounded-full">
                      <Users size={24} className="text-pink-500" />
                    </div>
                  </div>
                </div>

                {/* Additional activity placeholders */}
                <div className="bg-gray-100 p-6 rounded-xl border-2 border-dashed border-gray-300">
                  <p className="text-gray-500 text-center">
                    Future activities will appear here
                  </p>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border-2 border-dashed border-gray-300">
                  <p className="text-gray-500 text-center">
                    Future activities will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Tracker - Expanded */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-8">Progress Tracker</h2>
              <div className="grid grid-cols-3 gap-8">
                {/* Feedback Cards */}
                <div className="bg-pink-500 text-white p-8 rounded-xl hover:bg-pink-600 transition-colors cursor-pointer">
                  <div className="space-y-2">
                    <p className="font-semibold text-xl">3rd grade:</p>
                    <p className="font-medium text-lg">17 nov Feedback</p>
                    <p className="text-pink-100 mt-4">
                      Click to view details →
                    </p>
                  </div>
                </div>

                <div className="bg-pink-500 text-white p-8 rounded-xl hover:bg-pink-600 transition-colors cursor-pointer">
                  <div className="space-y-2">
                    <p className="font-semibold text-xl">Lesson 3</p>
                    <p className="font-medium text-lg">Feedback</p>
                    <p className="text-pink-100 mt-4">
                      Click to view details →
                    </p>
                  </div>
                </div>

                <div className="bg-pink-500 text-white p-8 rounded-xl hover:bg-pink-600 transition-colors cursor-pointer">
                  <div className="space-y-2">
                    <p className="font-semibold text-xl">Lesson 4</p>
                    <p className="font-medium text-lg">Feedback</p>
                    <p className="text-pink-100 mt-4">
                      Click to view details →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
