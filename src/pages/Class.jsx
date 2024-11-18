import React, { useState } from "react";
import { createClass } from "../services/class";

const ClassPage = () => {
  const [standardName, setStandardName] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [students, setStudents] = useState([]);

  const handleAddStudent = () => {
    if (name.trim() !== "" && id.trim() !== "" && standardName !== "") {
      const newStudent = {
        name: name.trim(),
        id: id.trim(),
      };
      setStudents([...students, newStudent]);
      setName("");
      setId("");
    } else {
      alert("Please set a class standard and fill all fields.");
    }
  };

  const handleSubmit = () => {
    const asyncCreateClass = async () => {
      try {
        const response = await createClass(standardName, 
              students.map((student) => ({ name: student.name, roll_no: student.id })),
              localStorage.getItem("token")
            );
        console.log("Class created:", response);
        if (response.status === 200) {
          alert("Class created successfully.");
          setStandardName("");
          setName("");
          setId("");
          setStudents([]);
        }
      } catch (error) {
        console.error("Failed to create class:", error);
      }
    }
    if (students.length > 0) {
      asyncCreateClass();
      const csvContent =
        "data:text/csv;charset=utf-8," +
        "Name,ID,Class Standard\n" +
        students
          .map((student) => `${student.name},${student.id},${student.standard}`)
          .join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "students.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg mb-12 p-6 w-full max-w-5xl">
        <div className="flex items-center justify-between space-x-6 ">
          <div className="flex items-center space-x-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="rounded-full w-20 h-20"
            />
            <div>
              <h2 className="text-2xl font-bold">TFI Fellow 1</h2>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={standardName}
                onChange={(e) => setStandardName(e.target.value)}
                placeholder="Enter class standard"
                className="border rounded py-2 px-4 flex-1"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border rounded py-3 px-4 w-full"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
              ID
            </label>
            <input
              type="text"
              id="id"
              className="border rounded py-3 px-4 w-full"
              placeholder="Enter ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="col-span-1 md:col-span-2 flex space-x-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddStudent}
            >
              Add Student
            </button>
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        {/* <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Saved Students</h3>
         
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {students.map((student, index) => (
                <div
                  key={index}
                  className="bg-gray-100 shadow-md rounded-lg p-4"
                >
                  <p className="font-bold">Name: {student.name}</p>
                  <p>ID: {student.id}</p>
                  <p>Class Standard: {student.standard}</p>
                </div>
              ))}
            </div>
          </div> */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Saved Students</h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            style={{
              maxHeight: "300px", // Adjust based on the desired height
              overflowY: "auto", // Adds vertical scrolling
            }}
          >
            {students.map((student, index) => (
              <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
                <p className="font-bold">Name: {student.name}</p>
                <p>ID: {student.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage;
