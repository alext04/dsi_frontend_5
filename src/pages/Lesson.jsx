import React from "react";

const LessonPlans = () => {
  const lessons = [
    {
      grade: "3rd grade",
      date: "17 Nov",
      topics: "Public speaking, confidence, leadership",
    },
    {
      grade: "5th grade",
      date: "20 Nov",
      topics: "Team building, leadership",
    },
    {
      grade: "5th grade",
      date: "21 Nov",
      topics: "Empathy, sympathy",
    },
  ];

  return (
    <div className=" mx-auto p-6 bg-white">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="inline-block text-lg font-semibold text-white bg-pink-200 py-2 px-4 rounded-lg">
          Planned Lessons
        </h1>
      </header>

      {/* Main Content */}
      <main>
        <h2 className="text-2xl font-bold mb-6">Your Lesson Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-pink-100 p-4 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {lesson.grade}: {lesson.date}
                </h3>
                <p className="text-gray-700 text-sm">{lesson.topics}</p>
              </div>
              <button className="mt-4 px-4 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-md">
                Start Now →
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Floating Add Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-pink-500 text-white text-2xl rounded-full shadow-lg flex items-center justify-center hover:bg-pink-600">
        +
      </button>
    </div>
  );
};

export default LessonPlans;
