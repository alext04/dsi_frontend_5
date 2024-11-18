import React, { useState } from "react";

const ClassProgressReport = () => {
  const [selectedClass, setSelectedClass] = useState("III");
  const [selectedActivity, setSelectedActivity] = useState("L-10");

  // Initial skills template
  const initialSkills = [
    { name: "Public Speaking", score: 0 },
    { name: "Teamwork", score: 0 },
    { name: "Critical Thinking", score: 0 },
    { name: "Problem Solving", score: 0 },
  ];

  const [students, setStudents] = useState([
    { id: "AA123", name: "Jake", skills: [...initialSkills] },
    { id: "AA253", name: "Roy", skills: [...initialSkills] },
    { id: "AA568", name: "Julie", skills: [...initialSkills] },
    { id: "AA485", name: "Jane", skills: [...initialSkills] },
    { id: "AA751", name: "Larry", skills: [...initialSkills] },
  ]);

  const handleSkillScoreChange = (studentId, skillIndex, score) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? {
              ...student,
              skills: student.skills.map((skill, index) =>
                index === skillIndex
                  ? { ...skill, score: Number(score) }
                  : skill
              ),
            }
          : student
      )
    );
  };

  return (
    <div className="w-full max-w-8xl mx-auto p-6 bg-pink-00 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Class Progress Report
        </h2>
        <div className="flex gap-4">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-pink-300"
          >
            <option value="I">Class I</option>
            <option value="II">Class II</option>
            <option value="III">Class III</option>
            <option value="IV">Class IV</option>
          </select>
          <select
            value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
            className="px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-pink-300"
          >
            <option value="L-1">Activity L-1</option>
            <option value="L-2">Activity L-2</option>
            <option value="L-3">Activity L-3</option>
            <option value="L-10">Activity L-10</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow rounded-md">
          <thead>
            <tr className="bg-pink-300">
              <th className="p-2 border text-left font-medium text-gray-800">
                Student
              </th>
              {initialSkills.map((skill, index) => (
                <th
                  key={index}
                  className="p-3 border text-center font-medium text-gray-800"
                >
                  {skill.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-pink-200">
                <td className="p-3 border font-medium text-gray-800">
                  {student.name}
                </td>
                {student.skills.map((skill, index) => (
                  <td key={index} className="p-3 border text-center">
                    <input
                      type="number"
                      min="0"
                      max="5"
                      value={skill.score}
                      onChange={(e) =>
                        handleSkillScoreChange(
                          student.id,
                          index,
                          e.target.value
                        )
                      }
                      className="w-full rounded-md border border-gray-300 px-2 py-1 text-center focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-pink-300  text-white px-6 py-2 rounded-md hover:bg-pink-500 transition">
          Save Progress
        </button>
      </div>
    </div>
  );
};

export default ClassProgressReport;
