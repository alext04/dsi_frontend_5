import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSuggestedActivities } from "../services/chat";
import { updateSelectedActivity, updateSuggestedActivities } from "../services/lesson";

function Chat() {
  const location = useLocation();
  const lesson = location.state?.lesson || null;

  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const formatDate = (isoDate) => {
    // Create a Date object
    const date = new Date(isoDate);

    // Format the date
    const day = date.getUTCDate(); // Get the day
    const month = date.toLocaleString('en-US', { month: 'short' }); // Get the short month (e.g., Nov)

    // Combine into desired format
    const formattedDate = `${day} ${month}`;

    return formattedDate;
  }

  const asyncupdateSuggestedActivities = async (activities) => {
    try{
      const res = await updateSuggestedActivities(lesson._id, activities);
      console.log("Updated suggested activities:", res.data);
      return res.data.activities
    } catch (error) {
      console.error("Error updating suggested activities:", error);
      return []
    }
  }

  const handleSelectedActivity = async (activityId, activityName) => {
    try {
      console.log("Selected activity:", activityId, lesson._id);
      const res = await updateSelectedActivity(lesson._id, activityId);
      console.log("Selected activity:", res.data);
      if (res.status === 200) {
        setMessages([
          ...messages,
          { type: "user", button: false, text: `I have selected Activity - ${activityName}` },
        ]);
      }
    } catch (error) {
      console.error("Error selecting activity:", error);
    }
  }

  useEffect(() => {
    const asyncGetSuggestedActivities = async () => {
      try {
        const res = await getSuggestedActivities(localStorage.getItem("token"), lesson);
        console.log("Suggested activities:", res.data);
        if (res.status === 200) {
          const activityIds = await asyncupdateSuggestedActivities(res.data.activities);
          console.log("Activity IDs:", activityIds);
          setMessages([
            ...messages,
            { type: "bot", button: false,  text: "Here are some suggested activities:" },
            ...res.data?.activities?.map((activity, index) => ({
              type: "bot",
              button: true,
              activityId: activityIds[index],
              activityName: activity.activity_name,
              text: `Activity name: ${activity.activity_name}\nDescription: ${activity.description}\nProcedure: ${activity.procedure}`,
            })),
          ]);
        }
      } catch (error) {
        console.error("Error fetching suggested activities:", error.message);
      }
    };
    if (lesson) {
      asyncGetSuggestedActivities();
    }
  }, [lesson]);

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
    <div className="h-screen w-screen flex flex-col bg-gray-50">
      {/* Header with Lesson Details */}
      {lesson && (
        <div className="bg-purple-600 text-white py-4 px-8 flex justify-between items-center shadow-md">
          <div>
            <h1 className="text-2xl font-bold">{lesson.lesson_name}</h1>
            <p className="text-sm">
              <strong>Date:</strong> {formatDate(lesson.createdAt)}
            </p>
            <p className="text-sm">
              <strong>Topics:</strong> {lesson?.skills?.join(" , ")}
            </p>
          </div>
        </div>
      )}

      {/* Chat Messages Section */}
      <div
        className="flex-1 overflow-y-auto bg-white p-8"
        style={{ marginBottom: "70px" }} // Account for bottom navbar height
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
          {
            message.button 
            ? <div
                className={`p-4 rounded-lg ${
                  message.type === "user"
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } cursor-pointer`}
                style={{ maxWidth: "70%" }}
                onClick={() => handleSelectedActivity(message.activityId, message.activityName)}
              >
                {message.text}
              </div>
            :<div
                className={`p-4 rounded-lg ${
                  message.type === "user"
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                style={{ maxWidth: "70%" }}
              >
                {message.text}
              </div>
            }
            
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="fixed bottom-[70px] left-0 w-full bg-gray-100 border-t border-gray-200 p-4 flex">
        <input
          disabled={lesson !== null}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          disabled={lesson !== null}
          onClick={() => {
            if(lesson === null) {
              handleSendMessage
            }
          }}
          className="ml-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>

      {/* Bottom Navbar Placeholder */}
      <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg h-[70px] flex items-center justify-around">
        <button className="text-gray-500 hover:text-purple-600 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h18M9 21V3M15 21V3"
            />
          </svg>
          <span className="text-sm">Home</span>
        </button>
        <button className="text-gray-500 hover:text-purple-600 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.707 9.707 0 01-4-.812l-4.243 1.061a1 1 0 01-1.235-1.235l1.06-4.243A9.707 9.707 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="text-sm">Chat</span>
        </button>
        <button className="text-gray-500 hover:text-purple-600 flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.387 0 4.627.563 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm-8 10a8 8 0 1116 0H7z"
            />
          </svg>
          <span className="text-sm">Profile</span>
        </button>
      </nav>
    </div>
  );
}

export default Chat;
