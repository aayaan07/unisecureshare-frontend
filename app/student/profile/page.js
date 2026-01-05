"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaIdCard, FaUniversity, FaBell, FaShieldAlt } from "react-icons/fa";
import { MdSchool, MdClose } from "react-icons/md";
import { IoBookOutline, IoSettingsSharp } from "react-icons/io5";

const MyProfilePage = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const studentData = {
    name: "Student XYZ",
    email: "student.xyz@iilm.edu",
    enrollmentNo: "IILM2023001234",
    program: "B.Tech Computer Science",
    semester: "6th Semester",
    batch: "2021-2025",
    profileImage: null
  };

  const courses = [
    { code: "CS401", name: "Machine Learning", credits: 4, instructor: "Dr. Sharma" },
    { code: "CS402", name: "Database Management Systems", credits: 3, instructor: "Prof. Gupta" },
    { code: "CS403", name: "Software Engineering", credits: 4, instructor: "Dr. Verma" },
    { code: "CS404", name: "Computer Networks", credits: 3, instructor: "Prof. Kumar" },
    { code: "CS405", name: "Web Technologies", credits: 3, instructor: "Dr. Singh" },
    { code: "CS406", name: "Artificial Intelligence", credits: 4, instructor: "Prof. Mehta" }
  ];

  const profileButtons = [
    { 
      id: "settings", 
      label: "Settings", 
      icon: <IoSettingsSharp size={16} />, 
      color: "bg-teal-500/40",
      hoverColor: "hover:bg-teal-500/60",
      textColor: "text-teal-900"
    },
    { 
      id: "notifications", 
      label: "Notifications", 
      icon: <FaBell size={16} />, 
      color: "bg-orange-500/40",
      hoverColor: "hover:bg-orange-500/60",
      textColor: "text-orange-900"
    },
    { 
      id: "privacy", 
      label: "Privacy", 
      icon: <FaShieldAlt size={16} />, 
      color: "bg-purple-500/40",
      hoverColor: "hover:bg-purple-500/60",
      textColor: "text-purple-900"
    }
  ];

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  const colors = [
    "text-teal-500",
    "text-pink-500",
    "text-orange-500",
    "text-blue-500",
    "text-purple-500",
    "text-yellow-500",
  ];

  function getRandomElement(arr) {
    if (arr.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const renderSubmenu = () => {
    if (!activeSubmenu) return null;

    const submenuContent = {
      settings: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
            Account Settings
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Email Notifications</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Two-Factor Authentication</span>
              <input type="checkbox" className="w-5 h-5" />
            </div>
            {/* <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm font-medium text-slate-700">Profile Visibility</span>
              <select className="px-3 py-1 border border-slate-300 rounded-lg text-sm">
                <option>Public</option>
                <option>Private</option>
                <option>Friends Only</option>
              </select>
            </div> */}
            <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition-colors mt-4">
              Change Password
            </button>
          </div>
        </div>
      ),
      notifications: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
            Notification Preferences
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-700">Assignment Updates</p>
                <p className="text-xs text-slate-500">Get notified about new assignments</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-700">Grade Updates</p>
                <p className="text-xs text-slate-500">Receive notifications when grades are posted</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-700">Course Announcements</p>
                <p className="text-xs text-slate-500">Stay updated with course announcements</p>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-700">Event Reminders</p>
                <p className="text-xs text-slate-500">Get reminders for upcoming events</p>
              </div>
              <input type="checkbox" className="w-5 h-5" />
            </div>
          </div>
        </div>
      ),
      privacy: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800 mb-4" style={{fontFamily: 'Poppins, sans-serif'}}>
            Privacy & Security
          </h3>
          <div className="space-y-3">
            {/* <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Profile Privacy</h4>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm">
                <option>Everyone can see my profile</option>
                <option>Only students can see my profile</option>
                <option>Only instructors can see my profile</option>
                <option>Private - No one can see</option>
              </select>
            </div> */}
            {/* <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Data Sharing</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="w-4 h-4" />
                  Share academic progress with parents
                </label>
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  Allow instructors to see attendance
                </label>
              </div>
            </div> */}
            <div className="p-4 bg-slate-50 rounded-lg">
              <h4 className="text-sm font-semibold text-slate-700 mb-2">Login Activity</h4>
              <p className="text-xs text-slate-600 mb-2">Last login: Today at 10:30 AM</p>
              <button className="text-sm text-blue-600 hover:underline">View all login history</button>
            </div>
          </div>
        </div>
      )
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>
              {profileButtons.find(btn => btn.id === activeSubmenu)?.label}
            </h2>
            <button 
              onClick={() => setActiveSubmenu(null)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <MdClose size={24} className="text-slate-600" />
            </button>
          </div>
          <div className="p-6">
            {submenuContent[activeSubmenu]}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-5 py-8 flex flex-col w-full items-start space-y-2">
      {/* Header Section */}
      <div className="w-full flex items-start justify-between">
        <div className="w-fit">
          <b className="text-slate-800 font-normal text-8xl" style={{fontFamily: 'Averia Serif Libre, serif'}}>
            My Profile
          </b>
        </div>

        {/* Profile Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {profileButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setActiveSubmenu(button.id)}
              className={`${button.color} ${button.hoverColor} ${button.textColor} px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md`}
              style={{fontFamily: 'Poppins, sans-serif'}}
            >
              {button.icon}
              <span className="hidden sm:inline">{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="text-2xl text-slate-800/70 text-left my-3" style={{fontFamily: 'Poppins, sans-serif'}}>
        <small className="font-medium">
          {getGreeting()},{" "}
          <span className={getRandomElement(colors)}>{studentData.name}</span>
        </small>
        <br />
        <small>
          View and manage your <span className="font-semibold">profile information</span>
        </small>
      </div>

      {/* Main Profile Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 my-5">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
            {/* Profile Header with Gradient */}
            <div className="bg-gradient-to-r from-orange-400 to-red-400 h-32"></div>
            
            {/* Profile Image */}
            <div className="relative px-6 pb-6">
              <div className="absolute -top-40 left-6">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-white shadow-lg flex items-center justify-center text-6xl text-slate-400">
                  {studentData.profileImage ? (
                    <img src={studentData.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <FaUser />
                  )}
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-2xl font-bold text-slate-800 mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {studentData.name}
                </h2>
                <p className="text-slate-500 text-sm mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {studentData.program}
                </p>
                <p className="text-xs text-slate-400 font-semibold" style={{fontFamily: 'Poppins, sans-serif'}}>
                  Enrollment: {studentData.enrollmentNo}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Academic Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
              <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Academic Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
                  <FaEnvelope size={16} />
                  <span>Email Address</span>
                </div>
                <p className="text-slate-800 font-semibold pl-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {studentData.email}
                </p>
              </div>

              {/* Program */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
                  <MdSchool size={16} />
                  <span>Program</span>
                </div>
                <p className="text-slate-800 font-semibold pl-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {studentData.program}
                </p>
              </div>

              {/* Semester */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
                  <IoBookOutline size={16} />
                  <span>Current Semester</span>
                </div>
                <p className="text-slate-800 font-semibold pl-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {studentData.semester}
                </p>
              </div>

              {/* Batch */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
                  <FaUniversity size={16} />
                  <span>Batch</span>
                </div>
                <p className="text-slate-800 font-semibold pl-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {studentData.batch}
                </p>
              </div>

              {/* Enrollment Number */}
              <div className="space-y-2 md:col-span-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>
                  <FaIdCard size={16} />
                  <span>Enrollment Number</span>
                </div>
                <p className="text-slate-800 font-semibold pl-6" style={{fontFamily: 'Poppins, sans-serif'}}>
                  {studentData.enrollmentNo}
                </p>
              </div>
            </div>

            {/* Current Courses Section */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
                <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
                Current Courses
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold text-orange-500" style={{fontFamily: 'Poppins, sans-serif'}}>
                          {course.code}
                        </p>
                        <h4 className="text-base font-semibold text-slate-800 mt-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                          {course.name}
                        </h4>
                      </div>
                      <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">
                        {course.credits} Credits
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                      {course.instructor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submenu Modal */}
      {renderSubmenu()}
    </div>
  );
};

export default MyProfilePage;