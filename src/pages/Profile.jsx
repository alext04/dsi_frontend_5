// src/pages/Profile.jsx
import React from 'react';
import { 
  UserCircle, 
  Mail, 
  Phone, 
  Book, 
  Users, 
  Award, 
  Clock, 
  GraduationCap,
  Calendar
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const fellowInfo = {
    name: 'Sarah Johnson',
    role: 'Teaching Fellow',
    email: 'sarah.j@tafea.edu',
    phone: '+1 (555) 123-4567',
    subject: 'Mathematics',
    experience: '5 years',
    classesCount: 4,
    studentsCount: 120,
    availabilityStatus: 'Available',
    upcomingClasses: [
      { id: 1, title: 'Advanced Calculus', time: '2:00 PM', date: 'Today' },
      { id: 2, title: 'Linear Algebra', time: '4:30 PM', date: 'Tomorrow' }
    ]
  };

  const statsInfo = {
    activities: {
      completed: 45,
      ongoing: 3,
      totalHours: 120,
      recentActivities: [
        { id: 1, name: 'Group Discussion', status: 'Completed', date: 'Today' },
        { id: 2, name: 'Peer Review', status: 'In Progress', date: 'Tomorrow' }
      ]
    },
    progress: {
      overallProgress: 75,
      points: 1250,
      recentProgress: [
        { id: 1, skill: 'Communication', level: 8, date: 'Last Week' },
        { id: 2, skill: 'Leadership', level: 7, date: 'This Week' }
      ]
    }
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
                {fellowInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h1 className="text-2xl font-bold text-gray-800">{fellowInfo.name}</h1>
              <p className="text-[#A393EB] font-medium">{fellowInfo.role}</p>
            </div>

            {/* Contact Information */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0 md:ml-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-[#A393EB]" />
                <span>{fellowInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-[#A393EB]" />
                <span>{fellowInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Book className="w-5 h-5 text-[#A393EB]" />
                <span>Subject: {fellowInfo.subject}</span>
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

        {/* Stats and Upcoming Classes */}
      
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
  {/* Activities Stats */}
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Activities Overview</h2>
      <Users className="w-5 h-5 text-[#A393EB]" />
    </div>
    <div className="space-y-4">
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-gray-600">Completed</span>
        </div>
        <span className="font-semibold text-gray-800">{statsInfo.activities.completed}</span>
      </div>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#A393EB]"></div>
          <span className="text-gray-600">Ongoing</span>
        </div>
        <span className="font-semibold text-gray-800">{statsInfo.activities.ongoing}</span>
      </div>
      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-gray-600">Total Hours</span>
        </div>
        <span className="font-semibold text-gray-800">{statsInfo.activities.totalHours}h</span>
      </div>
    </div>
  </div>

  {/* Progress Stats */}
  <div className="bg-white p-6 rounded-2xl shadow-sm md:col-span-2">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Progress Tracking</h2>
      <Award className="w-5 h-5 text-[#A393EB]" />
    </div>
    <div className="space-y-4">
      {/* Overall Progress Bar */}
      <div className="p-4 bg-gray-50 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Overall Progress</span>
          <span className="text-[#A393EB] font-medium">{statsInfo.progress.overallProgress}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-[#A393EB] rounded-full transition-all duration-500"
            style={{ width: `${statsInfo.progress.overallProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Recent Progress Items */}
      {statsInfo.progress.recentProgress.map(item => (
        <div 
          key={item.id}
          className="flex justify-between items-center p-4 bg-gray-50 rounded-xl"
        >
          <div>
            <h3 className="font-medium text-gray-800">{item.skill}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className={`w-1 h-4 mx-px rounded-sm ${
                    index < item.level ? 'bg-[#A393EB]' : 'bg-gray-200'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Points Display */}
      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
        <span className="text-gray-600">Total Points Earned</span>
        <span className="text-2xl font-bold text-[#A393EB]">{statsInfo.progress.points}</span>
      </div>
    </div>
  </div>
</div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <button 
            onClick={() => {/* Add edit profile handler */}}
            className="px-6 py-2 bg-white border border-[#A393EB] text-[#A393EB] rounded-xl hover:bg-[#A393EB] hover:text-white transition-colors"
          >
            Edit Profile
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="px-6 py-2 bg-[#A393EB] text-white rounded-xl hover:bg-[#8A7CD4] transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}