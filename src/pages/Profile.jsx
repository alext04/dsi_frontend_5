import React, { useEffect, useState } from "react";
import {
  UserCircle,
  Mail,
  Phone,
  Book,
  Users,
  Clock,
  BookOpen,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getFellowProfile } from "../services/fellow";

export default function Profile() {
  const [fellowInfo, setFellowInfo] = useState({
      name: "Sarah Johnson",
      role: "Teaching Fellow",
      email: "sarah.j@tafea.edu",
      phone: "+1 (555) 123-4567",
      subject: "Mathematics",
      experience: "5 years",
      availabilityStatus: "Available",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch fellow profile data
    const asyncGetFellowProfile = async () => {
      try {
        const res = await getFellowProfile(localStorage.getItem("token"));
        console.log("Fellow profile data:", res.data);
        if (res.status === 200) {
          setFellowInfo(res.data);
        }
      } catch (error) {
        console.error("Error fetching fellow profile:", error.message);
      }
    }
    asyncGetFellowProfile();
  }, []);

  const statsInfo = {
    activities: {
      completed: 45,
      PendingReports: 3,
    },
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-32 h-32 bg-[#A393EB] rounded-full flex items-center justify-center text-white text-4xl font-semibold mb-4">
                {fellowInfo.name}
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                {fellowInfo.name}
              </h1>
              <p className="text-[#A393EB] font-medium">Teaching Fellow</p>
            </div>

            {/* Contact Information */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0 md:ml-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-[#A393EB]" />
                <span>{fellowInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-[#A393EB]" />
                <span>{fellowInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-[#A393EB]" />
                <span>Experience: {fellowInfo.experience}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="bg-green-100 px-4 py-2 rounded-full text-green-700 text-sm font-medium">
              {fellowInfo.availabilityStatus}
            </div>
          </div>
        </div>

        {/* Stats and Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Activities Stats */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Activities Overview
              </h2>
              <Users className="w-5 h-5 text-[#A393EB]" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-gray-600">Completed</span>
                </div>
                <span className="font-semibold text-gray-800">
                  {statsInfo.activities.completed}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#A393EB]"></div>
                  <span className="text-gray-600">Pending Reports</span>
                </div>
                <span className="font-semibold text-gray-800">
                  {statsInfo.activities.PendingReports}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#A393EB] text-white rounded-xl hover:bg-[#8A7CD4] transition-colors"
              >
                <Users className="w-5 h-5" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => navigate("/lessons")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#A393EB] text-white rounded-xl hover:bg-[#8A7CD4] transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>View Lessons</span>
              </button>

              <button
                onClick={() => navigate("/analytics")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#A393EB] text-white rounded-xl hover:bg-[#8A7CD4] transition-colors"
              >
                <BarChart3 className="w-5 h-5" />
                <span>Analytics</span>
              </button>

              <button
                onClick={() => {
                  /* Add edit profile handler */
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#A393EB] text-[#A393EB] rounded-xl hover:bg-[#A393EB] hover:text-white transition-colors"
              >
                <UserCircle className="w-5 h-5" />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
