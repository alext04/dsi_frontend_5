import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Chat() {
  const location = useLocation();
  const lesson = location.state?.lesson || null;

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setMessages((prev) => [...prev, { type: "user", text: userInput }]);
    setUserInput("");
    setMessages((prev) => [
      ...prev,
      { type: "bot", text: "Generating response..." },
    ]);

    setTimeout(() => {
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1] = {
          type: "bot",
          text: "This is the chatbot's response.",
        };
        return updatedMessages;
      });
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {lesson && (
        <div className="mb-4 bg-purple-100 p-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">{lesson.grade}</h2>
          <p className="text-sm text-gray-700">
            <strong>Date:</strong> {lesson.date}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Topics:</strong> {lesson.topics}
          </p>
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6 h-[500px] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                message.type === "user"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              style={{ maxWidth: "70%" }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;

