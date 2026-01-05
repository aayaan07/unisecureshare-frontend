"use client";
import { useState } from "react";
import Link from "next/link";
import { IoBookOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { MdAssignment, MdSchedule } from "react-icons/md";

const MyCoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      name: "Data Structures & Algorithms",
      code: "CSE-201",
      instructor: "Dr. Rajesh Kumar",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      progress: 75,
      upcomingAssignments: 2,
      totalStudents: 60,
      schedule: "Mon, Wed, Fri - 9:00 AM"
    },
    {
      id: 2,
      name: "Database Management Systems",
      code: "CSE-202",
      instructor: "Prof. Priya Sharma",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      progress: 60,
      upcomingAssignments: 1,
      totalStudents: 60,
      schedule: "Tue, Thu - 11:00 AM"
    },
    {
      id: 3,
      name: "Operating Systems",
      code: "CSE-203",
      instructor: "Dr. Amit Verma",
      color: "text-green-500",
      bgColor: "bg-green-50",
      progress: 80,
      upcomingAssignments: 3,
      totalStudents: 60,
      schedule: "Mon, Wed - 2:00 PM"
    },
    {
      id: 4,
      name: "Computer Networks",
      code: "CSE-301",
      instructor: "Dr. Sneha Gupta",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      progress: 45,
      upcomingAssignments: 1,
      totalStudents: 55,
      schedule: "Tue, Fri - 10:00 AM"
    },
    {
      id: 5,
      name: "Machine Learning",
      code: "CSE-302",
      instructor: "Prof. Vikram Singh",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      progress: 55,
      upcomingAssignments: 2,
      totalStudents: 55,
      schedule: "Mon, Thu - 3:00 PM"
    },
    {
      id: 6,
      name: "Software Engineering",
      code: "CSE-204",
      instructor: "Dr. Anjali Mehta",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      progress: 70,
      upcomingAssignments: 0,
      totalStudents: 60,
      schedule: "Wed, Fri - 1:00 PM"
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  return (
    <div className="min-h-screen px-5 py-8 flex flex-col w-full items-start space-y-2">
      {/* Header Section */}
      <div className="w-fit">
        <b className="text-slate-800 font-normal text-8xl" style={{fontFamily: 'Averia Serif Libre, serif'}}>
          My Courses
        </b>
      </div>

      <div className="text-2xl text-slate-800/70 text-left my-3" style={{fontFamily: 'Poppins, sans-serif'}}>
        <small className="font-medium">
          {getGreeting()},{" "}
          <span className={getRandomElement(colors)}>Student XYZ</span>
        </small>
        <br />
        <small>
          Track your progress and manage your <span className="font-semibold">enrolled courses</span>
        </small>
      </div>

      {/* Quick Stats */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Total Courses</p>
          <p className="text-3xl font-bold text-slate-800">{courses.length}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Pending Assignments</p>
          <p className="text-3xl font-bold text-slate-800">
            {courses.reduce((sum, course) => sum + course.upcomingAssignments, 0)}
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
          <p className="text-slate-500 text-sm mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>Average Progress</p>
          <p className="text-3xl font-bold text-slate-800">
            {Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length)}%
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full my-5">
        <input
          type="text"
          placeholder="Search courses by name, code, or instructor..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent transition text-slate-700"
          style={{fontFamily: 'Poppins, sans-serif'}}
        />
      </div>

      {/* Courses Section */}
      <div className="my-5 w-full">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" style={{fontFamily: 'Poppins, sans-serif'}}>
          <div className="w-1.5 h-8 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
          Your Enrolled Courses
        </h3>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Link
                href={`/student/courses/${course.code}`}
                key={course.id}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-200"
              >
                {/* Course Header */}
                <div className={`${course.bgColor} p-5 border-b border-slate-200`}>
                  <div className="flex items-start gap-3">
                    <div className={`${course.color} text-4xl`}>
                      <IoBookOutline />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {course.code}
                      </p>
                      <h3 className="text-lg font-bold text-slate-800 line-clamp-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                        {course.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Course Body */}
                <div className="p-5">
                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-slate-400">
                      <FaUserTie size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Instructor</p>
                      <p className="text-sm font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{course.instructor}</p>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-slate-400">
                      <MdSchedule size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>Schedule</p>
                      <p className="text-sm font-semibold text-slate-800" style={{fontFamily: 'Poppins, sans-serif'}}>{course.schedule}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs font-semibold text-slate-600" style={{fontFamily: 'Poppins, sans-serif'}}>Course Progress</p>
                      <p className="text-xs font-bold text-slate-800">{course.progress}%</p>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-red-400 h-full rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Footer Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    {course.upcomingAssignments > 0 && (
                      <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full">
                        <MdAssignment size={14} />
                        <span className="text-xs font-bold" style={{fontFamily: 'Poppins, sans-serif'}}>
                          {course.upcomingAssignments} Due
                        </span>
                      </div>
                    )}
                    {course.upcomingAssignments === 0 && (
                      <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1 rounded-full">
                        <span className="text-xs font-bold" style={{fontFamily: 'Poppins, sans-serif'}}>All Caught Up!</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* View Link */}
                <div className="px-5 pb-4">
                  <div className="text-orange-500 text-sm font-semibold group-hover:translate-x-2 transition-transform flex items-center gap-2" style={{fontFamily: 'Poppins, sans-serif'}}>
                    View Course Details
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-lg border border-slate-200">
              <div className="text-slate-300 text-6xl mb-4">
                <IoBookOutline className="mx-auto" />
              </div>
              <p className="text-slate-500 text-lg font-medium" style={{fontFamily: 'Poppins, sans-serif'}}>No courses found</p>
              <p className="text-slate-400 text-sm mt-2" style={{fontFamily: 'Poppins, sans-serif'}}>Try a different search term</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesPage;
